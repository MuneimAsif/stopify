<<<<<<< HEAD
import { FaFilter } from "react-icons/fa";
import { getData } from "../context/DataContext";

const MobileFilter = ({
  openMobFilter,
  setOpenMobFilter,
  search,
  setSearch,
  category,
  setCategory,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  handleCatChange,
  handleBrandChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <>
      <div className="bg-gray-200 flex justify-between items-center md:hidden px-4 p-2 mt-5">
        <h1 className="font-semibold text-xl">Filters</h1>
        <FaFilter
          onClick={() => setOpenMobFilter(true)}
          className="text-gray-800"
        />
      </div>
      {openMobFilter ? (
        <div className="bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white p-2 rounded-md border-gray-400 border-2 w-full !text-gray-600 placeholder-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* categories only data  */}
          <h1 className="mt-5 font-semibold text-xl">Category</h1>
          <div className="flex flex-col gap-2 mt-3">
            {categoryOnlyData?.map((x, i) => {
              return (
                <div key={i} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={x}
                    checked={category === x}
                    value={x}
                    onChange={handleCatChange}
                  />
                  <button className="cursor-pointer uppercase">{x}</button>
                </div>
              );
            })}
          </div>
          {/* brands only data  */}
          <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
          <select
            className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
            value={brand}
            onChange={handleBrandChange}
          >
            {brandOnlyData?.map((x, i) => {
              return <option value={x}>{`${x}`.toUpperCase()}</option>;
            })}
          </select>
          {/* price range */}
          <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
            className="transition-all w-[200px]"
              type="range"
              min="0"
              max="5000"
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              value={priceRange[1]}
            />
          </div>
          <button
            className="bg-red-500 text-white rounded-md  px-3 py-1 mt-5 cursor-pointer"
            onClick={() => {
              setSearch(" ");
              setCategory("All");
              setBrand("All");
              setPriceRange([0, 5000]);
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
=======
import { FaFilter } from "react-icons/fa";
import { getData } from "../context/DataContext";

const MobileFilter = ({
  openMobFilter,
  setOpenMobFilter,
  search,
  setSearch,
  category,
  setCategory,
  brand,
  setBrand,
  priceRange,
  setPriceRange,
  handleCatChange,
  handleBrandChange,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();
  return (
    <>
      <div className="bg-gray-200 flex justify-between items-center md:hidden px-4 p-2 mt-5">
        <h1 className="font-semibold text-xl">Filters</h1>
        <FaFilter
          onClick={() => setOpenMobFilter(true)}
          className="text-gray-800"
        />
      </div>
      {openMobFilter ? (
        <div className="bg-gray-100 p-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white p-2 rounded-md border-gray-400 border-2 w-full !text-gray-600 placeholder-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* categories only data  */}
          <h1 className="mt-5 font-semibold text-xl">Category</h1>
          <div className="flex flex-col gap-2 mt-3">
            {categoryOnlyData?.map((x, i) => {
              return (
                <div key={i} className="flex gap-2">
                  <input
                    type="checkbox"
                    name={x}
                    checked={category === x}
                    value={x}
                    onChange={handleCatChange}
                  />
                  <button className="cursor-pointer uppercase">{x}</button>
                </div>
              );
            })}
          </div>
          {/* brands only data  */}
          <h1 className="mt-5 font-semibold text-xl mb-3">Brand</h1>
          <select
            className="bg-white w-full p-2 border-gray-200 border-2 rounded-md"
            value={brand}
            onChange={handleBrandChange}
          >
            {brandOnlyData?.map((x, i) => {
              return <option value={x}>{`${x}`.toUpperCase()}</option>;
            })}
          </select>
          {/* price range */}
          <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
            className="transition-all w-[200px]"
              type="range"
              min="0"
              max="5000"
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              value={priceRange[1]}
            />
          </div>
          <button
            className="bg-red-500 text-white rounded-md  px-3 py-1 mt-5 cursor-pointer"
            onClick={() => {
              setSearch(" ");
              setCategory("All");
              setBrand("All");
              setPriceRange([0, 5000]);
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MobileFilter;
>>>>>>> e2aa20c (Have converted Zaptro into Stopify)
