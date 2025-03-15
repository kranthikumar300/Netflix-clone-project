import {motion} from "framer-motion"
import { useState} from "react"


const LoginPage = () => {

    //useState Hook for toggle
    const [isLogged, setIsLoggged] = useState(true)

    //Func calling
    const loginToggler = () => {
       setIsLoggged(!isLogged)
    }

  return (

    <div className="relative w-full h-screen flex justify-center items-center">

        {/*Netflix bg-image */}
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
       className="h-screen w-full object-cover"
       alt="Netflix-bg"/>

       {/*gradient overlay */}
       <div className="absolute inset-0 bg-black opacity-60"></div>

       {/*Netflix logo */}
       <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="absolute top-5 left-5 w-[150px] md:w-[220px]"
        alt="Netflix-Logo" />

        {/*login & signup Form */}
        <form
         onSubmit={(e) => e.preventDefault()}
         className="absolute text-white w-[95%] max-w-[400px] h-130 p-6 bg-black opacity-80 gap-y-6 rounded-lg flex flex-col text-center justify-center">

            <h2 
            className="text-4xl my-8">
            {!isLogged ? "Login" : "Sign up"}
            </h2>

            {/*Sign up input */}
            {isLogged && <input type="text"
             placeholder="Full Name"
             className="p-3 border-gray-200 border-1 outline-none"/>}

            <input type="email"
             placeholder="Enter Gmail"
             className="p-3 border-gray-200 border-1 outline-none" />

            <input type="password"
             placeholder="Enter Password"
             className="p-3 border-gray-200 border-1 outline-none" />

            {/*button hover by framer-motion*/}
            <motion.button
             whileHover={{backgroundColor : "rgba(38, 35, 35, 0.45)"}}
             whileTap = {{scale : 0.95}}
             className="bg-red-600 w-full p-3 text-lg cursor-pointer transition-all">submit</motion.button>

            <p 
            className="cursor-pointer"
            onClick={loginToggler}>
            {isLogged ? "Already have Account ? Login " : "New to NetflixGPT ? Sign Up"}
            </p>
        </form>
    </div>

  )
}

export default LoginPage
