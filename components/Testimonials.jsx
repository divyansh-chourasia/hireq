import reviews from "@/data/reviews";
import React from "react";
import SingleReviewCard from "./SingleReviewCard";

const Testimonials = () => {
  return (
    <section>
      <div class="  w-3/4 mx-auto py-8">
        <div className="mb-4 ">
          <span className=" p-1 rounded border  font-semibold text-[#8247FF]">
             🧡
            <span className="text-xs"> TESTIMONIALS</span>
          </span>
        </div>

        <h1 class="title-font md:text-6xl text-3xl mb-6 font-medium ">
          Hear from our <span className="text-[#FE8162]"> Satisfied </span>
          clients
        </h1>

        <p className="mb-10 leading-relaxed text-xl text-[#767575]">
        Discover why our clients love working with us. Read their <br/> testimonials and learn how we has helped businesses.


        </p>
      </div>

      <article>
        <div className="wrapper  mb-10">
          <div className="slider">
            <div className="slide">
              {reviews.map((review) => {
                return <SingleReviewCard key={review.id} {...review} />;
              })}
            </div>

            <div className="slide">
              {reviews.map((review) => {
                return <SingleReviewCard key={review.id} {...review} />;
              })}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
