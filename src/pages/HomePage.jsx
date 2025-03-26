import React from 'react'
import Header from "../components/Layout/Header";
import Hero1 from "../components/Route/Hero/Hero1";
import Categories from "../components/Route/Categories/Categories";
import CategoriesMenu from "../components/Route/Categories/categoriesMenu";
// import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
// import Events from "../components/Events/Events";
// import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
// import Advertisment from '../components/Route/Advertisment/Advertisment'
import MembershipSection from '../components/Route/Membership/membership'
import { useSelector } from 'react-redux';
import Testimonal from './Testitmonals';
import Faq from "./FAQPage";
// import Abc from "../components/Products/Abc.jsx";

const HomePage = () => {
  const { subscription } = useSelector((state) => state.subscription);
  
  return (
    <div className='bg-white'>
      {/* bg-[#ECF7F1] */}
        <Header activeHeading={1} />
        {/* <Hero /> */}
        <Hero1 />

        {/* Live Rate */}
        <Categories /> 
        {/* <Categories1 />  */}

        {/* Categories Section */}
        <CategoriesMenu />

        {/* <BestDeals /> */}
        {/* <Events /> */}
        {/* <Advertisment/> */}
        <FeaturedProduct />
        {(!subscription || subscription.status !== 'inactive') && (
        <MembershipSection />
        )}
        <Faq/>
        <Testimonal/>
        {/* <Sponsored /> */}
        <Footer />
        {/* <Abc/> */}
    </div>
  )
}

export default HomePage