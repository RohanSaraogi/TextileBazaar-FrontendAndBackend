import React from 'react'
import { Link } from 'react-router-dom'
import { useNavItems } from '../../static/data'
import styles from '../../styles/styles'
import "../../../src/App.css"
const Navbar = ({active}) => {
  const navItems = useNavItems();
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      
         {
            navItems && navItems.map((i,index) => (
                <div className="flex justify-center">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#DFD0B8] font-bold " : "text-[#DFD0B8]"}  link link-underline link-underline-black 800px:pb-0 text-[24px] 800px:text-[15px] font-[500] px-2 mx-3 my-[10px] 800px:my-0 cursor-pointer} transition-transform duration-300 transform  `}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar