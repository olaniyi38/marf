import { FaBars } from "react-icons/fa6";
import Button from "./Button";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

// import { Autoplay } from "swiper/modules";

const NAV_LINKS = [
	{
		title: "home",
		url: "#",
	},
	{
		title: "about us",
		url: "#",
	},
	{
		title: "blog",
		url: "#",
	},
	{
		title: "events",
		url: "#",
	},
	{
		title: "contact us",
		url: "#",
	},
];

// const FACTS = [
// 	"Every 68 seconds, a Nigerian is sexually assaulted. And every 9 minutes, that victim is a child.” - UNHCR (2023)",
// 	"Every 68 seconds, a Nigerian is sexually assaulted. And every 9 minutes, that victim is a child.” - UNHCR (2023)",
// 	"Every 68 seconds, a Nigerian is sexually assaulted. And every 9 minutes, that victim is a child.” - UNHCR (2023)",
// ];

const Header = () => {
	return (
		<>
			{/* <Swiper
				modules={[Autoplay]}
				autoplay={{
					delay: 500,
				}}
				slidesPerView={"auto"}
				className="flex items-center px-3 text-sm bg-brick-red text-white overflow-hidden sticky top-0 z-30 md:py-2 ">
				{FACTS.map((fact) => (
					<SwiperSlide>{fact}</SwiperSlide>
				))}
			</Swiper> */}
			<header>
				<div className="px-3 py-2 md:px-6 md:py-4 flex items-center justify-between max-w-[90rem] mx-auto">
					<span className=" font-black text-brick-red md:text-lg lg:text-xl">
						MARF
					</span>
					<div>
						<nav className="hidden lg:flex items-center gap-x-8">
							{NAV_LINKS.map(({ title, url }) => (
								<a
									href={url}
									className="capitalize inline-block">
									{title}
								</a>
							))}
							<Button>Join Us</Button>
						</nav>
					</div>
					<FaBars className="w-5 h-auto lg:hidden" />
				</div>
			</header>
		</>
	);
};

export default Header;
