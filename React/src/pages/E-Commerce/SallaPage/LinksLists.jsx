import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function LinksLists({ className }) {

    const showLinks = linksSec.map((section, i) => (
        <div
            key={i}
            className=' w-40'
        >
            <h1 className=' text-lg font-semibold mb-4'>{section.title}</h1>
            <ul className=' flex flex-col gap-2'>
                {section.links.map((link, index) => (
                    <li
                        key={index}
                        className=''
                    >
                        <Link
                            to={
                                link.type == 'mobile'
                                    ? `tel:${link.linkPath}`
                                    : link.type == 'mail'
                                        ? `mailto:${link.linkPath}`
                                        : link.linkPath
                            }
                            className='flex items-center gap-1 text-[#666] hover:-translate-x-2 transition-all duration-300 hover:text-[#62D0B6]'
                        >
                            <ChevronDoubleLeftIcon className=' w-3 h-3' />
                            <div>{link.linkName}</div>
                        </Link>
                        {section.showPath && <div className='text-[#666] pr-2'>{link.linkPath}</div>}
                    </li>
                ))}
            </ul>
        </div>
    ))

    const showSocialLinks = socialLinks.map((link, i) => (
        <li
            key={i}
            className=' '
        >
            <Link
                to={link.Path}
                className='border border-gray-200 hover:border-[#62D0b6] rounded-full w-10 h-10
                grid place-items-center transition duration-300 text-[#a5a5a5] hover:text-[#62D0B6]'>
                {link.icon}
            </Link>
        </li>
    ))

    return (
        <div className={'LinksLists ' + className} >
            <div className="container flex flex-col gap-6 lg:flex-row lg:justify-between">
                <dl className=' max-w-xs'>
                    <dt className=' text-lg font-semibold mb-4'>عن متجرنا</dt>
                    <dd className=' text-base text-gray-500'>متجر سلة من افضل المتاجر التى تقوم ببيع المنتجات الرقمية بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم واستمتع بأفضل العروض والخصومات</dd>
                </dl>
                <div className="flex gap-6 flex-col md:flex-row md:justify-between">
                    {showLinks}
                </div>
                <dl>
                    <dt className='text-lg font-semibold mb-4'>تابعنا على</dt>
                    <dd>
                        <ul className=' flex gap-2'>
                            {showSocialLinks}
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

const linksSec = [
    {
        title: 'حسابي',
        showPath: false,
        links: [
            {
                linkName: 'حسابي',
                linkPath: '/'
            }, {
                linkName: 'طلباتي',
                linkPath: '/'
            }, {
                linkName: 'سلة المشتريات',
                linkPath: '/'
            }, {
                linkName: 'المفضلة',
                linkPath: '/'
            }
        ]
    }, {
        title: 'روابط مهمة',
        showPath: false,
        links: [
            {
                linkName: 'من نحن',
                linkPath: ''
            }, {
                linkName: 'سياسة الخصوصية',
                linkPath: '/'
            }, {
                linkName: 'الشروط و الاحكام',
                linkPath: '/'
            }, {
                linkName: 'الدعم الفني',
                linkPath: '/'
            }
        ]
    }, {
        title: 'تواصل معنا',
        showPath: true,
        links: [
            {
                linkName: 'واتساب',
                type: 'mobile',
                linkPath: '009612345678932'
            }, {
                linkName: 'موبايل',
                type: 'mobile',
                linkPath: '009612345678932'
            }, {
                linkName: 'البريد',
                type: 'mail',
                linkPath: 'salla.sa'
            }
        ]
    }
];
const socialLinks = [
    {
        title: 'Facebook',
        Path: '/',
        icon: <Facebook className=' w-5 h-5 text-inherit' />
    },
    {
        title: 'Twitter',
        Path: '/',
        icon: <Twitter className=' w-5 h-5 text-inherit' />
    },
    {
        title: 'Instagram',
        Path: '/',
        icon: <Instagram className=' w-5 h-5 text-inherit' />
    }
]

LinksLists.propTypes = {
    className: PropTypes.string
}

export default LinksLists
