import imageSrc from "../../assets/images/volunteer-desktop.png";

const Hero = () => {
	return (
		<section className="md:relative md:aspect-video">
			<div className="md:absolute md:z-[1] inset-0">
				<img
					src={imageSrc}
					alt="volunteer image"
					className=" w-full h-full"
				/>
			</div>
			<div className=" p-8 bg-brick-red text-white space-y-4 md:space-y-8 md:z-[2] md:relative md:h-full md:clip-polygon md:max-w-[35rem]">
				<h1 className=" text-2xl md:text-4xl md:pr-8 font-bold">
					Empowering Men to Stand Against Sexual Violence
				</h1>
				<p className="md:max-w-[80%]">
					When one man speaks up… changes happens. Imagine what will happen if
					we all speak up. Society can become safer for every child, if you lend
					a helping hand or raise your voice at the evil ones. Save a life today
					and join other men in this war.
				</p>
				<button className=" bg-black text-white rounded-lg px-3 py-1  md:px-4 md:py-2">
					Join us
				</button>
			</div>
		</section>
	);
};

export default Hero;
