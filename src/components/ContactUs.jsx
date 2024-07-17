import React, { useState } from 'react';

function ContactUs() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try{

    const response = await fetch(`http://localhost:5000/api/form/contact`,{
        method:"POST",
        headers:{
        "Content-Type" :"application/json",

        },
        body:JSON.stringify(contact),
    });
    console.log("contact form",response);
    if(response.ok){
        setContact({
            email: "",
            password: "",
            message:""
        })
        alert("Message sent sucessfully");
        

    }
    console.log(response);

}catch(error){

    console.log("Problem in sending message" ,error)

}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            Thank you for visiting our website! If you have any questions or feedback, please
            feel free to reach out to us using the form below. We are here to help!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows="4"
                value={contact.message}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
