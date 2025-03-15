import {motion} from "framer-motion"

const Header = () => {

  return (
    <div className="absolute z-10 w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-5">
        
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
         className="w-[100px] md:w-[150px]"
         alt="Netflix-Logo" />

         <div className="space-x-3 mt-4 md:mt-0">

          <motion.button
            whileHover={{scale : 1.05}}
            whileTap={{scale : 0.95}}
            className="text-white p-3 rounded-md cursor-pointer bg-red-500">Sign Out
          </motion.button>

         </div>
        
    </div>
  )
}

export default Header
