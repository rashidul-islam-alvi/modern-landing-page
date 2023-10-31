import { BookIcon } from "../../icons/Book";
import Card from "./Card";

const HotArticles = () => {
  return (
    <div className="flex flex-col my-20 text-white md:h-screen ">
      <div className="flex flex-col justify-between w-full gap-5 md:flex-row md:gap-0 ">
        <div className="flex-auto md:w-2/6 ">
          <div className="flex items-center w-full px-5 py-3 border-2 rounded-full cursor-pointer md:p-5 md:w-fit md:h-fit">
            <p className="text-3xl font-bold">Hot Articles</p>
            <button className="rounded-full bg-[#3827C7] p-3 ml-10">
              <BookIcon />
            </button>
          </div>
        </div>
        <div className="flex-auto md:px-5 md:w-4/6">
          <p className="md:text-5xl text-3xl md:leading-[4rem] w-full">
            Our blog is a treasure trove of our best technical tips and expert
            knowledge. Here you will discover all the valuable secrets and
            trends of the IT industry.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-x-5 md:flex-row">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HotArticles;
