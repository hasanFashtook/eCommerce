import { useEffect, useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom'
import Cookie from 'cookie-universal';
import { user as USER, baseUrl } from '../../API/Api';
import Loading from '../../components/website/Loading';
import axios from 'axios';
import Err403 from '../dashboard/Err403';
import PropTypes from 'prop-types'


function RequireAuth({ allowedRole }) {
  const [user, setUser] = useState('');
  const nav = useNavigate();
  const cookie = Cookie();
  const token = cookie.get('userToken');



  useEffect(() => {
    async function userAuth() {
      await axios.get(`${baseUrl}/${USER}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          setUser(res.data);
        }).catch((err) => {
          console.log(err)
        })
    }
    userAuth();
  }, [nav])

  return (
    <>
      {token
        ? user == ''
          ? <Loading />
          : allowedRole.includes(user.role) ? <Outlet /> : <Err403 role={user.role} />
        : <Navigate to={'/login'} />
      }
    </>
  )
}
RequireAuth.propTypes = {
  allowedRole: PropTypes.array
}
export default RequireAuth
