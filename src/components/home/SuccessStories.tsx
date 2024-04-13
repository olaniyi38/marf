import imageSrc from "../../assets/images/home-stories.png";
import Stats from "./Stats";

type Story = {
	img: string;
	title: string;
	content: string;
	url: string;
};

const stories: Story[] = [
	{
		img: imageSrc,
		title: "Enlighten our Male Counterparts hdbdnp",
		content:
			"We envision a world where abuse and discrimination are relics of the past, replaced by compassion and fervent commitment to safeguarding children, women and, the marginalzsed",
		url: "#",
	},
	{
		img: imageSrc,
		title: "We Champion the Mantra “No Means No",
		content:
			"We envision a world where abuse and discrimination are relics of the past, replaced by compassion and fervent commitment to safeguarding children, women and, the marginalzsed",
		url: "#",
	},

	{
		img: imageSrc,
		title: " Advocate for Respect of Boundaries hdhb",
		content:
			"We envision a world where abuse and discrimination are relics of the past, replaced by compassion and fervent commitment to safeguarding children, women and, the marginalzsed",
		url: "#",
	},
	{
		img: imageSrc,
		title: "We Champion the Mantra “No Means No",
		content:
			"We envision a world where abuse and discrimination are relics of the past, replaced by compassion and fervent commitment to safeguarding children, women and, the marginalzsed",
		url: "#",
	},
];

const SuccessStories = () => {
	return (
		<section className="mx-auto">
			<div className=" py-12  lg:py-20 ">
				<div className="space-y-8 lg:space-y-10 ">
					<h1 className="text-xl text-center md:text-2xl lg:text-3xl lg:mb-16 uppercase underline underline-offset-[.5rem] text-brick-red">
						we have won some battles
					</h1>
					<Stats />
					<p className="font-medium text-center text-balance text-[1.07rem] md:text-lg lg:text-xl lg:max-w-[60rem] lg:mx-auto">
						We have been on a mission to cultivate a cohort of male champions
						dedicated to eradicating SGBV in our communities and nation. It is
						getting more serious… But the good news is we have on many battles
						already.
						<p>Here are some of them;</p>
					</p>
				</div>
				<div className="px-6 md:px-8 lg:px-12 xl:px-0 max-w-[80rem] mx-auto mt-8 md:mt-12 lg:mt-20 grid md:grid-cols-2 gap-8 md:gap-y-10 lg:gap-12 ">
					{stories.map(({ img, url, title, content }, i) => (
						<div
							className=""
							key={title + i}>
							<div>
								<img
									src={img}
									alt=""
									className="w-full h-auto "
								/>
							</div>
							<p className=" pr-4 text-[1.07rem] lg:text-lg mt-3 mb-4 font-medium">
								{title}
							</p>
							<p className="">{content}</p>
							<a
								href={url}
								className=" block text-brick-red font-bold mt-2 uppercase lg:text-lg">
								Read more
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SuccessStories;
