import { BiSolidBell } from "react-icons/bi";
import { AiFillMobile } from "react-icons/ai";
import { HiFire } from "react-icons/hi2";


const AndMore = () => {
  return (
    <section className="bg-[#07061B] text-[#757576]">
      <div class="container px-5 py-20 mx-auto ">
        <div class="  w-full py-8">
          <div className="mb-4">
            <span className="bg-white p-1 rounded  font-semibold text-[#8247FF]">
              🤩
              <span className="text-xs"> AND MORE...</span>
            </span>
          </div>

          <h1 class="title-font md:text-6xl text-3xl mb-6 font-medium text-[#FDF2EC]">
            Explore an array of features that elevate your
            <span className="text-[#FE8162]"> Productivity </span>
            insights to new heights
          </h1>

          <p className="mb-10 leading-relaxed text-xl text-[#767575]">
            Discover the tools that will revolutionize the way you <br />
            manage and optimize your operations.
          </p>
        </div>

        <div class="flex flex-wrap -m-4 ">
          <div class="xl:w-1/3 md:w-1/2 p-6  ">
            <div class="  bg-[#212121] px-8 py-12 rounded-3xl text-center ">
              <div class="p-4 mb-4 inline-flex text-3xl items-center justify-center rounded-3xl  bg-[#8247FF] text-white ">
                <AiFillMobile />
              </div>

              <h2 class="text-2xl text-white  font-medium  mb-4">
                Cross-Platform Compatibility
              </h2>

              <p class="leading-relaxed text-base">
                Enjoy the flexibility of cross-platform compatibility. Our
                product works seamlessly across desktop, web, and mobile
                devices, allowing you to work from your preferred device.
              </p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-6  ">
            <div class="  bg-[#212121] px-8 py-12 rounded-3xl text-center  ">
              <div class="p-4 mb-4 inline-flex text-3xl items-center justify-center rounded-3xl  bg-[#8247FF] text-white ">
              <BiSolidBell />
              </div>

              <h2 class="text-2xl text-white  font-medium  mb-4">
                Stay Informed with Essential Notifications
              </h2>

              <p class="leading-relaxed text-base">
                Automate support from first customer contact to closing the
                ticket. Drastically improve time to resolution.Automate support
                from first customer contact to closing the ticket.
              </p>
            </div>
          </div>

          <div class="xl:w-1/3 md:w-1/2 p-6  ">
            <div class="  bg-[#212121] px-8 py-12 rounded-3xl text-center  h-full">
              <div class="p-4 mb-4 inline-flex text-3xl items-center justify-center rounded-3xl  bg-[#8247FF] text-white ">
                <HiFire />
              </div>

              <h2 class="text-2xl text-white  font-medium  mb-4">
                Secure Data Encryption at all times
              </h2>

              <p class="leading-relaxed text-base">
                Trust in our robust data encryption to keep your sensitive
                information safe and secure. Rest easy knowing your data is
                protected at all times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndMore;
