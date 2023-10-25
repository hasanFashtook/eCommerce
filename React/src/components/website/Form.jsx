import { useEffect, useState } from "react";
import PropType from 'prop-types'
import { Button } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import {
    LockClosedIcon,
    BriefcaseIcon,
    UserIcon,
    EnvelopeIcon,
    UserPlusIcon
} from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from "react-redux";
import { authRegister } from "../../Store/Actions/AuthRegister";
import { authLogin } from "../../Store/Actions/AuthLogin";
import { addUser } from "../../Store/Actions/addUser";
import { editUser } from "../../Store/Actions/editUser";


export default function Form({ className, detailsEditable }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // we take the last name of current path to determine the type of operation
    // that Form Component operate on..
    const path = useLocation().pathname.split('/').pop();

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

    const {
        loading,
        success,
        error,
        userAdded,
        userInfo
    } = useSelector(
        (state) => state.users
    );

    useEffect(() => {
        if (path == 'login' || path == 'register') {
            if (success) {
                const { role } = userInfo;
                let pathRedirect =
                    // when registring or logining
                    role ? (role.length == 4 ? '/' : '/dashboard/users') : '/'
                navigate(pathRedirect);
            }
        } else {
            if (userAdded) {
                navigate('/dashboard/users')
            }
        }
    }, [navigate, userInfo, userAdded]);



    // store the new data in form when changed by users
    function handleChange(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    // send data on submit
    function handleSubmit(e) {
        e.preventDefault();

        // register operation
        if (path === 'register' && form.name != '' && emailPattern.test(form.email) && form.password.length >= 8) {
            dispatch(authRegister(form))
        }
        // login operation
        else if (path === 'login' && emailPattern.test(form.email) && form.password.length >= 8) {
            dispatch(authLogin(form))
        }
        // addition operation
        else if (path === 'add' && form.name != '' && emailPattern.test(form.email) && form.role != '' && form.password.length >= 8) {
            dispatch(addUser(form))
        }
        // modification operation
        else if (!isNaN(parseInt(path)) && form.name != '' && emailPattern.test(form.email)) {
            dispatch(editUser({ form, path }))
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
                        // in order to prevent user modifing the details until fetching data
                        disabled={loading}
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
