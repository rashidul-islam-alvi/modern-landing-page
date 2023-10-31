import ProjectSlider from "./ProjectSlider";

const BestWorkHero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-5 text-white md:flex-row md:mt-10 gap-x-5">
      <div className=" rounded-3xl rounded-tr-none w-full border-2 h-[70%] px-5 py-2 flex flex-col justify-evenly ">
        <div>
          <p className="text-7xl md:text-9xl">
            OUR <br /> BEST <br /> WORKS
          </p>
        </div>

        <div className="h-[1px] w-full bg-white rounded-full" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <p className="font-semibold md:text-4xl">1000+</p>
            <p className="md:text-2xl">Projects done</p>
          </div>
          <div>
            <button className="bg-[#4F40CC] md:px-5 px-2 text-sm py-2 md:text-lg rounded-lg ">
              ALL PROJECTS
            </button>
          </div>
        </div>
      </div>
      <div className=" overflow-hidden w-full text-black bg-white h-[70%]  rounded-3xl rounded-tl-none">
        <ProjectSlider />
      </div>
    </div>
  );
};

export default BestWorkHero;
