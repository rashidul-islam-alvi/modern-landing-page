const BenefitsCard = () => {
  return (
    <div className=" flex flex-col  gap-5 md:gap-0 border-[1px] rounded-xl h-[90%] px-5 py-5 text-white">
      <div className="h-1/4">
        <p className="font-semibold text-7xl">$400M</p>
      </div>
      <div className="h-3/4">
        <h2 className="mb-5 text-3xl font-semibold">Total Funding</h2>
        <p className="text-xl">
          Hard work and dedication of the Halo Lab team help our clients secure
          new successful investment deals.
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
