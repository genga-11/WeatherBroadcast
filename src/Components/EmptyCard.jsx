


export default function EmptyCard(){
    return(
        <div className=" flex items-center justify-center shadow-xl h-[325px] backdrop-blur-lg">
      <div className="flex flex-col  rounded p-4 w-full max-w-xs">
       
        {/* <div className="text-sm text-gray-500">{new Date().toDateString()}</div>? */}
        <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
          <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
          </svg>
        </div>
        <div className="flex flex-row items-center justify-center mt-6">
            <p>Loading...</p>
        </div>
       
      </div>
    </div>
    )
}