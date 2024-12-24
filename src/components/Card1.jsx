import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import iPhone from "../assets/image/iphone.png";

let heroLink = [
  { name: "Women's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  const [selectedCategory, setSelectedCategory] = useState(""); 

  return (
    
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">

      
        <div className="lg:hidden w-full mb-4">
          <select
            className="w-full p-3 border rounded-md shadow-md bg-primary bdr text-white-700"
            onChange={(e) => setSelectedCategory(e.target.value)} // Optional handler
            value={selectedCategory}
          >
            <option value="" disabled>Select a category</option>
            {heroLink.map((item, index) => (
              <option key={index} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>

        
        <div className="lg:w-1/4 w-full bg-white shadow-md rounded-md p-6 hidden lg:block">
          <ul className="space-y-4">
            {heroLink.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-red-500 transition-colors duration-300 text-lg"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

  
        <div className=" w-full bg-black text-white rounded-md p-8 flex flex-col lg:flex-row items-center lg:items-start">
          
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAxCAYAAACoJ+s+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAObSURBVHgB7ZlLSFRRGMe/UUdTa3oREQQ9oChTCdKEWhYRrQoiWhQtWgXtWhi4MjCCbJObahFUZGFRuwihEpSy0KaHpCSFktaMjPnWGedx+p2JkRmde2ey8kzQD47nzj3n3PO/3/3Odx6K/OcnSqndpCuRSKSDfI9kCtPT0zsQ1a4S2SeZQDAYPIO4yCxxivu7xDThcLgKLeHZ4rjfR1YgJhkZGdmfxHAxgfViEjQ4EPdZWeD3+zeJSUKh0FErcZRdFdMg4n4ycVj1g8fjKRTT4GPjScR1Tk1NrRfTuN3uZbO0jRBSqskXyTzJkT+I0+kMkTWTPHzqVzk5Ode5911+A0c6lUZHR1fm5uZW5OXllfFzsQ4hWVlZr7lucjgcXru2bW1tztLS0hLqHaHNWpK2ZohneLBsy+TkZJPL5fLJfGCaKsMSd3lY2GZkPiM70d3dvSq+rc/n2xkIBGoo9ygb9MtS5zZ1t6QtbHBw0IWzXyRNqzShkyliXOPExMQ1/O6jVaC2ERogO5tSHJXyqPxYGQKj1Iqd6yHuoTKItjwhqSqmJyteHOprcOaDYhA06PXijTkF3NyIep8yCIOyeXh4eHlS5Th5nTII/X9qbW11JRXX1dW1BOsNKkPwWRVhqUKsIAYdUgah/0dW2qKDhCmpXAzC7FJrWab/8BIlYgj6HsBAz63KowIJLUViCEaul/79VuUxgUvFEIxeZVceC9TZYgj8z3ZFFfPBgBiCJZzeBliKjFnwmxgC91prtx2ICsTM78UQCMyl/2NW5VGBOGqPGCQ7O/t0Q0OD9ThA4HFlGKa7S5YCvV7vauoElWFYyZyyFMkbvFWGQUOETVRlvK74BesdMYyOifn5+RdYWd0bGhpap+/NxB+mnO3MiS/1qJIMAIN2IrhoxoLse9+QvZAMIXZMl7AnwbR1kgFgPb0EvKWvEwQSjx5Q+E4Mg6Fu4mq9+jpBIDf1tu+8GAQDTRCXa2wrMWBalCHwvcuSirGxsWIsOakWGPrs0QdVkg6cr1SqBUSfKIyPj++VdKGNA19oUAsEO7tq+VX0Lp+2bvWX4Ws1Wp1fpzzApP0akj6o3GxXj0/kx8HbSb3MADo6bCVslZIcKZ7fzLMPkwZkvmhL8rnrrd6ec8ED/f39c/571NHRsYLzwpOId1u0PUfmtOs7rSPgGISfciyiN/n603/h99OCgoK+dNpSv5hsG2028Ix+fO5JYWHhV/nX+QFx7OVpx5sHEQAAAABJRU5ErkJggg=="
                alt="iPhone 14"
                className="w-12 h-12"
              />
              <h5 className="text-lg">iPhone 14 Series</h5>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight">
              <span>Up to 10% </span><br />
              <span>Off Voucher</span>
            </h1>
            <div className="flex items-center gap-2 text-red-400 cursor-pointer hover:text-red-300 transition">
              Shop Now <FaArrowRight />
            </div>
          </div>

          <div className="flex-shrink-0 mt-6 lg:mt-0">
            <img
              src={iPhone}  width={400}
              alt="iPhone"
              className="max-w-xs lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
