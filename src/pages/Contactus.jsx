import React, { useState } from "react";
import { server } from "../server";
import { toast } from "react-toastify";
import axios from "axios";
// import contactus from "../Assests/images/contact.jpg";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import phone from "../Assests/images/phone.png";
import emailImg from "../Assests/images/email.png";
import location from "../Assests/images/location.png";
import insta from "../Assests/images/insta.png";
import twitter from "../Assests/images/twitter.png";
import discord from "../Assests/images/discord.png";
import Lottie from "react-lottie";
import contact_us from "../Assests/animations/contactUs1.json"
export function ContactSection14() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the inquiry to the server endpoint
    const response = await axios.post(`${server}/mail/contactus`, formData);

    if (response.status === 201) {
      // Inquiry sent successfully
      toast.success("Messeage sent successfully!");
    } else {
      // Failed to send inquiry
      toast.error("Failed to send messeage. Please try again.");
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contact_us,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Header activeHeading={4} />
      <section className="px-2 py-8 min-lg:px-8 lg:py-10 overflow-hidden font-Poppins">
        <div className="container mx-auto ">
          {/* <h5 className="text-blue-gray mb-4 text-base lg:text-2xl text-center">
            Customer Care
          </h5>
          <h1 className="text-blue-gray mb-4 text-3xl lg:text-5xl text-center">
            We're Here to Help
          </h1>
          <p className="text-lg text-gray-500 mb-10 lg:mb-20 mx-auto max-w-3xl text-center">
            Whether it's a question about our services, a request for technical
            assistance, or suggestions for improvement, our team is eager to
            hear from you.
          </p> */}
          <div className="flex flex-col md:flex-row  items-center md:justify-around">

            <div className=" bg-gradient-to-r from-[#153448] to-[#3C5B6F] rounded-xl flex flex-col justify-start tracking-wide ">

              <div className="ml-[20px] md:ml-[50px] mt-[50px]">
                <div className="text-[#FFFFFF] font-medium text-[30px] font-poppins justify-start">
                  We are listening
                </div>
                <div className="text-[#C9C9C9] font-400 text-[20px] font-poppins mt-3  justify-start">
                  24/7 here to help
                </div>
                <div className=""></div>
              </div>

              {/* Contact Details phone email location */}
              <div className="ml-[20px] md:ml-[50px] mt-[120px]">
                <div className="flex flex-row items-center mb-[30px]">
                  <img src={phone} alt="" className="w-[23px] h-[23px]" />

                  <div className="text-[#FFFFFF] font-400 text-[18px] md:text-[20px] font-poppins ml-4">
                    +91 989898000
                  </div>
                </div>
                <div className="flex flex-row items-center mb-[30px]">
                  <img src={emailImg} alt="" className="w-[23px] h-[23px]" />

                  <div className="text-[#FFFFFF] font-400 text-[18px] md:text-[20px] font-poppins ml-4">
                    TextileBazaar.admin@gmail.com
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <img src={location} alt="" className="w-[23px] h-[23px]" />

                  <div className="text-[#FFFFFF] font-400 text-[18px] md:text-[20px] font-poppins ml-4">
                    Surat, Gujarat
                  </div>
                </div>
              </div>
              
              {/* socail handle logo */}
              <div className="flex flex-row items-end ml-[20px] md:ml-[50px]  mb-[50px] ">
                <img src={insta} alt="" className="w-[40px] h-[40px] mr-[10px]"/>
                <img src={discord} alt="" className="w-[40px] h-[40px] mr-[10px]"/>
                <img src={twitter} alt="" className="w-[40px] h-[40px] mr-[60px]"/>
                <div className="ml-[-100px]">
                  <Lottie options={defaultOptions} width={300} height={300} />
                </div>
              </div>
            </div>
            <div className="">
            <form
              action="#"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 lg:max-w-lg mt-[50px]"
            >
              <p className="text-left text-[23px] font-semibold text-[#153448]">
                Select Options for Business Engagement!
              </p>

              <div className="md:grid md:grid-cols-2 md:gap-4 w-full md:mb-[10px]">
                {/* First name */}
                <div>
                  <p
                    className="mb-2 text-left font-bold text-[#948979] text-sm tracking-wide"
                    htmlFor="firstName"
                  >
                    First Name
                  </p>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="!w-[95%] mb-1 800px:mb-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-[#948979] rounded-[30px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                    placeholder="First Name"
                  />
                </div>
                {/* Last Name */}
                <div>
                  <p
                    htmlFor="lastName"
                    className="mb-2 text-left font-bold text-[#948979] text-sm tracking-wide"
                  >
                    Last Name
                  </p>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="!w-[95%] mb-1 800px:mb-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-[#948979] rounded-[30px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* email */}
              <div className="md:mb-[10px]">
                <p
                  htmlFor="email"
                  className="mb-2 text-left font-bold text-[#948979] text-sm tracking-wide"
                >
                  Email
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="!w-[95%] mb-1 800px:mb-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-[#948979] rounded-[30px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                  placeholder="name@email.com"
                />
              </div>
              {/* Message */}
              <div className="md:mb-[10px]">
                <p
                  htmlFor="message"
                  className="mb-2 text-left font-bold text-[#948979] text-sm tracking-wide"
                >
                  Message
                </p>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="!w-[95%] mb-1 800px:mb-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-[#948979] rounded-[10px] shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-2"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="group relative w-[95%] h-[40px] flex justify-center items-center py-2 px-4 border border-transparent text-sm rounded-md text-[#ffffff] bg-[#153448] font-medium hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:border-b-2 border-[#DFD0B8] hover:underline"
              >
                Send message
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactSection14;
