import PropTypes from 'prop-types'

function SallaIcon({ className,width,height }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width ?? 44} height={height ?? 44} viewBox="0 0 44 44" fill="none">
      <g clipPath="url(#clip0_6382_2528)">
        <path d="M32.9992 35.2031C30.5792 35.2031 28.5992 37.1831 28.5992 39.6031C28.5992 42.0231 30.5792 44.0031 32.9992 44.0031C35.4192 44.0031 37.3992 42.0231 37.3992 39.6031C37.3992 37.1831 35.4192 35.2031 32.9992 35.2031ZM17.5992 35.2031C15.1792 35.2031 13.1992 37.1831 13.1992 39.6031C13.1992 42.0231 15.1792 44.0031 17.5992 44.0031C20.0192 44.0031 21.9992 42.0231 21.9992 39.6031C21.9992 37.1831 20.0192 35.2031 17.5992 35.2031Z" fill="#62D0B6" />
        <path d="M44 8.8L39.6 30.8H13.2L8.8 4.4H0V0H12.54L13.2 3.74L16.94 26.4H36.08L36.96 22H22V17.6H37.84L38.72 13.2H22V8.8H44Z" fill="#62D0B6" />
      </g>
      <defs>
        <clipPath id="clip0_6382_2528">
          <rect width={44} height={44} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

SallaIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default SallaIcon
