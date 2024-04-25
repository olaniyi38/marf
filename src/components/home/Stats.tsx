import { GoArrowRight } from "react-icons/go";
import Button, { BUTTON_TYPES } from "../shared/Button";

const stats = [
	{
		value: 20,
		title: "men empowered",
		url: "#",
	},
	// {
	// 	value: 20,
	// 	title: "Victims liberated",
	// 	url: "#",
	// },
	{
		value: 1,
		title: "communities reached",
		url: "#",
	},
];

const Stats = () => {
	return (
		<section className="bg-gray-200 py-8 px-4 md:px-8 md:p-12 xl:px-20">
			<div className=" lg:max-w-[80rem] mx-auto">
				<div className="flex flex-wrap">
					{stats.map(({ value, title }) => (
						<div
							key={title}
							className="flex-1 py-12 pl-4 md:pl-8 lg:pl-12 group/border even:bg-white even:text-blue odd:bg-blue odd:text-white flex flex-col max-[400px]:w-[16rem] w-[20rem] md:w-full  mx-auto">
							<p className=" text-5xl lg:text-6xl xl:text-7xl font-black">
								{value}K
							</p>
							<p className=" capitalize mt-8 mb-20 md:mb-28 text-[1.07rem] lg:text-lg ">
								{title}
							</p>
							<div className=" block mt-auto">
								<Button
									buttonType={BUTTON_TYPES.inverted}
									extraClasses="border border-white group-even/border:border-blue rounded-md ">
									<div className="flex items-center gap-x-3 group/button">
										Learn More
										<GoArrowRight className="w-6 h-auto group-hover/button:translate-x-2 relative transition-all" />
									</div>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;
