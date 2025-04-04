import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assests/images/logo_plans.png";
import bannerImg1 from "../../../Assests/images/Bannerimg/11.webp";
import bannerImg2 from "../../../Assests/images/Bannerimg/22.webp";
import bannerImg3 from "../../../Assests/images/Bannerimg/33.webp";
import bannerImg4 from "../../../Assests/images/Bannerimg/44.webp";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
{
  /* <Splide
  options={{
    perPage: 1,
    autoplay: true,
    speed: 1000,
    rewind: true,
    rewindByDrag: true,
  }}
> */
}
{
  /* {heroContent.map((hero) => (
    <SplideSlide
      key={hero.id}
      className="flex flex-col md:flex-row items-start md:items-center xlg:items-center justify-center md:justify-start md:px-8 md:py-10 rounded-xl h-[90vh] md:h-[85vh] "
    >
      <div className="flex flex-col items-start ml-[30px] mr-[30px] md:ml-10 w-[100%] md:w-[65%] xlg:w-[90%]">
        <p className="text-[#DFD0B8] mb-4 text-[11vw] md:text-[4vw] xlg:text-[4vw] leading-[6vh] md:leading-[10vh] xlg:leading-[14vh] font-1200 md:font-bold tracking-widest font-Baskerville w-[90%] xlg:w-[80%]">
          {hero.title}
        </p>
        <div className="flex flex-col">
          {/* <div className="flex space-x-1">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i} className={`star ${i < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}>&#9733;</span>
                        ))}
                      </div> */
}
//         <p className="font-bold md:font-1200 text-[4vw] tracking-widest md:text-[2.5vw] mt-1 text-[#948979] font-Zolina">
//           {hero.subtitle}
//         </p>
//         <p className="text-[3vw] tracking-widest md:text-[1.5vw] mt-[5px] md:mt-0 mb-[2vh] text-[#948979] font-Poppins font-bold md:font-600">
//           {hero.subTitleUnder}
//         </p>
//       </div>
//       <div className="border border-dashed border-[#A9A9AA] tracking-widest mb-4 w-[80%] md:w-[100%]" />

//       <div className="flex flex-col 1300px:flex-row gap-2 md:gap-5 pt-[2vh] md:pt-0 md:mt-[2vh]">
//         <div className="w-[80%] md:w-[100%] pb-[20px] md:pb-0 md:mb-[10px] md:mr-[50px]">
//           <img src={logo} alt="golden color logo" />
//         </div>
//         <div className="flex flex-row items-center gap-[5px] md:gap-1">
//           <Link to="/products">
//             <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#153448] transition duration-300 ease-out rounded-[50px] md:w-[200px] md:h-[60px] w-[40vw] h-[40px] group bg-[#DFD0B8] border border-[#DFD0B8]">
//               <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#3C5B6F] group-hover:translate-x-0 ease">
//                 <svg
//                   class="w-6 h-6"
//                   fill="none"
//                   stroke="#DFD0B8"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   ></path>
//                 </svg>
//               </span>
//               <p className="text-[15px] md:text-[20px] trackind-wide flex items-center justify-center w-full h-full text-[#3C5B6F] transition-all duration-300 transform group-hover:translate-x-full ease">
//                 View Plans
//               </p>
//             </div>
//           </Link>
//           <Link to="/products">
//             <div className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-[#153448] transition duration-300 ease-out rounded-[50px] md:w-[200px] md:h-[60px] w-[40vw] h-[40px] group bg-[#3C5B6F] border border-[#DFD0B8] hover:scale-105 md:hover:scale-100">
//               <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#DFD0B8] group-hover:translate-x-0 ease">
//                 <svg
//                   class="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   ></path>
//                 </svg>
//               </span>
//               <p className="text-[15px] md:text-[20px] trackind-wide flex items-center justify-center w-full h-full text-[#DFD0B8] transition-all duration-300 transform group-hover:translate-x-full ease ">
//                 Buy Yarns
//               </p>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//     <div className="my-[30px] max-w-[100%] mx-auto md:flex md:items-center justify-between p-1 bg-gradient-to-r from-[#3C5B6F] to-[#153448] rounded-full">
//       <img
//         className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] xlg:w-[600px] xlg:h-[600px] rounded-full object-fill mx-auto"
//         src={hero.image}
//         alt=""
//       />
//     </div>
//   </SplideSlide>
// ))} */}
// </Splide>;

function Button({ children, className }) {
  return (
    <div className={`justify-center px-5 py-1.5 ${className}`}>{children}</div>
  );
}

const Hero1 = () => {
  const heroContent = [
    {
      id: 1,
      title: "Mountains of fabric, oceans of potential.",
      subtitle: "Deadstock? Not a problem. ",
      subTitleUnder: "Let Textile Bazaar be your solution.",
      buttonText: "Register Now",
      image: `${bannerImg1}`,
    },
    {
      id: 2,
      title: "Hidden gems await Discovery.",
      subtitle: "Discover Hidden Gems.",
      subTitleUnder: "Find unique fabrics and materials at unbeatable prices.",
      buttonText: "Register Now",
      image: `${bannerImg2}`,
    },
    {
      id: 3,
      title: "Turn your deadstocks into profits.",
      subtitle: "Reduce Waste, Increase Profits.",
      subTitleUnder: "Turn Deadstock into cash and help planet.",
      buttonText: "Register Now",
      image: `${bannerImg3}`,
    },
    {
      id: 4,
      title: "Join Textile Bazaar Revolution.",
      subtitle: "Yarn, Machineries, Traders.",
      subTitleUnder: "Your one stop Solution for every Textile need.",
      buttonText: "Register Now",
      image: `${bannerImg4}`,
    },
    {
      id: 5,
      title: "Connect with Global Textile Community.",
      subtitle: "Connect, Collaborate and Trade.",
      subTitleUnder: "Join the Textile Bazaar Revolution.",
      buttonText: "Register Now",
      image: `${bannerImg1}`,
    },
  ];
  useEffect(() => {
    const applyPaginationStyles = () => {
      const paginationItems = document.querySelectorAll(
        ".splide__pagination__page"
      );
      paginationItems.forEach((item) => {
        item.style.backgroundColor = "#DFD0B8"; // Tailwind's gray-400 color
      });
    };

    // Initial style application and observing changes in active class
    applyPaginationStyles();
    const observer = new MutationObserver(applyPaginationStyles);
    const pagination = document.querySelector(".splide__pagination");
    if (pagination) {
      observer.observe(pagination, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  //   }, 5000); // Change slide every 5 seconds
  //   return () => clearInterval(intervalId);
  // }, [heroContent.length]);

  return (
    <section className="bg-gradient-to-r from-[#153448] to-[#3C5B6F] max-w-[100%]">
      {/* <div className="text-center mb-8 mt-4">
            <h2 className="capitalize font-bold text-2xl md:text-3xl text-[#153448] mb-2 mt-4">Client Testimonials</h2>
            <p className="text-gray-600">What members are saying.</p>
          </div> */}

      <div className="animate-appear relative p-1 md:p-4 user-select-none max-w-[100%] md:mx-2">
        {/* <blockquote className="absolute inset-0 flex justify-between items-center pointer-events-none">
              <img className="w-8 h-8 opacity-25 absolute top-[-1rem] left-[-1rem] bg-black absolute inset-0"  src={Quote} alt="quote" />
              <img className="w-8 h-8 opacity-25 absolute bottom-[-3rem] right-[-0.5rem] transform rotate-180 bg-black" src={Quote} alt="quote" />
            </blockquote> */}

        <div className="flex flex-col md:flex-row items-start md:items-center xlg:items-center justify-center md:justify-start md:px-8 md:py-10 rounded-xl h-[90vh] md:h-[85vh] ">
          <div className="flex flex-col items-start ml-[10px]  md:ml-10 max-w-[100%] md:w-[65%] xlg:w-[90%]">
            <p className="text-[#DFD0B8] mb-4 text-[11vw] md:text-[4vw] xlg:text-[4vw] leading-[6vh] md:leading-[10vh] xlg:leading-[14vh] font-1200 md:font-bold tracking-widest font-Baskerville w-[100%] xlg:w-[80%]">
              {heroContent[currentIndex].title}
            </p>
              {/* <div className="border border-dashed border-[#A9A9AA] tracking-widest w-[80%] md:w-[80%]" /> */}
            <div className="flex flex-col">
              {/* <div className="flex space-x-1">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i} className={`star ${i < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}>&#9733;</span>
                        ))}
                      </div> */}
              <p className="font-bold md:font-1200 text-[4vw] tracking-widest md:text-[2.5vw] mt-1 text-[#948979] font-Zolina">
                {heroContent[currentIndex].subtitle}
              </p>
              <p className="text-[3vw] tracking-widest md:text-[1.5vw] mt-[5px] md:mt-0 mb-[2vh] text-[#948979] font-Poppins font-bold md:font-600">
                {heroContent[currentIndex].subTitleUnder}
              </p>
            </div>
            <div className="border border-dashed border-[#A9A9AA] tracking-widest mb-4 w-[80%] md:w-[80%]" />


            <div className="flex flex-col 1300px:flex-row gap-2 md:gap-5 pt-[2vh] md:pt-0 md:mt-[2vh]">
              <div className="w-[80%] md:w-[100%] pb-[20px] md:pb-0 md:mb-[10px] md:mr-[50px]">
                <img src={logo} alt="golden color logo" />
              </div>
              <div className="flex flex-row items-center gap-[5px] md:gap-1">
                <Link to="/products">
                  <div className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-[#153448] transition duration-300 ease-out rounded-[50px] md:w-[200px] md:h-[60px] w-[40vw] h-[40px] group bg-[#DFD0B8] border border-[#DFD0B8]">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#3C5B6F] group-hover:translate-x-0 ease">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="#DFD0B8"
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
                    <p className="text-[15px] md:text-[20px] trackind-wide flex items-center justify-center w-full h-full text-[#3C5B6F] transition-all duration-300 transform group-hover:translate-x-full ease">
                      View Plans
                    </p>
                  </div>
                </Link>
                <Link to="/products">
                  <div className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-[#153448] transition duration-300 ease-out rounded-[50px] md:w-[200px] md:h-[60px] w-[40vw] h-[40px] group bg-[#3C5B6F] border border-[#DFD0B8] hover:scale-105 md:hover:scale-100">
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
                    <p className="text-[15px] md:text-[20px] trackind-wide flex items-center justify-center w-full h-full text-[#DFD0B8] transition-all duration-300 transform group-hover:translate-x-full ease ">
                      Buy Yarns
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="my-[30px] max-w-[100%] mx-auto md:flex md:items-center justify-between p-1 bg-gradient-to-r from-[#3C5B6F] to-[#153448] rounded-full">
            <img
              className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] xlg:w-[600px] xlg:h-[600px] rounded-full object-fill mx-auto"
              src={heroContent[currentIndex].image}
              alt=""
            />
          </div>
        </div>
        <div className="pagination flex justify-center mb-4">
          {heroContent.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-[#DFD0B8]" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero1;
// import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../../Assests/images/logo_plans.png";
// import bannerImg1 from "../../../Assests/images/Bannerimg/11.webp";
// import bannerImg2 from "../../../Assests/images/Bannerimg/22.webp";
// import bannerImg3 from "../../../Assests/images/Bannerimg/33.webp";
// import bannerImg4 from "../../../Assests/images/Bannerimg/44.webp";

// function Button({ children, className }) {
//   return <div className={`justify-center px-5 py-1.5 ${className}`}>{children}</div>;
// }

// const Hero1 = () => {
//   const heroContent = [
//     {
//       id: 1,
//       title: "Mountains of fabric, oceans of potential.",
//       subtitle: "Deadstock? Not a problem.",
//       subTitleUnder: "Let Textile Bazaar be your solution.",
//       buttonText: "Register Now",
//       image: `${bannerImg1}`,
//     },
//     {
//       id: 2,
//       title: "Hidden gems await Discovery.",
//       subtitle: "Discover Hidden Gems.",
//       subTitleUnder: "Find unique fabrics and materials at unbeatable prices.",
//       buttonText: "Register Now",
//       image: `${bannerImg2}`,
//     },
//     {
//       id: 3,
//       title: "Turn your deadstocks into profits.",
//       subtitle: "Reduce Waste, Increase Profits.",
//       subTitleUnder: "Turn Deadstock into cash and help planet.",
//       buttonText: "Register Now",
//       image: `${bannerImg3}`,
//     },
//     {
//       id: 4,
//       title: "Join Textile Bazaar Revolution.",
//       subtitle: "Yarn, Machineries, Traders.",
//       subTitleUnder: "Your one stop Solution for every Textile need.",
//       buttonText: "Register Now",
//       image: `${bannerImg4}`,
//     },
//     {
//       id: 5,
//       title: "Connect with Global Textile Community.",
//       subtitle: "Connect, Collaborate and Trade.",
//       subTitleUnder: "Join the Textile Bazaar Revolution.",
//       buttonText: "Register Now",
//       image: `${bannerImg1}`,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(intervalId);
//   }, [heroContent.length]);

//   return (
//     <section className="bg-gradient-to-r from-[#153448] to-[#3C5B6F] max-w-[100%]">
//       <div className="relative p-1 md:p-4 user-select-none max-w-[100%] md:mx-2">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start md:px-8 md:py-10 rounded-xl h-[90vh] md:h-[85vh]">
//           <div className="flex flex-col items-start ml-[30px] mr-[30px] md:ml-10 w-[100%] md:w-[65%]">
//             <p className="text-[#DFD0B8] mb-4 text-[11vw] md:text-[4vw] leading-[6vh] md:leading-[10vh] font-bold tracking-widest w-[90%]">
//               {heroContent[currentIndex].title}
//             </p>
//             <p className="font-bold text-[4vw] md:text-[2.5vw] mt-1 text-[#948979]">
//               {heroContent[currentIndex].subtitle}
//             </p>
//             <p className="text-[3vw] md:text-[1.5vw] mt-0 mb-[2vh] text-[#948979] font-bold">
//               {heroContent[currentIndex].subTitleUnder}
//             </p>
//             <div className="border border-dashed border-[#A9A9AA] tracking-widest mb-4 w-[80%] md:w-[100%]" />
//             <div className="flex flex-col md:flex-row gap-2 md:gap-5">
//               <img src={logo} alt="golden color logo" className="w-[80%] md:w-[100%] pb-[20px] md:pb-0" />
//               <Link to="/products" className="button-link">View Plans</Link>
//               <Link to="/products" className="button-link">Buy Yarns</Link>
//             </div>
//           </div>
//           <div className="my-[30px] max-w-[100%] mx-auto md:flex md:items-center justify-between p-1 bg-gradient-to-r from-[#3C5B6F] to-[#153448] rounded-full">
//             <img
//               className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full object-cover mx-auto"
//               src={heroContent[currentIndex].image}
//               alt={heroContent[currentIndex].title}
//             />
//           </div>
//         </div>
//         <div className="pagination flex justify-center mt-4">
//           {heroContent.map((_, index) => (
//             <button
//               key={index}
//               className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-[#DFD0B8]" : "bg-gray-400"}`}
//               onClick={() => setCurrentIndex(index)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero1;
