import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";


const CategoriesMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div> */}

      <div
        className={`${styles.section} rounded-lg mb-12 mt-12 animate-appear`}
        style={{animationTimeline:"view()",animationRange: "entry 0% cover 40%"}}
        id="categories"
      >
        <div className={`${styles.heading} mb-3 text-3xl flex justify-center items-center font-bold text-[#153448] md:mb-0 md:text-4xl font-Baskerville`}>
          <h1>Categories</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-6">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              
              return (
                <div
                  className="bg-[#153448] shadow-lg hover:shadow-2xl cursor-pointer duration-500 rounded-lg p-5 md:p-5 flex flex-col justify-between items-center hover:scale-105 w-[100%]"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <img
                    src={i.image_Url}
                    className="w-[70%] my-2"
                    alt=""
                  />
                  <h5 className={`font-bold text-[#DFD0B8] text-xl sm:text-xl text-center tracking-wide`}>{i.title}</h5>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CategoriesMenu;