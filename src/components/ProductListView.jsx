import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="space-y-4 mt-2 rounded-md">
      <div className="bg-gray-100 flex sm:gap-7 md:gap-7 lg:gap-7 items-center md:p-2 px-1 py-4 rounded-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="md:h-60 md:w-60 w-25 h-25 rounded-md cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[220px]">
            {product.title}
          </h1>
          <p className="font-semibold flex items-center md:text-lg text -sm">
            $ <span className="md:text-4xl text-3xl">{Math.round(product.price)} </span> (
            {Math.round(product.discountPercentage)} % off)
          </p>
          <p className="text-sm">
            Free Delivery{" "}
            <span className="font-semibold">Wednesdy, 31st Dec</span> <br /> Or
            fastest delivery{" "}
            <span className="font-semibold">Tomorrow, 22nd Dec</span>
          </p>
          <button
            className="bg-[#F59E0B] text-white px-3 py-1 rounded-md"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
