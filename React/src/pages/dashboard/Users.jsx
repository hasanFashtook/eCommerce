import PropTypes from 'prop-types';
import { baseUrl, user } from '../../API/Api';
import { Button } from '@mui/material';
import TableCom from '../../components/dashboard/TableCom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { resetState } from '../../Store/Reducers/usersReducer';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../Store/Actions/getUsers';

function Users({ className }) {
    const {
        loading,
        users,
        userInfo,
        error,
        success
    } = useSelector(state => state.users);
    const dispatch = useDispatch();
    // getting data
    useEffect(() => {
        dispatch(getUsers());
        dispatch(resetState())
    }, [dispatch]);

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
            <TableCom apiUrls={apiUrls} action={getUsers} loading={loading} items={users} item4Headers={userInfo} error={error} success={success} />
        </div>
    )
}

const apiUrls = {
    type: 'users',
    editItem: `/dashboard/user`,
    deleteItem: `${baseUrl}/${user}`
}

Users.propTypes = {
    className: PropTypes.string
}
export default Users
