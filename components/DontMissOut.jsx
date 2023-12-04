import React from "react";

const DontMissOut = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff] via-transparent to-[rgb(253,242,236)]">
      <div class="container mx-auto flex justify-center px-5 py-24 md:flex-row flex-col items-center border rounded-3xl bg-white">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 ">
          <div className="mb-4">
            <span className="bg-white p-1 rounded border  border-purple-200 font-semibold text-[#8247FF] text-lg ">
              👋 <span className="text-xs"> DON'T MISS OUT</span>
            </span>
          </div>

          <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            Unleash your <span className="text-[#FE8162]"> Potential </span>
            with us
          </h1>
          <p class="mb-8 leading-relaxed text-xl text-[#767675]">
            Join our community of ambitious <br /> individuals and organizations
            eager <br />
            to make a difference.
          </p>
          <button class="inline-flex text-white bg-[#8247FF]  border-0 py-4 px-10 font-semibold focus:outline-none rounded-2xl text-lg">
            Try out now
          </button>
        </div>

        <div class="lg:max-w-lg lg:w-full md:w-1/2 ">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="dont-miss-out.png"
          />
        </div>
      </div>
    </section>
  );
};

export default DontMissOut;
