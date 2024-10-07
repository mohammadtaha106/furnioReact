import React, { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Account Created Successfully.', {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => {
          toast.dismiss();
          navigate('/');
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Account Creation Failed. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('Signed Up with Google Successfully.', {
          position: 'top-center',
          autoClose: 2000,
        });
        setTimeout(() => {
          toast.dismiss();
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        toast.error('Sign Up with Google Failed. Please try again.', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <section className="mt-16 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="w-full sm:max-w-md p-6 bg-white border rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-[#c28c2b]">Sign Up</h1> {/* Updated theme color */}
          </div>
          <form className="space-y-6" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#c28c2b]"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#c28c2b]"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#c28c2b] text-white font-medium rounded-lg p-3 hover:bg-[#a0751e] focus:outline-none focus:ring-2 focus:ring-[#c28c2b]"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="w-full bg-[#c28c2b] text-white font-medium rounded-lg p-3 mt-4 hover:bg-[#a0751e] focus:outline-none focus:ring-2 focus:ring-[#c28c2b]"
              onClick={handleSignInWithGoogle}
            >
              Sign up with Google
            </button>
          </form>
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{' '}
            <a href="/signin" className="text-[#c28c2b] hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default SignUp;
