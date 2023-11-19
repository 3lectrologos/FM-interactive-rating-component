export default function ThankYou({ ratingText, className='' } : { ratingText: string, className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-y-2 text-center sm:gap-y-1 ${className}`}>
      <img className="w-36 mb-4 sm:w-[10.5rem] sm:mb-7"
           src="/illustration-thank-you.svg"
           alt="Thank you illustration"
      />
      <span className="inline-block w-fit text-[14px] leading-[14px] tracking-wide text-orange bg-mediumgray/[0.15] px-3 pb-2 pt-3 rounded-full mb-4 sm:text-[15px] sm:leading-[15px] sm:px-4 sm:mb-7">
        You selected {ratingText}
      </span>

      <span className="text-white font-medium text-[24px] sm:text-[28px] sm:mb-0.5">
        Thank you!
      </span>

      <span className="text-lightgray text-[14px] sm:text-[15px] sm:leading-[25px]">
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </span>
    </div>
  )
}