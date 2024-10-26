import React from 'react'
import styles from '../../styles/styles'
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import { Link, useParams } from "react-router-dom";

const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
         <div className="w-full md:flex py-10 justify-between">
          <div className="w-[full] md:w-[20%] bg-[#fff] rounded-[4px] shadow-sm">
            <ShopInfo isOwner={true} />
            
          </div>
          <div className="w-full md:w-[75%] max-sm:hidden rounded-[4px]">
            <ShopProfileData isOwner={true} />
          </div>
         </div>
    </div>
  )
}

export default ShopHomePage