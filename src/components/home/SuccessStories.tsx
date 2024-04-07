import imageSrc from "../../assets/images/home-stories.png";
import Button from "../shared/Button";

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

const currentStories = [
	{
		img: imageSrc,
		title:
			"Members and volunteers of Men Against Rape Foundation with their lawyer, Barrister Chioma Onyenucheya-Uko at the Federal High Court, Abuja Division after hearing of the suit filed by Premiere Academy, Lugbe, Abuja, seeking to stop Federal Competition and Consumer Protection Commission from investigating it for alleged service failure, allegedly leading to death of its student, 14 year old Miss Keren-Happuch Aondodoo Akpagher",
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
		<section className="max-w-[80rem] mx-auto">
			<div className=" py-12 px-6 md:px-8 lg:py-20 lg:px-12 xl:px-0">
				<div className="space-y-8 lg:space-y-10 text-center">
					<h1 className="text-xl md:text-2xl lg:text-3xl uppercase underline underline-offset-[.5rem] text-brick-red">
						we have won some battles
					</h1>
					<p className="font-medium text-balance text-[1.07rem] md:text-lg lg:text-xl lg:max-w-[60rem] lg:mx-auto">
						We have been on a mission to cultivate a cohort of male champions
						dedicated to eradicating SGBV in our communities and nation. It is
						getting more serious… But the good news is we have on many battles
						already.
						<p>Here are some of them;</p>
					</p>
				</div>
				<div className="mt-8 md:mt-12 lg:mt-20 grid md:grid-cols-2 gap-8 md:gap-y-10 lg:gap-12 ">
					{stories.map(({ img, url, title }) => (
						<div className="space-y-4">
							<div>
								<img
									src={img}
									alt=""
									className="w-full h-auto aspect-[4/3]"
								/>
							</div>
							<p className=" pr-4 text-[1.07rem] lg:text-lg">{title}</p>
							<a
								href={url}
								className=" block">
								<Button>Join Us</Button>
							</a>
						</div>
					))}
				</div>
				<div className="pt-8">
					<div>
						<h1 className="text-xl md:text-2xl lg:text-3xl uppercase underline underline-offset-[.5rem] text-brick-red">
							Some battles we are currently fighting
						</h1>
					</div>
					<div className="mt-8 md:mt-12 lg:mt-20 grid md:grid-cols-2 gap-8 md:gap-y-10 lg:gap-12 ">
						{currentStories.map(({ img, url, title }) => (
							<div className="space-y-4">
								<div>
									<img
										src={img}
										alt=""
										className="w-full h-auto aspect-[4/3]"
									/>
								</div>
								<p className=" pr-4 lg:text-lg">{title}</p>
								<a
									href={url}
									className=" block">
									<Button>Learn More</Button>
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
