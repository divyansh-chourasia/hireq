import React from "react";

const Hero = () => {
  return (
    <main className="bg-gradient-to-b from-[#fdf2ec] via-transparent to-[rgb(255, 255, 255)]">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          
          <div class="text-center lg:w-10/12 w-full ">

            <div>
              <span className="bg-white p-1 rounded border-purple-800 font-semibold text-[#8247FF] text-lg">
                👋 <span className="text-xs"> WELCOME TO MANAGE WISE!</span>
              </span>
            </div>

            <h1 class="title-font sm:text-7xl text-5xl mb-4 font-medium text-gray-900">
              Empower your business with{" "}
              <span className="text-[#FE8162]">Strategic</span> insights
            </h1>

            <p className="mb-8 leading-relaxed text-xl">
              Powerful management platform designed to streamline your business
              operations, boost productivity, and drive success
            </p>

            <div className="flex justify-center gap-5  ">
              <button className=" text-white bg-[#8247FF] hover:border-[#d9c7ff] hover:border-4 py-4 px-7 focus:outline-none  rounded-2xl text-xl font-semibold ">
                Get Started
              </button>
              <button className=" bg-white border hover:border-2 py-4 px-7   rounded-2xl text-xl font-semibold ">
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
