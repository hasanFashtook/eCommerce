import PropTypes from 'prop-types'

function CreditCardIcon({ className, width, height, color }) {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 40} height={height ?? 36} viewBox="0 0 40 36" fill="none">
        <path d="M35.3125 0.8125H10.9375C8.35281 0.8125 6.25 2.91531 6.25 5.5C6.25 6.36297 6.94953 7.0625 7.8125 7.0625C8.67547 7.0625 9.375 6.36297 9.375 5.5C9.375 4.63844 10.0759 3.9375 10.9375 3.9375H35.3125C36.1741 3.9375 36.875 4.63844 36.875 5.5V21.125C36.875 21.9866 36.1741 22.6875 35.3125 22.6875H33.75V14.875C33.75 12.2903 31.6472 10.1875 29.0625 10.1875H4.6875C2.10281 10.1875 0 12.2903 0 14.875V30.5C0 33.0847 2.10281 35.1875 4.6875 35.1875H29.0625C31.6472 35.1875 33.75 33.0847 33.75 30.5V25.8125H35.3125C37.8972 25.8125 40 23.7097 40 21.125V5.5C40 2.91531 37.8972 0.8125 35.3125 0.8125ZM30.625 30.5C30.625 31.3616 29.9241 32.0625 29.0625 32.0625H4.6875C3.82594 32.0625 3.125 31.3616 3.125 30.5V14.875C3.125 14.0134 3.82594 13.3125 4.6875 13.3125H29.0625C29.9241 13.3125 30.625 14.0134 30.625 14.875V16.4375H7.8125C6.94953 16.4375 6.25 17.137 6.25 18C6.25 18.863 6.94953 19.5625 7.8125 19.5625H30.625V30.5Z" fill={color ?? "#62D0B6"} />
        <path d="M25.9375 28.9375H19.6875C18.8245 28.9375 18.125 28.238 18.125 27.375C18.125 26.512 18.8245 25.8125 19.6875 25.8125H25.9375C26.8005 25.8125 27.5 26.512 27.5 27.375C27.5 28.238 26.8005 28.9375 25.9375 28.9375Z" fill={color ?? "#62D0B6"} />
      </svg>
    </div>
  )
}

CreditCardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default CreditCardIcon
