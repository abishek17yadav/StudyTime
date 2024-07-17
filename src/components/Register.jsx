import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try{

    const response = await fetch(`http://localhost:5000/api/auth/register`,{
        method:"POST",
        headers:{
        "Content-Type" :"application/json",

        },
        body:JSON.stringify(user),
    })
    if(response.ok){
        setUser({
            username: "",
            email: "",
            phone: "",
            password: ""
        })
    navigate('/login');

    }
    console.log(response);

}catch(error){

    console.log("register problem" ,error)

}
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4 w-96">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone no"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-36 h-12 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Now
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-800">Go back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
