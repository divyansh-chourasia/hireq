import React from "react";

const Integration = () => {
  return (
    <section class="text-[#f2F2EC] bg-[#07061B] body-font">
      <div class="container mx-auto flex px-5  items-center justify-center flex-col">
        
        <div>asfasf</div>
        
        <div class="text-center lg:w-2/3 w-full my-10">
          <div className="mb-4">
            <span className="bg-white  rounded border  border-purple-200 font-semibold text-[#8247FF] text-lg text-center">
              💲 <span className="text-xs font-bold pr-4 "> Integration</span>
            </span>
          </div>

          <h1 className="md:text-6xl text-3xl font-semibold mb-10">
            Enable <span className="text-[#FE8162]"> integration </span>
            with <br/> other popular tools and platforms
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-xl text-[#767675]">
            Seamlessly connect and amplify your workflow by enabling integration
            with a diverse array of widely-used tools and platforms.
          </p>
        </div>

        <img
          class=" md:w-3/6 w-5/6  object-cover object-center rounded"
          alt="hero"
          src="intergration.webp"
        />
      </div>
      
    </section>
  );
};

export default Integration;
