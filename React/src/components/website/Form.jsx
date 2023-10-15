import { useContext, useState } from "react";
import PropType from 'prop-types'
import { Button } from "@mui/material";
import axios from "axios";
import { baseUrl as url, register, login, user } from "../../API/Api";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Cookie from 'cookie-universal'
import { CurrentUserContext } from "../../context/CurrentUserProvider";
import Loading from "./Loading";
import {
  LockClosedIcon,
  BriefcaseIcon,
  UserIcon,
  EnvelopeIcon,
  UserPlusIcon
} from '@heroicons/react/24/outline'


export default function Form({ className, detailsEditable }) {
  // this states to manage the error messages that the user will see
  const [accept, setAccept] = useState(false);
  const [status, setStatus] = useState(0);

  // const [inputWriting, setInputWriting] = useState(null)

  // showing loading page while fetching data
  const [loading, setLoading] = useState(false);

  // // prevent the user form modifing the data until it is displayed within the fields
  // const [disabled, setDisabled] = useState(false)
  // we take the last name of current path to determine the type of operation 
  // that Form Component operate on..
  const path = useLocation().pathname.split('/').pop();


  // nav to prevent refreshing page while navigating between pages
  const nav = useNavigate();

  // cookie and context to store logining in information
  const cookie = Cookie();
  const token = cookie.get('userToken');
  const userDetailsContext = useContext(CurrentUserContext)

  // regex to email validation
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;


  // grouping values of input field
  const [form, setForm] = useState(path == 'register' ?
    {
      name: '',
      email: '',
      password: ''
    }
    : path == 'login' ?
      {
        email: '',
        password: ''
      } : !isNaN(parseInt(path)) ?
        detailsEditable
        : {
          name: '',
          email: '',
          password: '',
          role: '2001'
        });


  // store the new data in form when changed by users
  function handleChange(e) {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
    setAccept(false);
  }


  // send data on submit
  async function handleSubmit(e) {
    e.preventDefault();
    setAccept(true);
    setStatus(0);
    setLoading(true)


    // asyncing sending operation
    try {

      // initilaze variable to store type of opertion due to type of path
      let Pr;

      // register operation
      if (path === 'register' && form.name != '' && emailPattern.test(form.email) && form.password.length >= 8) {
        Pr = await axios.post(`${url}/${register}`, form);
      }

      // login operation
      else if (path === 'login' && emailPattern.test(form.email) && form.password.length >= 8) {
        Pr = await axios.post(`${url}/${login}`, form)
      }

      // modification operation
      else if (!isNaN(parseInt(path)) && form.name != '' && emailPattern.test(form.email)) {
        Pr = await axios.post(`${url}/user/edit/${path}`, form, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      }
      else if (path === 'add' && form.name != '' && emailPattern.test(form.email) && form.role != '' && form.password.length >= 8) {
        // addition operation
        Pr = await axios.post(`${url}/${user}/add`, form, {
          headers: {
            Authorization: `Bearer ${cookie.get('userToken')}`
          }
        })
      }


      // store token in the event of registerion or logining in
      let tokenResponse, role;
      if (path == 'register' || path == 'login') {
        tokenResponse = Pr.data.token;
        cookie.set('userToken', tokenResponse);
        cookie.set('userDetails', Pr.data.user);
        userDetailsContext.setUserDetails(Pr.data.user);
        role = Pr.data.user.role;
      }

      Pr ? (
        tokenResponse
          ? nav(role == '2001' ? '/' : role == '1996' ? '/dashboard/writer' : role == '1995' ? '/dashboard' : role == '1999' && '/dashboard/product-manager') //when registring or logining
          : nav('/dashboard/users') // when modifing or add new user
      ) : null
      setStatus(Pr ? Pr.status : 0)
    } catch (err) {
      console.log(err)
      // setStatus(err.response.status)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <Loading />}
      <div className={'Form w-full sm:w-96 ' + className} >
        <form
          className=" flex flex-col "
          onSubmit={handleSubmit}
        >
          {/* uesr name */}
          {path != 'login' &&
            <div className="flex bg-white border border-gray-100 mb-3 ">
              <div className=" w-14 h-14 grid place-items-center">
                <UserIcon className=" w-5 h-5 text-zinc-700" />
              </div>
              <label className='relative group cursor-pointer flex-1'>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  value={form.name}
                  onChange={(e) => { handleChange(e) }}
                  className='h-14 px-4 pt-4 text-sm outline-none
                text-zinc-600 placeholder-gray-300 duration-200
                  placeholder-opacity-0 transition bg-white
                  group/item w-full'
                // error={accept && !form.name}
                // helperText={accept && !form.name && 'Please, enter your name'}
                />
                <span
                  className={`text-sm text-zinc-600 bg-white rounded
                  absolute px-1 transition-all duration-300 input-text
                  group-focus-within:left-2 group-focus-within:top-1
                ${form.email == '' ? ' left-5 top-5' : ' left-2 top-1'}`}
                >
                  {!isNaN(parseInt(path)) ? 'User Name' : 'Your Name'}
                </span>
              </label>
            </div>
          }

          {/* email */}
          <div className="flex bg-white border border-gray-100 mb-3 ">
            <div className=" w-14 h-14 grid place-items-center">
              <EnvelopeIcon className=" w-5 h-5 text-zinc-700" />
            </div>
            <label className='relative group cursor-pointer flex-1'>
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={form.email}
                onChange={(e) => { handleChange(e) }}
                className='h-14 px-4 pt-4 text-sm outline-none
              text-zinc-600 placeholder-gray-300 duration-200
                placeholder-opacity-0 transition bg-white
                group/item w-full'
              />
              <span
                className={`text-sm text-zinc-600 bg-white rounded
                absolute px-1 transition-all duration-300 input-text
                group-focus-within:left-2 group-focus-within:top-1
              ${form.email == '' ? ' left-5 top-5' : ' left-2 top-1'}`}
              >
                {!isNaN(parseInt(path)) ? 'User Email' : "Your Email"}
              </span>
            </label>
          </div>


          {/* password */}
          {isNaN(parseInt(path)) &&
            // this condition to hide this field when modify user
            <div className="flex bg-white border border-gray-100 mb-3">
              <div className=" w-14 h-14 grid place-items-center">
                <LockClosedIcon className=" w-5 h-5 text-zinc-700" />
              </div>
              <label className='relative group cursor-pointer flex-1'>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  value={form.password}
                  onChange={(e) => { handleChange(e) }}
                  className='h-14 px-4 pt-4 text-sm outline-none
                text-zinc-600 placeholder-gray-300 duration-200
                placeholder-opacity-0 transition bg-white
                group/item w-full'
                />
                <span
                  className={`text-sm text-zinc-600 bg-white rounded 
                absolute px-1 transition-all duration-300 input-text
                group-focus-within:left-2 group-focus-within:top-1
              ${form.password == '' ? ' left-5 top-5' : ' left-2 top-1'}`}
                >
                  {!isNaN(parseInt(path)) ? 'User Password' : "Your Password"}
                </span>
              </label>
            </div>
          }
          {/* user role */}
          {(path == 'add' || !isNaN(parseInt(path))) &&

            <div className="flex bg-white border border-gray-100 mb-3">
              <div className=" w-14 h-14 grid place-items-center">
                <BriefcaseIcon className=" w-5 h-5 text-zinc-700" />
              </div>
              <label className='relative group cursor-pointer pr-4 flex-1'>
                <select
                  name="role"
                  id="role"
                  value={form.role}
                  onChange={(e) => { handleChange(e) }}
                  className='h-14 px-4 pt-4 text-sm outline-none
                text-zinc-600 placeholder-gray-300 duration-200
                  placeholder-opacity-0 transition bg-white
                  group/item w-full'
                >
                  <option value={'1995'}>Admin</option>
                  <option value={'1996'}>Writer</option>
                  <option value={'1999'}>Product Manger</option>
                  <option value={'2001'}>user</option>
                </select>
                <span
                  className={`text-sm text-zinc-600 bg-white rounded 
                  absolute px-1 transition-all duration-300 input-text
                  group-focus-within:left-2 group-focus-within:top-1
                  left-2 top-1`}
                >
                  User Role
                </span>
              </label>
            </div>
          }

          {/* submit */}
          <Button
            className=" bg-[#5fd0f3] rounded-md my-3 capitalize"
            variant="contained"
            type="submit"
          >
            {path === 'register'
              ? 'Sign Up'
              : path === 'login'
                ? 'Log in'
                : path === 'add'
                  ? <div className="flex items-center gap-2">
                  <UserPlusIcon className="w-5 h-5" /> <div className="mt-1"> Add User </div>
                  </div>
                  : 'Save'}

          </Button>
          {
            path == 'register' ?
              (<div className=" text-zinc-700 text-center">
                Already have an account? <Link className=" text-[#5fd0f3]" to={'/login'}>Sign in</Link>
              </div>)
              : path == 'login' ?
                (
                  (<div className=" text-zinc-700 text-center">
                    Don&#039;t have an account? <Link className=" text-[#5fd0f3]" to={'/register'}>Sign up</Link>
                  </div>)
                ) : null
          }
        </form>
      </div>

    </>

  );
}

Form.propTypes = {
  className: PropType.string,
  setLoading: PropType.func,
  detailsEditable: PropType.object,
}