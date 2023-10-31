import BookmarkIcon from "../../icons/Bookmark";

const SlideCard = () => {
  return (
    <div>
      <div>
        <button className="bg-[#FDC448] rounded-full p-5">
          <BookmarkIcon />
        </button>
      </div>
      <div className="px-2 my-5">
        <p className="w-5/6 text-2xl md:text-4xl">
          Our team consists of skilled developers and designers who create
          immersive and plesant experience
        </p>
      </div>
    </div>
  );
};

export default SlideCard;
