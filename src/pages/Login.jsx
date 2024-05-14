import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../hooks/useAuth';
import SocialLogin from '../components/SocialLogin/SocialLogin';
import logo from "../assets/LogoMakr-8qeBOH.png";

import log from '../assets/lounge-digital-data-protection.png';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { logInUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    //   // navigation systems
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        const { email, password } = data;

        // log in user
        logInUser(email, password)
            .then((result) => {
                // console.log(result.user);
                if (!result || !result.user) {
                    toast.error('Invalid email or password');
                }
                else {

                    setTimeout(() => {
                        toast.success('Log in Successful');
                    }, 2000)

                    navigate(location?.state ? location?.state : '/')





                }
            })
            .catch(error => {
                console.log(error.message)
                if (error.message === "Error (auth/invalid-login-credentials).") {
                    const errormessage = 'Invalid login credentials'
                    toast.error(errormessage)
                } else if (error.message === "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
                    const errmessage = 'Access to this account has been temporarily disabled due to many failed login attempts. You can try again later.'
                    toast.error(errmessage)
                } else {
                    toast.error(error.message)
                }
            })
    };


    return (
        <>
        <Helmet>
        <title>Wisdom Forge | Login</title>
       </Helmet>

            <div className="hero min-h-screen  lg:mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="h-[600px] w-[700px] lg:text-left rounded-xl p-6">
                        <img className='w-full h-full object-cover rounded-xl' src={log} alt="" />
                    </div>

                    <div className="card border-2 border-primary flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className='text-center flex justify-center mt-4'>
                            <NavLink to="/">
                                <div className="flex items-center gap-1">
                                    <img className="w-[50px]" src={logo} alt="" />
                                    <h1 className="lg:text-xl text-xs text-blue-950 font-extrabold">
                                        <span className="text-2xl">W</span>
                                        <span>isdom</span>
                                        <span className="text-2xl text-pretty text-blue-400">F</span>
                                        <span className="font-semibold text-pretty text-blue-400">orge</span>
                                    </h1>
                                </div>
                            </NavLink>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-red-500'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-500'>This field is required</span>}

                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn bg-primary text-white">Login</button>
                            </div>
                            <label className="label">
                                Need to sign up? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;