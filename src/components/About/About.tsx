import AboutAchievement from "./AboutAchievement";
import { achieveMentData as achievements } from "../../data/data";
import "./about.styles.css";

const About = () => {
  return (
    <div className="md:h-[100vh] my-5 md:my-0 md:mb-10  flex md:py-5 flex-col text-white about-bg-gradiant">
      <div className="flex flex-col-reverse flex-1 gap-10 my-5 md:gap-0 md:my-0 md:flex-row ">
        <div className="flex-auto md:w-2/5">
          <div className="flex mb-5 gap-x-2">
            <img
              src="/profile.jpg"
              alt="founder"
              className="border-2 rounded-full w-14 h-14 md:w-24 md:h-24"
            />
            <img
              src="/profile.jpg"
              alt="founder"
              className="border-2 rounded-full w-14 h-14 md:w-24 md:h-24"
            />
            <img
              src="/profile.jpg"
              alt="founder"
              className="border-2 rounded-full w-14 h-14 md:w-24 md:h-24"
            />
          </div>
          <div>
            <span className="text-2xl">FOUNDERS OF OMUK.XYZs</span>
          </div>
        </div>

        <div className="flex-auto md:px-5 md:w-4/6">
          <p className="md:text-4xl text-xl md:leading-[4rem] w-full">
            For the past decade, we've dedicated ourselves to refining our
            skills in Design & Development since our inception in Bangladesh. We
            are excited to support committed Founders in enhancing their own
            skills. Success is a collaborative endeavor, isn't it? Let's work
            together to reach new heights!
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 gap-5 md:gap-0 md:flex-row">
        {achievements.map((achievement) => (
          <AboutAchievement key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default About;
