// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import { Button } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAdvertisements, addAdvertisement, deleteAdvertisement, updateAdvertisement } from "../../redux/actions/advertisment"; // Import Redux actions

// const AdvertisementManager = () => {
//     const dispatch = useDispatch();
//     const { advertisements, loading, error } = useSelector((state) => state.advertisements);

//     // State for form data and edit mode
//     const [formData, setFormData] = useState({
//         name: "",
//         link: "",
//         startDate: "",
//         endDate: "",
//         images: [],
//     });

//     const [editMode, setEditMode] = useState(false);
//     const [editId, setEditId] = useState("");

//     useEffect(() => {
//         // Fetch advertisements when the component mounts
//         dispatch(fetchAdvertisements());
//     }, [dispatch]);

//     // Handle form input changes
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle file input changes
//     const handleFileChange = (event) => {
//         const files = event.target.files;
//         setFormData({
//             ...formData,
//             images: files,
//         });
//     };

//     // Handle form submission
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         const newFormData = new FormData();
//         newFormData.append("name", formData.name);
//         newFormData.append("link", formData.link);
//         newFormData.append("startDate", formData.startDate);
//         newFormData.append("endDate", formData.endDate);
//         // Append images to the form data
//         for (const file of formData.images) {
//             newFormData.append("images", file);
//         }

//         // Dispatch the appropriate action based on edit mode
//         if (editMode) {
//             // Update existing advertisement
//             dispatch(updateAdvertisement(editId, newFormData));
//         } else {
//             // Add new advertisement
//             dispatch(addAdvertisement(newFormData));
//         }

//         // Reset form data and edit mode
//         setFormData({
//             name: "",
//             link: "",
//             startDate: "",
//             endDate: "",
//             images: [],
//         });
//         setEditMode(false);
//         setEditId("");
//     };

//     // Handle edit button click
//     const handleEdit = (ad) => {
//         // Populate form fields with selected advertisement data
//         setFormData({
//             name: ad.name,
//             link: ad.link,
//             startDate: ad.startDate,
//             endDate: ad.endDate,
//             images: [],
//         });

//         // Set edit mode and the ID of the advertisement being edited
//         setEditMode(true);
//         setEditId(ad._id);
//     };

//     // Handle delete button click
//     const handleDelete = (id) => {
//         // Dispatch the action to delete an advertisement
//         dispatch(deleteAdvertisement(id));
//     };

//     // DataGrid columns configuration
//     const columns = [
//         { field: "name", headerName: "Name", width: 150 },
//         { field: "link", headerName: "Link", width: 300 },
//         { field: "startDate", headerName: "Start Date", width: 150 },
//         { field: "endDate", headerName: "End Date", width: 150 },
//         {
//             field: "actions",
//             headerName: "Actions",
//             width: 200,
//             renderCell: (params) => (
//                 <div>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleEdit(params.row)}
//                         style={{ marginRight: 8 }}
//                     >
//                         Edit
//                     </Button>
//                     <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => handleDelete(params.row._id)}
//                     >
//                         Delete
//                     </Button>
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//             {/* Form to add or update an advertisement */}
//             <form onSubmit={handleFormSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Link:</label>
//                     <input
//                         type="text"
//                         name="link"
//                         value={formData.link}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Start Date:</label>
//                     <input
//                         type="date"
//                         name="startDate"
//                         value={formData.startDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>End Date:</label>
//                     <input
//                         type="date"
//                         name="endDate"
//                         value={formData.endDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Images:</label>
//                     <input
//                         type="file"
//                         name="images"
//                         multiple
//                         onChange={handleFileChange}
//                         required={!editMode} // Only required in add mode
//                     />
//                 </div>
//                 <Button type="submit" variant="contained" color="primary">
//                     {editMode ? "Update Advertisement" : "Add Advertisement"}
//                 </Button>
//             </form>

//             {/* DataGrid to display advertisements */}
//             <div style={{ height: 400, width: "100%" }}>
//                 <DataGrid
//                     rows={advertisements}
//                     columns={columns}
//                     loading={loading}
//                     getRowId={(row) => row._id}
//                 />
//             </div>
//         </div>
//     );
// };

// export default AdvertisementManager;

// import React, { useEffect, useState } from "react";
// import { DataGrid } from "@material-ui/data-grid";
// import { Button } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAdvertisements, addAdvertisement, deleteAdvertisement, updateAdvertisement } from "../../redux/actions/advertisment"; // Import Redux actions
// import { AiOutlinePlusCircle } from "react-icons/ai";
// // Import necessary dependencies


// const AdvertisementManager = () => {
//     const dispatch = useDispatch();
//     const { advertisements, loading } = useSelector((state) => state.advertisements);
//     const [imagesads, setImagesads] = useState([]);

//     // State for form data and edit mode
//     const [formData, setFormData] = useState({
//         name: "",
//         link: "",
//         startDate: "",
//         endDate: "",
//         images: [], // Image file
//     });

//     const [editMode, setEditMode] = useState(false);
//     const [editId, setEditId] = useState(null);

//     useEffect(() => {
//         // Fetch advertisements when the component mounts
//         dispatch(fetchAdvertisements());
//     }, [dispatch]);

//     // Handle form input changes
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     // Handle file input changes
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         setFormData({
//             ...formData,
//             image: file,
//         });
//     };
//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
    
//         setImagesads([]);
    
//         files.forEach((file) => {
//           const reader = new FileReader();
    
//           reader.onload = () => {
//             if (reader.readyState === 2) {
//                 setImagesads((old) => [...old, reader.result]);
//             }
//           };
//           reader.readAsDataURL(file);
//         });
//       };
//     // Upload image to Cloudinary and return the public_id and url

    
//     const uploadImageToCloudinary = async (imageFile) => {
//         try {
//             const formData = new FormData();
//             formData.append("file", imageFile);
//             formData.append("upload_preset", "n0zwvhca"); // Replace with your Cloudinary upload preset

//             const response = await fetch("https://api.cloudinary.com/v1_1/dvufn2zyp/image/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             const data = await response.json();

//             if (data.secure_url && data.public_id) {
//                 // Return the public_id and url
//                 return {
//                     public_id: data.public_id,
//                     url: data.secure_url,
//                 };
//             } else {
//                 throw new Error("Image upload to Cloudinary failed.");
//             }
//         } catch (error) {
//             console.error("Error uploading image to Cloudinary:", error);
//             throw error;
//         }
//     };

//     // Handle form submission
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         let imagesLinks = [];
//         if (formData.file) {
//             try {
//                 // Upload the image to Cloudinary and get the public_id and url
//                 const imageLinks = await uploadImageToCloudinary(formData.file);
//                 imagesLinks.push(imageLinks);
//             } catch (error) {
//                 console.error("Error uploading image:", error);
//                 return;
//             }
//         }

//         const adData = {
//             name: formData.name,
//             link: formData.link,
//             startDate: formData.startDate,
//             endDate: formData.endDate,
//             images: imagesLinks, // Pass the images array with public_id and url
//         };

//         if (editMode) {
//             // Update existing advertisement
//             dispatch(updateAdvertisement(editId, adData));
//         } else {
//             // Add new advertisement    
//             dispatch(addAdvertisement(adData));
//         }

//         // Reset form data and edit mode
//         setFormData({
//             name: "",
//             link: "",
//             startDate: "",
//             endDate: "",
//             images: [],
//         });
//         setEditMode(false);
//         setEditId(null);
//     };

//     // Handle edit button click
//     const handleEdit = (ad) => {
//         // Populate form fields with selected advertisement data
//         setFormData({
//             name: ad.name,
//             link: ad.link,
//             startDate: ad.startDate,
//             endDate: ad.endDate,
//             images: [], // Reset the image
//         });

//         // Set edit mode and the ID of the advertisement being edited
//         setEditMode(true);
//         setEditId(ad._id);
//     };

//     // Handle delete button click
//     const handleDelete = (id) => {
//         // Dispatch the action to delete an advertisement
//         dispatch(deleteAdvertisement(id));
//     };

//     // DataGrid columns configuration
//     const columns = [
//         { field: "name", headerName: "Name", width: 150 },
//         { field: "link", headerName: "Link", width: 300 },
//         { field: "startDate", headerName: "Start Date", width: 150 },
//         { field: "endDate", headerName: "End Date", width: 150 },
//         {
//             field: "actions",
//             headerName: "Actions",
//             width: 200,
//             renderCell: (params) => (
//                 <div>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => handleEdit(params.row)}
//                         style={{ marginRight: 8 }}
//                     >
//                         Edit
//                     </Button>
//                     <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => handleDelete(params.row._id)}
//                     >
//                         Delete
//                     </Button>
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div className="w-full mx-8 pt-1 mt-10 bg-white">
//             {/* Form to add or update an advertisement */}
//             <form onSubmit={handleFormSubmit}>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Link:</label>
//                     <input
//                         type="text"
//                         name="link"
//                         value={formData.link}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Start Date:</label>
//                     <input
//                         type="date"
//                         name="startDate"
//                         value={formData.startDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>End Date:</label>
//                     <input
//                         type="date"
//                         name="endDate"
//                         value={formData.endDate}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div>
//           <label className="pb-2">
//             Upload Images <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             name="images"
//             id="upload"
//             className="hidden"
//             multiple
//             onChange={handleImageChange}
//           />
//           <div className="w-full flex items-center flex-wrap">
//             <label htmlFor="upload">
//               <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
//             </label>
//             {imagesads &&
//               imagesads.map((i) => (
//                 <img
//                   src={i}
//                   key={i}
//                   alt=""
//                   className="h-[120px] w-[120px] object-cover m-2"
//                 />
//               ))}
//           </div>
//           <br />
          
//         </div>
//                 <Button type="submit" variant="contained" color="primary">
//                     {editMode ? "Update Advertisement" : "Add Advertisement"}
//                 </Button>
//             </form>

//             {/* DataGrid to display advertisements */}
//             <div style={{ height: 400, width: "100%" }}>
//                 <DataGrid
//                     rows={advertisements}
//                     columns={columns}
//                     loading={loading}
//                     getRowId={(row) => row._id}
//                 />
//             </div>
//         </div>
//     );
// };

// export default AdvertisementManager;




import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addAdvertisement} from "../../redux/actions/advertisment"
import { categoriesData } from "../../static/data";
import { toast } from "react-toastify";

const AdvertisementManager = () => {
  const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [startDate, setStartDate] = useState(null); // Initialize with null or a default date value
  const [endDate, setEndDate] = useState(null); // Initialize with null or a default date value

  const handleStartDateChange = (e) => {
    // Handle start date change
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    // Handle end date change
    setEndDate(e.target.value);
  };

  

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newForm = new FormData();

    images.forEach((image) => {
      newForm.set("images", image);
    });
    newForm.append("name", name);
    newForm.append("link", link);
    newForm.append("startDate", startDate);
    newForm.append("endDate", endDate);
    
    
    dispatch(
        addAdvertisement({
        name,
        link,
        startDate,
        endDate,
        images,
      },
      { withCredentials: true }
    )
    );
  };

  return (
    <div className="w-full mx-8 pt-1 p-20 mt-10 bg-white">
      <h5 className="text-[30px] font-Poppins text-center">Create Advertisment</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="border border-gray-300 rounded-[3px] placeholder-gray-400 "
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your product name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            link <span className="text-red-500">*</span>
          </label>
          <input
           
            required
            
            type="text"
            name="link"
            value={link}
            className=" border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none "
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter your product description..."
          />
        </div>
        <br />
        <div>
                     <label>Start Date:</label>
                   <input
                        type="date"
                        name="startDate"
                        value={startDate}
                        onChange={handleStartDateChange}
                        required
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={handleEndDateChange}
                        required
                    />
                </div>
        <br />
        
        
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  src={i}
                  key={i}
                  alt=""
                  className="h-[120px] w-[120px] object-cover m-2"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdvertisementManager;

