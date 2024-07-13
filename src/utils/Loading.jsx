import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="flex justify-center items-center py-20 ">
        <div className="relative bg-[#b4b5e5] w-28 h-28 border border-solid border-[#6465c8] rounded-full text-center leading-[110px] text-base font-sans text-[#2E3192] font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(34,33,33,0.5)]">
          <span className="text-shadow-[0_0_20px_blue]">Loading...</span>
          <div className="absolute top-[-3px] left-[-3px] w-full h-full border-3 border-transparent border-t-5 border-r-5 border-solid border-[#252792] rounded-full animate-spin"></div>
        </div>
      </div>
      <style jsx>{`
        .animate-spin {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default Loading