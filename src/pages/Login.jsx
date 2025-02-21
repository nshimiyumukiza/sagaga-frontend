import axios from "axios";
import { useState } from "react";

function Login() {
  const[formDta,setFormDtata] = useState({
    email:"",
    password:"",
  })
  
  const handleChange =(e) => {
    const{name,value} = e.target;
    setFormDtata({...formDta,[name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const responsive = await axios.post("http://localhost:3000/users/login",formDta)
    alert(responsive.data.message)
    console.log(formDta);
  }
  return (
    <div className="bg-gray-100 flex justify-center">
      <h1 className="text-2xl text-center font-bold text-blue-700 p-5 bg-gray-100">
        Login
      </h1>
      <div className="flex justify-center ">
        <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-gray-100" action="submit">
          <label className="flex flex-col">
            <span>Email</span>
            <input
              className="border rounded-md outline-none bg-gray-100 px-3 py-1.5"
              type="email"
              name="email"
              value={formDta.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </label>
          <label className="flex flex-col">
            <span>Password</span>
            <input
              className="border rounded-md outline-none bg-gray-100 px-3 py-1.5"
              type="password"
              name="password"
              value={formDta.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </label>
          <button onClick={handleSubmit} className="border rounded-md px-3 py-1.5 bg-black text-white hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
