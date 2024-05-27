import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import HowItWorks from "./HowItWorks/HowItWorks";
import OurFeatures from "./Our Features/OurFeatures";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;