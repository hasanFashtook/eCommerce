import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cookie from 'cookie-universal';


function Err404() {
  const cookie = Cookie()
  const { role } = cookie.get('userDetails');

  return (
    <div className={'Err403 flex flex-col gap-3 items-center justify-center h-screen '} >
      <h1 className=' text-9xl font-bold'>404</h1>
      <h2 className=' text-3xl capitalize'>look like you&#039;re lost</h2>
      <p className=' capitalize'>the page you are looking for not available </p>
      <Link
        to={
          role == '2001' ? '/' : role == '1996' ? 'dashboard' : 'dashboard/users'
        }
      >
        <Button
          variant='contained'
          className=' capitalize'>
          go to {role == '2001' ? 'home page' : role == '1996' ? 'writer page' : 'users page'}
        </Button>
      </Link>
    </div>
  )
}

Err404.propTypes = {
  role: PropTypes.string
}

export default Err404
