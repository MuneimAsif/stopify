<<<<<<< HEAD
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();
  console.log(cartItem);

  return (
    <div
      onClick={() => navigate(`/products/${[product.id]}`)}
      className="border relative border-gray-100 rounded-1xl cusror-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 md:h-70 lg:h-80 lg:p-2 content-start"
    >
      <img
        src={product.thumbnail}
        className="bg-gray-100 aspect-square w-60 md:w-40 md:h-35 lg:w-[160px] lg:h-45"
      />
      <h3
        className={`line-clamp-2 p-1 font-semibold ${
          product.title.length > 8 ? "md:text-sm" : "md:text-base"
        }`}
      >
        {product.title.length > 16
          ? product.title.slice(0, 16) + "..."
          : product.title}
      </h3>
      <p className="my-1 text-md  text-gray-800 font-bold">
        ${product.price}/=
      </p>
      <button
        className=" bg-[#F59E0B] ld:px-3 py-2 md:text-sm lg:text-lg rounded-md text-white w-full cursor-pointer flex gap-2  items-center justify-center font-semibold"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        <IoCartOutline className="w-6 h-6 text-sm" /> Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
=======
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cartItem } = useCart();
  console.log(cartItem);

  return (
    <div
      onClick={() => navigate(`/products/${[product.id]}`)}
      className="border relative border-gray-100 rounded-1xl cusror-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 md:h-70 lg:h-80 lg:p-2 content-start"
    >
      <img
        src={product.thumbnail}
        className="bg-gray-100 aspect-square w-60 md:w-40 md:h-35 lg:w-[160px] lg:h-45"
      />
      <h3
        className={`line-clamp-2 p-1 font-semibold ${
          product.title.length > 8 ? "md:text-sm" : "md:text-base"
        }`}
      >
        {product.title.length > 16
          ? product.title.slice(0, 16) + "..."
          : product.title}
      </h3>
      <p className="my-1 text-md  text-gray-800 font-bold">
        ${product.price}/=
      </p>
      <button
        className=" bg-[#F59E0B] ld:px-3 py-2 md:text-sm lg:text-lg rounded-md text-white w-full cursor-pointer flex gap-2  items-center justify-center font-semibold"
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
      >
        <IoCartOutline className="w-6 h-6 text-sm" /> Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
>>>>>>> e2aa20c (Have converted Zaptro into Stopify)
