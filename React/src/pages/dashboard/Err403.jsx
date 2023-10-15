import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Err403({ role }) {
  return (
    <div className={'Err403 flex flex-col gap-3 items-center justify-center h-screen '} >
      <h1 className=' text-9xl font-bold'>403</h1>
      <h2 className=' text-3xl capitalize'>forbidden</h2>
      <p>access to this resources on the server is denied </p>
      <Link
        to={
          role == '2001' ? '/' : role == '1996' && 'dashboard/writer'
        }
      >
        <Button
          variant='contained'
          className=' capitalize'>
          go to {role == '2001' ? 'home page' : role == '1996' && 'writer page'}
        </Button>
      </Link>
    </div>
  )
}

Err403.propTypes = {
  role: PropTypes.string
}

export default Err403
