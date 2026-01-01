<<<<<<< HEAD
import { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { data, fetchAllProducts } = getData() // custom hook
  const navigate = useNavigate()
  useEffect(() => {
      fetchAllProducts();
    }, []);

  const SamplePrevArrow = (props)=>{
    const {className,style, onClick} = props
    return <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
      <AiOutlineArrowLeft className="arrows" style={{...style,  display:"block", borderRadius:"50px", background:"#F59E0B", color:"white", position:"absolute", padding:"2px", left:"50px"}} onMouseOver="this.style.backgroundColor=#555"/>
    </div>
  }
  const SampleNextArrow = (props)=>{
    const {className,style, onClick} = props
    return <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
      <AiOutlineArrowRight className="arrows" style={{...style,  display:"block", borderRadius:"50px", background:"#F59E0B", color:"white", position:"absolute", padding:"2px", right:"50px"}} onMouseOver="this.style.backgroundColor=#555"/>
    </div>
  }
  var settings = {
    dots: false,   // changed from true to false selflessly 
    autoplay:true,   // self inserted
    autoplaySpeed:2000,  // self inserted
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
    nextArrow: <SampleNextArrow to="next" />,  // self inserted
    prevArrow: <SamplePrevArrow to="prev" />  // self inserted
  };
  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(109,112)?.map((x,i)=>{
            return <div key={i} className="bg-gray-50 -z-10">
                 <div className="flex flex-col md:flex-row gap-10 justify-center h-[500px] items-center px-4 my-30 md:my-0">
                  <div className="md:space-y-6 space-y-3">
                        <h3 className="text-[#111827] font-semibold font-sans text-sm">Poweing Your World with the Best in Electronics</h3>
                        <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-[#D97706]">{x.title}</h1>
                        <p className="md:w-[500px] line-clamp-3 text-[#4B5563] pr-7">{x.description}</p>
                        <button onClick={()=> navigate("/products")} className="bg-[#F59E0B] text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop now</button>
                  </div>
                  <div>
                    <img src={x.images} alt={x.title} className="rounded-full w-[450px] hover:scale-105 transition-all shadow-2xl shadow-yellow-300" />
                  </div>
                 </div>
            </div>
          })
        }
      </Slider>
      <Category />
      </div>
  );
};

export default Carousel;
=======
import { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { data, fetchAllProducts } = getData() // custom hook
  const navigate = useNavigate()
  useEffect(() => {
      fetchAllProducts();
    }, []);

  const SamplePrevArrow = (props)=>{
    const {className,style, onClick} = props
    return <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
      <AiOutlineArrowLeft className="arrows" style={{...style,  display:"block", borderRadius:"50px", background:"#F59E0B", color:"white", position:"absolute", padding:"2px", left:"50px"}} onMouseOver="this.style.backgroundColor=#555"/>
    </div>
  }
  const SampleNextArrow = (props)=>{
    const {className,style, onClick} = props
    return <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
      <AiOutlineArrowRight className="arrows" style={{...style,  display:"block", borderRadius:"50px", background:"#F59E0B", color:"white", position:"absolute", padding:"2px", right:"50px"}} onMouseOver="this.style.backgroundColor=#555"/>
    </div>
  }
  var settings = {
    dots: false,   // changed from true to false selflessly 
    autoplay:true,   // self inserted
    autoplaySpeed:2000,  // self inserted
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
    nextArrow: <SampleNextArrow to="next" />,  // self inserted
    prevArrow: <SamplePrevArrow to="prev" />  // self inserted
  };
  return (
    <div>
      <Slider {...settings}>
        {
          data?.slice(109,112)?.map((x,i)=>{
            return <div key={i} className="bg-gray-50 -z-10">
                 <div className="flex flex-col md:flex-row gap-10 justify-center h-[500px] items-center px-4 my-30 md:my-0">
                  <div className="md:space-y-6 space-y-3">
                        <h3 className="text-[#111827] font-semibold font-sans text-sm">Poweing Your World with the Best in Electronics</h3>
                        <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-[#D97706]">{x.title}</h1>
                        <p className="md:w-[500px] line-clamp-3 text-[#4B5563] pr-7">{x.description}</p>
                        <button onClick={()=> navigate("/products")} className="bg-[#F59E0B] text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop now</button>
                  </div>
                  <div>
                    <img src={x.images} alt={x.title} className="rounded-full w-[450px] hover:scale-105 transition-all shadow-2xl shadow-yellow-300" />
                  </div>
                 </div>
            </div>
          })
        }
      </Slider>
      <Category />
      </div>
  );
};

export default Carousel;
>>>>>>> e2aa20c (Have converted Zaptro into Stopify)
