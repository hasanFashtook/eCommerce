import { MinusIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart, reduceQauntityFromCart, removeFromCart } from '../../../Store/Reducers/cartReducer';
import { useState } from 'react';


function CartPage({ className }) {
    const dispatch = useDispatch();
    const productsCart = useSelector(state => state.cart);
    const priceTotal = getTotalPrice(productsCart);
    const visiblePrice = addComma(priceTotal);
    const [discountCode, setDiscountCode] = useState('');

    async function getDisCount(e) {
        e.preventDefault();
        console.log(discountCode)
    }

    const showProductCart = productsCart.map((product, i) => (
        <div
            key={i}
            className=' border border-gray-100 rounded p-4 lg:flex lg:justify-between lg:items-center lg:gap-8 '
        >
            <div className="flex pb-4 lg:pb-0 items-center justify-between ">
                <div className=' flex items-center gap-4'>
                    <div className="image w-24 h-20 rounded overflow-hidden border border-gray-100 ">
                        <img
                            src={product.images[0].image}
                            alt={product.title}
                            className=' h-full object-cover object-center align-middle'
                        />
                    </div>
                    <div className="content py-2">
                        <dl>
                            <dt className=' text-base font-medium text-zinc-800'>{product.About}</dt>
                            <dd className=' text-sm text-[#666] mt-2'
                            >
                                {(((100 - +product.discount) / 100) * (+product.price)).toLocaleString('en-US')} ل.س
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="remove lg:hidden">
                    <button
                        onClick={() => { dispatch(removeFromCart(product)) }}
                        className=' grid place-items-center w-7 h-7 rounded-full bg-[#f8f8f8]'>
                        <XMarkIcon className=' w-4 h-4' />
                    </button>
                </div>
            </div>
            <hr className=' bg-gray-100 lg:hidden' />
            <div className="flex items-center justify-between md:gap-4 lg:gap-8 pt-4 lg:pt-0">
                <div className="quantity border border-gray-100 rounded p-2 flex gap-2 items-center">
                    <button
                        className='w-4'
                        onClick={() => dispatch(addProductToCart(product))}
                    >
                        <PlusIcon className=' w-4 h-4' />
                    </button>
                    <div className="number w-12"><div className="mx-auto w-fit">{product.quantity}</div></div>
                    <button
                        className='w-4'
                        onClick={() => dispatch(reduceQauntityFromCart(product))}
                    ><MinusIcon className=' w-4 h-4' /></button>
                </div>
                <div className="totalPrice text-base text-[#333] font-semibold">
                    المجموع: {(((100 - +product.discount) / 100) * (+product.price) * product.quantity).toLocaleString('en-US')} ل.س
                </div>
                <div className="remove hidden lg:block">
                    <button
                        onClick={() => { dispatch(removeFromCart(product)) }}
                        className=' grid place-items-center w-7 h-7 rounded-full bg-[#f8f8f8]'>
                        <XMarkIcon className=' w-4 h-4' />
                    </button>
                </div>
            </div>
        </div>
    ))


    return (
        <div className={'CartPage mt-[13rem] ' + className} >
            <div className="container md:flex md:gap-6 my-6">
                <div className="ProductsCart flex gap-4 flex-col md:flex-1">
                    {showProductCart}
                </div>
                <div className="Product-Options flex flex-col gap-4 p-4 md:max-w-xs h-fit border border-gray-100 rounded">
                    <div className="summary flex flex-col gap-4">
                        <h1 className=' text-xl text-[#333] font-semibold'>ملخص الطلب</h1>
                        <div className="flex justify-between text-[#555] font-semibold text-base">
                            <p>مجموع المنتجات</p>
                            <span>{visiblePrice} ل.س</span>
                        </div>
                        <form onSubmit={getDisCount} className="discountCode">
                            <label htmlFor="discountCode" className=' text-sm text-[#333] font-semibold'>هل لديك كود خصم</label>
                            <div className="border border-gray-100 mt-2 rounded flex justify-between">
                                <input
                                    type="text"
                                    id='discountCode'
                                    name='discountCode'
                                    onChange={(e) => setDiscountCode(e.target.value)}
                                    className=' outline-none px-3 py-2 w-[calc(100%-5rem)]'
                                />
                                <button
                                    className=' w-20 border-2 border-[#62D0B6] text-[#62D0B6] rounded px-4 py-2'
                                >إضافة</button>
                            </div>
                        </form>
                    </div>
                    <hr className=' bg-gray-100' />
                    <div className="total&discount">
                        <div className="flex justify-between text-[#333] font-semibold text-xl">
                            <p>الإجمالي</p>
                            <span>{visiblePrice} ل.س</span>
                        </div>
                        <p className=' text-[#666] mt-2'>الاسعار شاملة للضريبة <span className='text-red-500'>*</span></p>
                    </div>
                    <button className=' bg-[#62D0B6] text-white rounded py-4'>إتمام الطلب</button>
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
CartPage.propTypes = {
    className: PropTypes.string
}

export default CartPage
