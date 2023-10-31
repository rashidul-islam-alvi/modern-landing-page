import ServiceComponents from "./ServiceComponents";
import { servicesData } from "../../data/data";
import { ForwardIcon } from "../../icons/Forward";

const Services = () => {
  return (
    <div className="flex items-center my-20 md:h-screen md:my-0 ">
      <div className="relative flex flex-col justify-between w-full p-5 bg-white md:p-10 h-5/6 rounded-3xl">
        <div className="absolute top-0 left-0 w-1/2 h-14 md:h-24 md:translate-y-[-70px] translate-y-[-30px] bg-white  rounded-tr-full"></div>
        <div className="flex items-center justify-between">
          <p className="text-3xl font-semibold text-black md:text-9xl ">
            OUR <br /> SERVICES
          </p>
          <button className="flex items-center justify-center p-3 text-white duration-500 bg-black rounded-full md:p-5 hover:scale-110">
            <ForwardIcon />
          </button>
        </div>

        <div className="flex flex-col justify-between md:gap-y-10">
          {servicesData.map((service) => (
            <ServiceComponents key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
