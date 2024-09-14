import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
 const {user} = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="w-full bg-gradient-to-r from-[#153448] to-[#3C5B6F] shadow-sm rounded-[10px] px-8 pt-8 pb-4 text-[#c8cfd8] tracking-wide font-Poppins">
      <div
        className={`${active === 1 ? "border-2 border-solid rounded-full border-[#DFD0B8] px-2 p-1 scale-110" : ""} flex items-center cursor-pointer w-full mb-8 hover:scale-110`}
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "#DFD0B8" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[#DFD0B8] font-semibold " : ""
          } 800px:block hidden`}
        >
          Profile
        </span>
      </div>
      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Refunds
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Inbox
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Track Order
        </span>
      </div> */}

      <div
        className={`${active === 6 ? "border-2 border-solid rounded-full border-[#DFD0B8] px-2 p-1 scale-110" : ""} flex items-center cursor-pointer w-full mb-8 hover:scale-110`}
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "#DFD0B8" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[#DFD0B8] font-semibold" : ""
          } 800px:block hidden`}
        >
          Change Password
        </span>
      </div>

      {/* <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red]" : ""
          } 800px:block hidden`}
        >
          Address
        </span>
      </div> */}

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className={`${active === 8 ? "border-2 border-solid rounded-full border-[#DFD0B8] px-2 p-1 scale-110" : ""} flex items-center cursor-pointer w-full mb-8 hover:scale-105`}
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "#DFD0B8" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[#DFD0B8]" : ""
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )}
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8 hover:scale-110"
        onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "#DFD0B8" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[#DFD0B8]" : ""
          } 800px:block hidden`}
        >
          Log out
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
