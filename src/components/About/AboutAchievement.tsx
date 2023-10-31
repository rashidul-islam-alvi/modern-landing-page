interface AboutAchievementProps {
  achievement: {
    id: number;
    iconURL: string;
    name: string;
    iconAlt: string;
  };
}

const AboutAchievement = ({ achievement }: AboutAchievementProps) => {
  return (
    <div className="w-[350px] h-[350px] border-2 rounded-full hover:opacity-60 duration-300 ease-in-out cursor-crosshair flex flex-col justify-center items-center ">
      {/* <img src={achieveMent.iconURL} alt={achieveMent.iconAlt} /> */}
      <p className="text-xl ">{achievement.name}</p>
    </div>
  );
};

export default AboutAchievement;
