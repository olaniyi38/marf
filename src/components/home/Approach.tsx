import Button, { BUTTON_TYPES } from "../shared/Button";
import img1 from "../../assets/images/VideoCapture_20240421-184117.jpg";
import img2 from "../../assets/images/VideoCapture_20240421-184147.jpg";
import img3 from "../../assets/images/VideoCapture_20240421-184952.jpg";
import img4 from "../../assets/images/FB_IMG_1713722082170.jpg";
import { GoArrowRight } from "react-icons/go";

type TApproach = {
	title: string;
	content: string;
	items?: string[];
	img: string;
};

const approaches: TApproach[] = [
	{
		title: "With the help of our sponsors and partners",
		content: `They provide us with the manpower and resources to actively engage with
		 policymakers and government agencies to advocate for yhe implementation of policies and
		  legislation that provide human right and address SGBV`,
		img: img3,
	},
	{
		title: "Partnership with volunteers and other men fighting this menace",
		content: `Ofcourse, communities are diverse and different, but we make sure that no community we engage is left behind in their understanding the damaging effects of SGBV on society and taking a stand against what is wrong... These partnerships are only successful because of our track record of documenting and revealing the truth about every situation.`,
		img: img1,
	},
	{
		title: "Every man in every community we visit is taught:",
		content: ``,
		items: [
			"how to take legal action against violators.",
			"how to spot unhealthy behaviours before they escalate into abuse.",
			"how to know if someone has been abused and what to do in different situations to help them.",
			"how to influence other people to adopt healthy behaviour and attitude.",
			"how to respond to victims to make their recovery process easier.",
		],
		img: img2,
	},

	{
		title:
			"Through in-depth capacity initiatives, we take these men to the next level",
		content: `By giving adequate exposure during educational awareness programs. As skilled and learned gender advocates develop in these communities.
		Mobilization efforts and campaigns become easily acceptable and a thing done with ease. More people can then demand accountability from local authorities to bring any offenders to book`,
		img: img4,
	},
];

const Approach = () => {
	return (
		<section className="max-w-[80rem] mx-auto ">
			<div className="px-6 md:px-8 py-8 md:py-12 lg:px-8 xl:px-0 lg:py-20 space-y-8 lg:space-y-12">
				<h1 className="text-2xl lg:text-3xl text-center text-blue uppercase underline underline-offset-[.3rem]">
					How we win
				</h1>
				<p className=" text-center font-medium text-lg lg:text-xl md:max-w-[80%] lg:max-w-[60%] md:mx-auto">
					<span className=" ">
						Through solid support networks and partnerships that facilitate the
						transformation of communities.{" "}
					</span>
					<span className="">
						We are making communities and homes safer for children.
					</span>
					Partnerships with groups like UNICEF, WHO
				</p>

				<div className="grid gap-y-8 md:gap-y-12 ">
					{approaches.map(({ title, content, items, img }) => (
						<div
							key={title}
							className="md:flex rounded-lg even:flex-row-reverse">
							<div className="basis-[50%] ">
								<img
									src={img}
									alt=""
									className="w-full h-full md:h-[28rem]"
								/>
							</div>
							<div className="px-4 md:p-8 py-4  lg:py-12 basis-[50%]  bg-blue text-white ">
								<h3 className=" font-semibold text-[1.2rem] mb-3 lg:mb-6 lg:text-xl">
									{title}
								</h3>
								<div className="lg:text-lg">
									<p className="">{content}</p>
									{items && items.map((i) => <p>- {i}</p>)}
								</div>
								<Button
									buttonType={BUTTON_TYPES.inverted}
									extraClasses="border border-white text-sm px-2 mt-4 lg:mt-6 self-start">
									<span className="flex items-center gap-x-2">
										<span>Become a member</span>
										<GoArrowRight className="w-5 h-auto" />
									</span>
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Approach;
