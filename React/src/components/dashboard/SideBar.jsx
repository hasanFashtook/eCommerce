import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { links } from './NavLinks';
import Cookie from 'cookie-universal';
import { useSelector } from 'react-redux';


function SideBar({ className }) {
  const isOpen = useSelector(state => state.menu)
  const screenSize = useSelector(state => state.screen);

  const cookie = Cookie();
  const { role } = cookie.get('userDetails');

  const path = useLocation().pathname.split('/').pop();


  return (
    <div className={'SideBar sticky z-[1000] ' + className} >
      {/* dashboard section */}
      <div className="dashboard-section ">
        <p className={`${screenSize <= 768
          ? 'hidden'
          : isOpen
            ? 'h-1.25 opacity-100'
            : 'h-0 opacity-0'}
            uppercase overflow-hidden transition-all text-gray-400 text-sm mb-3`}>
          dashboard
        </p>

        {links.map((link, index) => (link.role.includes(role) &&
          <NavLink
            key={index}
            to={link.path}
            className={`group transition-all h-[40px] mb-2 flex justify-between group-hover:bg-white focus:bg-slate-100 px-5 py-2 rounded-md
              ${screenSize <= 768 ? ' w-fit  hover:shadow-inner hover:bg-slate-200' : isOpen ? ' w-[13.5rem]' : ' w-fit  hover:shadow-inner hover:bg-slate-200'}
              hover:w-[13.5rem]
              ${path == link.path && 'bg-slate-200'}`}
          >
            <div className='flex items-center gap-2  text-gray-400 hover:text-gray-700 focus:text-blue-500 transition-all'>
              {link.icon}
              <p className={`${screenSize <= 768 ? 'hidden' : (isOpen ? 'block' : 'hidden')} group-hover:block capitalize text-sm`} >{link.label}</p>
            </div>
            <div className={`${screenSize <= 768 ? 'hidden' : (isOpen ? 'block' : 'hidden')} state group-hover:block bg-slate-300 w-8 text-center rounded-full`}>
              <span>5+</span>
            </div>
          </NavLink>
        ))}

      </div>
      {/* dashboard section */}
    </div >
  )
}

SideBar.propTypes = {
  className: PropTypes.string
}

export default SideBar
