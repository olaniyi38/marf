import { TPost } from "../../types";
import { Link } from "react-router-dom";
import { getLatestPosts, getLatestFeaturedPosts } from "../../utils/posts";
import parser from "html-react-parser";
import { BsPerson } from "react-icons/bs";

type Props = {
	posts: TPost[];
};
const Hero = ({ posts }: Props) => {
	const latestPosts = getLatestPosts(posts);
	const latestFeaturedPosts = getLatestFeaturedPosts(posts);
	const featuredPostsIDs = latestFeaturedPosts.slice(0, 4).map((p) => p.ID);

	return (
		<div className=" mx-auto pb-16 md:py-12 md:pb-20">
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-4">
				{/* Left Column */}
				<div className="order-2  lg:order-1 space-y-8 sm:space-y-4">
					{latestFeaturedPosts
						.slice(1, 3)
						.map(({ featured_image, title, ID, author }) => (
							<div className="bg-white shadow rounded-lg overflow-hidden">
								<Link
									to={`/blog/${ID}`}
									className="aspect-[4/2.5] block">
									<img
										src={featured_image}
										alt="Minister"
										className="w-full h-full object-cover "
									/>
								</Link>
								<div className="p-4">
									<Link
										to={`/blog/${ID}`}
										className="font-bold text-lg hover:underline">
										{title}
									</Link>
								</div>
								<div className="mt-auto p-4">
									<p className="flex items-center gap-x-1 font-semibold text-gray-800 capitalize text-sm">
										<BsPerson className="w-4 h-auto" /> {author.name}
									</p>
								</div>
							</div>
						))}
				</div>

				{/* Middle Column */}
				<div className="order-3 lg:order-2 md:col-span-2 space-y-4">
					<div className="bg-white shadow rounded-lg overflow-hidden">
						<Link
							to={`/blog/${latestFeaturedPosts[0]?.ID}`}
							className="aspect-[4/2.5]">
							<img
								src={latestFeaturedPosts[0]?.featured_image}
								alt="Minister"
								className="w-full h-full object-cover "
							/>
						</Link>
						<div className="p-4 space-y-4">
							<Link
								to={`/blog/${latestFeaturedPosts[0]?.ID}`}
								className="font-bold text-2xl mb-2 hover:underline">
								{latestFeaturedPosts[0]?.title}
							</Link>
							<p className="text-gray-700">
								{parser(latestFeaturedPosts[0]?.excerpt)}
							</p>
						</div>
						<div className="mt-auto p-4">
							<p className="flex items-center gap-x-1 font-semibold text-gray-800 capitalize text-sm">
								<BsPerson className="w-4 h-auto" />{" "}
								{latestFeaturedPosts[0]?.author.name}
							</p>
						</div>
					</div>
				</div>

				{/* Right Column */}
				<div className="order-1 lg:order-3 md:col-span-3 lg:col-span-1">
					<div className="bg-white shadow rounded-lg p-4">
						<h2 className="font-bold text-xl md:text-2xl mb-4">LATEST NEWS</h2>
						<ul className="space-y-4">
							{latestPosts
								.filter((p) => {
									return !featuredPostsIDs.includes(p.ID);
								})
								.map((item) => {
									const time = new Date(item.date).toLocaleTimeString("en-US", {
										timeStyle: "short",
									});
									return (
										<li
											key={item.ID}
											className="flex items-start">
											<div className=" space-y-2">
												<span className="text-red-500 font-semibold text-[.9rem]">
													{time}
												</span>
												<Link
													to={`/blog/${item.ID}`}
													className="font-semibold block hover:underline">
													{item.title}
												</Link>
											</div>
										</li>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
