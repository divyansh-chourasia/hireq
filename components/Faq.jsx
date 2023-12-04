"use client";
import React, { useState } from "react";
import data from "../data/data";
import SingleQuestion from "./SingleQuestion";

const Faq = () => {
  const [questions, setQuestions] = useState(data);

  return (
    

    <section id="faq"> 
      <div className="container mx-auto flex px-5 py-32 lg:flex-row flex-col ">
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start  mb-16 md:mb-0 ">
          <div className="mb-4 ">
            <span className="bg-white p-1 rounded-xl border  border-purple-200 font-semibold text-[#8247FF] text-lg ">
              🙋‍♀️
              <span className="text-xs font-bold pr-4 "> FAQ</span>
            </span>
          </div>

          <h1 className="md:text-6xl text-3xl font-semibold mb-10"> 
            Need <br/> <span className="text-[#FE8162]"> Answers?</span>
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-xl text-gray-500">
            Check out our most commonly asked questions below to find the
            information you need.
          </p>
        </div>

        <div className="lg:flex-grow lg:w-1/2 flex flex-col md:items-start  mb-16 md:mb-0 ">
          <div className="flex flex-col gap-4 w-full ">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
