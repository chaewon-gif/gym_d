// import data
import { workouts } from "../data";

// import components
import WorkoutSlider from "./WorkoutSlider";

const Workouts = () => {
  // destructure workouts data
  const { title, icon } = workouts;
  return (
    <section className="section">
      {/* section title */}
      <div
        className="section-title-group max-w-[540px] mx-auto px-4 lg:px-0"
        data-aos="fade-up"
      >
        <img
          src={icon}
          alt=""
        />
        <h2 className="h2">
          {title} <span className="text-primary-200">.</span>
        </h2>
      </div>
      {/* slider */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
