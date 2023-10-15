import PropTypes from 'prop-types';
import { USERS, baseUrl, user } from '../../API/Api';
import { Button } from '@mui/material';
import TableCom from '../../components/dashboard/TableCom';
import { Link } from 'react-router-dom';

function Users({ className }) {


  const sections =
    [
      {
        key: 'id',
        name: 'id'
      },
      {
        key: 'name',
        name: 'user name'
      },
      {
        key: 'email',
        name: 'email'
      },
      {
        key: 'role',
        name: 'role'
      }
    ];
  const apiUrls = {
    type: 'users',
    items: `${baseUrl}/${USERS}`,
    editItem: `/dashboard/user`,
    deleteItem: `${baseUrl}/${user}`
  }
  return (

    <div className={'Users flex-1 p-5 ' + className} >
      <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-2 justify-between items-center mb-4 ">
        <h1 className=' max-sm:text-xl'>Users Page</h1>
        <Link className='text-white' to={'/dashboard/user/add'}>
          <Button
            color='primary'
            variant='contained'
            className=' capitaliz text-xs'
          >
            add user
          </Button>
        </Link>
      </div>
      <TableCom headerDetails={sections} apiUrls={apiUrls} />
    </div>

  )
}

Users.propTypes = {
  className: PropTypes.string
}
export default Users