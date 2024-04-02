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
		<section className="bg-gray-200 py-8 md:px-8 md:py-12">
			<div className=" lg:max-w-[80rem] mx-auto">
				<div className="grid md:grid-cols-3">
					{stats.map(({ value, title, url }) => (
						<div className="py-8 pl-4 md:pl-8 lg:pl-12 group even:bg-white even:text-brick-red odd:bg-brick-red odd:text-white flex flex-col w-[16rem] md:w-full  mx-auto">
							<p className=" text-5xl lg:text-6xl xl:text-7xl font-black">{value}K</p>
							<p className=" capitalize mt-8 mb-28 lg:text-lg ">{title}</p>
							<a
								href={url}
								className=" block">
								<Button
									buttonType={BUTTON_TYPES.inverted}
									extraClasses="border border-white group-even:border-mandy rounded-md ">
									<div className="flex items-center gap-x-3">
										Learn More
										<GoArrowRight className="w-6 h-auto  " />
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
