
import PropTypes from 'prop-types'
import CreditCardIcon from '../../../components/website/icons/CreditCardIcon'
import ReturnIcon from '../../../components/website/icons/ReturnIcon'
import DeliveryIcon from '../../../components/website/icons/DeliveryIcon'

function Featuers({ className }) {
    return (
        <div className={'Featuers ' + className} >
            <div className="container ">
                <div className=" flex flex-col lg:flex-row border rounded-md border-gray-100">
                    {/* feature */}
                    <div className="featuer flex md:flex-col lg:flex-row gap-4 items-center p-8 [&:not(:last-child)]:border-b lg:border-b-0 lg:[&:not(:last-child)]:border-l border-gray-100">
                        <div className="icon">
                            <CreditCardIcon />
                        </div>
                        <dl className="details flex-1 md:text-center lg:text-right">
                            <dt className=' text-zinc-800 text-xl font-medium'>مدفوعات آمنة</dt>
                            <dd className=' text-zinc-500 text-base'>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</dd>
                        </dl>
                    </div>

                    {/* feature */}
                    <div className="featuer flex md:flex-col lg:flex-row gap-4 items-center p-8 [&:not(:last-child)]:border-b lg:border-b-0 lg:[&:not(:last-child)]:border-l border-gray-100">
                        <div className="icon">
                            <DeliveryIcon />
                        </div>
                        <dl className="details flex-1 md:text-center lg:text-right">
                            <dt className=' text-zinc-800 text-xl font-medium'>شحن مجاني</dt>
                            <dd className=' text-zinc-500 text-base'>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</dd>
                        </dl>
                    </div>

                    {/* feature */}
                    <div className="featuer flex md:flex-col lg:flex-row gap-4 items-center p-8 [&:not(:last-child)]:border-b lg:border-b-0 lg:[&:not(:last-child)]:border-l border-gray-100">
                        <div className="icon">
                            <ReturnIcon />
                        </div>
                        <dl className="details flex-1 md:text-center lg:text-right">
                            <dt className=' text-zinc-800 text-xl font-medium'>منتجات مضمونه</dt>
                            <dd className=' text-zinc-500 text-base'>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</dd>
                        </dl>
                    </div>

                </div>
            </div>
        </div>
    )
}

Featuers.propTypes = {
    className: PropTypes.string
}

export default Featuers
