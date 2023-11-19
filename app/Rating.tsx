import { useState } from 'react';
import RatingButtons from '@/app/RatingButtons'

export default function Rating({ ratingLabels, className='', onSubmit=(_rating) => {} } : { ratingLabels: string[], className?: string, onSubmit?: (rating: string) => void }) {
  const [rating, setRating] = useState('')
  return (
    <div className={`flex flex-col gap-y-3 ${className}`}>
      <div className="flex w-10 h-10 justify-center items-center bg-mediumgray/[.15] rounded-full mb-1 sm:w-[46px] sm:h-[46px] sm:mb-5">
        <img className="w-[13px] h-[13px] sm:w-4 sm:h-4" src="/icon-star.svg" alt="Star icon" />
      </div>

      <span className="text-white font-medium text-2xl sm:text-[28px]">
        <h1>How did we do?</h1>
      </span>

      <span className="text-lightgray text-[14px] mb-4 sm:text-[15px] sm:leading-[25px] sm:mb-3.5">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </span>

      <RatingButtons
        className="mb-3 sm:mb-5"
        ratingLabels={ratingLabels}
        onChange={(label) => setRating(label)} />

      <button
        className="flex justify-center items-center h-[46px] transition bg-orange text-white text-[13px] tracking-[0.17em] leading-[14px] font-semibold rounded-full sm:text-[15px] sm:hover:transition sm:hover:bg-white sm:hover:text-orange"
        onClick={() => {
          if (rating !== '') { onSubmit(rating) }
        }}
      >
        <span className="pt-1 uppercase">Submit</span>
      </button>
    </div>
  )
}