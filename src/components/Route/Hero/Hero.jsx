// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import banner from "../../../Assests/images/banner.jpeg"

// const Hero = () => {
//   return (
//     <div
//       className={`relative min-h-[70vh] 800px:min-h-[80vh]  w-full bg-no-repeat ${styles.noramlFlex}`}

//     >
//       <div className="absolute inset-0 bg-center  bg-no-repeat bg-[#ECF7F1] opacity-50 left-1/2 transform -translate-x-1/2 w-full h-full 800px:h-[80vh] 800px:w-[80%]" style={{
//         backgroundImage:
//         `url(${banner})`,
//         backgroundSize: 'cover',
//         // opacity: 0.7,

//       }}></div>
//       <div className={`${styles.section} relative w-[90%] 800px:w-[60%]`}>
//         <h1
//           className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#000000] font-[700] capitalize`}
//         >
//           Get a Mystery  <br /> Yarn in Every Order!
//         </h1>
//         <p className="pt-5 text-[16px] font-[Poppins] font-[600] text-[#000000]">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br /> Beatae,
//           assumenda? Quisquam itaque <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
//         </p>
//         <Link to="/products" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//                  <span className="text-[#fff] font-[Poppins] text-[18px]">
//                     Shop Now
//                  </span>
//             </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner2 from "../../../Assests/images/banner2.png";
import banner5 from "../../../Assests/images/banner5.jpg";
import banner3 from "../../../Assests/images/banner3.gif";
import banner4 from "../../../Assests/images/banner4.png";
import hero1 from "../../../Assests/images/hero1.png";
import hero2 from "../../../Assests/images/hero2.png";
import hero3 from "../../../Assests/images/hero3.png";
import hero4 from "../../../Assests/images/hero4.png";
import hero5 from "../../../Assests/images/hero5.png";

function Button({ children, className }) {
  return (
    <div className={`justify-center px-5 py-1.5 ${className}`}>{children}</div>
  );
}

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    // `${banner4}`,
    // "https://cdn.builder.io/api/v1/image/assets/TEMP/41d188385bb5dba598c436769e7d4fef41673318bdc845409f0be4b9aab3f5bc?apiKey=32f77bb18c504c65be17d8ce7468b501&",
    // `${banner2}`,
    `${hero1}`,
    `${hero2}`,
    `${hero3}`,
    `${hero4}`,
    `${hero5}`,
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Function to change the image index after 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  const text = "TextileBazzar";

  return (
    <div className="px-1 md:p-10 bg-[#3C5B6F]">
    <section className="flex flex-col justify-center items-center self-stretch px-16 py-1 max-md:px-5 bg-contain bg-no-repeat bg-center h-[30vh] md:h-[80vh]" style={
      {
        backgroundImage: `url(${images[currentImageIndex]})`,
        // url(${banner5})
      }
    }>
      {/* <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
        {text.match(/./gu)?.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <h1 className="overflow-hidden text-2xl font-bold leading-6 text-black">
        {text.match(/./gu)?.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1> */}
      <div className="flex flex-row items-start mt-0 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full ">
        {/* <h1 className="text-7xl font-bold text-black max-md:max-w-full max-md:text-4xl overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 ">
          Get a Mystery Yarn in Every Order!
        </h1> */}
        {/* <div className="flex gap-3 mt-2 text-lg font-semibold"> */}
        {/* <Button className="text-teal-900 border-2 border-teal-900 justify-center border-solid rounded-[86px] max-md:px-5">
            <div className="justify-center px-3.5 py-2.5">
            View more
            </div>
          </Button> */}
        {/* </div> */}
        <div className="flex justify-center items-center w-full md:h-[78vh] min-md:m-10  px-16 py-8 mt-5 rounded-[38px] max-md:px-5 max-md:mt-10 max-md:max-w-full gap-2 ">
          {/* {" "} */}
          {/* <Link to="/products">
            <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#153448] transition duration-300 ease-out rounded-[50px] w-[150px] h-[60px] group bg-emerald-50 border border-[#DFD0B8]">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#DFD0B8] group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <h1 className=" flex items-center justify-center w-full h-full text-[#DFD0B8] transition-all duration-300 transform group-hover:translate-x-full ease">
                Buy Yarns
              </h1>
            </div>
          </Link> */}
          {/* <Link to="/products">
            <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#DFD0B8] transition duration-300 ease-out rounded-[50px] w-[150px] h-[60px] group bg-emerald-50 border-2 border-[#DFD0B8]">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#DFD0B8] group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <h1 className=" flex items-center justify-center w-full h-full text-[#DFD0B8] transition-all duration-300 transform group-hover:translate-x-full ease">
                View More
              </h1>
            </div>
          </Link> */}
          {/* <h1 className="text-7xl font-bold text-[#153448] max-md:max-w-full max-md:text-4xl tracking-wider border-r-4 border-r-white pr-5">
          Get A Mystery Yarn In Every Order!

        </h1> */}
        
          {/* <Link to="/products" className="inline-block">
           <div className="text-white bg-[#153448] rounded-[86px] max-md:px-5 justify-center px-5 py-1.5">
            <div className="justify-center px-3.5 py-2.5 bg-[#153448] backdrop-blur-[10px] rounded-[90px] w-[100px] ">
              Buy Yarns
            </div>
           </div>
         </Link> */}
          {/* <div className="text-white bg-[#DFD0B8] rounded-[86px] max-md:px-5 justify-center px-5 py-1.5 mx-2">
            <div className="justify-center px-2.5 py-2.5 bg-[#DFD0B8] backdrop-blur-[10px] rounded-[90px] w-[100px]">
              View More
            </div>
           </div> */}
          {/* <Button className="text-teal-900 border-2 border-teal-900 justify-center border-solid rounded-[86px] max-md:px-5 w-[100px]">
            <div className="justify-center px-3.5 py-2.5">
            View more
            </div>
          </Button> */}
          {/* <img
            loading="lazy"
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="w-full aspect-[1.56]  h-[78vh] md:h-[78vh] max-sm:h-[300px] min-md:m-10 object-contain"
          />{" "} */}
        </div>{" "}
      </div>
    </section>
    </div>
  );
};
//w-[1154px]
export default Hero;
