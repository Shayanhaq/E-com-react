import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProduct";
import { useSelector } from "react-redux";

export default function Products( ) {
  const { products, isLoading, error } = useProducts();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const [searchTerm, setSearchTerm] = useState("");

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    });

    return result || [];
  };

  const searchKaResult = searchProducts();

  return (
    <div
      className={`container-x px-4 py-8 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
      }`}
    >
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase());
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm transition-all duration-300 ease-in-out transform hover:object-scale-down-50"
        placeholder="Search your product"
      />

      {/* Loading State with fade-in effect */}
      {isLoading && (
        <div className="text-center animate-pulse text-gray-500">
          Loading...
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div className="text-center text-red-500">
          There was an error fetching products: {error}
        </div>
      )}

      {/* No Results Message */}
      {!isLoading && !error && searchKaResult.length === 0 && (
        <div className="text-center text-gray-500">
          Product not found
        </div>
      )}

      <div
        className={`container-x product-container px-4 py-8 overflow-hidden transition-colors duration-300 ${
          darkMode ? "bg-slate-900" : "bg-white"
        }`}
      >
        {searchKaResult?.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
        
            className={`container-x product-container px-4 py-8 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 p-4 rounded-lg bg-white overflow-hidden overflow-hidden transition-colors duration-300 ${
              darkMode ? "bg-slate-900" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

