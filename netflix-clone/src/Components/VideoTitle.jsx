
const VideoTitle = ({originalTitle, overview}) => {

   
  return (
    <div className="absolute pt-32 md:pt-40 lg:pt-80 bg-gradient-to-r from-black h-full w-full hidden md:block">
        <div
         className="space-y-8 p-10">
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">{originalTitle}</h2>
            <p className="w-full md:w-2/3 lg:w-1/3 text-white">{overview}</p>
            <div className="space-x-3">
                <button className="p-3 md:p-4 px-10 md:px-12 bg-white text-lg md:text-xl text-black rounded-sm cursor-pointer">▶️Play</button>
                <button className="p-3 md:p-4 px-10 md:px-12 bg-transparent text-lg md:text-xl text-white border rounded-sm cursor-pointer transition-all hover:bg-gray-800">More Info</button>
            </div>
        </div>
      
      
    </div>
  )
}

export default VideoTitle
