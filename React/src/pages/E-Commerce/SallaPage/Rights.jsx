import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function Rights({ className }) {
    const [year, setYear] = useState(0);

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear())
    }, []);

    return (
        <div className={'Rights ' + className} >
            <div className="container flex flex-col-reverse gap-4 md:flex-row md:justify-between md:items-center text-white">
                <p className=' text-sm'>الحقوق محفوظة لمنصة سلة © {year}</p>
                <ul className="payment flex gap-2">
                    <li className=' w-16 h-8 bg-white grid place-items-center px-3 py-1 rounded'>
                        <img src="/public/images/salla/0bc206396168a2af91aefc5909e86eff.png" alt="paypal" />
                    </li>
                    <li className=' w-16 h-8 bg-white grid place-items-center px-3 py-1 rounded'>
                        <img src="/public/images/salla/1fc681b820f30a9fc23952fedcaf6419.png" alt="visa" />
                    </li>
                    <li className=' w-16 h-8 bg-white grid place-items-center px-3 py-1 rounded'>
                        <img src="/public/images/salla/6f85eb2ada37eb07859f25164c3c7264.png" alt="master card" />
                    </li>
                    <li className=' w-16 h-8 bg-white grid place-items-center px-3 py-1 rounded'>
                        <img src="/public/images/salla/e503b99cf8c16c9765b5d41af8da2e6e.png" alt="mada" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

Rights.propTypes = {
    className: PropTypes.string
}

export default Rights
