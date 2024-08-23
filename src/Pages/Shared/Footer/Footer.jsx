import logo from "../../../assets/images/Speedrack logo.png"


const Footer = () => {
    return (
        
      <footer className="px-4 divide-y bg-white  text-black">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				
                <img src={logo} alt="" />
				<span className="self-center text-black text-3xl font-nunito"><span className="font-semibold">Speed</span>Logger</span>
			</a>
            <p className="font-nunito text-md text-[#0F1C1980] mt-3">SeedLogger offers comprehensive site monitoring
                <br /> solutions with real-time alerts, detailed analytics,
                <br /> and performance optimization tools to keep your
                <br /> website thriving.</p>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="">
				<h3 className="tracking-wide pt-4 text-md  text-gray-400">Site Links</h3>
				<ul className="space-y-4 pt-2">
					<li>
						<a rel="noopener noreferrer " href="#">Home</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">How It Works</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Benefits</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Testimonials</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				
				<ul className="space-y-4 pt-11">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy Policy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms and Conditions</a>
					</li>
				</ul>
			</div>
			
			<div className="space-y-3">
				<div className="pt-4 text-md  text-gray-400">Subscribe</div>
				<div className="flex flex-col justify-start gap-y-3">
					<input className="bg-gray-200 w-[16rem] h-[3rem] rounded-lg px-4 py-1" type="email" name="email" id="" placeholder="Enter Your Email" />
                    <button className="bg-gradient-to-r from-[#02AAB0]  to-[#00CDAC] w-[16rem] h-[3rem] rounded-lg text-white">Subscribe Now</button>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400">© 1968 Company Co. All rights reserved.</div>
</footer>
        
    );
};

export default Footer;