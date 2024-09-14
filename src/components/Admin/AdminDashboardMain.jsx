import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import { MdBorderClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllSellers } from "../../redux/actions/sellers";
import { getAllUsers } from "../../redux/actions/user";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
  const { sellers } = useSelector((state) => state.seller);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
    dispatch(getAllUsers());
  }, []);

   const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


   const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "createdAt",
      headerName: "Order Date",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
  ];

  const row = [];
  adminOrders &&
  adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " ₹",
        status: item?.status,
        createdAt: item?.createdAt.slice(0,10),
      });
    });

  return (
   <>
    {
      adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-[90vh] mr-[5px] ml-[15px] md:ml-[20px] rounded-[10px] p-4 bg-gradient-to-r from-[#153448] to-[#3C5B6F] shadow-sm sticky top-0 left-0 z-10 my-[10px] md:my-[20px] px-2 py-2 font-Poppins">
        <h3 className="text-[40px] font-Poppins py-5 text-center font-[600] leading-7 text-[#DFD0B8] tracking-wider md:my-[30px] my-[5px]">Overview</h3>
        <div className="w-full block 800px:flex items-center gap-3 md:px-[30px] md:my-[30px]">
          {/* <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Earning
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">$ {adminBalance}</h5>
          </div> */}
  
          <div className="w-full mb-4 800px:w-[50%] min-h-[20vh] bg-gradient-to-r from-[#153448] to-black shadow rounded px-2 py-5 flex flex-col items-center align-center">

            <div className="flex items-center">
              <MdBorderClear size={100} className="mr-2" fill="#c8cfd8" />
              <div className="flex items-center">
                <h3
                  className={`${styles.productTitle} !text-[30px]  !font-[700] text-[#c8cfd8]`}
                >
                  All Sellers -
                </h3>
                <h5 className={`${styles.productTitle} !text-[35px] leading-5 !font-[900] text-[#c8cfd8] pl-[5px] md:pl-3 pr-[15px]`}>{sellers && sellers.length}</h5>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#DFD0B8] to-[#c8cfd8] text-[#153448] pl-2 py-2 rounded-md text-[22px] mt-4 mx-2 w-full md:w-[60%] text-center font-[600]">
              <Link to="/admin-sellers">
                <h5 className="">View Sellers</h5>
              </Link>
            </div>

          </div>
  
          <div className="w-full mb-4 800px:w-[50%] min-h-[20vh] bg-gradient-to-r from-[#153448] to-black shadow rounded px-2 py-5 flex flex-col items-center align-center">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={100}
                className="mr-2"
                fill="#c8cfd8"
              />
              <div className="flex items-center">
                <h3
                  className={`${styles.productTitle} !text-[30px]  !font-[700] text-[#c8cfd8]`}
                >
                  All Users -
                </h3>
                <h5 className={`${styles.productTitle} !text-[35px] leading-5 !font-[900] text-[#c8cfd8] pl-[5px] md:pl-3 pr-[15px]`}>{users && users.length}</h5>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#DFD0B8] to-[#c8cfd8] text-[#153448] pl-2 py-2 rounded-md text-[22px] mt-4 mx-2 w-full md:w-[60%] text-center font-[600]">
              <Link to="/admin-users">
                <h5 className="">View Users</h5>
              </Link>
            </div>
            
          </div>
        </div>
  
        <br />
        {/* <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={4}
            disableSelectionOnClick
            autoHeight
          />
        </div> */}
      </div>
      )
    }
   </>
  );
};

export default AdminDashboardMain;
