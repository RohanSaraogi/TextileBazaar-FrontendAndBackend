import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import logo from "../../Assests/images/logo.png";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    // const term = e.target.value;
    // setSearchTerm(term);

    // const filteredProducts =
    //   allProducts &&
    //   allProducts.filter((product) =>
    //     product.name.toLowerCase().includes(term.toLowerCase())
    //   );
    // setSearchData(filteredProducts);
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?keyword=${searchTerm}`);
    } else {
      navigate("/products");
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      {/* <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          
         

          

        </div>
      </div> */}

      {/* header section */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 1000px:flex items-center justify-between w-full bg-gradient-to-r from-[#153448] from-30% to-[#3C5B6F] to-55% h-[70px] shadow-lg`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-around`}
        >
          {/* Logo Image */}
          <div>
            <Link to="/">
              {/* <img
                  src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                  alt=""
                /> */}
              <img src={logo} alt="" className="w-[220px]" />
            </Link>
          </div>

          {/* categories */}
          {/* <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div> */}

          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex flex-row items-center gap-5 w-[40%] justify-end ">
            {/* -------- search box ------- */}
            <div className="w-[50%] relative text-[#948979]">
              <form onSubmit={handleSearchChange}>
                <input
                  type="text"
                  placeholder="Search Product..."
                  value={searchTerm}
                  // onChange={handleSearchChange}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-[40px] w-full px-2 rounded-full bg-[#3C5B6F]"
                />
                <button type="submit">
                  <AiOutlineSearch
                    size={30}
                    className="absolute right-2 top-1.5 cursor-pointer"
                  />
                </button>
              </form>
              {/* {searchData && searchData.length !== 0 ? (
              <div className="absolute w-full bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                        <br/>
                      </Link>
                    );
                  })}
              </div>
            ) : null} */}
            </div>

            {/* -------- Go To Dashboard ------- */}
            <div>
              {/* <div className=""> */}
              <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
                <div className="relative inline-flex items-center justify-center md:p-4 md:px-3 md:py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#DFD0B8] md:rounded-full shadow-md group w-[15vw]">

                  <span class="absolute inset-0 flex items-center justify-center w-full h-[100%] text-white duration-300 -translate-x-full bg-[#DFD0B8] group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <h1 className=" flex items-center justify-center w-full h-full text-[#DFD0B8] transition-all duration-300 transform group-hover:translate-x-full ease">
                    {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                    {/* <IoIosArrowForward className="ml-1" /> */}
                  </h1>
                </div>
              </Link>
            </div>

            <div className="flex">
              {/* <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#FFD700] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#FFD700] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div> */}

              <div className={`${styles.noramlFlex}`}>
                <div className="relative cursor-pointer w-[3vw]">
                  {isAuthenticated ? (
                    <Link to="/profile">
                      <img
                        src={`${user?.avatar?.url}`}
                        className="w-[45px] h-[45px] rounded-full"
                        alt=""
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <CgProfile size={30} color="rgba(223, 208, 184, 1)" />
                      {/* <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask
                          id="mask0_193_887"
                          style="mask-type:luminance"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="60"
                          height="60"
                        >
                          <path
                            d="M0.5 59.5V0.5H59.5V59.5H0.5Z"
                            fill="white"
                            stroke="white"
                          />
                        </mask>
                        <g mask="url(#mask0_193_887)">
                          <path
                            d="M9.45312 30C9.45312 18.6555 18.6555 9.45312 30 9.45312C41.3446 9.45312 50.5469 18.6555 50.5469 30C50.5469 41.3446 41.3446 50.5469 30 50.5469C18.6555 50.5469 9.45312 41.3446 9.45312 30Z"
                            stroke="#DFD0B8"
                          />
                          <mask
                            id="mask1_193_887"
                            style="mask-type:alpha"
                            maskUnits="userSpaceOnUse"
                            x="14"
                            y="14"
                            width="32"
                            height="32"
                          >
                            <path
                              d="M29.925 15.3261C37.9818 15.3261 44.5238 21.8681 44.5238 29.925C44.5238 37.9818 37.9818 44.5238 29.925 44.5238C21.8681 44.5238 15.3261 37.9818 15.3261 29.925C15.3261 21.8681 21.8681 15.3261 29.925 15.3261Z"
                              fill="#D4D3D3"
                              stroke="#DFD0B8"
                              stroke-width="1.0915"
                            />
                          </mask>
                          <g mask="url(#mask1_193_887)">
                            <path
                              d="M30.0749 15.7625C33.2757 15.7625 35.8749 18.3616 35.8749 21.5625C35.8749 24.7633 33.2757 27.3625 30.0749 27.3625C26.8741 27.3625 24.2749 24.7633 24.2749 21.5625C24.2749 18.3616 26.8741 15.7625 30.0749 15.7625Z"
                              fill="#948979"
                              stroke="#DFD0B8"
                            />
                            <path
                              d="M17.8627 37.879C17.8646 37.8872 17.8696 37.9074 17.8815 37.9419C17.9038 38.0064 17.9416 38.0958 17.9984 38.2092C18.1117 38.4352 18.2889 38.7319 18.5335 39.0758C19.0222 39.7628 19.7659 40.6176 20.7708 41.4511C22.7771 43.1153 25.8141 44.6874 29.9435 44.6874C34.0858 44.6874 37.1954 43.2324 39.2528 41.629C40.2834 40.8258 41.0458 39.9885 41.5393 39.2843C41.7864 38.9317 41.961 38.6197 42.0687 38.3688C42.1835 38.1013 42.199 37.9568 42.1957 37.9176L17.8627 37.879ZM17.8627 37.879C17.8728 37.4193 18.1327 36.8464 18.7038 36.2151C19.2748 35.5841 20.1137 34.9441 21.1629 34.369C23.2606 33.2192 26.1329 32.3648 29.198 32.3374M17.8627 37.879L42.1957 37.9176C42.1344 37.2033 41.7082 36.4874 40.9287 35.7981C40.1515 35.1108 39.0643 34.4885 37.7847 33.9658C35.2255 32.9205 31.9926 32.3125 29.198 32.3374M29.198 32.3374L29.1935 31.8374L29.198 32.3374Z"
                              fill="#948979"
                              stroke="#DFD0B8"
                            />
                          </g>
                        </g>
                      </svg> */}
                    </Link>
                  )}
                </div>
              </div>

              {/* cart popup */}
              {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

              {/* wishlist popup
              {openWishlist ? (
                <Wishlist setOpenWishlist={setOpenWishlist} />
              ) : null} */}
            </div>
          </div>
        </div>
      </div>
      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10 " : null
        }
      w-full h-[60px]  z-50 top-0 left-0 shadow-sm 1000px:hidden bg-gradient-to-r from-[#153448] from-90% to-[#3C5B6F] to-95%`}
      >
        <div className="w-full flex items-center justify-between">
          <div className="text-[#DFD0B8]">
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src={logo}
                alt=""
                className="mt-3 w-[200px] cursor-pointer"
              />
            </Link>
          </div>
          <div>
            {/* <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#FFD700] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div> */}
          </div>
          {/* cart popup */}
          {/* {openCart ? <Cart setOpenCart={setOpenCart} /> : null} */}

          {/* wishlist popup */}
          {/* {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null} */}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#DFD0B8] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#153448] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    // onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    {/* <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#FFD700] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span> */}
                    {/* <p className="mt-5 ml-3 font-bold">Textile Bazzar</p>
                     */}
                     <div className="flex flex-row justify-end items-center gap-5">
                      
                      <div className="ml-5 mt-3">
                        <Link to="/">
                          <img
                            src={logo}
                            alt=""
                            className="mt-3 w-[200px] cursor-pointer"
                          />
                        </Link>
                      </div>
                      <RxCross1
                        size={20}
                        className="ml-4 mt-5 text-[#DFD0B8] cursor-pointer"
                        onClick={() => setOpen(false)}
                      />
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative] text-[#DFD0B8]">
                <form onSubmit={handleSearchChange}>
                  <input
                    type="text"
                    placeholder="Search Product..."
                    value={searchTerm}
                    // onChange={handleSearchChange}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-[40px] w-full px-2 bg-[#3C5B6F] text-[#DFD0B8] border-[#15423F] border-[2px] rounded-full"
                  />
                  <button type="submit">
                    <AiOutlineSearch
                      size={30}
                      className="absolute right-4 text-[#DFD0B8] top-[90px] cursor-pointer"
                    />
                  </button>
                </form>
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} mx-auto rounded-2xl bg-[#3C5B6F] items-center`}>
                <Link to="/shop-create">
                  <h1 className="text-[#DFD0B8] font-medium tracking-wide text-center flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[100px] h-[100px] rounded-full border-[3px] border-[#DFD0B8]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#DFD0B8]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#DFD0B8]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
