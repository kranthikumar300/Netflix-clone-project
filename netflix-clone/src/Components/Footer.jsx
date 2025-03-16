const Footer = () => {
    return (
      <footer className="bg-black text-white py-10">
        <div className="flex flex-col items-center space-y-5 md:flex-row md:justify-between md:space-y-0 px-10">
  
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-gray-400 font-bold text-lg">About</h2>
            <p className="text-gray-400 text-sm">
              This project is built with React.js, Redux Toolkit, and Tailwind CSS by Kranthi.
            </p>
          </div>
  
          {/* GitHub Button */}
          <div>
            <button className="p-3 px-6 border border-white rounded-lg cursor-pointer transition hover:bg-white hover:text-black">
              <a href="https://github.com/kranthikumar300/Netflix-clone-project" target="_blank">Code in GitHub</a>
            </button>
          </div>
          
        </div>
  
        {/* Copyright Section */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Netflix Clone. All Rights Reserved By Kranthi Kireet.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  