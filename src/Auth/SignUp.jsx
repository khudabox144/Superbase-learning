import { use, useState } from 'react';

import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../AuthProvider/Authcontext';

const Signup = () => {
  const {createUser}=use(Authcontext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error } = await createUser(email,password) ;
    if (error) setError(error.message);
    else navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
          Sign Up
        </button>
         <p className='text-center' >Already have account ? <Link to={'/auth/login'} className='text-blue-500 underline' >SignIn</Link> </p>
      </form>
      
    </div>
  );
};

export default Signup;
