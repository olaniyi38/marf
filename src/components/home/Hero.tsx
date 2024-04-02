import imageSrc from "../../assets/images/volunteer-desktop.png";
import Button from "../shared/Button";

const Hero = () => {
	return (
		<section className="md:relative md:grid grid-overlap   max-w-none">
			<div className="md:z-[1] justify-self-end lg:max-w-[65%] xl:max-w-[60%] w-full">
				<img
					src={imageSrc}
					alt="volunteer image"
					className=" w-full h-auto"
				/>
			</div>
			<div className=" p-8 lg:py-16 lg:px-[5.5rem] bg-brick-red text-white space-y-4 md:space-y-8 md:z-[2] md:relative md:h-full md:clip-polygon md:max-w-[35rem] lg:max-w-[55%] xl:max-w-[60%] ">
				<h1 className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl md:pr-8 font-bold max-w-[45rem]">
					Empowering Men to Stand Against Sexual Violence
				</h1>
				<p className="md:max-w-[80%] lg:max-w-[65%] lg:text-xl">
					When one man speaks up… changes happens. Imagine what will happen if
					we all speak up. Society can become safer for every child, if you lend
					a helping hand or raise your voice at the evil ones.
					<span className="block">
						Save a life today and join other men in this war.
					</span>
				</p>
				<Button>Join Us</Button>
			</div>
		</section>
	);
};

export default Hero;
