import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import Button from "./Button";

const footerLinks = [
	{
		title: "About Us",
		links: [
			{
				title: "Our Mission",
				url: "https://yoast.com/how-to-write-your-mission-statement/",
			},
			{
				title: "Our Team",
				url: "https://blog.hubspot.com/marketing/creative-agency-team-pages",
			},
			{
				title: "Contact Us",
				url: "https://blog.hubspot.com/service/best-contact-us-pages",
			},
			{ title: "Careers", url: "https://www.website.com/careers/" },
			{
				title: "Press & Media",
				url: "https://blog.hubspot.com/agency/perfect-press-page",
			},
			{
				title: "Partnerships",
				url: "https://www.growann.com/post/partnership-page-examples",
			},
		],
	},
	{
		title: "Resources",
		links: [
			{ title: "FAQs", url: "https://www.website.com/faq/" },
			{
				title: "Blog",
				url: "https://www.website.com/website-builder-and-web-design/adding-a-blog-to-your-website",
			},
			{
				title: "Help Center",
				url: "https://www.helpshift.com/glossary/help-center/",
			},
			{
				title: "Community Guidelines",
				url: "https://personifycorp.com/blog/how-to-create-online-community-guidelines/",
			},
			{
				title: "Terms of Service",
				url: "https://www.contractscounsel.com/t/us/website-terms-of-service",
			},
			{
				title: "Privacy Policy",
				url: "https://mailchimp.com/resources/how-to-write-a-privacy-policy/",
			},
		],
	},
	{
		title: "Get Involved",
		links: [
			{
				title: "Volunteer Opportunities",
				url: "https://secondwindmovement.com/volunteer-websites/",
			},
			{ title: "Donate", url: "https://donately.com/" },
			{
				title: "Become a Member",
				url: "https://kinsta.com/blog/create-a-membership-website/",
			},
			{
				title: "Host a Fundraiser",
				url: "https://www.wildapricot.com/blog/how-to-create-a-donation-website",
			},
			{ title: "Spread the Word", url: "https://www.textise.net/" },
			{
				title: "Sign Up for our Newsletter",
				url: "https://infomedia.com/blog/newsletter-signups-website/",
			},
		],
	},
	{
		title: "Stay Connected",
		links: [
			{ title: "Contact Us", url: "https://www.linkedin.com/" },
			{ title: "Report a concern", url: "https://en.wikipedia.org/wiki/RSS" },
		],
		socials: [
			{
				title: "Dribble",
				url: "https://www.facebook.com/pages",
				icon: <FaDribbble />,
			},
			{
				title: "Twitter",
				url: "https://twitter.com/login",
				icon: <FaTwitter />,
			},
			{
				title: "Instagram",
				url: "https://www.instagram.com/accounts/login/",
				icon: <FaInstagram />,
			},
			{
				title: "YouTube",
				url: "https://www.youtube.com/",
				icon: <FaYoutube />,
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className=" bg-black text-white py-8 px-4 lg:px-8">
			<div className="max-w-[80rem] mx-auto space-y-8 ">
				<div className="py-4 px-2 bg-white text-black rounded-lg md:max-w-[80%] lg:max-w-none md:mx-auto md:flex md:flex-col md:items-center">
					<div className="px-2">
						<h3 className="text-lg md:text-xl lg:text-2xl mb-2 font-bold">
							Subscribe to our newsletters
						</h3>
						<div className=" flex gap-x-2 flex-wrap gap-y-3">
							<input
								type="text"
								className=" bg-slate-200 rounded  lg:w-[25rem] p-2 py-3 focus:outline-gray-400"
								placeholder="Enter text here"
							/>
							<Button>Subscribe</Button>
						</div>
					</div>
				</div>
				<div className=" md:px-4 md:pt-8">
					<h3 className="mb-4 font-bold text-lg md:text-xl lg:text-2xl">
						Marf
					</h3>
					<div className=" grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
						{footerLinks.map(({ title, links, socials }) => (
							<div key={title}>
								<h3 className="font-semibold mb-4 lg:text-lg">{title}</h3>
								<div className="">
									{socials && (
										<div className=" flex flex-wrap items-center gap-2 lg:gap-x-4 mb-4">
											{socials.map(({ url, icon }) => (
												<a
													href={url}
													className="bg-brick-red rounded-full p-2">
													{icon}
												</a>
											))}
										</div>
									)}
									<div className="flex flex-col gap-y-2 text-sm lg:text-md">
										{links.map((link) => (
											<a href={link.url}>{link.title}</a>
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
