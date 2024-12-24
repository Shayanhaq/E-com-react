import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProduct";

export default function Slider() {
  const { products, isLoading, error } = useProducts("limit=5&skip=30");

  return (
    <div className="my-8 px-4 md:px-8 lg:px-16 ">
      <div>
        {isLoading ? "loading..." : ""}
        {error}

        <Swiper
          spaceBetween={50}
          slidesPerView={3} // Default for larger screens
          modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
          autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            // When the window width is <= 767px, show 2 slides
            320: {
              slidesPerView: 2,
              spaceBetween: 20, // Adjust space between items for smaller screens
            },
            // When the window width is >= 768px, show 3 slides
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // When the window width is >= 1024px, show 3 slides (default)
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {products?.slice(0, 6)?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                id={item.id}
                image={item.thumbnail}
                name={item.title}
                price={item.price}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
