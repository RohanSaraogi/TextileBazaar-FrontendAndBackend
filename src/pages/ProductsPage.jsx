import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const {allProducts,isLoading} = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const keyword = searchParams.get('keyword') || '';

  // useEffect(() => {
  //   if (categoryData === null) {
  //     const d = allProducts;
  //     setData(d);
  //   } else {
  //     const d =
  //     allProducts && allProducts.filter((i) => i.category === categoryData);
  //     setData(d);
  //   }
  //   //    window.scrollTo(0,0);
  // }, [allProducts]);
  useEffect(() => {
    if (allProducts) {
      let filteredProducts = allProducts;

      if (categoryData) {
        filteredProducts = filteredProducts.filter((product) => product.category === categoryData);
      }

      if (keyword) {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.toLowerCase().includes(keyword.toLowerCase())
        );
      }

      setData(filteredProducts);
    }
  }, [allProducts, categoryData, keyword]);

  return (
  <>
  {
    isLoading ? (
      <Loader />
    ) : (
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
      <div className="font-bold font-Roboto pb-[20px] mb-3 text-[#153448] md:mb-0 md:text-4xl">
          <h1 className="text-center text-[30px] md:text-[45px] font-bold tracking-wide">All Products</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        ) : null}
      </div>
      <Footer />
    </div>
    )
  }
  </>
  );
};

export default ProductsPage;
