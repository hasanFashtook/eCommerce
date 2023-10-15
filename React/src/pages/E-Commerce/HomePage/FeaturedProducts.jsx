import PropTypes from 'prop-types'
import Button from '../../../components/website/Button'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { PRODUCTS, baseUrl } from '../../../API/Api';
import Cookie from 'cookie-universal';
import { HeartIcon } from '@heroicons/react/24/outline';

function FeaturedProducts({ className }) {
  const [products, setProducts] = useState([]);
  const cookie = Cookie();
  const token = cookie.get('userToken');
  useEffect(() => {
    (async function () {
      try {
        await axios.get(`${baseUrl}/${PRODUCTS}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => setProducts(res.data))
      } catch (err) {
        console.log(err);
      }
    })()
  }, [token])

  function addToCart(id){
    
  }

  const showProducts = products.map((item, i) => (
    <div
      key={i}
      className='Card rounded overflow-hidden border border-gray-100 relative'
    >
      {parseInt(item.discount) != 0 &&
        <small className=' 
      before:border-8 before:block before:w-0 before:h-0 before:border-transparent before:absolute before:-right-4 before:top-[6px] before:border-l-red-600 
      absolute top-4 left-4 rounded bg-red-600 text-white text-sm px-2 py-1'
        >
          خصم {item.discount}%
        </small>

      }
      <div
        style={{
          backgroundImage: `url(${item.images[0].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="image h-56"></div>

      <div className="details flex flex-col h-[calc(100%-14rem)] justify-between gap-4 p-2">
        <div>
          <span className=' text-[#62D0B6] text-sm mb-1'>
            {item.category == 12 ? 'سماعات' : item.category == 13 ? 'موبايلات' : item.category == 14 && 'ساعات'}
          </span>

          <dl>
            <dt className=' text-base font-medium text-zinc-900 mb-1'>{item.title}</dt>
            <dd className=' text-sm text-zinc-500 mb-1'>{item.description}</dd>
          </dl>

          <div className="price flex flex-wrap gap-1 items-start">
            <div className=' text-[#F55157] text-lg font-medium' >
              {parseInt(item.discount) == 0 ? item.price : (item.price * (100 - parseInt(item.discount))) / 100} ل.س
            </div>
            {parseInt(item.discount) != 0 &&
              <del className=' text-sm text-gray-300'>{item.price} ل.س</del>
            }
          </div>
        </div>

        <div className="userReact flex gap-2">
          <div className="addToCart flex-1">
            <Button
              onClick={()=> addToCart(item.id)}
              className={' h-full w-full'} status='border' type='secondary'>أضف للسلة</Button>
          </div>
          <div className="love p-4 rounded border border-[#EEE]">
            <HeartIcon className=' w-6 h-6 text-zinc-400' />
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <div className={'FeaturedProducts ' + className} >
      <div className="container">
        <div className="head flex justify-between mb-8">
          <dl>
            <dt className=' text-xl md:text-2xl text-zinc-900 font-medium'>منتجات مميزة</dt>
            <dd className=' text-sm md:text-base text-zinc-500'>تسوق احدث المنتجات المميزة المضافة جديد</dd>
          </dl>
          <Button arrow type='primary' status='border' >عرض الكل</Button>
        </div>
        <div className="body grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {showProducts}
        </div>
      </div>
    </div>
  )
}

FeaturedProducts.propTypes = {
  className: PropTypes.string
}

export default FeaturedProducts
