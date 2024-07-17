import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
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

    const response = await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
        "Content-Type" :"application/json",

        },
        body:JSON.stringify(user),
    });
    console.log("Login form",response);
    if(response.ok){
        setUser({
            email: "",
            password: ""
        })
        
    navigate('/');

    }
    else{
        alert("Invalid credientials!")
        console.log("Invalid crediantials")
    }
    console.log(response);

}catch(error){

    console.log("register problem" ,error)

}
  };
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="bg-white p-12 rounded shadow-md w-[30rem] h-[30rem] flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Login Now
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link to="/register" className="text-sm text-indigo-600 hover:text-indigo-800">Register Now</Link>
          </div>
          <div className="mt-2 text-center">
            <Link to="/" className="text-sm text-indigo-600 hover:text-indigo-800">Go back to Dashboard</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
