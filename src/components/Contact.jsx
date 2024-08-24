import contact from "../assets/Contact.png";
const Contact = () => {
  return (
    <div
      className="md:px-8 p-4 max-w-screen-xl mx-auto mt-4  pt-10 md:pt-16 md:mt-24 px-8  bg-color1 mb-8 rounded-lg"
      id="contact"
      data-aos="zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
      delay="0"
    >
      <div className="flex flex-col md:flex-row md:justify-between px-8">
        <div className="md:w-1/2">
          <h2 className="md:text-4xl text-2xl text-color7 lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="text-color5 mt-8">
            Hate forms? Send us an <span className="underline">email</span>{" "}
            instead.
          </div>

          <div className="">
            <img src={contact} alt="" className="lg:h-[340px] h-auto" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div>
            <span className="uppercase text-sm text-color7 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-color7 font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            ></input>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-color7 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-color6 text-[#111] hover:bg-color9 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
