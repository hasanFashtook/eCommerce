import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from './SallaPage/Header'
import Footer from './SallaPage/Footer'
import { useSelector } from 'react-redux';
import ProfileSec from './ProfileSec';
import { useEffect } from 'react';

function Ecommerce({ className }) {
    const profileState = useSelector(state => state.users.showControlPanel);
    useEffect(()=>{
        document.documentElement.setAttribute('dir','rtl');
    })
    return (
        <div className={'Ecommerce ' + className} >
            <Header />
            <Outlet />
            <Footer />
            {profileState &&
                <ProfileSec
                    className={' fixed top-0 left-0 w-full h-screen z-50 '}
                />
            }
        </div>
    )
}

Ecommerce.propTypes = {
    className: PropTypes.string
}

export default Ecommerce
