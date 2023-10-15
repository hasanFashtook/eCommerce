import PropTypes from 'prop-types'

function ProductManager({ className }) {
  return (

    <div className={'ProductManager ' + className} >
      ProductManager
    </div>

  )
}

ProductManager.propTypes = {
  className: PropTypes.string
}

export default ProductManager
