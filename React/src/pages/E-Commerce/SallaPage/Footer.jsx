import PropTypes from 'prop-types'
import NewsLettter from './NewsLettter'
import LinksLists from './LinksLists'
import Rights from './Rights'

function Footer({ className }) {
    return (
        <div className={'Footer ' + className} >
            <NewsLettter className={' bg-zinc-100 py-7'} />
            <LinksLists className={' py-8'} />
            <Rights className={'bg-zinc-900 py-4'} />
        </div>
    )
}

Footer.propTypes = {
    className: PropTypes.string
}

export default Footer
