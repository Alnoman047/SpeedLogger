import GreenPoint from "../../../assets/images/green point.png"
import Vector1 from "../../../assets/images/Vector_1.png"
import Performance from "../../../assets/images/performance page.png"
import page from "../../../assets/images/Page Speed Monitoring.png"
import Vector2 from "../../../assets/images/Vector_2.png"

const Benefits = () => {
    return (
        <div>
            <div className="mt-60">
                <h2 className="font-bold text-4xl text-center">Benefits</h2>
                <p className="text-[#0F1C1980] text-lg font-nunito text-center pt-4">Ensure your website stays online with real-time alerts and insights, preventing downtime
                    <br />
                     and protecting your business reputation and performance.</p>
            </div>

            <div className="flex justify-between ">
                <div className="pt-40 w-1/2 pl-20 mt-2">
                    <h2 className="text-2xl font-semibold">Improved User Experience</h2>
                    <p className="text-[#0F1C1980] mt-4 text-md font-nunito">Enhance your website performance with real-time monitoring tools designed to optimize user experience. Identify and resolve issues quickly, ensuring seamless navigation and faster load times. Keep your users engaged with a responsive, reliable site that delivers consistently smooth interactions, boosting satisfaction and retaining visitors effortlessly.</p>
                    <div className="flex gap-2 pt-12">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Reduce page load times to keep users engaged</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Identify and resolve problems before users notice</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Ensure uninterrupted and intuitive site access</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Provide a reliable experience to boost user satisfaction</p>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Vector1})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'contain',  
  width: '100%',
  height: '100vh',  backgroundPosition: 'calc(100% ) center' }} className="w-1/2 ">
                    <img className=" flex ml-64 mt-12 w-[39rem] h-[36.875rem]" src={Performance} alt="" />

                </div>
            </div>
            <div className="flex justify-between mt-60">
            <div style={{ backgroundImage: `url(${Vector2})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'contain',  
  width: '100%',
  height: '100vh',  backgroundPosition: 'calc(0% ) center' }} className="w-1/2 ">
                    <img className=" flex ml-32 mt-12 w-[39rem] h-[36.875rem]" src={page} alt="" />

                </div>
                <div className="pt-40 w-1/2 pr-20  mt-2">
                    <h2 className="text-2xl font-semibold">Higher Conversions</h2>
                    <p className="text-[#0F1C1980] mt-4 text-md font-nunito">Maximize your website potential with our advanced monitoring tools. Detect issues before they impact your users, ensure optimal performance, and boost conversions effortlessly. Our real-time alerts and detailed analytics help you stay ahead, delivering a seamless experience that drives higher engagement and sales. Start optimizing your website today!</p>
                    <div className="flex gap-2 pt-12">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Instantly detect and resolve issues to prevent downtime.</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Ensure your site runs smoothly for better user experience.</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Gain insights to make precise decisions that increase conversions</p>
                    </div>
                    <div className="flex gap-2 pt-2">
                        <img src={GreenPoint} alt="" />
                        <p className="font-nunito">Stay ahead of problems and boost customer satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;