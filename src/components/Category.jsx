import { useNavigate } from "react-router-dom";
import { getData } from "../context/DataContext";

const Category = () => {
  const { categoryOnlyData } = getData();
  const navigate = useNavigate()

  let electronicCategory = ['laptops','mobile-accessories','mens-watches','smartphones']
  return <>
  <div>
    <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
      {
        categoryOnlyData.map((x,i)=>{
          if(electronicCategory.includes(x)){
             return <div key={i}>
            <button onClick={()=>navigate(`/category/${x}`)} className="hover:bg-[#F59E0B] hover:text-white uppercase bg-[#F3F4F6] text-[#4B5563] font-medium px-3 py-1 rounded-md cursor-pointer">{x}</button>
          </div> 
          }
        })
      }
    </div>
  </div>
  </>;
};

export default Category;
