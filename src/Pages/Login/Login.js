import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import { useForm } from 'react-hook-form';
import Spinner from '../Shared/Spinner/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;

 useEffect(() => {
  if (googleUser || user) {
    navigate(from, {replace:true});
  }
 }, [googleError, user, from, navigate])

  if(googleError || error){
    signInError = <p className='text-red-500 '><small>{error?.message || googleError?.message}</small></p>
  }

  if(googleLoading || loading){
    return  <Spinner></Spinner>
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const onSubmit = (data) => {
    const email = data?.email;
    const password  = data?.password;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96  shadow-xl text-gray-800">
        <div className="card-body">
          <h2 className="text-center">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label ">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is Required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email',
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered bg-transparent w-full max-w-xs text-gray-700"
              />
              <label className="label">
              {errors.email?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' &&   <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label ">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is Required',
                  },
                  minLength: {
                    value:6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered bg-transparent w-full max-w-xs text-gray-700"
              />
              <label className="label">
              {errors.password?.type === 'required' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' &&   <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {signInError}
              </label>
            </div>

            <input className='btn w-full max-w-xs' type="submit" value='Login' />
          </form>
          <p><small>New to Doctors Portal? <Link to='/signup' className='text-cyan-500'> Create New Account</Link></small></p>

          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
