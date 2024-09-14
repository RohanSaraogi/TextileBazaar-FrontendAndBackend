// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import { Button } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { server } from "../../server";
// import styles from "../../styles/styles";
// import { categoriesData } from "../../static/data";
// import {
//   fetchDailyPrices,
//   addDailyPrice,
//   updateDailyPrice,
// } from "../../redux/actions/dailyprice";

// const AllDailyPrice = () => {
//   const dispatch = useDispatch();

//   // Local state for form inputs and selected daily price
//   const [formData, setFormData] = useState({
//     category: "",
//     price: "",
//     id: null,
//   });

//   // Fetch daily prices when the component mounts
//   useEffect(() => {
//     dispatch(fetchDailyPrices());
//   }, [dispatch]);

//   // Get daily prices from the Redux store
//   const { dailyPrices, loading, error } = useSelector(
//     (state) => state.dailyPrices
//   );

//   // Define DataGrid columns
//   const columns = [
//     { field: "id", headerName: "ID", minWidth: 50, flex: 0.5 },
//     { field: "category", headerName: "Category", minWidth: 150, flex: 1 },
//     { field: "price", headerName: "Price", minWidth: 100, flex: 0.8 },
//     { field: "date", headerName: "Date", minWidth: 100, flex: 0.8 },
//   ];

//   // Map daily prices data to rows
//   const rows = [];
//   dailyPrices &&
//     dailyPrices.forEach((price) => {
//       rows.push({
//         id: price._id,
//         category: price.category,
//         price: price.price,
//         date: new Date(price.date).toISOString().slice(0, 10),
//       });
//     });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (formData.id) {
//       // Update existing daily price
//       dispatch(updateDailyPrice(formData.id, formData.price));
//     } else {
//       // Add new daily price
//       dispatch(addDailyPrice(formData.category, formData.price));
//     }

//     // Clear form data after submission
//     setFormData({
//       category: "",
//       price: "",
//       id: null,
//     });
//   };

//   // Handle row selection
//   const handleRowSelection = (selection) => {
//     if (selection.length > 0) {
//       const selectedId = selection[0];
//       const selectedDailyPrice = dailyPrices.find(
//         (price) => price._id === selectedId
//       );
//       if (selectedDailyPrice) {
//         setFormData({
//           id: selectedDailyPrice._id,
//           category: selectedDailyPrice.category,
//           price: selectedDailyPrice.price,
//         });
//       }
//     } else {
//       setFormData({
//         category: "",
//         price: "",
//         id: null,
//       });
//     }
//   };

//   return (
//     <div className="w-full mx-8 pt-1 mt-10 bg-white">
//       {/* Form for adding or updating daily prices */}
//       <form
//         onSubmit={handleFormSubmit}
//         className="mb-4 w-full flex px-3"
//       >
//         <div className="flex flex-row gap-5 mr-4">
//           <div className="mb-4">
//             <label htmlFor="category" className="block font-semibold mb-1">
//               Category:
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleInputChange}
//               required
//               className="w-full px-3 py-2 border border-gray-400 rounded"
//             >
//               <option value="">Select a category</option>
//               {categoriesData.map((category) => (
//                 <option key={category.id} value={category.title}>
//                   {category.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="price" className="block font-semibold mb-1">
//               Price:
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleInputChange}
//               required
//               className="w-full px-3 py-2 border border-gray-400 rounded"
//             />
//           </div>
//         </div>
//         <div className="w-full flex justify-end">
//         <button type="submit" className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[5px] mr-3 mb-3 text-white`}>
//           {formData.id ? "Update Price" : "Add Price"}
//         </button>
//         </div>
//       </form>

//       {/* DataGrid for displaying daily prices */}
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         disableSelectionOnClick
//         autoHeight
//         onSelectionModelChange={handleRowSelection}
//       />
//     </div>
//   );
// };

// export default AllDailyPrice;
import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchDailyPrices, addDailyPrice, updateDailyPrice } from "../../redux/actions/dailyprice";
import { categoriesData } from "../../static/data";
import styles from "../../styles/styles";

const AllDailyPrice = () => {
    const dispatch = useDispatch();

    // Local state for form inputs and selected daily price
    const [formData, setFormData] = useState({
        category: "",
        name: "",
        price1: "",
        price2: "",
        price3: "",
        price4: "",
        id: null,
    });

    // Fetch daily prices when the component mounts
    useEffect(() => {
        dispatch(fetchDailyPrices());
    }, [dispatch]);

    // Get daily prices from the Redux store
    const { dailyPrices } = useSelector((state) => state.dailyPrices);

    // Define DataGrid columns, including the edit button column
    const columns = [
        // { field: "id", headerName: "ID", minWidth: 50, flex: 0.5 },
        { field: "category", headerName: "Category", minWidth: 150, flex: 1 },
        { field: "name", headerName: "name", minWidth: 150, flex: 1 },
        { field: "price1", headerName: "Price1", minWidth: 100, flex: 0.8 },
        { field: "price2", headerName: "Price2", minWidth: 100, flex: 0.8 },
        { field: "price3", headerName: "Price3", minWidth: 100, flex: 0.8 },
        { field: "price4", headerName: "Price4", minWidth: 100, flex: 0.8 },
        { field: "date", headerName: "Date", minWidth: 100, flex: 0.8 },
        {
            field: "edit",
            headerName: "Edit",
            sortable: false,
            minWidth: 100,
            flex: 0.5,
            renderCell: (params) => (
                <Button
                    onClick={() => {
                        // Populate form data with the selected row data
                        setFormData({
                            id: params.row.id,
                            category: params.row.category,
                            name: params.row.name,
                            price1: params.row.price1,
                            price2: params.row.price2,
                            price3: params.row.price3,
                            price4: params.row.price4,
                        });
                    }}
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Edit
                </Button>
            ),
        },
    ];

    // Map daily prices data to rows
    const rows = dailyPrices.map((price) => ({
        id: price._id,
        category: price.category,
        name: price.name,
        price1: price.price1,
        price2: price.price2,
        price3: price.price3,
        price4: price.price4,
        date: new Date(price.date).toISOString().slice(0, 10),
    }));

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.id) {
            // Update existing daily price
            dispatch(updateDailyPrice(formData.id, formData.price1, formData.price2, formData.price3, formData.price4));
        } else {
            // Add new daily price
            dispatch(addDailyPrice(formData.category, formData.name, formData.price1, formData.price2, formData.price3, formData.price4));
        }

        // Clear form data after submission
        setFormData({
            category: "",
            name: "",
            price1: "",
            price2: "",
            price3: "",
            price4: "",
            id: null,
        });
    };

    // Handle row selection
    const handleRowSelection = (selection) => {
        if (selection.length > 0) {
            const selectedId = selection[0];
            const selectedDailyPrice = dailyPrices.find(
                (price) => price._id === selectedId
            );
            const { price1, price2, price3, price4 } = selectedDailyPrice;
            if (selectedDailyPrice) {
                setFormData({
                    id: selectedDailyPrice._id,
                    category: selectedDailyPrice.category,
                    name: selectedDailyPrice.name,
                    price1: selectedDailyPrice.price1,
                    price2: selectedDailyPrice.price2,
                    price3: selectedDailyPrice.price3,
                    price4: selectedDailyPrice.price4,
                });
            }
        } else {
            setFormData({
                category: "",
                name: "",
                price1: "",
                price2: "",
                price3: "",
                price4: "",
                id: null,
            });
        }
    };

    return (
        <div className="w-full h-[90vh] md:p-[20px] mt-[10px] md:mt-[20px] ml-[20px] mr-[10px] bg-gradient-to-r from-[#153448] to-[#3C5B6F] overflow-x-scroll text-[#c8cfd8] rounded-[10px] font-Poppins">
            {/* Form for adding or updating daily prices */}
            <form
                onSubmit={handleFormSubmit}
                className="mb-1 w-full flex flex-col md:flex-row px-5"
            >
                <div className="flex md:flex-row flex-col md:gap-3">
                    <div className="md:mb-4 mb-1 ml-1">
                        <label htmlFor="category" className="block font-semibold mb-1 text-center text-[18px] tracking-wide">Category:</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                            className="md:w-[200px] w-[100%] md:h-[40px] px-3 py-2 rounded-full text-[black] bg-[#c8cfd8] border-b-[0.5px] border-[#c8cfd8]"
                        >
                            <option value="" >Select a category</option>
                            {categoriesData.map((category) => (
                                <option key={category.id} value={category.title} className="">
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4 w-[60%]">
                        <label htmlFor="name" className="block font-semibold mb-1 text-center text-[18px] tracking-wide">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="md:w-[200px] w-[100%] md:h-[40px] px-3 py-2 rounded-full text-[black] bg-[#c8cfd8] border-b-[0.5px] border-[#c8cfd8]"
                        />
                    </div>
                    <div className="mb-4 md:w-[60%]">
                        <label htmlFor="price1" className="block font-semibold mb-1 text-center text-[18px] tracking-wide">Price 1:</label>
                        <input
                            type="text"
                            name="price1"
                            value={formData.price1}
                            onChange={handleInputChange}
                            required
                            className="md:w-[150px] w-[100%] md:h-[40px] px-3 py-2 rounded-full text-[black] bg-[#c8cfd8] border-b-[0.5px] border-[#c8cfd8]"
                        />
                    </div>
                    <div className="mb-4 w-[60%]">
                        <label htmlFor="price2" className="block font-semibold mb-1 text-center text-[18px] tracking-wide">Price 2:</label>
                        <input
                            type="text"
                            name="price2"
                            value={formData.price2}
                            onChange={handleInputChange}
                            required
                            className="md:w-[150px] w-[100%] md:h-[40px] px-3 py-2 rounded-full text-[black] bg-[#c8cfd8] border-b-[0.5px] border-[#c8cfd8]"
                        />
                    </div>
                    <div className="mb-4 w-[60%]">
                        <label htmlFor="price3" className="block font-semibold mb-1 text-center text-[18px] tracking-wide">Price 3:</label>
                        <input
                            type="text"
                            name="price3"
                            value={formData.price3}
                            onChange={handleInputChange}
                            required
                            className="md:w-[150px] w-[100%] md:h-[40px] px-3 py-2 rounded-full text-[black] bg-[#c8cfd8] border-b-[0.5px] border-[#c8cfd8]"
                        />
                    </div>
                    <div className="mb-4 w-[60%]">
                        <label htmlFor="price4" className="block font-semibold mb-1 text-center text-[18px] tracking-wide">Price 4:</label>
                        <input
                            type="text"
                            name="price4"
                            value={formData.price4}
                            onChange={handleInputChange}
                            required
                            className="w-[150px] zw-[100%] md:h-[40px] px-3 py-2 rounded-full text-[black] bg-[#c8cfd8] border-b-[0.5px] border-[#c8cfd8]"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end">
                <button type="submit" className={`${styles.button} !w-max !h-[45px] px-3 !rounded-[5px] mr-3 mb-3 text-white`}>
                    {formData.id ? 'Update' : 'Add'}
                </button>
                </div>
            </form>

            {/* DataGrid for displaying daily prices */}
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
                autoHeight
                onRowSelected={handleRowSelection}
            />
        </div>
    );
};

export default AllDailyPrice;
