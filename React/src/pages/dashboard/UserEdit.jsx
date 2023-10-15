import PropTypes from 'prop-types'
import Form from '../../components/website/Form'
import { useEffect } from 'react';
import axios from 'axios';
import { baseUrl, user } from '../../API/Api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookie from 'cookie-universal'
import Loading from '../../components/website/Loading';

function UserEdit({ className }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });
  const [loading, setLoading] = useState(true);
  const path = useLocation().pathname.split('/').pop();

  // cookie to store logining in information
  const cookie = Cookie();
  const token = cookie.get('userToken');
  const nav = useNavigate();


  // fetching data user in the event of modifing it
  useEffect(() => {
    if (!isNaN(parseInt(path))) {
      axios.get(`${baseUrl}/${user}/${path}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

        .then((res) => {
          setForm({
            name: res.data.name,
            email: res.data.email,
            role: res.data.role
          })
          setLoading(false);
        }).then(() => {
          // setDisabled(false);
        }).catch((err) => {
          err.response.status === 404 && nav('/*');
        })
    }
  }, [])
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
