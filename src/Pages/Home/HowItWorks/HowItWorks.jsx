import tool from "../../../assets/images/tool.png"
import two from "../../../assets/images/two.png"
import automated from "../../../assets/images/automated.png"
import four from "../../../assets/images/four.png"
import hrLine from "../../../assets/images/hr line.png"
import one from "../../../assets/images/One.png"
import analysis from "../../../assets/images/Analysis.png"
import three from "../../../assets/images/three.png"
import clock from "../../../assets/images/clock.png"

const HowItWorks = () => {
    return (
        <div className="h-[86rem] bg-white mt-60">
            <div className="text-center pt-20">
                <h2 className="text-4xl font-bold ">How It Works</h2>
                <p className="text-lg font-nunito pt-4">Our site monitoring service tracks uptime, performance, and security, providing real-time alerts 
                <br /> and detailed reports to ensure optimal website functionality.</p>
            </div>
            <div className="flex justify-around mx-28 justify-items-end mt-24">
                <div className="flex flex-col  items-end">
                    <div className="mt-12 mb-32">
                        <img src={tool} alt="" />
                    </div>
                    <div>
                        <div className=" flex justify-end">
                        <img src={two} alt="" />
                        </div>
                        <div className="text-end">
                        <h2 className="text-xl mt-6 font-bold">Easy to Use for Analysis</h2>
                        <p className="text-right mt-4">Effortlessly analyze site performance with intuitive dashboards,
                            <br /> clear visualizations, and straightforward reports for 
                            <br /> optimized website functionality.</p>
                        </div>
                    </div>
                    <div className="mt-32 mb-28">
                        <img src={automated} alt="" />
                    </div>
                    <div>
                        <div className="flex justify-end">
                        <img src={four} alt="" />
                        </div>
                        <div className="text-end">
                        <h2 className="text-xl mt-6 font-bold">Saves Valuable Time</h2>
                        <p className="text-right mt-4">Saves Valuable Time. streamlines website monitoring with 
                        <br />real-time alerts, ensuring uninterrupted service and 
                        <br /> efficient management for businesses.</p>
                        </div>
                    </div>
                </div>
                <div className="h-[64rem] w-[0.188rem]">
                    <img src={hrLine} alt="" />
                </div>
                <div className="">
                <div className="">
                        <img src={one} alt="" />
                        <h2 className="text-xl mt-6 font-bold">Digital Analytical Tool</h2>
                        <p className="text-left mt-4">Digital Analytical Tool: Simplify site monitoring with real-time 
                        <br /> insights, ensuring optimal performance and security 
                        <br /> for your online presence effortlessly.</p>
                    </div>
                    <div className=" mt-36 mb-32">
                        <img src={analysis} alt="" />
                    </div>
                    <div>
                        <img src={three} alt="" />
                        <h2 className="text-xl mt-6 font-bold">Fully Automated</h2>
                        <p className="text-left mt-4">Fully Automated: Effortlessly monitor website performance and 
                        <br /> security with automated tools, ensuring seamless
                        <br /> operation and peace of mind for users.</p>
                    </div>
                    <div className=" mt-28 ">
                        <img src={clock} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HowItWorks;