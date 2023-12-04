import React from "react";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-4 ">
            <span className="bg-white p-1 rounded-xl border  border-purple-200 font-semibold text-[#8247FF] text-lg text-center">
              💲 <span className="text-xs font-bold pr-4 "> PRICING</span>
            </span>
          </div>

          <h1 className="md:text-6xl text-3xl font-semibold mb-10">
            Select your ideal 
            <span className="text-[#FE8162] "> Pricing </span>plan
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-500">
            At Manage Wise, we believe in providing you with <br/> pricing plans that
            adapt to your unique needs.
          </p>
          
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="p-4 mt-4 xl:w-1/3 md:w-1/2 w-full ">
            <div className="h-full px-6 py-12 rounded-3xl border-5 flex flex-col relative overflow-hidden bg-[#EDEDFA]">
              <h2 className="text-sm tracking-widest title-font mb-4 font-medium ">
                <span className="bg-white px-2 py-1 rounded-lg text-[#FE8162]">
                  Free
                </span>
              </h2>

              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                $0<span className="text-base">/month</span>
              </h1>

              <p className="flex items-center text-gray-600 mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to all basic features
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Reporting and analytics
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Up to 5 individual users
              </p>

              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Chat and email support
              </p>
              <button className="flex items-center mt-auto  bg-white border-0 py-2 px-4 font-bold  focus:outline-none rounded-xl">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4  xl:w-1/3 md:w-1/2 w-full text-white">
            <div className="h-full px-6 py-12 rounded-3xl border-2  flex flex-col relative overflow-hidden bg-black">
              <h2 className="text-sm tracking-widest title-font mb-4 font-medium ">
                <span className="bg-white px-2 py-1 rounded-lg text-[#FE8162]">
                  Standard
                </span>
              </h2>

              <h1 className="text-5xl pb-4 mb-4 leading-none">
                $25<span className="text-base">/month</span>
              </h1>

              <p className="flex items-center text-[#767675] mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to all basic features
              </p>

              <p className="flex items-center text-[#767675] mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Reporting and analytics
              </p>

              <p className="flex items-center text-[#767675] mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Up to 5 individual users
              </p>

              <p className="flex items-center text-[#767675] mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Chat and email support
              </p>

              <p className="flex items-center text-[#767675] mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                3+ integrations
              </p>

              <p className="flex items-center text-[#767675] mb-6">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Account performance reporting
              </p>

              <button className="flex items-center mt-auto text-white bg-[#8247Ff] border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                Button
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="p-4 mt-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full px-6 py-12  rounded-3xl border-2 flex flex-col relative overflow-hidden bg-[#EDEDFA]">
              <h2 className="text-sm tracking-widest title-font mb-4 font-medium ">
                <span className="bg-white px-2 py-1 rounded-lg text-[#FE8162]">
                  Business
                </span>
              </h2>

              <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                $42<span className="text-base">/month</span>
              </h1>

              <p className="flex items-center text-gray-600 mb-2 ">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Access to all basic features
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Reporting and analytics
              </p>

              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Up to 5 individual users
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                Chat and email support
              </p>

              <p className="flex items-center text-gray-600 mb-6">
                <span className="w-5 h-5  mr-2 inline-flex items-center justify-center  text-green-500 rounded-full flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </span>
                3+ integrations
              </p>

              <button className="flex items-center mt-auto  bg-white border-0 py-2 px-4 font-bold  focus:outline-none rounded-xl">
                Get Started
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  class="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
