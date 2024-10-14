// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { brandingData, categoriesData } from "../../../static/data";
// import styles from "../../../styles/styles";

// const Categories = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className={`${styles.section} hidden sm:block`}>
//         <div
//           className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
//         >
//           {brandingData &&
//             brandingData.map((i, index) => (
//               <div className="flex items-start" key={index}>
//                 {i.icon}
//                 <div className="px-3">
//                   <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
//                   <p className="text-xs md:text-sm">{i.Description}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>

//       <div
//         className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
//         id="categories"
//       >
//         <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
//           {categoriesData &&
//             categoriesData.map((i) => {
//               const handleSubmit = (i) => {
//                 navigate(`/products?category=${i.title}`);
//               };
//               return (
//                 <div
//                   className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
//                   key={i.id}
//                   onClick={() => handleSubmit(i)}
//                 >
//                   <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
//                   <img
//                     src={i.image_Url}
//                     className="w-[120px] object-cover"
//                     alt=""
//                   />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Categories;

// Live Yarn Price Rate Code not categories

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDailyPrices } from "../../../redux/actions/dailyprice";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "../../../styles/styles";

//border-2 border-solid border-teal-900
// function ProductCard({ product }) {
//   const pric10 = product.price1.includes(":") && product.price1.split(":")[1];
//   const pric12 = product.price2.includes(":") && product.price2.split(":")[1];
//   const pric13 = product.price3.includes(":") && product.price3.split(":")[1];
//   const pric14 = product.price4.includes(":") && product.price4.split(":")[1];

//   const price1 = product.price1.includes(":") && product.price1.split(":")[0];
//   const price2 = product.price2.includes(":") && product.price2.split(":")[0];
//   const price3 = product.price3.includes(":") && product.price3.split(":")[0];
//   const price4 = product.price4.includes(":") && product.price4.split(":")[0];
//   return (
//     <div className="w-1/3 max-lg:w-1/2 p-2 max-md:w-full ">
//       <div className="flex flex-col h-full w-full p-2 bg-white shadow-lg  rounded-2xl">
//         <div className="flex flex-row md:flex-row">
//           <div className="w-full md:w-1/2">
//             <div className=" flex w-[70%] flex-row justify-center self-end p-1 mt-4 text-[15px] tracking-wide font-bold leading-5 text-center text-[#3C5B6F] capitalize whitespace-nowrap rounded-xl md:mt-0 ">
//               <div className="justify-center self-end p-2 whitespace-nowrap bg-red-700 rounded-3xl md:mt-0 mr-2 animate-pulse-fast"></div>
//               Live Rate
//             </div>
//             <img
//               src={product.image}
//               className="w-full aspect-[1.16] max-sm:h-[150px]"
//             />
//           </div>
//           <div className="flex flex-col justify-between w-full mt-4 ml-0 md:mt-0 md:w-1/2 md:ml-3">
//             <div className="flex flex-col">
//               <h2 className="mt-3 text-xl font-bold text-gray-900 md:mt-0">
//                 {product.name}
//               </h2>
//               <div className="flex gap-3 items-center">
//                 {/* Product Name */}

//                 <div className="rounded-md p-2">
//                   <div className="text-lg text-black font-semibold">
//                     {price1}
//                   </div>
//                   <div className="text-lg text-black font-semibold">
//                     {price2}
//                   </div>
//                   <div className="text-lg text-black font-semibold">
//                     {price3}
//                   </div>
//                   <div className="text-lg text-black font-semibold">
//                     {price4}
//                   </div>
//                 </div>

//                 <div className=" rounded-md p-2">
//                   {/* Price Card */}

//                   <div className="text-lg text-teal-900">₹{pric10}</div>
//                   <div className="text-lg text-teal-900">₹{pric12}</div>
//                   <div className="text-lg text-teal-900">₹{pric13}</div>
//                   <div className="text-lg text-teal-900">₹{pric14}</div>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="justify-center self-end p-2 mt-4 text-lg leading-5 text-center text-white capitalize whitespace-nowrap bg-red-700 shadow-md rounded-3xl md:mt-0">
//                             Live
//                         </div> */}

//             {/* <div className="flex flex-row justify-center self-end p-2 mt-4 text-[15px] tracking-wide font-medium leading-5 text-center text-[#153448] capitalize whitespace-nowrap  shadow-md rounded-3xl md:mt-0 ">
//               <div className="justify-center self-end p-2 mt-4 text-lg leading-5 text-center text-white capitalize whitespace-nowrap bg-red-700 shadow-md rounded-3xl md:mt-0 mr-2 animate-pulse-fast"></div>
//               Live Rates
//             </div> */}
//           </div>
//         </div>
//         {/* <div className="justify-center p-2 mt-4 text-[15px] tracking-wide font-medium leading-5 text-center text-[#DFD0B8] capitalize whitespace-nowrap bg-[#153448] shadow-md rounded-3xl md:mt-0 ">
//               Live Rates
//             </div> */}
//       </div>
//     </div>
//   );
// }
function ProductCard({ product }) {
  const pric10 = product.price1.includes(":") && product.price1.split(":")[1];
  const pric12 = product.price2.includes(":") && product.price2.split(":")[1];
  const pric13 = product.price3.includes(":") && product.price3.split(":")[1];
  const pric14 = product.price4.includes(":") && product.price4.split(":")[1];

  const price1 = product.price1.includes(":") && product.price1.split(":")[0];
  const price2 = product.price2.includes(":") && product.price2.split(":")[0];
  const price3 = product.price3.includes(":") && product.price3.split(":")[0];
  const price4 = product.price4.includes(":") && product.price4.split(":")[0];
  return (
    <div className="w-full 1000px:w-1/3 max-lg:w-1/2 p-2 max-md:w-full ">
      <div className="flex flex-col h-full w-[100%] p-2 bg-white shadow-lg  rounded-2xl">
        <div className="flex flex-row md:flex-row items-center">

          {/* Image */}
          <div className="w-full md:w-1/2">
          <div className=" flex w-[70%] flex-row justify-center self-end p-1 mt-4 text-[15px] tracking-wide font-bold leading-5 text-center text-[#3C5B6F] capitalize whitespace-nowrap rounded-xl md:mt-0 ">
              <div className="justify-center self-end p-2 whitespace-nowrap bg-red-700 rounded-3xl md:mt-0 mr-2 animate-pulse-fast"></div>
              Live Rate             </div>
            <img
              src={product.image}
              className="w-full aspect-[1.16] max-sm:h-[150px]"
            />
          </div>

          {/* Brand Name - Categories and Prices */}
          <div className="flex flex-col justify-between w-full mt-4 ml-0 md:mt-0 md:w-1/2 md:ml-5">
            
            {/* Categories */}
            <div className="flex flex-col mt-2">
              <h2 className="mt-3 text-xl font-bold text-gray-900 md:mt-0 tracking-widest">
                {product.name}
              </h2>
              <div className="flex gap-3 items-center">
                {/* Product Name */}

                {/* Prices */}
                <div className="rounded-md p-2 tracking-widest">
                  <div className="text-lg text-black font-semibold ">
                    {price1}
                  </div>
                  <div className="text-lg text-black font-semibold ">
                    {price2}
                  </div>
                  <div className="text-lg text-black font-semibold ">
                    {price3}
                  </div>
                  <div className="text-lg text-black font-semibold ">
                    {price4}
                  </div>
                </div>

                <div className=" rounded-md p-2">
                  {/* Price Card */}

                  <div className="text-lg text-teal-900">₹{pric10}</div>
                  <div className="text-lg text-teal-900">₹{pric12}</div>
                  <div className="text-lg text-teal-900">₹{pric13}</div>
                  <div className="text-lg text-teal-900">₹{pric14}</div>
                </div>
              </div>
            </div>
            {/* <div className="justify-center self-end p-2 mt-4 text-[15px] tracking-wide font-medium leading-5 text-center text-[#DFD0B8] capitalize whitespace-nowrap bg-[#153448] shadow-md rounded-3xl md:mt-0 animate-pulse">
              Live Rates
            </div> */}
          </div>
        </div>
        {/* <div className="justify-center w-[50%] mx-auto p-2 mt-4 text-[15px] tracking-wide font-medium leading-5 text-center text-[#DFD0B8] capitalize whitespace-nowrap bg-[#153448] shadow-md rounded-3xl md:mt-0 animate-pulse">
              Live Rates
            </div> */}
      </div>
    </div>
  );
}

const Categories = () => {
  const [isGridView, setIsGridView] = React.useState(true);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { dailyPrices, loading, error } = useSelector(
    (state) => state.dailyPrices
  );
  const dispatch = useDispatch();
  const [productsPerView, setProductsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 768 && windowWidth < 1024) {
        setProductsPerView(1);
      } else if (windowWidth >= 1024) {
        setProductsPerView(3);
      } else {
        setProductsPerView(1);
      }
    };

    handleResize(); // Initial calculation

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d937fa77b0b18424369da6c307cf90ab1a8541719010c2dbca46f6b7afc9af4b?apiKey=32f77bb18c504c65be17d8ce7468b501&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/110115f8598cb4fe45d5e76b95c27b24a423d4ec4d465dacc49767a121083f04?apiKey=32f77bb18c504c65be17d8ce7468b501&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/110115f8598cb4fe45d5e76b95c27b24a423d4ec4d465dacc49767a121083f04?apiKey=32f77bb18c504c65be17d8ce7468b501&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d937fa77b0b18424369da6c307cf90ab1a8541719010c2dbca46f6b7afc9af4b?apiKey=32f77bb18c504c65be17d8ce7468b501&",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/110115f8598cb4fe45d5e76b95c27b24a423d4ec4d465dacc49767a121083f04?apiKey=32f77bb18c504c65be17d8ce7468b501&",
    },
  ];

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Function to handle next button click
  const nextSlide = () => {
    if (currentIndex < dailyPrices.length - productsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const [touchStartX, setTouchStartX] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;

    // Define a swipe threshold
    const threshold = 50; // You can adjust the threshold as per your preference

    if (diffX > threshold) {
      // Swipe left
      nextSlide();
    } else if (diffX < -threshold) {
      // Swipe right
      prevSlide();
    }
  };
  const mobileView = window.innerWidth < 768;

  // Function to assign fallback images to products
  const assignFallbackImages = (products) => {
    return products.map((product, index) => {
      // If product does not have an image, assign a fallback image from the list
      if (!product.image) {
        // Calculate the index of the fallback image to use (cycling through the images array)
        const imageIndex = index % images.length;
        product.image = images[imageIndex].image;
      }
      return product;
    });
  };

  // Fetch data using fetchDailyPrices
  useEffect(() => {
    dispatch(fetchDailyPrices());
  }, [dispatch]);

  const updatedDailyPrices = assignFallbackImages(dailyPrices);

  // Determine the products to display based on the current index
  const visibleProducts = dailyPrices.slice(
    currentIndex,
    currentIndex + productsPerView
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`${styles.section} flex  py-4 overflow-hidden max-md:px-1 `}
    >
      <div className="flex flex-col w-full ">
        <header className="flex flex-wrap items-center justify-between max-sm:justify-center w-full md:mb-5 md:flex-nowrap">
          <h1 className="mt-2 mb-3 text-3xl  max-sm:text-2xl font-bold text-[#153448] md:mb-0 md:text-4xl font-Baskerville">
            Live rate of yarn
          </h1>

          <div className="flex gap-2 md:gap-3 max-sm:hidden mr-2">
            <button
              type="button"
              className={`flex items-center text-white justify-center  md:w-12 md:h-12 w-10 h-10 p-2 border-2 border-solid rounded-full ${
                !isGridView ? "border-teal-900 bg-white" : "bg-[#153448]"
              }`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <p className="text-bold text-4xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-6 md:w-6 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </p>
            </button>
            <button
              type="button"
              className={`flex items-center justify-center text-white md:w-12 md:h-12 w-10 h-10 p-2 border-2 border-solid rounded-full ${
                !isGridView ? "border-teal-900 bg-white" : "bg-[#153448] "
              }`}
              onClick={nextSlide}
              disabled={currentIndex >= dailyPrices.length - productsPerView}
            >
              {/* <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f57443bc480fe99196d9d45079de72b25323135125bc58190b8142d0faac461?apiKey=32f77bb18c504c65be17d8ce7468b501&"
                                alt="List View"
                                className={`w-5 aspect-square text-white ${
                                    !isGridView ? "invert-0" : "invert"
                                }`}
                            /> */}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="md:h-6 md:w-6 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </header>

        <section className="mt-1 md:mt-5">
          {/* transition-transform duration-1000 hover:translate-x-full */}
          <div
            className={`flex flex-wrap ${isGridView ? "-mx-2" : ""} `}
            onTouchStart={mobileView ? handleTouchStart : null}
            onTouchEnd={mobileView ? handleTouchEnd : null}
          >
            {/* <Splide
            options={{
              perPage: 1,
              autoplay: true,
              speed: 1500,
              rewind: true,
              rewindByDrag: true,
            }}
            >
                {dailyPrices.map((product, index) => (
                // <div className="transition-transform duration-300 transform lg:hover:scale-110">
                // </div>

                    <SplideSlide key={index} className="flex flex-col items-center p-8 rounded-xl gap-4">
                            <ProductCard key={index} product={product} />
                      
                    </SplideSlide>
                ))}
            </Splide> */}
            {visibleProducts.map((product, index) => (
              // <div className="transition-transform duration-300 transform lg:hover:scale-110">
              // </div>

              <ProductCard key={index} product={product} />
            ))}
          </div>
          {/* Navigation buttons */}
        </section>
      </div>
    </div>
  );
};

export default Categories;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDailyPrices } from '../../../redux/actions/dailyprice'; // Import the Redux action

// function ProductCard({ product }) {
//     return (
//         <div className="w-1/3 p-2 max-md:w-full">
//             <div className="flex flex-col h-full w-full p-2 bg-white border-2 border-solid border-teal-900 rounded-2xl">
//                 <div className="flex flex-col md:flex-row">
//                     <div className="w-full md:w-1/2">
//                         <img src={product.image} alt={product.alt} className="w-full aspect-[1.16]" />
//                     </div>
//                     <div className="flex flex-col justify-between w-full mt-4 ml-0 md:mt-0 md:w-1/2 md:ml-3">
//                         <div className="flex flex-col">
//                             <h2 className="mt-3 text-xl text-gray-900 md:mt-0">{product.category}</h2>
//                             <div className="mt-1 text-2xl text-teal-900">{product.price}</div>
//                         </div>
//                         <div className="justify-center self-end p-2 mt-4 text-lg leading-5 text-center text-white capitalize whitespace-nowrap bg-red-700 shadow-md rounded-3xl md:mt-0">
//                             Live
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const Categories = ({ user }) => {
//     const dispatch = useDispatch();
//     const { dailyPrices, loading, error } = useSelector(state => state.dailyPrices);

//     const [isGridView, setIsGridView] = useState(true);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const productsPerView = 3; // Number of products to show per view in the carousel

//     // Function to handle previous button click
//     const prevSlide = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     // Function to handle next button click
//     const nextSlide = () => {
//         if (currentIndex < dailyPrices.length - productsPerView) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     // Fetch data using fetchDailyPrices
//     useEffect(() => {
//         dispatch(fetchDailyPrices());
//     }, [dispatch]);

//     // Determine the products to display based on the current index
//     const visibleProducts = dailyPrices.slice(currentIndex, currentIndex + productsPerView);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="flex px-16 py-4 justify-center max-md:px-1">
//             <div className="flex flex-col w-full max-w-[1140px]">
//                 <header className="flex flex-wrap items-center justify-between w-full mb-5 md:flex-nowrap">
//                     <h1 className="mb-3 text-3xl font-bold text-teal-900 md:mb-0 md:text-4xl">
//                         Live rate of yarn
//                     </h1>
//                     <div className="flex gap-3">
//                         <button
//                             type="button"
//                             className={`flex items-center justify-center w-12 h-12 p-2 border-2 border-solid rounded-full ${
//                                 isGridView ? "border-teal-900 bg-white" : "bg-teal-900"
//                             }`}
//                             onClick={() => setIsGridView(true)}
//                         >
//                             <p className="text-bold text-4xl">-</p>
//                         </button>
//                         <button
//                             type="button"
//                             className={`flex items-center justify-center w-12 h-12 p-2 border-2 border-solid rounded-full ${
//                                 !isGridView ? "border-teal-900 bg-white" : "bg-teal-900"
//                             }`}
//                             onClick={() => setIsGridView(false)}
//                         >
//                             <img
//                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f57443bc480fe99196d9d45079de72b25323135125bc58190b8142d0faac461?apiKey=32f77bb18c504c65be17d8ce7468b501&"
//                                 alt="List View"
//                                 className={`w-5 aspect-square ${!isGridView ? "invert-0" : "invert"}`}
//                             />
//                         </button>
//                     </div>
//                 </header>
//                 <section className="mt-5">
//                     <div className={`flex flex-wrap ${isGridView ? "-mx-2" : ""}`}>
//                         {visibleProducts.map((product, index) => (
//                             <ProductCard key={index} product={product} />
//                         ))}
//                     </div>
//                     {/* Navigation buttons */}
//                     {dailyPrices.length > productsPerView && (
//                         <div className="flex justify-center mt-4">
//                             <button
//                                 className="px-4 py-2 mr-2 bg-teal-900 text-white rounded-lg"
//                                 onClick={prevSlide}
//                                 disabled={currentIndex === 0}
//                             >
//                                 Prev
//                             </button>
//                             <button
//                                 className="px-4 py-2 bg-teal-900 text-white rounded-lg"
//                                 onClick={nextSlide}
//                                 disabled={currentIndex >= dailyPrices.length - productsPerView}
//                             >
//                                 Next
//                             </button>
//                         </div>
//                     )}
//                 </section>
//             </div>
//         </div>
//     );
// };

// export default Categories;
