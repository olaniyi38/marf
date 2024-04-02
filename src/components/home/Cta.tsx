import Button from "../shared/Button";

const Cta = () => {
	return (
		<section className="py-8 max-w-none">
			<div className=" md:flex ">
				<div className=" bg-gray-300  md:flex-1"></div>
				<div className="bg-brick-red text-white space-y-8 md:space-y-4 lg:space-y-8 py-8 md:py-16 px-6 md:pl-12 md:flex-1 ">
					<h1 className=" font-black uppercase text-xl md:text-2xl lg:text-3xl">
						our plans
					</h1>
					<p className=" space-y-8 *:block  lg:text-xl md:max-w-[70%]">
						<span>
							Providing prevention mechanisms and supporting survivors with
							pyschosocial services.
						</span>
						<span>
							We envision a world where abuse and discrimination are relics of
							the past, replaced by compassion and fervent commitment to
							safeguarding children, women and, the marginalzsed.
						</span>
					</p>
					<Button extraClasses="self-start">Join Us</Button>
				</div>
			</div>
			<div className="bg-white py-12 md:px-12 lg:py-20 ">
				<div className="max-w-[80rem]   mx-auto rounded-lg bg-brick-red text-white py-8 px-8  text-center space-y-4 md:space-y-8">
					<p className=" font-semibold md:px-4 text-lg md:text-[1.7rem]  xl:text-4xl max-w-[70%] text-center  mx-auto">
						Together we can safeguard our women and children from sexual
						violators
						<span className=" block">Join us today</span>
					</p>
					<button className="bg-black px-4 py-1  md:px-4 md:py-2 rounded-md">
						Join us
					</button>
				</div>
			</div>
		</section>
	);
};

export default Cta;
