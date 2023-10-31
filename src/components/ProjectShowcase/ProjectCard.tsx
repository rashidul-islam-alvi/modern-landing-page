const ProjectCard = () => {
  return (
    <div className="flex flex-col justify-between h-full p-5 mb-10 ">
      <div className="mb-10">
        <img src="/ecommerce.png" alt="" className="rounded-t-2xl" />
      </div>
      <div className="">
        <p className="mb-5 md:text-xl">CONSUMER PRODUCTS & SERVICES</p>
        <h2 className="font-semibold md:text-4xl">
          THE LEADING BRAND FOR CUSTOM ESPORTS CLOTHING DESIGN
        </h2>
      </div>
    </div>
  );
};

export default ProjectCard;
