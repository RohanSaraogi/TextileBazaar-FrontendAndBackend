import React, { useState } from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data, isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  };
  // console.log(data.category)
  const getUnit = (data) => {
    // debugger
    switch (data) {
      case "Yarn":
        return "kg";
      case "Fabric-cotton":
        return "mtrs";
      case "Finished goods":
        return "Spools";
      case "Machinery":
        return "Taka";
      case "Dyes and chemicals":
        return "ltr";
    }
  };
  //border-2 border-solid border-teal-900
  // bg-[#DFD0B8]/30
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-lg  relative cursor-pointer transition-transform duration-300 transform lg:hover:scale-110 leading-7 animate-appear"
      style={{animationTimeline:"view()",animationRange: "entry 0% cover 40%"}}>
        <Link
          to={`${
            isEvent === true
              ? `/product/${data._id}?isEvent=true`
              : `/product/${data._id}`
          }`}
        >
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full h-[200px] object-fill rounded-t-xl"
          />
        </Link>
        <div className="mx-3 mb-1 md:m-5">
          <Link to={`/shop/preview/${data?.shop._id}`}>
            <h5 className={`${styles.shop_name} text-[#1B1B28] tracking-wide`}>
              {data.shop.name}
            </h5>
          </Link>
          <Link
            to={`${
              isEvent === true
                ? `/product/${data._id}?isEvent=true`
                : `/product/${data._id}`
            }`}
          >
            <h4 className="pb-3 font-[500] tracking-wide text-xl max-sm:text-sm max-sm:h-[55px] h-[70px]">
              {data.name.length > 25
                ? data.name.slice(0, 25) + "..."
                : data.name}
            </h4>

            {/* <div className="flex">
          <Ratings rating={data?.ratings} />
          </div> */}

            <div className="pt-8 flex flex-col items-center justify-between">
              <div className="flex flex-row tracking-wider">
                <h5 className={`${styles.productDiscountPrice} max-sm:text-sm`}>
                  ₹{data.discountPrice}/{data.originalPrice}
                </h5>
                {/* <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + " ₹" : null}/kg
              </h4> */}
              </div>
              <span className="font-[500] text-[14px] md:text-[15px] text-[#948979]/90 max-sm:text-sm tracking-wider">
                Quantity: {data?.stock} {data.originalPrice}
              </span>
            </div>
          </Link>
        </div>

        {/* side options */}
        <div>
          {/* {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-2 top-5"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )} */}
          {/* <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-2 top-14"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          /> */}
          {/* <AiOutlineShoppingCart
            size={25}
            className="cursor-pointer absolute right-2 top-24"
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          /> */}
          {/* {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null} */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
