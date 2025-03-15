import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperJs() {
  const slideData = [
    {
      title: "Deepak Fansal",
      description:
        "It's an amazing design studio with a great team and lots to learn. Very professional with their work. Quality of work, the tools they use are all up to the current trends. Wishing them the best!",
    },
    {
      title: "Shirish Gone",
      description:
        "The best in class team! Amazing imagination and creativity levels. Nice to be associated with B'pintale!! Kudos guys!",
    },
    {
      title: "Trippy Hippy5",
      description:
        "It's an amazing design studio with a great team and lots to learn. Very professional with their work. Quality of work, the tools they use are all up to the current trends. Wishing them the best!",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-[70%] mx-auto py-20 my-10">
              <h1 className="text-xl text-[#2c68a9] font-bold mb-20 text-center">
                {slide.title}
              </h1>
              <p className="text-center">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
