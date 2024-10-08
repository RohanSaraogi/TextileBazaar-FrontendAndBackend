import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Lottie from "react-lottie";
import login_animation from "../../Assests/animations/login.json"
const Singup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`${server}/user/create-user`, { name, email, password, avatar })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login_animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    // <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //       Register as a new user
    //     </h2>
    //   </div>
    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          
    //     </div>
    //   </div>
    // </div>
    <>
    <Header />
      <div className="flex flex-col md:flex-row  items-center md:justify-around">
        {/*  animation */}
        <div className="md:w-[40%] md:h-[75vh] md:mx-5 mt-2 md:mt-0 px-1 md:bg-gradient-to-r from-[#153448] to-[#3C5B6F] flex flex-col justify-center rounded-lg">
          {/* {loginAnimations &&
            loginAnimations.map((i) => {
              return (
                <div
                  className="bg-[#153448] shadow-lg hover:shadow-2xl cursor-pointer duration-500 rounded-lg p-5 flex flex-col justify-between items-center hover:scale-105"
                  // key={i.id}
                  // onClick={() => handleSubmit(i)}
                >
                  <img src={i.animation_url} className="w-[100%]" alt="" />
                </div>
              );
            })} */}
            <Lottie options={defaultOptions} width={300} height={300} />
        </div>

        {/* Login Form */}
        <div className=" bg-gray-50 flex flex-col mt-2 py-10 sm:px-6 lg:px-8 md:w-[60%]">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Login to your account
            </h2> */}
            <h2 className="mt-0 text-center text-[35px] font-700 font-Jakarta text-[#153448]">
              Register as a New User!
            </h2>
            <h2 className="mt-1 text-center text-[15px] font-700 font-Jakarta text-[#153448]">
              Welcome aboard, Enter you Email, Password and a Profile Image!
            </h2>
          </div>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
              </Link>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Singup;
