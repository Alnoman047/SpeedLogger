import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/Speedrack logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
	const navOptions = (
		<>
			<li>
				<NavLink className={`text-white mx-2`} to="/">
					Home
				</NavLink>
			</li>

			<li>
				<NavLink className={`text-white mx-2`} to="/features">
					Features
				</NavLink>
			</li>
			<li>
				<NavLink className={`text-white mx-2`} to="/works">
					How it works
				</NavLink>
			</li>
			<li>
				<NavLink className={`text-white mx-2`} to="/benefits">
					Benefits
				</NavLink>
			</li>
			<li>
				<NavLink className={`text-white mx-2`} to="/pricing">
					Pricing
				</NavLink>
			</li>
			<li>
				<NavLink className={`text-white mx-2`} to="/contact">
					Contact
				</NavLink>
			</li>
		</>
	);

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 720) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		return () => (window.onscroll = null);
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 left-0 z-10 bg-transparent border-gray-400 transition-all ${
				isSticky ? "bg-[#a93aee] " : "border-b"
			}`}
		>
			<div className="container w-[80rem] mx-auto  flex justify-between p-2 items-center">
				<div className=" flex w-1/4 items-center navbar-start  gap-2">
					<img src={logo} alt="" />
					<h2 className="text-white text-3xl font-nunito">
						<span className="font-semibold">Speed</span>Logger
					</h2>
				</div>
				<div className=" flex w-2/4 navbar-center">
					<ul className=" flex  gap-2">{navOptions}</ul>
				</div>
				<div>
					<Link>
						<button className="p-2 w-[7rem] h-[2.875rem] bg-gradient-to-r from-[#02AAB0]  to-[#00CDAC] rounded-md text-white">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
