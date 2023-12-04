"use client"
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='w-full bg-[#F7F8FD] p-6 rounded-3xl text-[#767675] font-semibold' >
      <header className=' flex justify-between md:text-2xl mb-2 ' onClick={() => setShowInfo(!showInfo)}>
        <h5 className='text-black hover:text-purple-600 '>{title}</h5>
        <button className='text-purple-600' >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
