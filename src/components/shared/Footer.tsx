import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import logoSrc from "../../assets/images/IMG-20240406-WA0021.jpg";
// import Button from "./Button";

const footerLinks = [
	{
		title: "About Us",
		links: [
			{
				title: "Our Mission",
				url: "",
			},
			{
				title: "Our Team",
				url: "",
			},
			{
				title: "Contact Us",
				url: "",
			},
			{ title: "Careers", url: "" },
			{
				title: "Press & Media",
				url: "",
			},
			{
				title: "Partnerships",
				url: "",
			},
		],
	},
	{
		title: "Resources",
		links: [
			{ title: "FAQs", url: "" },
			{
				title: "Blog",
				url: "",
			},
			{
				title: "Help Center",
				url: "",
			},
			{
				title: "Community Guidelines",
				url: "",
			},
			{
				title: "Terms of Service",
				url: "",
			},
			{
				title: "Privacy Policy",
				url: "",
			},
		],
	},
	{
		title: "Get Involved",
		links: [
			{
				title: "Volunteer Opportunities",
				url: "",
			},
			{ title: "Donate", url: "" },
			{
				title: "Become a Member",
				url: "",
			},
			{
				title: "Host a Fundraiser",
				url: "",
			},
			{ title: "Spread the Word", url: "" },
			{
				title: "Sign Up for our Newsletter",
				url: "",
			},
		],
	},
	{
		title: "Stay Connected",
		links: [
			{ title: "Contact Us", url: "" },
			{ title: "Report a concern", url: "" },
		],
		socials: [
			{
				title: "Dribble",
				url: "",
				icon: <FaDribbble className=" lg:w-5 h-auto" />,
			},
			{
				title: "Twitter",
				url: "",
				icon: <FaTwitter className=" lg:w-5 h-auto" />,
			},
			{
				title: "Instagram",
				url: "",
				icon: <FaInstagram className=" lg:w-5 h-auto" />,
			},
			{
				title: "YouTube",
				url: "",
				icon: <FaYoutube className=" lg:w-5 h-auto" />,
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className=" bg-black text-white py-8 px-4 lg:px-8">
			<div className="max-w-[80rem] mx-auto space-y-8 ">
				{/* <div className="py-4 px-2 bg-white text-black rounded-lg md:max-w-[80%] lg:max-w-none md:mx-auto md:flex md:flex-col md:items-center">
					<div className="px-2">
						<h3 className="text-lg md:text-xl lg:text-2xl mb-2 font-bold">
							Subscribe to our newsletters
						</h3>
						<div className=" flex gap-x-2 flex-wrap gap-y-3">
							<input
								type="text"
								className=" bg-slate-200 rounded  lg:w-[25rem] p-2 py-3 focus:outline-gray-400"
								placeholder="Enter your Email"
							/>
							<Button>Subscribe</Button>
						</div>
					</div>
				</div> */}
				<div className=" md:px-4 md:pt-8">
					<img
						className="w-12 lg:w-20 p-2"
						src={logoSrc}
						alt="logo"
					/>

					<div className=" grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
						{footerLinks.map(({ title, links, socials }) => (
							<div key={title}>
								<h3 className="font-semibold mb-4 lg:text-lg">{title}</h3>
								<div className="">
									{socials && (
										<div className=" flex flex-wrap items-center gap-2 lg:gap-x-4 mb-4">
											{socials.map(({ url, icon,title }) => (
												<a
													key={title}
													href={url}
													className="bg-blue rounded-full p-2">
													{icon}
												</a>
											))}
										</div>
									)}
									<div className="flex flex-col gap-y-2 lg:gap-y-4 lg:text-[.9rem]">
										{links.map((link, i) => (
											<a
												key={link.title + i}
												href={link.url}>
												{link.title}
											</a>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<aside className="text-xs md:text-sm  md:text-center">
					© 2024 Men Against Rape Foundation. All rights reserved
				</aside>
			</div>
		</footer>
	);
};

export default Footer;
