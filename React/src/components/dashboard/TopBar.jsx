import PropTypes from 'prop-types'
import {
  Bars3Icon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import Cookie from 'cookie-universal'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout, baseUrl as url } from '../../API/Api';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../Store/Reducers/toggleMenu';

function TopBar({ className }) {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.menu)

  function changeMenuState(state) {
    dispatch(toggleState(!state))
  }

  const cookie = Cookie();

  // log out and remove user data form cookie
  async function handleLogOut() {
    await axios.get(`${url}/${logout}`, {
      headers: {
        Authorization: `Bearer ${cookie.get('userToken')}`
      }
    }).then(() => {
      nav('/login')
      cookie.removeAll();
    })
  }

  const { name, email, role } = cookie.get('userDetails');


  return (
    <div className={'TopBar relative' + className} >

      <div className=" max-sm:justify-normal max-sm:min-w-[50%] min-w-[15rem] flex justify-between items-center gap-5 max-sm:px-0 px-5">
        <div className="logo flex justify-center items-center max-sm:p-8 max-sm:w-20 gap-2 py-5 ">
          <div className=" image w-5 h-5 grid place-items-center">
            <img src="/public/images/dashonicLogo.png" alt="dashonic" />
          </div>
          <div className=" title max-sm:hidden font-bold text-lg ">
            Dashonic
          </div>
        </div>
        <div className="toggle-btn grid place-items-center py-5">
          <Bars3Icon onClick={() => changeMenuState(isOpen)} className=' w-6 h-6 text-zinc-800 cursor-pointer' />
        </div>
      </div>

      <div className="control-bar flex max-lg:justify-end justify-between items-center flex-1 ">
        <div className="lists max-lg:hidden  flex gap-4">
          <div className="categories-list ">
            <button className='text-gray-400 flex items-center gap-2'>
              <span>Categories</span>
              <ChevronDownIcon className='w-4 h-4 ' />
            </button>
          </div>
          <div className="components-list">
            <button className='text-gray-400 flex items-center gap-2'>
              <span>Components</span>
              <ChevronDownIcon className='w-4 h-4 ' />
            </button>
          </div>
          <div className="components-list">

          </div>
        </div>
        <div className="profile flex max-sm:flex-1 max-sm:justify-end gap-8 max-sm:gap-5 items-center">
          <div className="profile__details group pr-4">
            <button className='flex gap-4 pr-4 items-center relative'>
              <div className="image w-10 h-10 rounded-full overflow-hidden border-4 border-slate-200">
                <img src="/public/images/Profile.jpg" alt="" />
              </div>
              <div className="details flex-1">
                <p className=' text-sm font-bold capitalize'>{name}</p>
                <span className=' text-sm capitalize'>
                  {role == '1995'
                    ? 'administrator'
                    : role == '1996'
                      ? 'writer'
                      : role == '1999'
                        ? 'product manager'
                        : 'user'}
                </span>
              </div>
            </button>
            {/* pup up list */}
            <div className="popUpProfile z-10 hidden opacity-0 group-focus-within:block group-focus-within:opacity-100 transition-opacity delay-150 shadow-md absolute top-full right-4 w-48">
              <div className="head bg-blue-500 text-white p-4">
                <div className="details">
                  <p className=' text-sm font-bold capitalize'>{name}</p>
                  <span className=' text-xs text-blue-200'>
                    {email}
                  </span>
                </div>
              </div>
              <div className="body bg-white">
                <ul>
                  <li className=' transition-all hover:bg-slate-100 border-b border-slate-200 px-4 py-2'>
                    <Link to={'/dashboard/settings'} className=' flex items-center gap-3 text-zinc-500'>
                      <Cog6ToothIcon className=' W-5 h-5 text-gray-500' />
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li className='transition-all hover:bg-slate-100  px-4 py-2'>
                    <button
                      onClick={() => handleLogOut()}
                      className=' flex items-center gap-3 text-zinc-500'
                    >
                      <ArrowLeftOnRectangleIcon className=' W-5 h-5 text-gray-500' />
                      <span>Log Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TopBar.propTypes = {
  className: PropTypes.string
}

export default TopBar;