import PropTypes from 'prop-types'
import Form from '../../components/website/Form'
import { useLocation } from 'react-router-dom';
import Loading from '../../components/website/Loading';
import { useSelector } from 'react-redux';

function UserEdit({ className }) {
    const path = useLocation().pathname.split('/').pop();
    const { users, loading } = useSelector(state => state.users);

    const { name, email, role } = users.filter((user) => {
        return user.id == +path
    })[0];

    const form = { name, email, role }

    return (
        <>
            {loading ? <Loading /> : (
                <div className={'UserEdit flex-1 p-5 ' + className} >
                    <h1 className=' mb-4'>Users Modification</h1>
                    <Form className={' max-w-3xl m-auto'} detailsEditable={form} />
                </div>
            )}
        </>
    )
}

UserEdit.propTypes = {
    className: PropTypes.string
}

export default UserEdit
