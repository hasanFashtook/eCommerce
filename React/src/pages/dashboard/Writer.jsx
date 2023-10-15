import PropTypes from 'prop-types'

function Writer({ className }) {
  return (
    <div className={'Writer ' + className} >
      Writer
    </div>
  )
}

Writer.propTypes = {
  className: PropTypes.string
}

export default Writer
