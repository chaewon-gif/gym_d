// import data
import { about } from "../data";

// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, icon, link } = about;

  return (
    <section className="py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* section title */}
        <div
          className="section-title-group justify-start"
          data-aos="fade-up"
        >
          <img
            src={icon}
            alt=""
          />
          <h2 className="h2 section-title">
            {title} <span className="text-primary-200">.</span>
          </h2>
        </div>
        {/* subtitle 1 */}
        <p
          className="md:text-body-md mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {subtitle1}
        </p>
        {/* subtitle 2 */}
        <p
          className="md:text-body-md mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subtitle2}
        </p>
        {/* link */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            className="link flex items-center gap-x-4 hover:gap-x-6 transition-all"
            href="#"
          >
            {link}
            <IoIosArrowDroprightCircle className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
