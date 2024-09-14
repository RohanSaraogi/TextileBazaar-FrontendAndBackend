import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { server } from "../../server";

const AllSubscribed = () => {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(() => {
   axios.get(`${server}/sub/details`, {withCredentials: true}).then((res) =>{
    setSubscribe(res.data.subscriptions);
   })
  }, []);

  const columns = [
    { field: "id", headerName: "Subscribe Id", minWidth: 150, flex: 0.7 },
    {
      field: "email",
      headerName: "email",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "planType",
      headerName: "planType",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "status",
      headerName: "status",
      minWidth: 80,
      flex: 0.5,
    },
  ]
   
    
    
  

  const row = [];

  subscribe &&
    subscribe.forEach((item) => {
      row.push({
        id: item._id,
        email: item.email,
        planType: item.planType,
        status: item.status,
        
      });
    });

  return (
    <div className="w-full mx-8 pt-1 mt-10 bg-white">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

export default AllSubscribed;
