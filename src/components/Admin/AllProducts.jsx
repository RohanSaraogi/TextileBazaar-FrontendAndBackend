import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/admin-all-products`, {withCredentials: true}).then((res) => {
        setData(res.data.products);
    })
  }, []);

  const columns = [
    // { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    // {
    //   field: "sold",
    //   headerName: "Sold out",
    //   type: "number",
    //   minWidth: 130,
    //   flex: 0.6,
    // },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "₹ " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
        <div className="w-full mx-8 bg-white">
        <h3 className="text-[32px] font-Poppins text-center pb-2">All Products</h3>
          <DataGrid 
          sx={{
            "& .MuiDataGrid-columnHeaders": {
                fontWeight: 400,
                borderRadius: "var(--none, 0px)",
                borderBottom: "1px solid var(--divider, rgba(0, 0, 0, 0.12))",
                borderLeft: "var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))",
                borderRight: "var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))",
                borderTop: "var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))",
                background: "var(--primary-selected, rgba(33, 150, 243, 0.08))",
                alignItems: 'space-between !important'
            },
            }}            
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>


    </>
  );
};

export default AllProducts;
