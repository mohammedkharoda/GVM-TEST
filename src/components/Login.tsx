import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Logged in successfully!');
        navigate('/');
    };

    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className='border border-gray-300 rounded-md px-3 py-2 mb-3 w-full max-w-md focus:outline-none focus:border-blue-500'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className='border border-gray-300 rounded-md px-3 py-2 mb-3 w-full max-w-md focus:outline-none focus:border-blue-500'
                />
                <button
                    type="submit"
                    className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
                >
                    Login
                </button>
            </form>
        </div>

    );
};

export default LoginForm;
