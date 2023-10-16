import PropTypes from 'prop-types'

function Panners({ className }) {
    return (
        <div className={'Panners ' + className} >
            <div className="container flex flex-col md:flex-row gap-4">
                <div
                    className="panner rounded h-60 flex-1">
                    <img
                        src="/public/images/salla/phone.png"
                        alt="phones"
                        className=' object-cover object-right' />
                </div>
                <div
                    className="panner rounded h-60 flex-1">
                    <img
                        src="/public/images/salla/headspeaker.png"
                        alt="headspeakers"
                        className=' object-cover object-right' />
                </div>
            </div>
        </div>
    )
}

Panners.propTypes = {
    className: PropTypes.string
}

export default Panners
