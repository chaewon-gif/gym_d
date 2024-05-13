// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CommunitySlider = ({ testimonials }: any) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={32}
      grabCursor={true}
      modules={[]}
    >
      {testimonials.map((testimonial: any, idx: any) => {
        // destructure testimonial
        const { image, name, message } = testimonial;
        return (
          <SwiperSlide key={idx}>
            {/* image */}
            <div>
              <img
                src={image}
                alt=""
              />
            </div>
            {/* message & name */}
            <div className="absolute bottom-[30px] text-white p-[20px] text-center">
              <div className="mb-8 italic text-lg font-light">{message}</div>
              <div className="flex items-center justify-center gap-x-[3px]">
                <span className="text-[30px] text-primary-200 font-bold">~</span>
                <div className="text-[20px] font-bold">{name}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CommunitySlider;