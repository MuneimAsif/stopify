import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const [totalQuantity,setTotalQuantity] = useState(1)
  const {addToCart} = useCart()
  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      // console.log(res.data);
      const product = res.data;
      setSingleProduct(product);
    } catch (error) {
      console.log(error);
    }
  };
const handleUpdate = (val)=>{
   setTotalQuantity(val)
   console.log(val);
}
  useEffect(() => {
    getSingleProduct();
  });
  const originalPrice = Math.round(
    singleProduct.price +
      (singleProduct.price * singleProduct.discountPercentage) / 100
  );
  return singleProduct ? (
    <div className="px-4 pb-4 md:px-0">
      <Breadcrums title={singleProduct.title} />
      <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* product image */}
        <div className="md:w-[55%] sm:w-[70%] lg:w-[50%] mx-auto">
          <img
            src={singleProduct.thumbnail}  
            alt={singleProduct.title}
            className="rounded-2xl w-full object-cover "
          />
        </div>
        {/* product details  */}
        <div className="flex flex-col gap-6">
          <h1 className="md:text-3xl text-xl  fond-bold text-gray-600  mx-auto">
            {singleProduct.title}
          </h1>
          <div className="text-gray-700  mx-auto">
            {singleProduct.brand?.toUpperCase()} /{" "}
            {singleProduct.category?.toUpperCase()}
          </div>
          <p className="text-xl text-[#F59E0B] font-bold  mx-auto">
            ${singleProduct.price}{" "}
            <span className="line-through text-gray-700">${originalPrice}</span>{" "}
            <span className="bg-[#F59E0B] text-white px-4  py-1.5 rounded-full">
              {Math.round(singleProduct.discountPercentage)}% discount
            </span>
          </p>
          <p className="text-gray-600 w-[80%] sm:w-[80%]  md:w-[65%] lg:w-[100%] mx-auto">{singleProduct.description}</p>
          {/* quantity selector */}
          <div className="flex items-center gap-4 mx-auto">
            <label htmlFor="" className="text-sm font-medium text-gray-700">
              Quantity:
            </label>
            <input
              type="number"
              min={1}
              value = {totalQuantity}
              onChange={(e)=>{handleUpdate(e.target.value)}}
              className="w-20 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] !text-gray-600 placeholder-gray-600"
            />
          </div>
          <div className="flex gap-4 mt-4 mx-auto my-3">
            <button onClick={()=>addToCart(singleProduct,totalQuantity)} className="px-6 flex gap-2 py-2 text-lg bg-[#F59E0B] text-white rounded-md">
              <IoCartOutline className="w-6 h-6" /> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <video muted autoPlay loop>
        <source src={Loading} />
      </video>
    </div>
  );
};

export default SingleProduct;
