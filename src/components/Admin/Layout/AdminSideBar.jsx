import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import {GrWorkshop} from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

const AdminSideBar = ({ active }) => {
  return (
    // w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10
    <div className="w-full h-[90vh] bg-gradient-to-r from-[#153448] to-[#3C5B6F] border-[1px] border-[#0f311e38] rounded-[10px] shadow-sm sticky top-0 left-0 z-10 mx-2 md:my-[20px] my-[10px] px-2 py-2 font-Poppins">
      {/* // bg-white shadow-sm -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300xl:translate-x-0 border border-blue-gray-100 */}
      {/* single item */}
      {/* w-full flex items-center p-4 */}
      <div className={`${active ===1 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
      {/* align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2 */}
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      {/* <div className={`${active ===2 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>

        <Link to="/admin-ads" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "white" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[white]" : "text-[#555]"
            }`}
          >
            All Advertisment
          </h5>
        </Link>
      </div> */}

      <div className={`${active ===3 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link to="/admin-sellers" className="w-full flex items-center">
          <GrWorkshop
            size={30}
            color={`${active === 3 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            All Sellers
          </h5>
        </Link>
      </div>

      <div className={`${active ===4 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            All Users
          </h5>
        </Link>
      </div>

      <div className={`${active ===5 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link to="/admin-products" className="w-full flex items-center">
          <BsHandbag
            size={30}
            color={`${active === 5 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className={`${active ===6 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link to="/admin-dailyprice" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 6 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            Daily Price
          </h5>
        </Link>
      </div>

      {/* <div className={`${active ===7 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link to="/admin-adsvertismentportal" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 7 ? "white" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[white]" : "text-[#555]"
            }`}
          >
            Advertisment
          </h5>
        </Link>
      </div> */}



      <div className={`${active ===8 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link
          to="/subscribed-user"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            color={`${active === 8 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            Subscribed user
          </h5>
        </Link>
      </div>

      <div className={`${active ===9 ? "align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-even-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-5 capitalize my-2":"w-full flex items-center p-4"}`}>
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 9 ? "#DFD0B8" : "#c8cfd8"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[#DFD0B8]" : "text-[#c8cfd8]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;


// import PropTypes from "prop-types";
// import { Link, NavLink } from "react-router-dom";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   Avatar,
//   Button,
//   IconButton,
//   Typography,
// } from "@material-tailwind/react";
// import { useMaterialTailwindController, setOpenSidenav } from "@/context";



// export function AdminSideBar({ brandImg, brandName, routes }) {
//   const [controller, dispatch] = useMaterialTailwindController();
//   const { sidenavColor, sidenavType, openSidenav } = controller;
//   const sidenavTypes = {
//     dark: "bg-gradient-to-br from-gray-800 to-gray-900",
//     white: "bg-white shadow-sm",
//     transparent: "bg-transparent",
//   };

//   return (
//     <aside
//       className={`${sidenavTypes[sidenavType]} ${
//         openSidenav ? "translate-x-0" : "-translate-x-80"
//       } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
//     >
//       <div
//         className={`relative`}
//       >
//         <Link to="/" className="py-6 px-8 text-center">
//           <Typography
//             variant="h6"
//             color={sidenavType === "dark" ? "white" : "blue-gray"}
//           >
//             {brandName}
//           </Typography>
//         </Link>
//         <IconButton
//           variant="text"
//           color="white"
//           size="sm"
//           ripple={false}
//           className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
//           onClick={() => setOpenSidenav(dispatch, false)}
//         >
//           <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
//         </IconButton>
//       </div>
//       <div className="m-4">
//         {routes.map(({ layout, title, pages }, key) => (
//           <ul key={key} className="mb-4 flex flex-col gap-1">
//             {title && (
//               <li className="mx-3.5 mt-4 mb-2">
//                 <Typography
//                   variant="small"
//                   color={sidenavType === "dark" ? "white" : "blue-gray"}
//                   className="font-black uppercase opacity-75"
//                 >
//                   {title}
//                 </Typography>
//               </li>
//             )}
//             {pages.map(({ icon, name, path }) => (
//               <li key={name}>
//                 <NavLink to={`/${layout}${path}`}>
//                   {({ isActive }) => (
//                     <Button
//                       variant={isActive ? "gradient" : "text"}
//                       color={
//                         isActive
//                           ? sidenavColor
//                           : sidenavType === "dark"
//                           ? "white"
//                           : "blue-gray"
//                       }
//                       className="flex items-center gap-4 px-4 capitalize"
//                       fullWidth
//                     >
//                       {icon}
//                       <Typography
//                         color="inherit"
//                         className="font-medium capitalize"
//                       >
//                         {name}
//                       </Typography>
//                     </Button>
//                   )}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     </aside>
//   );
// }

// AdminSideBar.defaultProps = {
//   brandImg: "/img/logo-ct.png",
//   brandName: "Material Tailwind React",
// };

// AdminSideBar.propTypes = {
//   brandImg: PropTypes.string,
//   brandName: PropTypes.string,
//   routes: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

// AdminSideBar.displayName = "/src/widgets/layout/sidnave.jsx";

// export default AdminSideBar;
