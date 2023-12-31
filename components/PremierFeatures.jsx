import React from "react";

const PremierFeatures = () => {
  return (
    <section id="premium-features">
      <div className="text-center flex flex-col gap-6  ">
        <p>
          <span className="bg-white border text-lg rounded-lg p-1">
            🔥
            <span className="text-xs font-bold text-[#8247FF] pr-1">
              PREMIER FEATURES
            </span>
          </span>
        </p>
        <h1 className="md:text-6xl text-3xl font-semibold">
          Discover our product's
          <span className="text-[#FE8162]"> Capabilities</span>
        </h1>
        <p className="text-xl text-[#757576]">
          Don't settle for mediocrity - embrace the future of management with{" "}
          <br />
          Manage Wise.
        </p>
      </div>

      <div className="container px-5  mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4 py-16">
          <div className="p-6 lg:w-1/2 md:w-full ">
            <div className="flex border-2 rounded-3xl h-full border-gray-200 border-opacity-50 p-10 sm:flex-row flex-col bg-[#EDEDFA]">
              <div className="flex-grow">
                <span className="bg-white text-3xl p-2 rounded-3xl">⭐️</span>

                <p className="font-medium leading-snug mt-6  md:text-5xl">
                  Boost productivity and streamline workflow with us. Enjoy our
                  intuitive interface and robust features.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 lg:w-1/2 md:w-full">
            <div className ="flex border-2 rounded-3xl h-full border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <img src="1.webp" alt="1" />

                <h2 className=" text-2xl font-semibold pt-6 ">
                  Smart Task Management
                </h2>
                <p className="leading-relaxed text-base pt-4">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:w-1/3 ">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
              <img
                className=" w-full object-cover object-center"
                src="2.png"
                alt="blog"
              />
              <div className="p-6">
                <h1 className ="title-font text-2xl font-semibold mb-2">
                  Easy Communication
                </h1>
                <p className="leading-relaxed ">
                  Collaborate seamlessly with your team in real-time
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
              <img
                className=" w-full object-cover object-center"
                src="3.webp"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-2xl font-semibold mb-2">
                  Flexible Scheduling
                </h1>
                <p className="leading-relaxed ">
                  Stay productive with our flexible scheduling system
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-3xl overflow-hidden">
              <img
                className=" w-full object-cover object-center"
                src="4.webp"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-2xl font-semibold mb-2">
                  Analytics
                </h1>
                <p className="leading-relaxed ">
                  Gain valuable insights with our advanced analytics feature
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremierFeatures;
