import { Link } from "react-router-dom";
import featureOne from "../../../assets/images/time_monitoring.png"

const OurFeatures = () => {
    return (
        <div className="mt-36 w-[73.688rem] mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Our Features</h2>
                <p className="text-lg font-nunito">Real-time monitoring, instant alerts, detailed reports, 24/7 expert support, easy setup,
                    <br />
                     reliable uptime tracking, comprehensive coverage, user-friendly interface.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-16">
                <div className="w-[23.563rem] h-[21.75rem] bg-white rounded-xl">
                    <img className="mx-auto pt-8" src={featureOne} alt="" />
                    <h2 className="font-bold text-xl text-center pt-4">Real-Time Monitoring</h2>
                    <p className="text-center pt-4">Experience uninterrupted oversight with our real-time monitoring feature, ensuring immediate detection and resolution of performance issues for optimal website reliability.</p>
                    <div className=" flex justify-center mt-6">
                    <Link className="bg-gradient-to-r from-[#02AAB0]  to-[#00CDAC]  text-transparent bg-clip-text  ">Learn More</Link>
                    </div>
                </div>
                <div className="w-[23.563rem] h-[21.75rem] bg-white rounded-xl">
                    <img className="mx-auto pt-8" src={featureOne} alt="" />
                    <h2 className="font-bold text-xl text-center pt-4">Real-Time Monitoring</h2>
                    <p className="text-center pt-4">Experience uninterrupted oversight with our real-time monitoring feature, ensuring immediate detection and resolution of performance issues for optimal website reliability.</p>
                    <div className=" flex justify-center mt-6">
                    <Link className="bg-gradient-to-r from-[#02AAB0]  to-[#00CDAC]  text-transparent bg-clip-text  ">Learn More</Link>
                    </div>
                </div>
                <div className="w-[23.563rem] h-[21.75rem] bg-white rounded-xl">
                    <img className="mx-auto pt-8" src={featureOne} alt="" />
                    <h2 className="font-bold text-xl text-center pt-4">Real-Time Monitoring</h2>
                    <p className="text-center pt-4">Experience uninterrupted oversight with our real-time monitoring feature, ensuring immediate detection and resolution of performance issues for optimal website reliability.</p>
                    <div className=" flex justify-center mt-6">
                    <Link className="bg-gradient-to-r from-[#02AAB0]  to-[#00CDAC]  text-transparent bg-clip-text  ">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurFeatures;  