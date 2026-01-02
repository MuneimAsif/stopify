import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({location,getLocation,openDropdown,setOpenDropdown}) => {
  const {cartItem} = useCart()
  const {user} = useUser()
  const [openNav, setOpenNav] = useState(false)
  const navigate = useNavigate()
const toggleDropdwn = ()=>{
  setOpenDropdown(!openDropdown)
}
  return (
    <div className="bg-[#ffffff] py-3 shadow-2xl px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-7 items-center md:ms-5">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl text-[#111827]">
              <span className="text-[#FBBF24] font-stretch-50%">S</span>topify
            </h1>
          </Link>
          <div className="md:flex gap-1 cursor-pointer text-gray-700 items-center hidden">
           <MapPin className="text-[#F59E0B]" />
           <span className="font-semibold">{location ? <div className="-space-y-2">
            <p>{location.city}</p>
            <p>{location.country}</p>
           </div>:"Add Location" } </span>
           <FaCaretDown onClick={toggleDropdwn} />
          </div>
          {
            openDropdown ? <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">Change Location <span onClick={toggleDropdwn}><CgClose /></span></h1>
              <button onClick={getLocation} className="bg-[#F59E0B] text-white px-3 py-1 rounded-md cursor-pointer">Detect My Location</button>
            </div> : null
          }
        </div>
        {/* menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="md:flex gap-7 items-center text-xl font-semibold hidden" >
            <NavLink className={({isActive})=>`${isActive ? "text-[#F59E0B] border-b-3 transition-all border-[#F59E0B]":"text-[#374151]"} cursor-pointer hover:text-[#F59E0B]`} to={'/'}><li>Home</li></NavLink>

            <NavLink className={({isActive})=>`${isActive ? "text-[#F59E0B] border-b-3 transition-all border-[#F59E0B]":"text-[#374151]"} cursor-pointer hover:text-[#F59E0B]`} to={'/products'}> <li>Products</li></NavLink>

            <NavLink className={({isActive})=>`${isActive ? "text-[#F59E0B] border-b-3 transition-all border-[#F59E0B]":"text-[#374151]"} cursor-pointer hover:text-[#F59E0B]`} to={'/about'}> <li>About</li></NavLink>

            <NavLink className={({isActive})=>`${isActive ? "text-[#F59E0B] border-b-3 transition-all border-[#F59E0B]":"text-[#374151]"} cursor-pointer hover:text-[#F59E0B]`} to={'/contact'}> <li>Contact</li></NavLink>
          </ul>
          <Link to={'/cart'} className="relative">
          <IoCartOutline className="h-7 w-7 text-[#00000] hover:text-[#F59E0B]" onClick={()=> !user ? alert("Login First") : navigate("/") } />
          <span className="bg-[#000000] hover:bg-[#F59E0B] px-2 rounded-full absolute -top-3 -right-3 text-[#ffffff]">{cartItem.length}</span>
          <div className="hidden md:block"></div>
          </Link>
           <SignedOut>
        <SignInButton className="bg-[#F59E0B] text-white px-3 py-1 rounded-md cursor-pointer" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <div>
        {
          openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className="h-7 w-7 md:hidden" />:<HiMenuAlt1 onClick={()=>setOpenNav(true)} className="h-7 w-7 md:hidden"/>
        }
      </div>
        </nav>
      </div>
      <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
};

export default Navbar;