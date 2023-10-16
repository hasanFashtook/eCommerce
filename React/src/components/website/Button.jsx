import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import Cart from './icons/Cart'

function Button({
  className,
  onClick,
  children,
  type,
  status,
  size,
  arrow,
  cart
}) {


  return (
    <button
      onClick={onClick}
      className={`Button w-fit outline-none flex justify-center gap-2 items-center ${size == 'small' ? ' py-[10px]' : ' py-4'} px-4 rounded transition-all
      ${status == 'solid' ? ' text-white hover:brightness-125 ' +
          (type == 'primary' ? ' bg-[#62d0b6]' : type == 'secondary' ? ' bg-[#1D1F1F]' : type == 'waring' && ' bg-[#F55157]')

          : status == 'border' ? ' bg-white focus:text-white border' +
            (type == 'primary'
              ? ' border-[#62D0B6] text-[#62d0b6] hover:bg-emerald-100 focus:bg-[#62d0b6]'
              : type == 'secondary'
                ? ' border-[#eee] text-[#1D1F1F] hover:bg-gray-50 focus:bg-[#1D1F1F]'
                : type == 'waring' && ' border-[#F55157] text-[#F55157] hover:bg-red-50 focus:bg-[#F55157]')

            : status == 'link' &&
            (type == 'primary bg-white border-none'
              ? ' text-[#62d0b6] hover:bg-emerald-100 focus:bg-[#62d0b6]'
              : type == 'secondary'
                ? ' text-[#1D1F1F] hover:bg-gray-50 focus:bg-[#1D1F1F]'
                : type == 'waring' && ' text-[#F55157] hover:bg-red-50 focus:bg-[#F55157]')
        }
    ` + className} >
      {cart &&
        <Cart
          color={
            status == 'solid' ? 'white'
              : (type == 'primary' ? '#62D0B6'
                : type == 'secondary' ? '#1D1F1F'
                  : type == 'waring' && '#F55157')}
          width={16} height={16} />
      }

      <div className=' flex-1 text-sm md:text-base text-center'>
        {children}
      </div>
      {arrow &&
        <ChevronLeftIcon className='w-4 h-4' />
      }
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  arrow: PropTypes.bool,
  cart: PropTypes.bool,
}

export default Button
