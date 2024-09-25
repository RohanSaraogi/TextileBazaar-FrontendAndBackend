// import React, { useEffect, useState } from "react";
// import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
// import styles from "../../styles/styles";
// import { Link } from "react-router-dom";
// import { MdBorderClear } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllOrdersOfShop } from "../../redux/actions/order";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { Button } from "@material-ui/core";
// import { DataGrid } from "@material-ui/data-grid";

// const DashboardHero = () => {
//   const dispatch = useDispatch();
//   const { orders } = useSelector((state) => state.order);
//   const { seller } = useSelector((state) => state.seller);
//   const { products } = useSelector((state) => state.products);

//   useEffect(() => {
//      dispatch(getAllOrdersOfShop(seller._id));
//      dispatch(getAllProductsShop(seller._id));
//   }, [dispatch]);

//   const availableBalance = seller?.availableBalance.toFixed(2);

//   const columns = [
//     { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

//     {
//       field: "status",
//       headerName: "Status",
//       minWidth: 130,
//       flex: 0.7,
//       cellClassName: (params) => {
//         return params.getValue(params.id, "status") === "Delivered"
//           ? "greenColor"
//           : "redColor";
//       },
//     },
//     {
//       field: "itemsQty",
//       headerName: "Items Qty",
//       type: "number",
//       minWidth: 130,
//       flex: 0.7,
//     },

//     {
//       field: "total",
//       headerName: "Total",
//       type: "number",
//       minWidth: 130,
//       flex: 0.8,
//     },

//     {
//       field: " ",
//       flex: 1,
//       minWidth: 150,
//       headerName: "",
//       type: "number",
//       sortable: false,
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={`/dashboard/order/${params.id}`}>
//               <Button>
//                 <AiOutlineArrowRight size={20} />
//               </Button>
//             </Link>
//           </>
//         );
//       },
//     },
//   ];

//   const row = [];

//   orders && orders.forEach((item) => {
//     row.push({
//         id: item._id,
//         itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
//         total: "US$ " + item.totalPrice,
//         status: item.status,
//       });
//   });
//   return (
//     <div className="w-full p-8">
//       <h3 className="text-[22px] font-Poppins pb-2">Overview</h3>
//       <div className="w-full block 800px:flex items-center justify-between">
//         <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//           <div className="flex items-center">
//             <AiOutlineMoneyCollect
//               size={30}
//               className="mr-2"
//               fill="#00000085"
//             />
//             <h3
//               className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//             >
//               Account Balance{" "}
//               <span className="text-[16px]">(with 10% service charge)</span>
//             </h3>
//           </div>
//           <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">${availableBalance}</h5>
//           <Link to="/dashboard-withdraw-money">
//             <h5 className="pt-4 pl-[2] text-[#077f9c]">Withdraw Money</h5>
//           </Link>
//         </div>

//         <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//           <div className="flex items-center">
//             <MdBorderClear size={30} className="mr-2" fill="#00000085" />
//             <h3
//               className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//             >
//               All Orders
//             </h3>
//           </div>
//           <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
//           <Link to="/dashboard-orders">
//             <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
//           </Link>
//         </div>

//         <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
//           <div className="flex items-center">
//             <AiOutlineMoneyCollect
//               size={30}
//               className="mr-2"
//               fill="#00000085"
//             />
//             <h3
//               className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
//             >
//               All Products
//             </h3>
//           </div>
//           <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{products && products.length}</h5>
//           <Link to="/dashboard-products">
//             <h5 className="pt-4 pl-2 text-[#077f9c]">View Products</h5>
//           </Link>
//         </div>
//       </div>
//       <br />
//       <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
//       <div className="w-full min-h-[45vh] bg-white rounded">
//       <DataGrid
//         rows={row}
//         columns={columns}
//         pageSize={10}
//         disableSelectionOnClick
//         autoHeight
//       />
//       </div>
//     </div>
//   );
// };

// export default DashboardHero;


// GstVerification.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { server } from '../../server';

const GstVerification = ({ server }) => {
  const [gstNo, setGstNo] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [verified, setVerified] = useState(false);
  const [verificationData, setVerificationData] = useState([]);
  const { seller } = useSelector((state) => state.seller);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`https://eshop-freelance-5.onrender.com/api/v2/gstverfiy/verify-gst`, {
        gstNo,
        tradeName,
        shopId: seller._id,
      },
      {
        withCredentials: true,
      }
    );

      toast.success("GST VErified Successfully!");
      setVerified(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const checkVerificationStatus = async () => {
    try {
      const res = await axios.get(`https://eshop-freelance-5.onrender.com/api/v2/gstverfiy/gst-verification-status/${seller?._id}`, 
      {
        withCredentials: true,
      }
    );
      
      setVerificationData(res.data.gstVerificationData);
    } catch (error) {
      toast.error('Failed to fetch GST verification status.');
    }
  };

  // Check verification status on component mount
  React.useEffect(() => {
    checkVerificationStatus();
  }, []);

  return (
    <div className='mt-1 800px:w-[70%]'>
      {verificationData.length > 0 && verificationData[0].verified && (
        <div>
          <p className='font-[400] text-2xl mb-10 tracking-wider text-[#3C5B6F]'>Great <span className='font-bold text-[#3C5B6F]'>{seller.name}</span>, you have done a fantastic work by doing GST verification, which help you for your growth. <br></br>Good luck and Best wishes! </p>
        <div className='flex font-[700] text-[#3C5B6F] text-3xl justify-center items-center '>GST Verified ✅</div>
        </div>
      )}
      {verificationData.length === 0 && (
        <form onSubmit={handleSubmit} >
        <p className='font-bold text-2xl mb-10'><span>Insert GST Number and remember:</span>
          <span>For verification, you need to provide the exact trade name registered with GST.</span>
          <span>For example, enter the company name that you registered for GST,not give your name,<span className='text-red-600'> Example. Trade name = Textile bazaar.</span> </span></p>

        <div className='gap-3 flex max-sm:flex-col object-cover'>

        <input
        className='border-2 border-black px-2 max-sm:py-2'
          type="text"
          value={gstNo}
          onChange={(e) => setGstNo(e.target.value)}
          placeholder="GST Number"
          required
        />
        <input
        className='border-2 border-black px-2 max-sm:py-2'
          type="text"
          value={tradeName}
          onChange={(e) => setTradeName(e.target.value)}
          placeholder="Trade Name"
          required
        />
        <button className='bg-red-600 w-[100px] py-2 text-white' type="submit">Verify GST</button>
        </div>
      </form>
       )}
    </div>
  );
};

export default GstVerification;
