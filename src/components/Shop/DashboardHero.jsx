import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineMoneyCollect } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdBorderClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import GstVerification from "./GstVerification";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import dashboard1 from "../../Assests/images/dashboard1.png";
import dashboard2 from "../../Assests/images/dashboard2.png";

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);

  const handleInquiryClick = async () => {
    // Get the product and seller information (you can adjust as per your app structure)
    const productId = seller.name;
    const sellerEmail = seller.email;
    const userEmail = seller.phoneNumber;

    // Create an inquiry object
    const inquiryData = {
      productId,
      sellerEmail,
      userEmail,
    };

    // Send the inquiry to the server endpoint
    const response = await axios.post(
      `${server}/mail/send-inquiry/seller`,
      inquiryData
    );

    if (response.status === 201) {
      // Inquiry sent successfully
      toast.success("Inquiry sent successfully!");
    } else {
      // Failed to send inquiry
      toast.error("Failed to send inquiry. Please try again.");
    }
  };

  const availableBalance = seller?.availableBalance.toFixed(2);

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
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/dashboard/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        total: "US$ " + item.totalPrice,
        status: item.status,
      });
    });
  return (
    <div className="w-full mx-2 md:mx-8 mt-1 md:pt-10 md:mb-1">
      <div className="">
        <h3 className="text-[32px] font-700 text-[#3C5B6F] font-Poppins pb-2">
          Overview
        </h3>
        <div className="w-full block 800px:flex items-center gap-4">
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
              Account Balance{" "}
              <span className="text-[16px]">(with 10% service charge)</span>
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">${availableBalance}</h5>
          <Link to="/dashboard-withdraw-money">
            <h5 className="pt-4 pl-[2] text-[#077f9c]">Withdraw Money</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-white shadow rounded px-2 py-5">
          <div className="flex items-center">
            <MdBorderClear size={30} className="mr-2" fill="#00000085" />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
          <Link to="/dashboard-orders">
            <h5 className="pt-4 pl-2 text-[#077f9c]">View Orders</h5>
          </Link>
        </div> */}

          <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] rounded px-2 py-5 ">
            <div className="flex items-start">
              {/* <AiOutlineMoneyCollect
                size={70}
                className="mr-2"
                fill="#00000085"
              /> */}
              <img src={dashboard1} alt="" className="w-[100px]" />
              <div className="flex flex-col items-start">
                <h3
                  className={`${styles.productTitle} !text-[16px] tracking-tighter font-sans leading-5 !font-[700] mt-2 text-[#3C5B6F]`}
                >
                  ALL PRODUCTS
                </h3>
                <h5 className="text-[32px] font-[400] text-[#3C5B6F]">
                  {products && products.length}
                </h5>
              </div>
            </div>
            <div className="">
              <Link to="/dashboard-products">
                <h5 className="text-[#077f9c] mx-auto w-full text-center pr-2">
                  View All Products
                </h5>
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="w-full mb-4 800px:w-[40%] min-h-[20vh] rounded px-2 py-5 ">
            <div className="flex items-start ">
              {/* <MdBorderClear size={30} className="mr-2" fill="#00000085" /> */}

              <img src={dashboard1} alt="" className="w-[100px]" />

              <div className="flex flex-col items-start">
                <h3
                  className={`${styles.productTitle} !text-[16px] tracking-tighter font-sans leading-5 !font-[700] mt-2 text-[#3C5B6F]`}
                >
                  QUERY RELATED TO DASHBOARD
                </h3>
                <h5 className="text-[32px] font-[400] text-[#3C5B6F] tracking-wider">
                  Contact Us
                </h5>
              </div>
            </div>

            <div className="items-center">
              <button
                className="text-[#077f9c] mx-auto w-full text-center pr-2"
                onClick={handleInquiryClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="">
        <h3 className="text-[32px] font-600 text-[#3C5B6F] font-Poppins mb-2">
          GST Verification
        </h3>
        <div className="w-full ">
          <GstVerification />
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
