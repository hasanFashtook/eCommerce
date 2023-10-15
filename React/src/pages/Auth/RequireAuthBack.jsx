import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Cookie from 'cookie-universal';
function RequireAuthBack() {
  const cookie = Cookie();
  const token = cookie.get('userToken');
  return (
    <>
      {token ? window.history.back() : <Outlet />}
    </>
  )
}

RequireAuthBack.propTypes = {
  className: PropTypes.string
}

export default RequireAuthBack
