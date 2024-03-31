
import { GoArrowRight } from "react-icons/go";

const stats = [
	{
		value: 20,
		title: "men empowered",
		url: "#",
	},
	{
		value: 20,
		title: "Victims liberated",
		url: "#",
	},
	{
		value: 20,
		title: "communities reached",
		url: "#",
	},
];

const Stats = () => {
	return (
		<section className="">
			<div className="grid md:grid-cols-3 bg-gray-200 py-8 md:px-8">
				{stats.map(({ value, title, url }) => (
					<div className="py-16  group even:bg-white even:text-brick-red odd:bg-mandy odd:text-white space-y-8 flex flex-col items-center w-[18rem] md:max-w-[20rem] md:w-full  mx-auto">
						<p className=" text-5xl font-black">{value}K</p>
						<p className=" capitalize">{title}</p>
						<a
							href={url}
							className=" block">
							<button className="px-3 py-2 border border-white group-even:border-mandy  flex items-center gap-x-2 rounded ">
								Learn More
								<GoArrowRight className="w-6 h-auto  " />
							</button>
						</a>
					</div>
				))}
			</div>
		</section>
	);
};

export default Stats;
