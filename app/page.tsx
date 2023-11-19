'use client'

import Image from 'next/image'
import Rating from '@/app/Rating'
import { useState } from 'react'

export default function Home() {
  const [rating, setRating] = useState(0)
  const ratings = [1, 2, 3, 4, 5]
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-verydarkblue">
      <div className="flex flex-col gap-y-3 w-[20.5rem] bg-darkblue rounded-2xl px-6 pt-6 pb-8 sm:w-[25.5rem] sm:p-8 sm:rounded-3xl">
        <div className="flex w-10 h-10 justify-center items-center bg-mediumgray/[.15] rounded-full mb-1 sm:w-[46px] sm:h-[46px] sm:mb-5">
          <img className="w-[13px] h-[13px] sm:w-4 sm:h-4" src="/icon-star.svg" alt="Star icon" />
        </div>

        <span className="text-white font-medium text-2xl sm:text-[28px]">
          How did we do?
        </span>

        <span className="text-lightgray text-[14px] mb-4 sm:text-[15px] sm:leading-[25px] sm:mb-3.5">
          Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!
        </span>

        <div className="flex flex-row justify-between mb-3 sm:mb-5">
          {ratings.map((number) => (
            <Rating
              key={number}
              number={number}
              active={number === rating}
              onClick={() => setRating(number)}
            />
          ))}
        </div>

        <button className="flex justify-center items-center h-[46px] transition bg-orange text-white text-[13px] tracking-[0.17em] leading-[14px] font-semibold uppercase rounded-full sm:text-[15px] sm:hover:transition sm:hover:bg-white sm:hover:text-orange">
          <span className="pt-1">Submit</span>
        </button>
      </div>
    </div>
  )
}
