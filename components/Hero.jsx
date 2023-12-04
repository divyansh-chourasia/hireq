import React from "react";

const Hero = () => {
  return (
    <main className="bg-gradient-to-b from-[#fdf2ec] via-transparent to-[rgb(255, 255, 255)]">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-40 items-center justify-center flex-col">
          
          <div className="text-center lg:w-10/12 w-full ">

            <div className="mb-6">
              <span className="bg-white p-1.5  rounded border-purple-800 font-semibold text-[#8247FF] text-lg">
                👋 <span className="text-xs pr-2 "> WELCOME TO MANAGE WISE!</span>
              </span>
            </div>

            <h1 className="title-font sm:text-7xl text-5xl mb-8 font-medium text-gray-900">
              Empower your business with{" "}
              <span className="text-[#FE8162]">Strategic</span> insights
            </h1>

            <p className="mb-8 leading-relaxed text-xl">
              Powerful management platform designed to streamline your business <br/>
              operations, boost productivity, and drive success
            </p>

            <div className="flex justify-center gap-5  ">
              <button className=" text-white bg-[#8247FF] hover:border-[#d9c7ff] hover:border-4 py-4 px-7 focus:outline-none  rounded-2xl text-xl font-semibold ">
                Get Started
              </button>
              <button className=" bg-white border hover:border-2 hover:border-black py-4 px-7   rounded-2xl text-xl font-semibold ">
                Watch Demo
              </button>
            </div>

          </div>

          <img alt="hero" src="hero-img.webp" className="py-16 " />
        </div>
      </section>
    </main>
  );
};

export default Hero;
