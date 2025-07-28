import { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Authcontext } from '../AuthProvider/Authcontext';

const SignIn = () => {
  const {Loginuser}=use(Authcontext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await Loginuser(email,password);
    if (error) setError(error.message);
    else navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
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
          Login
        </button>
        <p className='text-center' >Haven't any account ? <Link to={'/auth/register'} className='text-blue-500 underline' >SignUp</Link> </p>
      </form>
    </div>
  );
};

export default SignIn;
