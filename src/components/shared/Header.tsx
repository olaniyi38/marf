import { FaBars } from "react-icons/fa6";
import Button from "./Button";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import logoSrc from "../../assets/images/IMG-20240406-WA0021.jpg";
import { NavLink, Outlet } from "react-router-dom";

const NAV_LINKS = [
	{
		title: "home",
		url: "/",
	},
	{
		title: "about us",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
	},
	{
		title: "blog",
		url: "/blog",
	},
	{
		title: "events",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
	},
	{
		title: "contact us",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
	},
];

const FACTS = [
	"Every 68 seconds, a Nigerian is sexually assaulted. And every 9 minutes, that victim is a child.” - UNHCR (2023)",
	"Every 68 seconds, a Nigerian is sexually assaulted. And every 9 minutes, that victim is a child.” - UNHCR (2023)",
	"Every 68 seconds, a Nigerian is sexually assaulted. And every 9 minutes, that victim is a child.” - UNHCR (2023)",
];

const Header = () => {
	const [mobileNavActive, setMobileNavActive] = useState(false);

	function toggleMobileNav() {
		setMobileNavActive(!mobileNavActive);
	}

	return (
		<>
			<div className="sticky top-0 z-30">
				<Marquee
					speed={30}
					pauseOnHover
					className="px-3 text-sm bg-brick-red text-white   py-1 md:py-2 ">
					{FACTS.map((fact, i) => (
						<p
							className=" inline-block mx-2"
							key={fact + i}>
							----{fact}-----
						</p>
					))}
				</Marquee>
			</div>
			<header className=" sticky top-5 bg-white lg:static">
				<div className="px-3 py-1 md:px-6  xl:px-4 flex items-center justify-between max-w-[90rem] mx-auto ">
					<span className=" w-12 lg:w-20 h-auto">
						<img
							src={logoSrc}
							alt="logo"
						/>
					</span>
					<div>
						<nav className="hidden lg:flex items-center gap-x-8">
							{NAV_LINKS.map(({ title, url }) => (
								<NavLink
									to={url}
									key={title + url}
									className={({ isActive }) =>
										`capitalize inline-block hover:text-gray-600 ${
											isActive ? "text-brick-red" : ""
										}`
									}>
									{title}
								</NavLink>
							))}
							<Button>Join Us</Button>
						</nav>
						<nav
							className={`mobile-nav lg:hidden bg-white top-[4.5rem] md:top-[5rem] ${
								mobileNavActive ? "active" : ""
							}`}>
							<div className=" flex flex-col p-4 md:px-6 gap-y-2">
								{NAV_LINKS.map(({ title, url }) => (
									<a
										href={url}
										key={title + url}
										className="capitalize hover:text-gray-600 inline-block overflow-hidden">
										<span className="inline-block">{title}</span>
									</a>
								))}
								<Button>Join Us</Button>
							</div>
						</nav>
					</div>
					<button
						onClick={toggleMobileNav}
						className=" lg:hidden">
						<FaBars className="w-5 h-auto" />
					</button>
				</div>
			</header>

			<Outlet />
		</>
	);
};

export default Header;
