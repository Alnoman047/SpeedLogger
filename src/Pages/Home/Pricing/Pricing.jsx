import check from "../../../assets/images/gg_check-o.png"

const Pricing = () => {
    return (
        <div>
            <div>
                <h2 className="font-bold text-4xl text-center mt-48">Pricing</h2>
                <p className="font-nunito text-[#0F1C1980] text-center mt-2">Select the ideal plan for your website, offering flexible pricing and robust 
                    <br /> features to enhance performance and boost conversions.</p>
            </div>
            <div className="mt-16 px-56 flex justify-evenly">
                <div className="w-[30rem] h-[20rem] ">
                    <div className="bg-[#e6faf7] h-1/3 rounded-t-lg">
                        <h2 className="font-bold text-2xl text-center pt-6">Free Plan</h2>
                        <h2 className="text-center mt-2"><span className="text-3xl  font-bold bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] bg-clip-text text-transparent">$0.00</span>/m</h2>
                    </div>
                    <div className="bg-white h-2/3 rounded-b-lg">
                    <div className="ml-4 mr-2">
                        <h2 className="pt-4 ">
                        Start monitoring for free with essential tools and features
                        </h2>
                        <div className="flex gap-2 pt-6">
                            <img src={check} alt="" />
                            <p>Real-Time Uptime Monitoring</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <img src={check} alt="" />
                            <p>Daily Performance Reports</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <img src={check} alt="" />
                            <p>Email Alerts</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <img src={check} alt="" />
                            <p>Limited Analytics Dashboard</p>
                        </div>
                    </div>
                     </div>

                </div>
                <div className="w-[30rem] h-[20rem] ">
                    <div className="bg-[#e6faf7] h-1/3 rounded-t-lg">
                        <h2 className="font-bold text-2xl text-center pt-6">Premium Plan</h2>
                        <h2 className="text-center mt-2"><span className="text-3xl  font-bold bg-gradient-to-r from-[#02AAB0] to-[#00CDAC] bg-clip-text text-transparent">$30.00</span>/m</h2>
                    </div>
                    <div className="bg-white h-2/3 rounded-b-lg">
                    <div className="ml-4 mr-2">
                        <h2 className="pt-4 ">
                        Unlock advanced features for monitoring and insights
                        </h2>
                        <div className="flex gap-2 pt-6">
                            <img src={check} alt="" />
                            <p>Advanced Performance Metrics</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <img src={check} alt="" />
                            <p>Customizable Alerts</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <img src={check} alt="" />
                            <p>Detailed Analytics and Reporting</p>
                        </div>
                        <div className="flex gap-2 pt-2">
                            <img src={check} alt="" />
                            <p>24/7 Priority Support</p>
                        </div>
                    </div>
                     </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;