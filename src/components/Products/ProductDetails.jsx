import React, { useEffect, useState } from "react";
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage,
//   AiOutlineShoppingCart,
//   AiOutlineCheckCircle ,
// } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import trustedSeller from "../../Assests/images/trusted seller.jpg"
// import trustedplatform from "../../Assests/images/trust platform.png"
// import directContact from "../../Assests/images/direct contact.jpg"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import { server } from "../../server";
import styles from "../../styles/styles";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../redux/actions/wishlist";
// import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "./Ratings";
import axios from "axios";

const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  // const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  // const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const [subscribe, setSubscribe] = useState([]);
  const [verificationData, setVerificationData] = useState([]);

  const checkVerificationStatus = async () => {
    try {
      const res = await axios.get(
        `https://eshop-freelance-5.onrender.com/api/v2/gstverfiy/gst-verification-status/${
          data && data?.shop._id
        }`,
        {
          withCredentials: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("gst", res.data);
      setVerificationData(res.data.gstVerificationData);
    } catch (error) {
      toast.error("Failed to fetch GST verification status.");
    }
  };

  // Check verification status on component mount
  useEffect(() => {
    checkVerificationStatus();
  }, [data && data?.shop._id]);

  console.log("verified", verificationData);

  useEffect(() => {
    axios
      .get(`${server}/sub/details/email`, { withCredentials: true })
      .then((res) => {
        setSubscribe(res.data.subscription);
      });
  }, []);
  console.log(subscribe);
  const hideSubscriptionSection =
    subscribe &&
    subscribe.status == "active" &&
    subscribe.planType === "premium";
  console.log(hideSubscriptionSection);

  console.log(user);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsShop(data && data?.shop._id));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // const decrementCount = () => {
  //   if (count > 1) {
  //     setCount(count - 1);
  //   }
  // };

  // const removeFromWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(removeFromWishlist(data));
  // };

  // const addToWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(addToWishlist(data));
  // };

  // const addToCartHandler = (id) => {
  //   const isItemExists = cart && cart.find((i) => i._id === id);
  //   if (isItemExists) {
  //     toast.error("Item already in cart!");
  //   } else {
  //     if (data.stock < 1) {
  //       toast.error("Product stock limited!");
  //     } else {
  //       const cartData = { ...data, qty: count };
  //       dispatch(addTocart(cartData));
  //       toast.success("Item added to cart successfully!");
  //     }
  //   }
  // };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings =
    products &&
    products.reduce(
      (acc, product) =>
        acc + product.reviews.reduce((sum, review) => sum + review.rating, 0),
      0
    );

  const avg = totalRatings / totalReviewsLength || 0;

  const averageRating = avg.toFixed(2);

  //   const handleInquiryClick = async () => {
  //     // Get the product and seller information (you can adjust as per your app structure)
  //     const productId = data.name;
  //     const sellerEmail = data.shop.email;
  //     const userEmail = user.email

  //     // Create an inquiry object
  //     const inquiryData = {
  //         productId,
  //         sellerEmail,
  //         userEmail,
  //         userMessage: 'I am interested in this product. Can you provide more details?',
  //     };

  //         // Send the inquiry to the server endpoint
  //         const response = await axios.post(`${server}/mail/send-inquiry`, inquiryData);

  //         if (response.status === 201) {
  //             // Inquiry sent successfully
  //             toast.success('Inquiry sent successfully!');
  //         } else {
  //             // Failed to send inquiry
  //             toast.error('Failed to send inquiry. Please try again.');
  //         }

  // };

  //   const handleMessageSubmit = async () => {
  //     if (isAuthenticated) {
  //       const groupTitle = data._id + user._id;
  //       const userId = user._id;
  //       const sellerId = data.shop._id;
  //       await axios
  //         .post(`${server}/conversation/create-new-conversation`, {
  //           groupTitle,
  //           userId,
  //           sellerId,
  //         })
  //         .then((res) => {
  //           navigate(`/inbox?${res.data.conversation._id}`);
  //         })
  //         .catch((error) => {
  //           toast.error(error.response.data.message);
  //         });
  //     } else {
  //       toast.error("Please login to create a conversation");
  //     }
  //   };

  //   const getUnit = (data) => {
  //     debugger
  //     switch (data) {
  //       case 'Yarn':
  //         return 'kg';
  //       case 'Fabric-cotton':
  //         return 'mtrs';
  //       case 'Finished goods':
  //         return 'Spools';
  //       case 'Machinery':
  //         return 'Taka';
  //       case 'Dyes and chemicals':
  //         return 'ltr';

  //     }
  //   };

  return (
    <div className="bg-[white]">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5 overflow-y-hidden">
            <div className="block  w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                {/* Main Big Image */}
                <img
                  src={`${data && data.images[select]?.url}`}
                  alt=""
                  className="lg:w-[80%] w-full h-[70%] md:h-[70%] rounded-xl"
                />
                <div className="flex my-3 ">
                  {/* Images of the product */}
                  {data &&
                    data.images.map((i, index) => (
                      <div className="cursor-pointer mr-1 w-[200px]">
                        <img
                          src={`${i?.url}`}
                          alt=""
                          className="w-[30vw] h-[15vh] overflow-hidden mr-3 mt-3 border-2 p-0 rounded-xl"
                          onClick={() => setSelect(index)}
                        />
                      </div>
                    ))}
                  <div className="cursor-pointer"></div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className="text-[30px] font-[600] font-Inter text-[#333] tracking-wide leading-20">
                  {data.name}
                </h1>
                {/* <p>{data.description}</p> */}
                <div className="border border-solid border-[#E4E4E4] tracking-widest my-4" />

                <div className="flex pt-3 mt-5">
                  <h4 className="font-[700] text-[35px] text-[#153448] font-Inter tracking-wide">
                    ₹{data.discountPrice}/{data.originalPrice}
                  </h4>
                  {/* <h3 className={`${styles.price}`}>
                    {data.originalPrice ? data.originalPrice + "₹/kg" : null}
                  </h3> */}
                </div>
                <div className="font-[500] mt-5  text-[20px] font-Inter tracking-wide">
                  Available Stock:{" "}
                  <div className="font-bold text-[25px]">
                    {data?.stock} {data.originalPrice}
                  </div>
                </div>

                {/* <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                  onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div> */}

                <div className="flex mt-3 items-center gap-3 justify-start ">
                  {/* <img src={trustedSeller} className="max-w-[20%] max-h-[300px]"/>
                  <img src={trustedplatform} className="max-w-[15%] max-h-[200px]"/>
                  <img src={directContact} className="max-w-[20%] max-h-[300px]"/> */}
                  {/* <span className="text-xl">Best Search Tags: {data.tags}</span> */}
                </div>

                <div className="text-red-700 font-medium">
                  {!hideSubscriptionSection && (
                    <span>Subscribe to get the Seller information!</span>
                  )}
                </div>
                <div className="flex items-center pt-5">
                  {/* <Link to={`/shop/preview/${data?.shop._id}`}>
                    <img
                      src={`${data?.shop?.avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link> */}
                  {/* <div className="pr-8">
                    <Link to={`/shop/preview/${data?.shop._id}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      ({averageRating}/5) Ratings
                    </h5>
                  </div> */}

                  {/* ------------ Send Enquiry Button --------------- */}
                  {hideSubscriptionSection && (
                    // <div
                    //   className={`${styles.button}  mt-4 !rounded !h-11`}
                    //   onClick={handleInquiryClick}
                    // >
                    //   <span className="text-white flex items-center">
                    //     Send Inquiry <AiOutlineMessage className="ml-1" />
                    //   </span>

                    <button class="flex items-center bg-[#153448] text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-2xl hover:border-2 hover:border-[#dfd0b8] transition-all duration-300 hover:gap-2 hover:translate-x-3 w-[250px]">
                      Send Enquiry to the Seller
                      <svg
                        class="w-5 h-5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo
            data={data}
            products={products}
            totalReviewsLength={totalReviewsLength}
            averageRating={averageRating}
            verificationData={verificationData}
          />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfo = ({
  data,
  products,
  totalReviewsLength,
  averageRating,
  verificationData,
}) => {
  const [active, setActive] = useState(1);
  const [subscribe, setSubscribe] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/sub/details/email`, { withCredentials: true })
      .then((res) => {
        setSubscribe(res.data.subscription);
      });
  }, []);
  console.log(subscribe);
  const hideSubscriptionSection =
    subscribe &&
    subscribe.status === "active" &&
    subscribe.planType === "premium";
  console.log(hideSubscriptionSection);

  // function shopDetails(){

  // }

  return (
    <div className="bg-[#DFD0B8]/20 px-3 800px:px-10 py-2 rounded-[50px]">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        {/* <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div> */}
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            {data.description}
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full min-h-[40vh] flex flex-col items-center py-3 overflow-y-scroll">
          {data &&
            data.reviews.map((item, index) => (
              <div className="w-full flex my-2">
                <img
                  src={`${item.user.avatar?.url}`}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-2 ">
                  <div className="w-full flex items-center">
                    <h1 className="font-[500] mr-3">{item.user.name}</h1>
                    <Ratings rating={data?.ratings} />
                  </div>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}

          <div className="w-full flex justify-center">
            {data && data.reviews.length === 0 && (
              <h5>No Reviews have for this product!</h5>
            )}
          </div>
        </div>
      ) : null}

      {active === 3 ? (
        hideSubscriptionSection ? (
          <div className="w-full block 800px:flex p-5">
            <div className="w-full 800px:w-[50%]">
              <Link to={`/shop/preview/${data.shop._id}`}>
                <div className="flex items-center">
                  <img
                    src={`${data?.shop?.avatar?.url}`}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  <div className="pl-3">
                    <h3 className="font-bold">{data.shop.name}</h3>
                    {/* <h5 className="pb-2 text-[15px]">
                    ({averageRating}/5) Ratings
                  </h5> */}
                  </div>
                </div>
              </Link>
              <p className="pt-2">{data.shop.description}</p>
            </div>
            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end border-l-2 pl-5">
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right">
                  <tbody>
                    <tr class="bg-[#DFD0B8]/1 border-b">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Joined On:
                      </th>
                      <td class="px-6 py-4">
                        {data.shop?.createdAt?.slice(0, 10)}
                      </td>
                    </tr>
                    <tr class="bg-[#DFD0B8]/1 border-b ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Total Products:
                      </th>
                      <td class="px-6 py-4">{products && products.length}</td>
                    </tr>
                    <tr class="bg-[#DFD0B8]/1 border-b  ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Address:
                      </th>
                      <td class="px-6 py-4">
                        {data.shop.address},{data.shop.zipCode}
                      </td>
                    </tr>
                    <tr class="bg-[#DFD0B8]/1 border-b  ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Verification:
                      </th>
                      <td class="px-6 py-4">
                        <span
                          className="font-[800] justify-center items-center"
                          style={{
                            display: "inline-block",
                            overflow: "hidden",
                            backgroundColor: "slate",
                            borderRadius: "50%",
                            padding: "0px",
                          }}
                        >
                          <AiOutlineCheckCircle
                            style={{ color: "green" }}
                            size={24}
                          />
                        </span>
                      </td>
                    </tr>
                    <tr class="bg-[#DFD0B8]/1 ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Email:
                      </th>
                      <td class="px-6 py-4">
                        <a
                          href={`mailto:${data.shop.email}`}
                          className="font-[500] text-slate-500"
                        >
                          {data.shop.email}
                        </a>
                      </td>
                    </tr>
                    <tr class="bg-[#DFD0B8]/1 ">
                      <th
                        scope="row"
                        class="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        Contact No:
                      </th>
                      <td class="px-6 py-4">
                        <a
                          href={`tel:${data.shop.phoneNumber}`}
                          className="font-[500] text-slate-500"
                        >
                          {data.shop.phoneNumber}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              <div className="px-2 pb-2">
                  <Link to={`/shop/preview/${data.shop._id}`}>
                    <div className="w-full h-[40px] bg-[#153448] text-[#DFD0B8] rounded-md flex items-center justify-center mt-5 p-2">
                      <h4 className="text-white">Visit Shop</h4>
                    </div>
                  </Link>
                </div>
              </div>

              {/* <div className="text-left">
              <h5 className="font-[600]">
                Joined on:{" "}
                <span className="font-[500] text-slate-500">
                  {data.shop?.createdAt?.slice(0, 10)}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products:{" "}
                <span className="font-[500] text-slate-500">
                  {products && products.length}
                </span>
              </h5>
              <h5 className="font-[600] pt-3">
                Address:{" "}
                <span className="font-[500] text-slate-500">
                  {data.shop.address},{data.shop.zipCode}
                </span>
              </h5>
              {verificationData.length > 0 && verificationData[0].verified && (
              <h5 className="font-[600] pt-3 flex gap-3">
                Verified Seller:{" "}
                <span className="font-[800] justify-center items-center" style={{ display: 'inline-block',overflow: 'hidden', backgroundColor: 'slate', borderRadius: '50%', padding: '0px' }}>
                <AiOutlineCheckCircle style={{ color: 'green' }} size={24}/>
                </span>
              </h5>
              )}
              <h5 className="font-[600] pt-3">
                Email:{" "}
                <a href={`mailto:${data.shop.email}`} className="font-[500] text-slate-500">{data.shop.email}</a>
              </h5>
              <h5 className="font-[600] pt-3">
                Phone No:{" "}
                <a href={`tel:${data.shop.phoneNumber}`} className="font-[500] text-slate-500">{data.shop.phoneNumber}</a>
              </h5>
              <Link to={`/shop/preview/${data.shop._id}`}>
                <div
                  className="w-[200px] h-[40px] bg-[#153448] text-[#DFD0B8] rounded-md flex items-center justify-center mt-5 hover:scale-105"
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div> */}
            </div>
          </div>
        ) : (
          // This is the block that will be rendered when `hideSubscriptionSection` is false
          <div className="buy-premium-plan-section w-full  p-5">
            <div className="mb-10 text-xl font-semibold">
              <span>Buy Premium Plan</span>,To access more features, please
              consider buying a premium plan.
            </div>
            <Link to="/" className="buy-plan-button ">
              <button className="py-2 bg-teal-900 text-white rounded-md  w-[150px]">
                Buy Premium
              </button>
            </Link>
          </div>
        )
      ) : null}
    </div>
  );
};

export default ProductDetails;
