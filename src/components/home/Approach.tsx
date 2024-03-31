import imageSrc from "../../assets/images/home-stories.png";

const approaches = [
	{
		title: "Creating Safe Heavens for Children and women",
		items: [
			"Teach men how to respond to victims to make their recovery process easier.",
			"Teach men how to know if someone has been abused and what to do in different situations to help them.",
			"Teach men how to spot unhealthy behaviours before they escalate into abuse.",
			"Teach men how to influence other people to adopt healthy behaviour and attitude.",
			"Teach men how to take legal action against violators.",
		],
	},
	{
		title: "Advocates for Human Right and Good Governance",
		items: [
			"Teach men how to respond to victims to make their recovery process easier.",
			"Teach men how to know if someone has been abused and what to do in different situations to help them.",
			"Teach men how to spot unhealthy behaviours before they escalate into abuse.",
			"Teach men how to influence other people to adopt healthy behaviour and attitude.",
			"Teach men how to take legal action against violators.",
		],
	},
	{
		title: "Community Outreach and Education",
		items: [
			"Organize workshops and trainings in communities to raise awareness about gender-based violence.",
			"Develop educational materials (posters, pamphlets, videos) to educate the public about healthy relationships and preventing abuse.",
			"Partner with schools and community centers to deliver educational programs on gender equality and respect.",
			"Organize public events (e.g., marches, rallies) to raise awareness and advocate for change.",
		],
	},
	{
		title: "Building Support Networks",
		items: [
			"Facilitate support groups for men who want to learn healthy behaviours and challenge harmful attitudes.",
			"Connect survivors of abuse with resources and support services.",
			"Advocate for policies that promote gender equality and support survivors of abuse.",
			"Build partnerships with other organizations working to end gender-based violence.",
		],
	},
];

const Approach = () => {
	return (
		<section className=" ">
			<div className="px-4 md:px-8 py-8 md:py-12  space-y-8 md:space-y-12">
				<h1 className="text-2xl text-center text-brick-red uppercase underline underline-offset-[.3rem] md:font-bold">
					How we win
				</h1>
				<p className=" text-center font-medium text-lg md:max-w-[80%] md:mx-auto">
					Education is a vital part of prevention. Through engaging,
					discussion-based presentations, MARF aims to enlighten our male
					counterparts on the following;
				</p>
				<div className="grid md:grid-cols-2 gap-8 px-3"> 
					{approaches.map(({ title, items }) => (
						<div className=" border border-gray-300 rounded">
							<div>
								<img
									src={imageSrc}
									alt=""
									className="w-full h-auto object-cover"
								/>
							</div>
							<div className=" px-3 py-4">
								<h3 className=" font-semibold text-[1.2rem] mb-3">{title}</h3>
								<p>We teach men: </p>
								{items.map((item) => (
									<p> - {item}</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Approach;
