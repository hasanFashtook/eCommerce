import PropTypes from 'prop-types'
import { removeCurrentUserDetails, toggleState } from '../../Store/Reducers/usersReducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    ChevronDownIcon,
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
    Squares2X2Icon,
    BellIcon,
    UserIcon
} from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl, logout } from '../../API/Api';
import Cookie from 'cookie-universal'

function ProfileSec({ className }) {
    // control with showing profile section
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users);
    const { userInfo } = currentUser;
    const role = userInfo?.role;
    const cookie = Cookie();
    const navigate = useNavigate();

    const profileSections = [
        {
            title: 'الإشعارات',
            path: '/',
            icon: <BellIcon className=' w-6 h-6' />
        }, {
            title: 'لوحة التحكم',
            path: role == '1996' ? '/dashboard/writer' : role == '1995' ? '/dashboard' : role == '1999' && '/dashboard/product-manager',
            icon: <Squares2X2Icon className=' w-6 h-6' />
        }
    ]
    const showProfileSec = profileSections.map((sec, i) => (
        <li
            key={i}>
            <Link
                to={sec.path}
                className='flex gap-2 text-blue-600 p-4 cursor-pointer'>
                {sec.icon}
                <p>{sec.title}</p>
            </Link>
        </li>
    ))
    // log out and remove user data form cookie
    async function handleLogOut() {
        await axios.get(`${baseUrl}/${logout}`, {
            headers: {
                Authorization: `Bearer ${cookie.get('userToken')}`
            }
        }).then(() => {
            navigate('/login')
            cookie.removeAll();
            dispatch(removeCurrentUserDetails())
        })
    }

    return (
        <div className={'ProfileSec ' + className} >
            <div
                className="overLay bg-black opacity-50 h-full"
                onClick={() => dispatch(toggleState())}
            ></div>
            <div className="ProfileDetails absolute bottom-0 left-0 w-full h-2/5
            bg-white rounded-lg transition-all duration-300">
                <div className="intro flex justify-between items-center p-4">
                    <div className="profile flex gap-2 items-center">
                        <div className="image w-10 h-10">
                            <div className=' overflow-hidden rounded-full h-full'>
                            {userInfo ?
                                    <img src="/public/images/Profile.jpg" alt="show your profile" />
                                    : <div className="grid place-items-center
                                    bg-slate-100 w-auto h-full">
                                        <UserIcon className=' w-6 h-6 text-[#666]' />
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="details text-right">
                            <p className=' text-sm text-[#A5A5A5]'>مرحبا بك</p>
                            {userInfo ?
                                <div className=' text-sm sm:text-base text-zinc-700'>
                                    {userInfo.name}
                                </div>
                                : <Link
                                    to={'/login'}
                                    className=' text-base text-right text-[#333]'>تسجيل الدخول</Link>
                            }
                        </div>
                    </div>
                    <button
                        onClick={() => dispatch(toggleState())}
                    >
                        <ChevronDownIcon className=' w-4 h-4 text-[#62D0B6]' />
                    </button>
                </div>
                <hr className=' bg-[#333]' />
                {userInfo ?
                    <>
                        <ul className="controlPanel">
                            {showProfileSec}
                            <li
                                onClick={() => handleLogOut()}
                                className="flex gap-2 text-red-500 p-4 cursor-pointer">
                                <ArrowRightOnRectangleIcon className=' w-6 h-6' />
                                <p>تسجيل خروج</p>
                            </li>
                        </ul>
                    </>
                    :
                    <Link
                        to={'/login'}
                        className='flex gap-2 text-blue-600 p-4 cursor-pointer'>
                        <ArrowLeftOnRectangleIcon className=' w-6 h-6' />
                        <p>تسجيل الدخول</p>
                    </Link>
                }
            </div>
        </div >
    )
}

ProfileSec.propTypes = {
    className: PropTypes.string
}

export default ProfileSec
