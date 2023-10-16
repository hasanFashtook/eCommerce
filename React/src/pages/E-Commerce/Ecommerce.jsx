import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from './SallaPage/Header'

function Ecommerce({ className }) {
    return (
        <div className={'Ecommerce ' + className} >
            <Header />
            <Outlet/>
        </div>
    )
}

Ecommerce.propTypes = {
    className: PropTypes.string
}

export default Ecommerce
