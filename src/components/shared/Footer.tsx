import React from "react";

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
			{ title: "Facebook", url: "https://www.facebook.com/pages" },
			{ title: "Twitter", url: "https://twitter.com/login" },
			{ title: "Instagram", url: "https://www.instagram.com/accounts/login/" },
			{ title: "YouTube", url: "https://www.youtube.com/" },
			{ title: "LinkedIn", url: "https://www.linkedin.com/" },
			{ title: "RSS Feed", url: "https://en.wikipedia.org/wiki/RSS" },
		],
	},
];

const Footer = () => {
	return (
		<footer className="bg-black text-white py-8 px-4 space-y-8">
			<div className="py-4 px-2 bg-white text-black rounded-lg md:max-w-[80%] md:mx-auto md:flex md:flex-col md:items-center">
				<div className="">
					<h3 className="text-lg md:text-xl mb-2">
						Subscribe to our newsletters
					</h3>
					<div className=" flex gap-x-2">
						<input
							type="text"
							className=" bg-slate-200 rounded placeholder:pl-4"
							placeholder="Enter text here"
						/>
						<button className=" bg-black text-white px-2 py-1 md:px-4 md:py-2 rounded">
							subscribe
						</button>
					</div>
				</div>
			</div>
			<div className=" md:px-4 md:pt-8">
				<h3 className="mb-4 font-bold text-lg md:text-xl">Marf</h3>
				<div className=" grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
					{footerLinks.map(({ title, links }) => (
						<div key={title}>
							<h3 className="font-semibold mb-4">{title}</h3>
							<div className="flex flex-col gap-y-2 text-sm">
								{links.map((link) => (
									<a href={link.url}>{link.title}</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<aside className="text-xs md:text-sm border-t md:text-center ">© 2024 Men Against Rape Foundation. All rights reserved</aside>
		</footer>
	);
};

export default Footer;
