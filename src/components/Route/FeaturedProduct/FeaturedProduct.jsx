import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from 'react-router-dom';

const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  const handleSeeMore = () => {
    // setVisibleCount((prevCount) => prevCount + 10);
     // Adjust the increment as needed
     navigate('/products');
    };
   
  return (
    <div className="bg-[#948979]/50">
      <div className={`${styles.section} mb-5 animate-appear`}
      style={{animationTimeline:"view()",animationRange: "entry 0% cover 40%"}}>
        <div className={`${styles.heading} mb-3text-5xl flex justify-center items-center font-bold text-[#00000] md:mb-0 md:text-5xl `}
        >
          <h1 className="mt-10 md:font-sans tracking-wider">Explore Collections</h1>
        </div>
        <div className="grid grid-cols-2 mt-5 gap-3 md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-1">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.slice(0, visibleCount).map((i, index) => <ProductCard data={i} key={index} />)}
               
              </>
            )
           }
        </div>
        {
            allProducts && allProducts.length !== 0 &&(<div className="flex items-center justify-center ">
            {visibleCount < allProducts.length && (
        //  <button onClick={handleSeeMore} className={`${styles.button} text-white`}>View More </button>
            // <button onClick={handleSeeMore} class="w-[50%] group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-[#153448] h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg rounded-2xl">
            //   View more
            // </button>
//             <button class="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
//   See more
// </button>
        <button onClick={handleSeeMore} class="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-[#153448] p-2 flex justify-center items-center font-extrabold">

          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
          <p class="z-10">See more</p>
        </button>




       )}
       </div>
       )
      }
      </div>
      <hr/>
    </div>
  );
};

export default FeaturedProduct;
