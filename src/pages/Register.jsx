
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin/SocialLogin";
import logo from "../assets/LogoMakr-8qeBOH.png";

import log from '../assets/clip-uniting-the-world.png';
import { Helmet } from "react-helmet-async";



const Register = () => {

  const { createUser } = useAuth();
  const [ showPassword, setShowPassword ] = useState(false);
  const { register, handleSubmit, formState: { errors }, } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const from = "/";

  const onSubmit = (data) => {
    const { email, password, image} = data;


    // Password validation
    if (!/(?=.*[a-z])/.test(password) || !/(?=.*[A-Z])/.test(password) || password.length < 6) {
      toast.error('Password must contain at least 6 characters including at least one uppercase letter and one lowercase letter');
      return;
    }

      // Image URL validation
      const urlPattern = /^(https?):\/\/.*$/i;
      if (!urlPattern.test(image)) {
        toast.error('Please provide a valid image URL');
        return;
      }

    //create user and update profile
    createUser(email, password)
      .then(() => {
            toast.success('Registration successful');
            navigate(from);
          
      });
  };

  return (
    <>
    <Helmet>
      <title>
        WisdomForage|Register
      </title>

    </Helmet>
      
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center h-[500px] lg:w-[500px] lg:text-left">
            <img className='w-full h-full object-cover' src={log} alt="" />

          </div>
          <div>
         
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card flex-shrink-0 w-full border-2 border-primary max-w-sm shadow-2xl bg-base-100"
          >
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
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  {...register("image")}
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                <span className="absolute text-slate-500 top-14 right-6" 
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn bg-primary text-white">Register</button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin></SocialLogin>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;