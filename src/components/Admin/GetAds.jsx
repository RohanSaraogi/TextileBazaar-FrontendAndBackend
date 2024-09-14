import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvertisements, deleteAdvertisement } from "../../redux/actions/advertisment"; // Import Redux actions
import { AiOutlinePlusCircle } from "react-icons/ai";
// Import necessary dependencies


const GetAds = () => {
    const dispatch = useDispatch();
    const { advertisements, loading } = useSelector((state) => state.advertisements);
    

    useEffect(() => {
        // Fetch advertisements when the component mounts
        dispatch(fetchAdvertisements());
    }, [dispatch]);

    // Handle form input changes
    
   
    
      const handleDelete = () => {
        console.log("Deleting advertisement with ID:", advertisements.id);
        dispatch(deleteAdvertisement(advertisements.id));
        // window.location.reload();
      };

    // DataGrid columns configuration
    const columns = [
        { field: "name", headerName: "Name", width: 150 },
        { field: "link", headerName: "Link", width: 300 },
        { field: "startDate", headerName: "Start Date", width: 150 },
        { field: "endDate", headerName: "End Date", width: 150 },
        { field: "status", headerName: "status", width: 150 },
        // {
        //     field: "actions",
        //     headerName: "Actions",
        //     width: 200,
        //     renderCell: (params) => (
        //         <div>
        //             <Button
        //                 variant="contained"
        //                 color="secondary"
        //                 onClick={() => handleDelete(params._id)}
        //             >
        //                 Delete
        //             </Button>
        //         </div>
        //     ),
        // },
    ];

    return (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
            {/* Form to add or update an advertisement */}
            

            {/* DataGrid to display advertisements */}
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={advertisements}
                    columns={columns}
                    loading={loading}
                    getRowId={(row) => row._id}
                />
            </div>
        </div>
    );
};

export default GetAds;