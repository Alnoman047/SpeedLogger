import logo from "../../../assets/images/Speedrack logo.png"


const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-transparent border-b border-gray-400">
      <div className="container w-[80rem] mx-auto p-4 flex justify-between items-center">
        <div className=" flex items-center gap-2">
            <img src={logo} alt="" />
            <h2 className="text-white text-3xl font-nunito"><span className="font-semibold">Speed</span>Logger</h2>
        </div>
        <div className="space-x-4">
          <a href="#home" className="text-white">Home</a>
          <a href="#about" className="text-white">About</a>
          <a href="#services" className="text-white">Services</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
