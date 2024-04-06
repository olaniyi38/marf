import { GoArrowRight } from "react-icons/go";
import Button, { BUTTON_TYPES } from "../shared/Button";

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
		<section className="bg-gray-200 py-8 md:px-8 md:p-12 xl:px-20">
			<div className=" lg:max-w-[80rem] mx-auto">
				<div className="grid md:grid-cols-3">
					{stats.map(({ value, title, url }) => (
						<div className="py-12 pl-4 md:pl-8 lg:pl-12 group/border even:bg-white even:text-brick-red odd:bg-brick-red odd:text-white flex flex-col w-[16rem] md:w-full  mx-auto">
							<p className=" text-5xl lg:text-6xl xl:text-7xl font-black">
								{value}K
							</p>
							<p className=" capitalize mt-8 mb-20 md:mb-28 text-[1.07rem] lg:text-lg ">{title}</p>
							<a
								href={url}
								className=" block">
								<Button
									buttonType={BUTTON_TYPES.inverted}
									extraClasses="border border-white group-even/border:border-mandy rounded-md ">
									<div className="flex items-center gap-x-3 group/button">
										Learn More
										<GoArrowRight className="w-6 h-auto group-hover/button:translate-x-2 relative transition-all" />
									</div>
								</Button>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
