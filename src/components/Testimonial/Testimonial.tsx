import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="flex flex-col text-white md:gap-y-10 ">
      <div className="flex flex-col justify-between w-full gap-5 my-5 md:gap-0 md:flex-row md:my-10 h-fit">
        <div className="flex-auto md:w-2/6 ">
          <div className="flex items-center p-5 border-2 rounded-full w-fit h-fit">
            <p className="text-3xl font-bold">Glassdoor</p>
            <div className="w-[1px] h-10 mx-5 bg-white" />
            <p>100+ reviews</p>
          </div>
        </div>
        <div className="flex-auto md:px-5 md:w-4/6">
          <p className="text-2xl md:text-5xl md:leading-[4rem] w-full">
            We have helped hundreds of partners, ranging from startups to
            medium-sized businesses to achieve their goals. And stellar feedback
            — is our reward!
          </p>
        </div>
      </div>

      <div className="relative flex min-h-[80vh] ">
        <img
          src="/profile.jpg"
          alt="profle"
          className="absolute z-0 hidden object-cover w-1/3 h-full opacity-60 md:block"
        />

        <div className="z-20 flex-col justify-end flex-auto hidden w-1/3 px-5 py-2 md:flex gap-y-10 ">
          <div>
            <p className="text-9xl">4.6</p>
          </div>
          <div>
            <p className="w-3/4 text-3xl leading-[3rem]">
              average based on 100+ reviews. All chances are you’ll be impressed
              too.
            </p>
          </div>
        </div>
        <div className="justify-end flex-auto md:px-5 md:flex md:items-center md:w-2/3 gap-x-5">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
