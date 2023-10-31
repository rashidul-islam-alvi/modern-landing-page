const Hero = () => {
  return (
    <div className="flex flex-col  md:flex-row mt-10 md:my-0 md:items-center py-5 h-[87.5vh]  gap-x-2">
      <div className="flex relative flex-col w-full mb-5 flex-auto h-1/2  md:h-[600px] md:w-4/6 px-3 py-3 md:px-10 md:py-10 bg-[#3827C7] rounded-3xl rounded-tr-none ">
        <div className="bg-[#3827C7] absolute w-2/4 right-0 top-0 md:translate-y-[-80px] translate-y-[-40px] rounded-tl-3xl rounded-tr-3xl h-[40px]    text-white md:h-[80px]" />

        <div className="text-5xl text-white md:text-9xl">
          LETS BUILD THE NEXT SMART THING
        </div>

        <div className=" w-full py-3 mt-3 border-[#7468D9] border-t-[1px] md:mt-10 md:py-5 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-5 md:mb-0 md:w-2/4 md:gap-x-10">
            <div>
              <span className="text-3xl text-white md:text-7xl">10Y</span>
            </div>
            <div>
              <span className="text-white text-md md:text-2xl">
                OF DESIGN-DRIVEN PRODUCT DEVELOPMENT
              </span>
            </div>
          </div>
          <div>
            <button className="px-10 py-3 bg-[#4031ce] text-white duration-300 ease-in-out hover:bg-[#3827C1] rounded-3xl">
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
      <div className="flex-auto h-1/2 md:h-[80%] md:w-2/6">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full rounded-3xl"
        >
          <source
            src="https://d3vlq52qrgdnc2.cloudfront.net/home-showreal-preview-v2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
