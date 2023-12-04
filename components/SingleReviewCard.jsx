"use client";
import React from "react";

const SingleReviewCard = (review) => {
  const { title, job, info , image } = review;
  return (
    <article  className=" m-8 ">
      <div className="border rounded-3xl p-5 w-72 ">
        <div className="text-lg mb-8">"{info}"</div>

        <div className="flex gap-6">
          <div className="w-12 h-12  rounded-full ">
            <img src={image} alt="avatar" />
          </div>

          <div>
            <h1 className="text-lg">{title}</h1>
            <p className="text-base text-[#767675]">{job}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleReviewCard;
