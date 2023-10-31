import BenefitsCard from "./BenefitsCard";
import Slider from "./Slider";
import "./benefits.styles.css";

const OurBenefits = () => {
  return (
    <main className="flex flex-col my-20 text-white md:h-screen md:my-0 benefits-bg-gradiant">
      <div className="flex-auto mb-5 md:h-1/3 md:mb-0">
        <p className="text-5xl font-semibold md:text-9xl">
          OUR <br /> BENEFITS
        </p>
      </div>
      <div className="flex flex-col flex-auto py-2 md:px-5 md:flex-row md:h-2/3">
        <div className="flex flex-auto w-full md:items-center md:w-1/3">
          <Slider />
        </div>
        <div className="flex flex-col items-center flex-auto gap-5 my-10 md:w-2/3 md:my-0 md:flex-row md:gap-x-5">
          <BenefitsCard />
          <BenefitsCard />
          <BenefitsCard />
        </div>
      </div>
    </main>
  );
};

export default OurBenefits;
