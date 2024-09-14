import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchDailyPrices } from '../../../redux/actions/dailyprice';
// import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="w-1/3 p-2 max-md:w-full max-md:m-10">
            <div className="flex flex-col h-full w-full p-2 bg-white border-2 border-solid border-teal-900 rounded-2xl">
                
                    <a href={product.link} className="w-full h-60">
                        <img src={product.image}  className="w-full h-60 object-cover rounded-2xl " />
                    </a>
                
            </div>
        </div>
    );
}

const Advertisment = () => {
    const [isGridView, setIsGridView] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const { dailyPrices, loading, error } = useSelector(state => state.dailyPrices);
    const dispatch = useDispatch();
    const productsPerView = 3;

    const product = [
        {
            link: "https://mitangpatel.co.in/",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/41d188385bb5dba598c436769e7d4fef41673318bdc845409f0be4b9aab3f5bc?apiKey=32f77bb18c504c65be17d8ce7468b501&",
            
        },
        {
            link: "https://mitangpatel.co.in/",
            image: "https://5.imimg.com/data5/HA/XJ/HK/SELLER-22736063/knitting-woolen-yarn.jpg",
            
        },
        {
            link: "https://mitangpatel.co.in/",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/110115f8598cb4fe45d5e76b95c27b24a423d4ec4d465dacc49767a121083f04?apiKey=32f77bb18c504c65be17d8ce7468b501&",
            
        },
        {
            link: "https://mitangpatel.co.in/",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d937fa77b0b18424369da6c307cf90ab1a8541719010c2dbca46f6b7afc9af4b?apiKey=32f77bb18c504c65be17d8ce7468b501&",
            
        },
        {
            link: "https://mitangpatel.co.in/",
            image: "https://cdn.builder.io/api/v1/image/assets/TEMP/110115f8598cb4fe45d5e76b95c27b24a423d4ec4d465dacc49767a121083f04?apiKey=32f77bb18c504c65be17d8ce7468b501&",
            
        },
    ];

    const prevSlide = () => {
      if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
      }
  };

  // Function to handle next button click
  const nextSlide = () => {
      if (currentIndex < product.length - productsPerView) {
          setCurrentIndex(currentIndex + 1);
      }
  };


// Function to assign fallback images to products
// const assignFallbackImages = (products) => {
//   return products.map((product, index) => {
//       // If product does not have an image, assign a fallback image from the list
//       if (!product.image) {
//           // Calculate the index of the fallback image to use (cycling through the images array)
//           const imageIndex = index % images.length;
//           product.image = images[imageIndex].image;
//       }
//       return product;
//   });
// };

  // Fetch data using fetchDailyPrices
//   useEffect(() => {
//       dispatch(fetchDailyPrices());
//   }, [dispatch]);

//   const updatedDailyPrices = assignFallbackImages(dailyPrices);

  // Determine the products to display based on the current index
  const visibleProducts = product.slice(currentIndex, currentIndex + productsPerView);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error}</div>;
  }

    return (
        <div className="flex px-20 py-6  max-md:px-1 ">
            <div className="flex flex-col w-full max-w-[1140px]">
                <header className="flex flex-wrap items-center justify-between w-full mb-5 md:flex-nowrap">
                    <h1 className="mb-3 text-3xl font-bold text-teal-900 md:mb-0 md:text-4xl">
                    Next Great Deal!
                    </h1>
                    <div className="flex gap-3">
                        <button
                            type="button"
                            className={`flex items-center justify-center w-12 h-12 p-2 border-2 border-solid rounded-full ${
                                isGridView ? "border-teal-900 bg-white" : "bg-teal-900"
                            }`}
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                        >
                            <p className="text-bold text-4xl">-</p>
                        </button>
                        <button
                            type="button"
                            className={`flex items-center justify-center w-12 h-12 p-2 border-2 border-solid rounded-full ${
                                !isGridView ? "border-teal-900 bg-white" : "bg-teal-900"
                            }`}
                            onClick={nextSlide}
                            disabled={currentIndex >= product.length - productsPerView}
                        >
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f57443bc480fe99196d9d45079de72b25323135125bc58190b8142d0faac461?apiKey=32f77bb18c504c65be17d8ce7468b501&"
                                alt="List View"
                                className={`w-5 aspect-square ${
                                    !isGridView ? "invert-0" : "invert"
                                }`}
                            />
                        </button>
                    </div>
                </header>
                <section className="mt-5">
                    <div className={`flex flex-wrap ${isGridView ? "-mx-2" : ""}`}>
                        {visibleProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    {/* Navigation buttons */}
                    
                </section>
            </div>
        </div>
    );
};

export default Advertisment;