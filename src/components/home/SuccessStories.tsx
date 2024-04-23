import img1 from "../../assets/images/FB_IMG_1713623589602.jpg";
import img2 from "../../assets/images/FB_IMG_1713720492385.jpg";
import img3 from "../../assets/images/IMG-20240420-WA0074.jpg";
import img4 from "../../assets/images/VideoCapture_20240421-183635.jpg";
import Stats from "./Stats";

type Story = {
	img: string;
	title: string;
	content: string;
	url: string;
};

const stories: Story[] = [
	{
		img: img1,
		title:
			"Successful intervention for justice to the Lagos Government to charge an Intimate Partner Violence offender",
		content:
			"Men Against Rape Foundation was relied on by the Lagos State Government after providing video recordings and other compelling evidence to charge the husband of Bimbo Martins Ogbonna for involuntary manslaughter having locked his partner in burning house during a fight.",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
	},
	{
		img: img2,
		title: '"Tears From The Grave" book unveiling',
		content:
			"This event unveiled the poignant work dedicated to silenced voices quenched by death or living but silenced in that dark space in our society",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
	},

	{
		img: img3,
		title: "Persistent Pursuit of Justice for Keren-Happuch Aondodoo Akpagher",
		content:
			"Members and volunteers of Men Against Rape Foundation with our lawyer, Barrister Chioma Onyenucheya-Uko at the Federal High Court, Abuja Division after hearing of the suit filed by Premiere Academy, Lugbe, Abuja, seeking to stop Federal Competition and Consumer Protection Commission from investigating it for alleged service failure, allegedly leading to death of its student, 14 year old Miss Keren-Happuch Aondodoo Akpagher",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
	},
	{
		img: img4,
		title: "We Champion the Mantra “No Means No",
		content:
			"We envision a world where abuse and discrimination are relics of the past, replaced by compassion and fervent commitment to safeguarding children, women and, the marginalzsed",
		url: "https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd",
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
							<div className="">
								<img
									src={img}
									alt=""
									className="w-full  md:h-[28rem] object-cover"
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
