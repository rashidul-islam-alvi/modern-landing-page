const Footer = () => {
  return (
    <div className="flex flex-col my-10 text-white gap-y-10 md:items-center md:my-20 md:flex-row">
      <div className="flex flex-col flex-auto gap-5 py-5 border-t-2 md:py-0 md:border-t-0 md:gap-20 md:w-2/4">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Subscribe to our newsletter to stay in touch with the latest
        </h2>
        <input
          type="text"
          placeholder="Your email here..."
          className="md;w-[60%] py-5 px-5 rounded-full text-black"
        />
      </div>
      <div className="flex-auto py-5 border-t-2 md:w-1/4 md:py-0 md:border-t-0">
        <ul className="flex flex-col gap-2 text-2xl">
          <li className="cursor-pointer">Our Services</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Open Source</li>
          <li className="cursor-pointer"> Contacts</li>
          <li className="cursor-pointer">Articles & Blogs</li>
        </ul>
      </div>

      <div className="flex flex-col flex-auto gap-5 py-5 border-t-2 md:py-0 md:border-t-0 md:w-1/4">
        <div>
          <p className="text-2xl">Drop us a line</p>
          <p className="text-gray-500">rashidul537@gmail.com </p>
        </div>
        <div>
          <p className="text-2xl">Call us</p>
          <p className="text-gray-500">+880 176 070 9684 </p>
        </div>
        <div>
          <p className="text-2xl">Address</p>
          <p className="text-gray-500">Dhaka Cantonment </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
