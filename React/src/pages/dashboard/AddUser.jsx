import PropTypes from 'prop-types'
import Loading from '../../components/website/Loading'
import Form from '../../components/website/Form';
import { useState } from 'react';
function AddUser({ className }) {

  // showing loading page while fetching data
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? <Loading /> : (
        <div className={'AddUser flex-1 p-5 ' + className} >
          <h1 className=' mb-4'>Add User</h1>
          <Form className={' max-w-3xl m-auto'} setLoading={setLoading} />
        </div>
      )}
    </>
  )
}

AddUser.propTypes = {
  className: PropTypes.string
}

export default AddUser
