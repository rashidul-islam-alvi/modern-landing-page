import { Star } from "../../icons/Star";

interface TestimonialProps {
  testimonial: {
    id: number;
    authorName: string;
    authorCompany: string;
    review: string;
    star: number;
    imageUrl: string;
    imageAlt: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
  const stars = [];

  for (let i = 0; i < testimonial.star; i++) {
    stars.push(<Star key={i} />);
  }

  return (
    <section className="bg-[#3827C8] rounded-3xl py-5  md:h-full max-w-[352px] gap-5 md:gap-0 md:max-w-[600px] md:py-10 px-5 flex flex-col justify-between">
      <div className="flex flex-auto md:h-1/6">
        <div>
          <p className="text-3xl md:text-5xl">{testimonial.star}.0</p>
        </div>
        <div className="flex ml-5">{stars}</div>
      </div>

      <div className="flex-auto md:h-4/6">
        <p className="text-xl md:text-3xl">{testimonial.review}</p>
      </div>

      <div className="flex items-center flex-auto gap-x-5 md:h-1/6">
        <div>
          <img
            src="/profile.jpg"
            width={80}
            className="rounded-full"
            alt="profile"
          />
        </div>
        <div className="text-xl">
          <p>{testimonial.authorName}</p>
          <p>Founder of {testimonial.authorCompany}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
