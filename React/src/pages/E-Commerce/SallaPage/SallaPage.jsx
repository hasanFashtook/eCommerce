import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Cookie from 'cookie-universal';
import Featuers from "./Featuers";
import Slider from "./Slider";
import Panners from "./Panners";
import FeaturedProducts from "./FeaturedProducts";
import PropTypes from 'prop-types'

function SallaPage({ className }) {
    const cookie = Cookie();
    let userDetails = cookie.get('userDetails');
    let role;
    if (userDetails) {
        ({ role } = userDetails);
    }
    return (
        <div className={'SallaPage min-h-screen ' + className}>
            <Slider />
            <Featuers className={' py-12'} />
            <Panners className={'py-12'} />
            <FeaturedProducts />
            <Link
                to={
                    userDetails ? (
                        role == '1995'
                            ? '/dashboard/users'
                            : role == '1996'
                                ? '/dashboard/writer'
                                : role == '1999'
                                    ? 'dashboard/product-manager'
                                    : '/'
                    ) : (
                        '/login'
                    )
                }
            >
                <Button
                    variant='contained'
                    className=' capitalize'>
                    go to {
                        role == '1995'
                            ? 'users page'
                            : role == '1996'
                                ? 'writer page'
                                : role == '1999'
                                    ? 'product manager page'
                                    : role == '2001'
                                        ? 'welcome back'
                                        : 'login page'
                    }
                </Button>
            </Link>
        </div>
    )
}

SallaPage.propTypes = {
    className: PropTypes.string
}

export default SallaPage
