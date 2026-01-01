<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
import banner2 from '../assets/banner2.avif'
const MidBanner = () => {
 const navigate = useNavigate()
  return (
    <div className="bg-gray-50 md:py-4">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Essential Products at Your Fingertips
            </h1>
            <p className="text-lg md-text-xl mb-6">
              Discover the latest innovations with unbeatable prices and
              free shipping on all orders
            </p>
            <button onClick={()=>navigate('/products')} className="bg-[#F59E0B] hover:bg-yellow-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
=======
import { useNavigate } from 'react-router-dom';
import banner2 from '../assets/banner2.avif'
const MidBanner = () => {
 const navigate = useNavigate()
  return (
    <div className="bg-gray-50 md:py-4">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Essential Products at Your Fingertips
            </h1>
            <p className="text-lg md-text-xl mb-6">
              Discover the latest innovations with unbeatable prices and
              free shipping on all orders
            </p>
            <button onClick={()=>navigate('/products')} className="bg-[#F59E0B] hover:bg-yellow-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
>>>>>>> e2aa20c (Have converted Zaptro into Stopify)
