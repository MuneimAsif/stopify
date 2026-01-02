
import { useCart } from "../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import emptyCart from "../assets/empty-cart.png"
import { useNavigate } from "react-router-dom";

const Cart = () => {
const { cartItem, updateQuantity,deleteItem } = useCart();
  console.log(cartItem);
  const totalPrice = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0);
const navigate = useNavigate()
  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl md:ms-5">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((x, i) => {
                return (
                  <div
                    key={i}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-full"
                  >
                    <div className="flex  items-center gap-4">
                      <img
                        src={x.thumbnail}
                        alt={x.title}
                        className="w-20 h-20 rounded-md -ms-5 sm:-ms-0 md:-ms-0 lg:-ms-0"
                      />
                      <div>
                        <h1 className="w-[100px] sm:w-[200px] md:w-[300px] lg:w-[400px] -ms-7 sm:-ms-0 md:-ms-0 lg:-ms-0 line-clamp-2">{x.title}</h1>
                        <p className="text-[#F59E0B] font-semibold text-lg -ms-7 sm:-ms-0 md:-ms-0 lg:-ms-0">
                          ${x.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#F59E0B] text-white flex gap-3 p-2 rounded-md font-bold text-xl">
                       <button onClick={()=>updateQuantity(cartItem, x.id, "decrease")} className="cursor-pointer">-</button>
                      <span>{x.quantity}</span>
                      <button onClick={()=>updateQuantity( cartItem, x.id, "increase")} className="cursor-pointer">+</button>
                    </div>
                    <span onClick={()=>deleteItem(x.id)} className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl">
                      <FaRegTrashAlt className="text-[#F59E0B] text-2xl cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
              <div className="bg-gray-100 rounded-md p-7 mt-4 space-y-2 ">
                <h1 className="text-gray-800 font-bold text-xl">
                  Delivery Info 
                </h1>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="p-2 rounded-md !text-gray-600 placeholder-gray-600"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="p-2 rounded-md !text-gray-600 placeholder-gray-600"
                  />
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">State</label>
                    <input
                      type="text"
                      placeholder="Enter Your State"
                      className="p-2 rounded-md w-full !text-gray-600 placeholder-gray-600"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Postcode</label>
                    <input
                      type="text"
                      placeholder="Enter your postcode"
                      className="p-2 rounded-md w-full !text-gray-600 placeholder-gray-600"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Country</label>
                    <input
                      type="text"
                      placeholder="Enter Your Country"
                      className="p-2 rounded-md w-full !text-gray-600 placeholder-gray-600"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="">Phone No</label>
                    <input
                      type="text"
                      placeholder="Enter your phone no"
                      className="p-2 rounded-md w-full !text-gray-600 placeholder-gray-600"
                    />
                  </div>
                </div>
                <button onClick={()=>navigate("/")} className="bg-[#F59E0B] text-white px-3 py-1 rounded-md mt-3 cursor-pointer w-full">
                  Submit
                </button>
            
              </div>
              <div className="bg-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max">
                <h1 className="text-gray-800 font-bold text-xl">
                  Bill Details
                </h1>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <LuNotebookPen />
                    </span>
                    Items Total
                  </h1>
                  <p>${Math.round(totalPrice)}</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <MdDeliveryDining />
                    </span>
                    Delivery Charges
                  </h1>
                  <p className="text-[#F59E0B] font-semibold">
                    <span className="text-gray-600 line-through">$25 </span>Free
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="flex gap-1 items-center text-gray-700">
                    <span>
                      <GiShoppingBag />
                    </span>
                    Handling
                  </h1>
                  <p className="text-[#F59E0B] font-semibold">$5</p>
                </div>  
                <hr className="text-gray-200 mt-2"/>
                <div className="flex justify-between items-center ">
                  <h1 className="font-semibold text-lg">Grand Total</h1>
                  <p clas sName="font-semibold text-lg">${Math.round(totalPrice + 5)}</p> 
                </div>
                <div>
                  <h1 clas  sName="font-semibold text-gray-700 mt-7">Apply Promo Code</h1>
                  <div className="flex gap-3">
                    <input type="text" placeholder="Enter code" className="p-2 rounded-md mt-3 w-full !text-gray-600 placeholder-gray-600" />
                    <button className="bg-white text-black border-gray-200 px-4 cursor-pointer py-1 rounded-md">Apply</button>
                  </div>
                </div>
                <button onClick={()=>navigate("/")} className="bg-[#F59E0B] text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
       <div className='flex flex-col gap-3 justify-center items-center'>
          <h1 className='text-[#F59E0B]/80 font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
          <img src={emptyCart} alt="" className='w-[400px]'/>
          <button onClick={()=>navigate('/products')} className='bg-[#F59E0B] text-white px-3 py-2 mb-5 rounded-md cursor-pointer '>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};
        
export default Cart;
