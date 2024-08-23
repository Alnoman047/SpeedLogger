import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Benefits from "./Benefits/Benefits";
import FAQ from "./FAQ/FAQ";
import HowItWorks from "./HowItWorks/HowItWorks";
import LatestBlog from "./LatestBlog/LatestBlog";
import NewsLetter from "./NewsLetter/NewsLetter";
import OurFeatures from "./Our Features/OurFeatures";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials"


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            <HowItWorks></HowItWorks>
            <Benefits></Benefits>
            <div className="bg-white "><Testimonials></Testimonials></div>
            <Pricing></Pricing>
            <FAQ></FAQ>
            <NewsLetter></NewsLetter>
            <LatestBlog></LatestBlog>
            <Footer></Footer>
        </div>
    );
};

export default Home;