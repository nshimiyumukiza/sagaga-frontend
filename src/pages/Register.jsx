import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   const responsive = await axios.post("http://localhost:3000/users",formData)
    console.log(responsive);
    alert(responsive.data.message)
  };
  return (
    <div className="bg-gray-100 flex justify-center">
      <div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-200 mb-4 px-3"
          action="submit"
        >
          <label className="flex flex-col">
            <span>Name</span>
            <input
              className="border rounded-md outline-none px-3 py-1.5 bg-gray-50"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              placeholder="Enter Name"
            />
          </label>
          <label className="flex flex-col">
            <span>Email</span>
            <input
              className="border rounded-md outline-none px-3 py-1.5 bg-gray-50"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </label>
          <label className="flex flex-col">
            <span>Password</span>
            <input
              className="border rounded-md outline-none px-3 py-1.5 bg-gray-50"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </label>
          <div className="flex justify-center">
            <Link
              type="submit"
              onClick={handleSubmit}
              className="w-full text-center text-blue-600 px-2 py-1 bg-green-400 hover:text-white"
            >
              Submit
            </Link>
          </div>
        </form>
      </div>
      <h1></h1>
    </div>
  );
};

export default Register;
