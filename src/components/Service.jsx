import featuredImg from "../assets/banner.png";

const Service = () => {
  return (
    <div
      className="md:px-8 p-4 max-w-screen-xl mx-auto  md:h-screen content-center mt-4  pt-10 md:pt-16 md:mt-0 bg-[#111]"
      id="feature"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-color9 font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-labelColor">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the topic
            of sentence.
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:grap-12 gap-8">
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="" className="" />
                <h5 className="text-2xl font-semibold text-color9 px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featuredImg} alt="" className="" />
                <h5 className="text-2xl font-semibold text-color9 px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="" className="" />
                <h5 className="text-2xl font-semibold text-color9 px-5 text-center mt-5">
                  Conventient study schedule
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
