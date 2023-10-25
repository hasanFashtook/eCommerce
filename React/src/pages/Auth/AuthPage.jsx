import { useLocation } from "react-router-dom";
import Form from "../../components/website/Form";
import { useEffect } from "react";
export default function AuthPage() {
    const path = useLocation().pathname.split('/').pop();
    useEffect(() => {

    }, [path])
    return (
        <div className='AuthPage relative bg-dashonicBackGround bg-center-top bg-cover h-screen'>
            <div className="over-lay z-10 absolute top-0 left-0 w-full h-full bg-white opacity-80 "></div>
            <div className="container z-20 absolute top-0 left-1/2 -translate-x-1/2 w-full h-full flex flex-col justify-center items-center ">
                <div className="logo mb-6 sm:mb-12">
                    <img src="/public/images/slogan.png" alt="dashonic" />
                </div>
                <div className="intro text-center">
                    <h5 className=" text-lg leading-5 font-semibold text-[#495057] mb-2">
                        {path === 'register' ? 'Register Account ' : 'Welcome Back !'}
                    </h5>
                    <p className=" text-sm mb-6 text-[#495057] capitalize -tracking-tighter">
                        {path === 'register' ? 'Get your free Dashonic account now.' : 'Sign in to continue to Dashonic.'}
                    </p>
                </div>
                <Form className={' shadow-none p-0'} />
            </div>
        </div>
    );
}
