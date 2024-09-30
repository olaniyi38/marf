import { TPost } from "../../types";
import { Link } from "react-router-dom";

type Props = {
	posts: TPost[];
};
const Hero = ({ posts }: Props) => {
	// const latestPosts = getLatestPosts(posts);
	// const latestTrendingPosts = getLatestTrendingPosts(posts);

	console.log(posts);

	return (
		<div className=" mx-auto py-8 pb-16 md:py-12 md:pb-20">
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-4">
				{/* Left Column */}
				<div className="order-2  lg:order-1 space-y-8 sm:space-y-4">
					<div className="bg-white shadow rounded-lg overflow-hidden">
						<div className="aspect-[4/2.5]">
							<img
								src="https://images.pexels.com/photos/17855049/pexels-photo-17855049.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
								alt="Minister"
								className="w-full h-full object-cover "
							/>
						</div>
						<div className="p-4">
							<Link
								to={"/"}
								className="font-bold text-lg">
								Dummy post
							</Link>
						</div>
					</div>
					<div className="bg-white shadow rounded-lg overflow-hidden">
						<div className="aspect-[4/2.5]">
							<img
								src="https://images.pexels.com/photos/17855049/pexels-photo-17855049.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
								alt="Minister"
								className="w-full h-full object-cover "
							/>
						</div>
						<div className="p-4">
							<h3 className="font-bold text-lg">Dummy post</h3>
						</div>
					</div>
				</div>

				{/* Middle Column */}
				<div className="order-3 lg:order-2 md:col-span-2 space-y-4">
					<div className="bg-white shadow rounded-lg overflow-hidden">
						<div className="aspect-[4/2.5]">
							<img
								src="https://images.pexels.com/photos/17855049/pexels-photo-17855049.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=1"
								alt="Minister"
								className="w-full h-full object-cover "
							/>
						</div>
						<div className="p-4">
							<h2 className="font-bold text-2xl mb-2">Dummy post</h2>
							<p className="text-gray-700">
								"We want to reform the correctional service. Your core
								responsibility is to investigate specific allegations of
								corruption, torture, and mistreatment"
							</p>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="order-1 lg:order-3 md:col-span-3 lg:col-span-1">
					<div className="bg-white shadow rounded-lg p-4">
						<h2 className="font-bold text-xl md:text-2xl mb-4">LATEST NEWS</h2>
						<ul className="space-y-4">
							{[
								{
									time: "05:40 pm",
									title:
										"Alleged N528bn Fraud: EFCC vows to probe ex-Zamfara governor, Matawalle",
								},
								{
									time: "05:36 pm",
									title:
										"Don't celebrate tomorrow's independence — IPOB warns Ndigbo",
								},
								{
									time: "05:19 pm",
									title:
										'Mbah swears in elected council chairmen, says "Time to action your campaign promises"',
								},
								{ time: "05:16 pm", title: "How I met radio caller of..." },
							].map((item, index) => (
								<li
									key={index}
									className="flex items-start">
									{/* <Clock className="w-4 h-4 mr-2 text-red-500 mt-1" /> */}
									<div className=" space-y-2">
										<span className="text-red-500 font-semibold text-[.9rem]">
											{item.time}
										</span>
										<p className="font-semibold">{item.title}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
