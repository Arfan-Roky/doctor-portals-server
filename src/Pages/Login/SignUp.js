import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../.firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import { useUpdateProfile } from 'react-firebase-hooks/auth';

const SignUp = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let signInError;

  if (googleUser || user) {
    navigate(from, {replace:true});
  }
  if (googleError || error || updateError) {
    signInError = (
      <p className="text-red-500 ">
        <small>
          {error?.message || googleError?.message || updateError.message}
        </small>
      </p>
    );
  }

  if (googleLoading || loading || updating) {
    return <Spinner></Spinner>;
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const onSubmit = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name });
    console.log('update done');
    navigate('/appointment')

    data.target.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96  shadow-xl text-gray-800">
        <div className="card-body">
          <h2 className="text-center">Sign Up</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label ">
                <span className="label-text text-gray-700">Name</span>
              </label>
              <input
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is Required',
                  },
                  pattern: {
                    value: 5,
                    message: 'Must have a 5 characters or longer',
                  },
                })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered bg-transparent w-full max-w-xs text-gray-700"
              />
              <label className="label">
                {errors.name?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
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
                {errors.email?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
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
                    value: 6,
                    message: 'Must be 6 characters or longer',
                  },
                })}
                type="password"
                placeholder="Your Password"
                className="input input-bordered bg-transparent w-full max-w-xs text-gray-700"
              />
              <label className="label">
                {errors.password?.type === 'required' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {signInError}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p>
            <small>
              Already Have An Account?{' '}
              <Link to="/login" className="text-cyan-500">
                Please Login
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          <button onClick={handleGoogleSignIn} className="btn btn-outline">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
