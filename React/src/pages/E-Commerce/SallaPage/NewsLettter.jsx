import { EnvelopeIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppStore from '../../../components/website/icons/AppStore'

function NewsLettter({ className }) {
    return (
        <div className={'NewsLettter ' + className} >
            <div className="container flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="flex gap-4 items-center">
                    <div className="grid place-items-center w-16 h-16 bg-[#d6f8f080] rounded-full">
                        <EnvelopeIcon className='text-[#62D0B6] w-8 h-8' />
                    </div>
                    <dl>
                        <dt className=' text-lg text-gray-700 font-semibold mb-1'>الاشتراك فى النشرة البريدية</dt>
                        <dd className=' text-sm text-gray-500'>انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!</dd>
                    </dl>
                </div>
                <form action="">
                    <label
                        htmlFor="NewsLettter"
                        className=' text-sm text-gray-700 font-semibold'
                    >يمكنك إلغاء الاشتراك في أي لحظة</label>
                    <div className="flex gap-2 mt-4">
                        <input
                            type="email"
                            name="NewsLettter"
                            id="NewsLettter"
                            placeholder='ادخل البريد الالكترونى'
                            className=' py-3 px-2 rounded w-[calc(100%-6.5rem)] outline-none placeholder:text-sm placeholder:text-[#a5a5a5]'
                        />
                        <button
                            className=' w-24 text-center rounded bg-[#62D0B6] hover:filter text-white text-sm font-semibold'
                        >إشتراك</button>
                    </div>
                </form>
                <div className="flex flex-col gap-2">
                    <h1 className=' text-gray-700 text-base font-semibold'>تطبيقات الجوال</h1>
                    <div className="flex gap-4">
                        <Link
                            to={'https://www.bing.com/ck/a?!&&p=f1ee1f81102df358JmltdHM9MTY5NzUwMDgwMCZpZ3VpZD0xOGJjN2FhMC1jMThlLTY0NzktMDA0Ny02ODMwYzA2ZTY1YzgmaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=18bc7aa0-c18e-6479-0047-6830c06e65c8&psq=salla+app+google+pla&u=a1aHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5lbW9uZXkuc2FsbGFjcA&ntb=1'}
                        >
                            <AppStore />
                        </Link>
                        <Link
                            to={'https://www.bing.com/ck/a?!&&p=f1ee1f81102df358JmltdHM9MTY5NzUwMDgwMCZpZ3VpZD0xOGJjN2FhMC1jMThlLTY0NzktMDA0Ny02ODMwYzA2ZTY1YzgmaW5zaWQ9NTIxNg&ptn=3&hsh=3&fclid=18bc7aa0-c18e-6479-0047-6830c06e65c8&psq=salla+app+google+pla&u=a1aHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5lbW9uZXkuc2FsbGFjcA&ntb=1'}
                        >
                            <AppStore />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

NewsLettter.propTypes = {
    className: PropTypes.string
}

export default NewsLettter
