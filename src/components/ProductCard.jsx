import { Link } from "react-router-dom";
import useProducts from "../hooks/useProduct";
// import { useSelector } from "react-redux";

export default function ProductCard(props) {
  // Format price to two decimal places
  const formattedPrice = props.price.toFixed(2);
  const formattedDiscountPrice = (props.price * (1 - props.discountPercentage / 100)).toFixed(2);
  console.log("result " , props.id);
  const { products, isLoading, error } = useProducts("limit=5&skip=30");
  // const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <Link
    to={`/product/${props.id}  `}
    className='overflow-hidden group border-2 flex gap-4 flex-col relative bg-[#c9c9c91a]'>
      <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white">
        -{props.discountPercentage}%
      </div>

      <div className='heading m-4'>  
        <img
          src={props.image}
          alt="product img"
          className="m-auto group-hover:scale-110 transition-all duration-300 overflow-hidden"
        />
      </div >

      <h3 className="font-medium group-hover:text-primary transition-all duration-300 p-2">
        {props.name}
      </h3>

      <p className="text-sm p-2">
        <span>${formattedPrice}</span>
        <span className="line-through text-gray-500 p-1"> ${formattedDiscountPrice}</span>
      </p>

      <div className="flex items-center ">
        <span className="text-yellow-500 p-2">{props.rating.toFixed(2)} ★★★★★ </span>
      </div>
    </Link>
  );
}
