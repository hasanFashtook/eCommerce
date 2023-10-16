import PropTypes from 'prop-types'
import SallaIcon from '../../../components/website/icons/SallaIcon'
import Cart from '../../../components/website/icons/Cart'
import SearchIcon from '../../../components/website/icons/SearchIcon'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header({ className }) {
    const productsCart = useSelector(state => state.cart);
    const priceTotal = getTotalPrice(productsCart);
    const visiblePrice = addComma(priceTotal)

    return (
        <div className={'Header max-h-[13rem] shadow-sm py-8 fixed top-0 left-1/2 -translate-x-1/2 w-full bg-white z-50 ' + className} >
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

                <div className="cart-profile flex sm:order-last sm:col-span-2 items-center gap-2">
                    {/* Profile */}
                    <div className="profile flex gap-2 items-center">
                        <div className="image w-10 h-10">
                            <div className=' overflow-hidden rounded-full'>
                                <img src="/public/images/Profile.jpg" alt="" />
                            </div>
                        </div>
                        <div className="details text-right hidden lg:block">
                            <p className=' text-sm text-[#A5A5A5]'>مرحبا بك</p>
                            <button className=' text-base text-right text-[#333]'>تسجيل الدخول</button>
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
