import DiscussForm from "./DiscussForm";
import "./contact.styles.css";

const ReadyToDiscusss = () => {
  return (
    <main className="flex flex-col items-center justify-center py-20 md:flex-row md:h-screen contact-bg-gradiant rounded-xl">
      <div className="bg-white md:w-[80%]  rounded-2xl p-5 md:p-10 text-black">
        <div className="flex items-center justify-between">
          <h2 className="md:text-5xl text-xl md:leading-[4rem] font-semibold">
            Ready to discuss <br /> your project with us ?
          </h2>
          <img
            src="/like.png"
            alt="like"
            className="w-10 ml-5 md:ml-0 md:w-[200px] border-2 md:border-0 md:rounded-none rounded-full border-black"
          />
        </div>

        <div>
          <DiscussForm />
        </div>
      </div>
    </main>
  );
};

export default ReadyToDiscusss;
