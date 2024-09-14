import React, {  useState , useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { server,backend_url } from "../../../server";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Layout/Loader";
import { getAllProductsShop } from "../../../redux/actions/product";

import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { VscNewFile } from "react-icons/vsc";

import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";


// import { useDispatch, useSelector } from "react-redux";
// import { AiOutlineCamera } from "react-icons/ai";
// import styles from "../../../styles/styles";
import { loadSeller } from "../../../redux/actions/user";
import { toast } from "react-toastify";

const DashboardSideBar = ({ active }) => {
  const [data,setData] = useState({});
  // const {products} = useSelector((state) => state.products);
  // const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllProductsShop(id));
    // setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
    //  setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      toast.error(error);
      // setIsLoading(false);
    })
  }, [])
  const { seller } = useSelector((state) => state.seller);
  // const [avatar, setAvatar] = useState();
  // const [name, setName] = useState(seller && seller.name);
  // const [description, setDescription] = useState(
  //   seller && seller.description ? seller.description : ""
  // );
  // const [address, setAddress] = useState(seller && seller.address);
  // const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber);
  // const [zipCode, setZipcode] = useState(seller && seller.zipCode);

  // const dispatch = useDispatch();

  // const handleImage = async (e) => {
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatar(reader.result);
  //       axios
  //         .put(
  //           `${server}/shop/update-shop-avatar`,
  //           { avatar: reader.result },
  //           {
  //             withCredentials: true,
  //           }
  //         )
  //         .then((res) => {
  //           dispatch(loadSeller());
  //           toast.success("Avatar updated successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(error.response.data.message);
  //         });
  //     }
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // };
   
  return (
    <div className="sidebar w-full h-full bg-[#3C5B6F] shadow-sm overflow-y-scroll sticky top-0 left-0 z-10 font-500 text-[50px] leading-[20px] text-center py-4">
      {/* <div className="w-full flex item-center justify-center">
          <img
            src={`${data.avatar?.url}`}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div> */}
        <div className="w-full flex item-center justify-center mt-0 mb-0 py-2">
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="800px:w-[150px] 800px:h-[150px] w-[50px] h-[50px] object-cover rounded-full"
            />
          </Link>
        </div>
        <h5 className="text-center font-bold tracking-widest uppercase text-[#948979] 800px:text-[14px] text-[10px]">Shop Name:</h5>
        <h3 className="text-center font-bold tracking-widest uppercase text-[#DFD0B8] pb-2 mb-2 800px:text-[20px] text-[14px]">{seller.name}</h3>
        
      {/* single item */}
      <div className={`${active === 1 ? "bg-[#948979]" : "bg-[#DFD0B8]"}  800px:w-[90%] flex items-center p-4  rounded-[14px] mx-3 mb-2 hover:scale-105`}>
        <Link to="/dashboard" className="w-full flex items-center ">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#DFD0B8" : "#153448"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-[#DFD0B8]" : "text-[#153448]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div> */}

      <div className={`${active === 3 ? "bg-[#948979]" : "bg-[#DFD0B8]"}  800px:w-[90%] flex items-center p-4  rounded-[14px] mx-3 mb-2 hover:scale-105`}>
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage size={30} color={`${active === 3 ? "#DFD0B8" : "#153448"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-[#DFD0B8]" : "text-[#153448]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className={`${active === 4 ? "bg-[#948979]" : "bg-[#DFD0B8]"}  800px:w-[90%] flex items-center p-4  rounded-[14px] mx-3 mb-2 hover:scale-105`}>
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "#DFD0B8" : "#153448"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-[#DFD0B8]" : "text-[#153448]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      {/* <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            All Events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Create Event
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Withdraw Money
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 8 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 8 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 9 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? "crimson" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-[crimson]" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div> */}

      <div className={`${active === 11 ? "bg-[#948979]" : "bg-[#DFD0B8]"}  800px:w-[90%] flex items-center p-4  rounded-[14px] mx-3 mb-2 hover:scale-105`}>
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 11 ? "#DFD0B8" : "#153448"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-[#DFD0B8]" : "text-[#153448]"
            }`}
          >
            Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
