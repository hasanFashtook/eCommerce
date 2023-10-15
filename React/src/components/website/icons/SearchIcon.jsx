import PropTypes from 'prop-types'

function SearchIcon({ className, height, width, color }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_6010_11936)">
        <path d="M24 22.9407L17.6194 16.56C19.1327 14.8039 20.049 12.5192 20.049 10.0245C20.0489 4.49697 15.552 0 10.0245 0C4.49697 0 0 4.49697 0 10.0245C0 15.552 4.49697 20.049 10.0245 20.049C12.5192 20.049 14.8039 19.1327 16.56 17.6194L22.9407 24L24 22.9407ZM1.49811 10.0245C1.49811 5.32303 5.32303 1.49811 10.0245 1.49811C14.726 1.49811 18.5509 5.32303 18.5509 10.0245C18.5509 14.726 14.726 18.5509 10.0245 18.5509C5.32303 18.5509 1.49811 14.726 1.49811 10.0245Z" fill={color ?? "#666666"} />
      </g>
      <defs>
        <clipPath id="clip0_6010_11936">
          <rect width={width ?? 24} height={height ?? 24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

SearchIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default SearchIcon
