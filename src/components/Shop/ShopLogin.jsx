import { React, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import Lottie from "react-lottie";
import login_animation from "../../Assests/animations/login.json"

const ShopLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/shop/login-shop`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/dashboard");
        window.location.reload(true); 
      })
      .catch((err) => {
        toast.error(err.response.data.message);
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
    //       Login to your shop
    //     </h2>
    //   </div>
    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6" `onSubmit={handleSubmit}`>
    //         <div>
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Email address
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               type="email"
    //               name="email"
    //               autoComplete="email"
    //               required
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="password"
    //             className="block text-sm font-medium text-gray-700"
    //           >
    //             Password
    //           </label>
    //           <div className="mt-1 relative">
    //             <input
    //               type={visible ? "text" : "password"}
    //               name="password"
    //               autoComplete="current-password"
    //               required
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //             />
    //             {visible ? (
    //               <AiOutlineEye
    //                 className="absolute right-2 top-2 cursor-pointer"
    //                 size={25}
    //                 onClick={() => setVisible(false)}
    //               />
    //             ) : (
    //               <AiOutlineEyeInvisible
    //                 className="absolute right-2 top-2 cursor-pointer"
    //                 size={25}
    //                 onClick={() => setVisible(true)}
    //               />
    //             )}
    //           </div>
    //         </div>
    //         <div className={`${styles.noramlFlex} justify-between`}>
    //           <div className={`${styles.noramlFlex}`}>
    //             <input
    //               type="checkbox"
    //               name="remember-me"
    //               id="remember-me"
    //               className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    //             />
    //             <label
    //               htmlFor="remember-me"
    //               className="ml-2 block text-sm text-gray-900"
    //             >
    //               Remember me
    //             </label>
    //           </div>
    //           <div className="text-sm">
    //             <a
    //               href=".forgot-password"
    //               className="font-medium text-blue-600 hover:text-blue-500"
    //             >
    //               Forgot your password?
    //             </a>
    //           </div>
    //         </div>
    //         <div>
    //           <button
    //             type="submit"
    //             className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
    //           >
    //             Submit
    //           </button>
    //         </div>
    //         <div className={`${styles.noramlFlex} w-full`}>
    //           <h4>Not have any account?</h4>
    //           <Link to="/shop-create" className="text-blue-600 pl-2">
    //             Sign Up
    //           </Link>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
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
              Login to your Shop!
            </h2>
            <h2 className="mt-1 text-center text-[15px] font-700 font-Jakarta text-[#153448]">
              Enter your email and password to sign in
            </h2>
          </div>
          <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" py-8 px-4  sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#948979] "
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
                      className="appearance-none block w-full px-3 py-2 border border-[1px] border-[#948979]  rounded-[30px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-[#948979]"
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
                      // className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      className="appearance-none block w-full px-3 py-2 border border-[1px] border-[#948979]  rounded-[30px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                    />
                    {visible ? (
                      <AiOutlineEye
                        className="absolute text-[#948979] right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(false)}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        className="absolute text-[#948979] right-2 top-2 cursor-pointer"
                        size={25}
                        onClick={() => setVisible(true)}
                      />
                    )}
                  </div>
                </div>
                <div className={`${styles.noramlFlex} justify-between`}>
                  {/* Remember Me */}
                  <div className={`${styles.noramlFlex}`}>
                    {/* <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label> */}
                    <label htmlFor="remember-me" className=" relative inline-flex items-center cursor-pointer">
                      <input name="remember-me" id="remember-me" type="checkbox" value="" className="sr-only peer"/>
                      <div className="group peer ring-0  bg-gradient-to-bl from-white via-white to-white    rounded-full outline-none duration-1000 after:duration-300 w-10 h-5  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#948979,_#948979,_#ffffff,_#948979,_#ffffff,_#948979)]  after:outline-none after:h-3 after:w-3 after:top-1 after:left-1   peer-checked:after:translate-x-5 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-[#948979] peer-checked:to-[#948979] border-[1px] border-[#948979]">

                      </div>
                      <div className="ml-2 text-[13px] text-[#948979]">Remember Me</div>
                      
                    </label>

                  </div>
                  {/* Forgot Password */}
                  <div className="text-sm ml-2">
                    <a
                      href=".forgot-password"
                      className="font-medium text-[#948979] hover:font-bold"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full h-[40px] flex justify-center items-center py-2 px-4 border border-transparent text-sm rounded-md text-[#ffffff] bg-[#153448]"
                  >
                    SIGN IN
                  </button>
                </div>
                <div className={`${styles.noramlFlex} w-full`}>
                  <h4>Not have any account?</h4>
                  <Link to="/sign-up" className="text-[#3C5B6F  ] pl-2">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShopLogin;
