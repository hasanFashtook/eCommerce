import Featuers from "./Featuers";
import Slider from "./Slider";
import Panners from "./Panners";
import FeaturedProducts from "./FeaturedProducts";
import PropTypes from 'prop-types'

function SallaPage({ className }) {
    return (
        <div className={'SallaPage min-h-screen ' + className}>
            <Slider className={' mt-[11.5rem] sm:mt-[7.5rem]'}/>
            <Featuers className={' py-12'} />
            <Panners className={'py-12'} />
            <FeaturedProducts className={'py-12'}/>
        </div>
    )
}

SallaPage.propTypes = {
    className: PropTypes.string
}

export default SallaPage
