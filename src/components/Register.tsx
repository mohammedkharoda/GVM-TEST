import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface FormData {
    email: string;
    password: string;
    name: string;
}

const RegisterForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        name:''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Registered please login to continue!');
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10">
            <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                required
                className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full max-w-md focus:outline-none focus:border-blue-500"
            />
            <input
                type="name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                required
                className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full max-w-md focus:outline-none focus:border-blue-500"
            />
            <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Password"
                required
                className="border border-gray-300 rounded-md px-3 py-2 mb-3 w-full max-w-md focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
                Register
            </button>
        </form>

    );
};

export default RegisterForm;
