import imageSrc from "../../assets/images/home-stories.png";

const stories = [
	{
		img: imageSrc,
		title: "Enlighten our Male Counterparts hdbdnp",
		url: "#",
	},
	{
		img: imageSrc,
		title: "We Champion the Mantra “No Means No",
		url: "#",
	},

	{
		img: imageSrc,
		title: " Advocate for Respect of Boundaries hdhb",
		url: "#",
	},
	{
		img: imageSrc,
		title: "We Champion the Mantra “No Means No",
		url: "#",
	},
];

const SuccessStories = () => {
	return (
		<section>
			<div className="px-8 py-12 ">
				<div className="space-y-8 text-center">
					<h1 className="text-xl md:text-2xl uppercase underline underline-offset-[.5rem] text-brick-red">
						we have won some battles
					</h1>
					<p className="font-medium text-balance md:text-lg">
						We have been on a mission to cultivate a cohort of male champions
						dedicated to eradicating SGBV in our communities and nation. It is
						getting more serious… But the good news is we have on many battles
						already.
						<p>Here are some of them;</p>
					</p>
				</div>
				<div className="mt-8 md:mt-12 grid md:grid-cols-2 gap-8 md:gap-y-10 ">
					{stories.map(({ img, url, title }) => (
						<div className="space-y-4">
							<div>
								<img
									src={img}
									alt=""
								/>
							</div>
							<p className=" max-w-[70%]">{title}</p>
							<a
								href={url}
								className=" block">
								<button className=" bg-gray-950 text-white px-4 py-2 rounded-md">
									Read Story
								</button>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
