// src/components/Banner.jsx
import scene from "../../../assets/images/Scene.png";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/DzX6gyy/Rectangle-60.jpg')",
      }}
    >
      <div className="h-[46rem] w-[90rem] flex items-center justify-center">
        <div className="w-[73.882rem] h-[23.875rem] flex justify-between items-center ml-14">
          <div className="space-y-9">
            <h2 className="text-4xl text-white font-semibold font-nunito ">
              The World’s Leading <br />{" "}
              <span className="font-bold text-5xl">
                Site Monitoring Service
              </span>
            </h2>
            <p className="text-white text-md">
              Ensure 24/7 Website Performance and Uptime with Real-Time
              Monitoring,
              <br /> Detailed Reports, and Expert Support. Stay Online Always.
            </p>
            <div className="flex gap-4">
              <button className="w-[7.875rem] p-2 h-[2.875rem] bg-gradient-to-r from-[#02AAB0]  to-[#00CDAC] rounded-md">
                Sign Up
              </button>
              <button className="w-[7.875rem] h-[2.875rem] rounded-md bg-white text-black">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-[36rem] h-[23rem]">
            <img src={scene} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
