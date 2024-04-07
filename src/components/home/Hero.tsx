import imageSrc from "../../assets/images/volunteer-desktop.png";
import Button from "../shared/Button";

const Hero = () => {
	return (
		<section className="md:relative md:grid grid-overlap max-w-none">
			<div className="md:z-[1] justify-self-end h-full  lg:max-w-[60%] xl:max-w-[60%]">
				<img
					src={imageSrc}
					alt="volunteer image"
					className="object-cover w-full h-full"
				/>
			</div>
			<div className=" p-8 lg:py-16 xl:px-[4.2rem] bg-brick-red text-white space-y-4 md:space-y-8 md:z-[2] md:relative md:clip-polygon md:max-w-[60%]  xl:max-w-[60%] ">
				<h1 className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:pr-8 font-bold max-w-[45rem]">
					Empowering Men to Stand Against Sexual Violence
				</h1>
				<p className="text-[1.07rem] md:max-w-[80%] lg:max-w-[65%] xl:text-lg">
					When one man speaks up... a few things can change. Imagine what will
					happen if we all speak up against rape. Society can become safer for
					every child, if you lend a helping hand or raise your voice at the
					evil ones.
					<span className="block">
						Save a life today and join other men fighting this war..
					</span>
				</p>
				<Button>Join Us</Button>
			</div>
		</section>
	);
};

export default Hero;
