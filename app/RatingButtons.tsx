import { useState } from 'react'

function RButton({ label, active=false, onClick } : { label: string, active?: boolean, onClick?: () => void }) {
  const bgColor = active ? 'bg-mediumgray' : 'bg-mediumgray/[.15]'
  const textColor = active ? 'text-white' : 'text-lightgray'
  const textWeight = active ? 'font-bold' : 'font-normal'
  return (
    <button className={`flex justify-center items-center w-10 h-10 transition ${bgColor} ${textColor} ${textWeight} text-[13px] leading-[13px] rounded-full sm:w-[50px] sm:h-[50px] sm:text-[16px] sm:hover:bg-orange sm:hover:text-white sm:hover:font-bold`}
            onClick={onClick}>
      <span className="pt-1">{label}</span>
    </button>
  )
}

export default function RatingButtons({ ratingLabels, onChange=(_label)=>{}, className='' } : { ratingLabels: string[], onChange?: (label: string) => void, className?: string }) {
  const [rating, setRating] = useState('')
  return (
    <div className="flex flex-row justify-between mb-3 sm:mb-5">
      {ratingLabels.map((label) => (
        <RButton
          key={label}
          label={label}
          active={label === rating}
          onClick={() => {
            setRating(label)
            onChange(label)
          }}
        />
      ))}
    </div>
  )
}