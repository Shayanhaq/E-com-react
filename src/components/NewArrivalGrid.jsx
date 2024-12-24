import img1 from "../assets/image/ps5.png";
import img2 from "../assets/image/baji.png";
import img3 from "../assets/image/speaker.png";
import img4 from "../assets/image/perfume.png";

export default function NewArrivalGrid() {
  return (
<div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 S_Underline m-12">
  <div className="bg-[#0D0D0D] relative text-gray-200 rounded col-span-1 lg:col-span-2 lg:row-span-2 overflow-hidden">
    <img
      className="object-contain w-full h-full transition-transform transform hover:scale-105 cursor-pointer"
      src={img1}
      alt="product image"
    />
    <div className="absolute gap-3 flex-col flex bottom-0 p-4 md:p-6">
      
      <h3 className=" relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-lg md:text-xl lg:text-2xl">PlayStation 5</h3>
      <p className="w-full md:w-3/5 line-clamp-3 text-sm md:text-base">
      Black and White version of the PS5 coming out on sale.
      </p>
      <a className="underline cursor-pointer text-sm md:text-base" href="#">
        Shop Now
      </a>
    </div>
  </div>

  <div className="relative bg-[#0D0D0D] text-gray-200 rounded col-span-1 lg:col-span-2 overflow-hidden">
    <img
      className="object-contain h-full w-full transition-transform transform hover:scale-105 cursor-pointer"
      src={img2}
      alt="product image"
    />
    <div className="S_Underline absolute gap-3 flex-col flex bottom-0 p-4 md:p-6">
      <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-lg md:text-xl lg:text-2xl">Women's Collections</h3>
      <p className="w-full md:w-3/5 line-clamp-3 text-sm md:text-base">
        Featured woman collections that give you another vibe.
      </p>
      <a className="underline cursor-pointer text-sm md:text-base" href="#">
        Shop Now
      </a>
    </div>
  </div>

  <div className="bg-[#0D0D0D] relative group text-gray-200 rounded overflow-hidden">
    <img
      className="object-contain transition-transform transform group-hover:scale-105 cursor-pointer duration-300 h-full w-full"
      src={img3}
      alt="product image"
    />
    <div className="absolute gap-2 flex-col flex bottom-0 p-4 md:p-6">
      <h3 className=" relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-lg md:text-xl lg:text-2xl">
        Speakers
      </h3>
      <p className="line-clamp-3 text-sm md:text-base">Amazon wireless speakers</p>
      <a className="underline cursor-pointer text-sm md:text-base" href="#">
        Shop Now
      </a>
    </div>
  </div>

  <div className="bg-black overflow-hidden">
    <div
      style={{
        backdropFilter: "blur(300px)",
        backgroundColor: "rgba(217, 217, 217, 0.2)",
      }}
      className="bg-[#0D0D0D] h-full relative text-gray-200 rounded"
    >
      <img
        className="object-contain h-full w-full transition-transform transform hover:scale-105 cursor-pointer"
        src={img4}
        alt="product image"
      />
      <div className="absolute gap-2 flex-col flex bottom-0 p-4 md:p-6">
        <h3 className="S_Underline  S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%]font-semibold text-lg md:text-xl lg:text-2xl">Perfume</h3>
        <p className="line-clamp-3 text-sm md:text-base">GUCCI INTENSE OUD EDP</p>
        <a className="underline cursor-pointer text-sm md:text-base" href="#">
          Shop Now
        </a>
      </div>
    </div>
  </div>
</div>


  );
}