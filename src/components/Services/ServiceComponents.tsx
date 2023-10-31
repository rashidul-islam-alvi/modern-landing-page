interface ServiceComponentProps {
  service: {
    id: number;
    serviceName: string;
    serviceDesc: string;
    iconURL: string;
    iconAlt: string;
  };
}

const ServiceComponents = ({ service }: ServiceComponentProps) => {
  return (
    <div className="flex items-center flex-col gap-5 md:gap-0 md:flex-row my-5 md:my-0 cursor-pointer bg-[#F5F5F7] py-8 rounded-2xl px-2 md:px-5 text-black">
      <div className="flex items-center flex-auto md:w-1/5">
        <div className="">
          <img
            src="https://assets-global.website-files.com/63f38a8c92397a024fcb9ae8/640744d0e7b29de6f1a29aee_icon-services-design.svg"
            alt="product design"
          />
        </div>
        <div className="px-5 py-3 text-white bg-black text-md rounded-xl md:rounded-full md:px-5 md:py-3 md:text-2xl w-fit">
          <p>{service.serviceName}</p>
        </div>
      </div>
      <div className="flex items-center flex-auto text-xl md:w-2/5">
        <p>{service.serviceDesc}</p>
      </div>
      <div className="flex justify-end flex-auto">
        <button className="flex items-center justify-center w-16 h-16 text-white bg-black rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceComponents;
