
import { useEffect, useState } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/Loading.webm";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Lottie from "lottie-react";
import notFound from "../assets/notFound.json"
import MobileFilter from "../components/MobileFilter";

const Product = () => {
  const { data, fetchAllProducts } = getData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [openMobFilter, setOpenMobFilter] = useState(false);

  useEffect(() => {
    fetchAllProducts();
    window.scrollTo(0, 0);
  }, []);
  const handleCatChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
      setOpenMobFilter(false)
  };
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
  };
  const filteredData = data?.filter(
    (x) =>
      x.title.toLowerCase().includes(search.toLowerCase()) &&
      (category == "All" || x.category == category) &&
      (brand == "All" || x.brand == brand) &&
      x.price >= priceRange[0] &&
      x.price <= priceRange[1]
  );
  const dynamicPage = Math.ceil(filteredData?.length / 8);
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <MobileFilter
          openMobFilter={openMobFilter}
          setOpenMobFilter={setOpenMobFilter}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          brand={brand}
          setBrand={setBrand}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          handleCatChange={handleCatChange}
          handleBrandChange={handleBrandChange}
        />
        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              <FilterSection
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                brand={brand}
                setBrand={setBrand}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                handleCatChange={handleCatChange}
                handleBrandChange={handleBrandChange}
              />
              {filteredData?.length > 0 ? (
                <div className="flex flex-col justify-center items-center sm:mx-auto mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 mt-10 lg:mt-15 md:mb-auto">
                    {filteredData?.slice(page * 8 - 8, page * 8).map((x, i) => {
                      return <ProductCard key={i} product={x} />;
                    })}
                  </div>
                  <Pagination
                    pageHandler={pageHandler}
                    page={page}
                    dynamicPage={dynamicPage}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10 md:ms-[5%] mx-auto">
                  <Lottie animationData={notFound} classID="w-[500px]" style={{ filter: 'hue-rotate(1deg) brightness(2)' }} />
                </div>  
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop>
              <source src={Loading} />
            </video>
          </div>
        )}  
      </div>
    </div>
  );
};

export default Product;
