const Card = () => {
  return (
    <div className="md:p-10 p-3 mt-20 border-[1px]  text-white rounded-xl bg-[#3827C8] cursor-pointer ">
      <div className="mb-5 border-[1px] rounded-tl-xl rounded-tr-xl">
        <img
          src="/articleimage.png"
          alt="article"
          className="w-[250px] md:w-[400px]"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold md:text-3xl">
          How to build a product — a full guide to the product development
          process
        </h2>
      </div>
    </div>
  );
};

export default Card;
