'use client'

import { useState } from 'react'
import Rating from '@/app/Rating'
import ThankYou from '@/app/ThankYou'

function Content() {
  const [rated, hasRated] = useState(false)
  const [rating, setRating] = useState('')
  const ratingLabels = ['1', '2', '3', '4', '5']
  if (!rated) {
    return (
      <Rating
        className="w-[20.5rem] bg-darkblue rounded-2xl px-6 pt-6 pb-8 sm:w-[25.5rem] sm:p-8 sm:rounded-3xl"
        ratingLabels={ratingLabels}
        onSubmit={(rating) => {
          setRating(rating)
          hasRated(true)
        }}
      />
    )
  } else {
    return (
      <ThankYou
        className="w-[20.5rem] bg-darkblue rounded-2xl px-6 pt-9 pb-9 sm:w-[25.5rem] sm:p-9 sm:py-11 sm:rounded-3xl"
        ratingText={`${rating} out of ${ratingLabels[ratingLabels.length-1]}`} />
    )
  }
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-verydarkblue">
      <Content />
    </div>
  )
}
