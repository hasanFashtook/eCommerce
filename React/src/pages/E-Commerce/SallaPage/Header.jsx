import PropTypes from 'prop-types'
import SallaIcon from '../../../components/website/icons/SallaIcon'
import Cart from '../../../components/website/icons/Cart'
import SearchIcon from '../../../components/website/icons/SearchIcon'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleState } from '../../../Store/Reducers/usersReducer'
import { UserIcon } from '@heroicons/react/24/outline'
function Header({ className }) {
    const productsCart = useSelector(state => state.cart);
    const { userInfo } = useSelector(state => state.users);
    // Get Total Price Of Cart
    const priceTotal = getTotalPrice(productsCart);
    const visiblePrice = addComma(priceTotal);

    // control with showing profile section
    const dispatch = useDispatch();


    return (
        <div className={'Header max-h-[13rem] shadow-sm py-8 fixed top-0 left-1/2 -translate-x-1/2 w-full bg-white z-40 ' + className} >
            <div className="container grid grid-cols-2 sm:grid-cols-5 gap-4 place-items-center">

                <div className="logo flex items-center gap-2 justify-end">
                    <SallaIcon />
                    <h1 className='text-lg flex-1'>
                        متجـــــر <br />سلــــــة</h1>
                </div>

                <form
                    className="searchBar flex items-center justify-between border w-full border-gray-100 rounded h-12 p-3 col-span-2 order-3 sm:order-2">
                    <input
                        name="search"
                        id="search"
                        type='text'
                        className=' outline-none max-w-[calc(100%-24px)]'
                        placeholder='ابحث عما تريد'
                    />
                    <SearchIcon color={'#A5A5A5'} />
                </form>

                <div
                    className="cart-profile flex sm:order-last sm:col-span-2 items-center gap-2">
                    {/* Profile */}
                    <div className="profile flex gap-2 items-center">
                        <div
                            onClick={() => dispatch(toggleState())}
                            className="image cursor-pointer w-10 h-10">
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
                        <div className="details text-right hidden lg:block">
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
                    {/* Cart */}
                    <Link
                        to={'/cart'}
                        className="cart flex gap-2 items-center">
                        <div className=' w-10 h-10 rounded-full bg-slate-100 grid place-items-center'>
                            <Cart />
                        </div>
                        <dl className='flex-1'>
                            <dt className=' text-xs sm:text-sm text-gray-400'>سلة المشتريات</dt>
                            <dd className=' text-sm sm:text-base text-zinc-700'>{visiblePrice} رس</dd>
                        </dl>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function addComma(num) {
    return num.toLocaleString('en-US');
}

function getTotalPrice(cartProducts) {
    return cartProducts.reduce((acc, curr) => {
        acc += +(((100 - +curr.discount) / 100) * (+curr.price) * curr.quantity).toFixed(2);
        return acc
    }, 0);
}
Header.propTypes = {
    className: PropTypes.string
}

export default Header
