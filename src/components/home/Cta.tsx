import Button from "../shared/Button";
import img from "../../assets/images/VideoCapture_20240421-183635.jpg";

const Cta = () => {
	return (
		<section className="py-8 max-w-none">
			<div className=" md:flex ">
				<div className=" bg-gray-300  md:flex-1">
					<img
						src={img}
						alt="plans "
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="bg-brick-red text-white space-y-8 md:space-y-4 lg:space-y-8 py-8 md:py-20 px-6 md:pl-12 md:flex-1 ">
					<h1 className=" font-black uppercase text-xl md:text-2xl lg:text-3xl">
						our plans
					</h1>
					<p className=" space-y-8 *:block text-[1.07rem] lg:text-xl md:max-w-[80%]">
						<span>
							We envision a world where abuse and discrimination are relics of
							the past, replaced by compassion and fervent commitment to
							safeguarding children, women and, the marginalzsed.
						</span>
						<span>
							We will achieve this by enhancing prevention mechanisms and
							supporting survivors with pyschosocial services.
						</span>
					</p>
					<Button extraClasses="self-start">Join Us</Button>
				</div>
			</div>
			<div className="bg-white py-12 px-6 md:px-12 lg:py-16 ">
				<div className="max-w-[80rem] mx-auto rounded-lg bg-brick-red text-white py-16 px-8  text-center space-y-4 md:space-y-8">
					<p className=" font-semibold md:px-4 text-lg md:text-[1.7rem]  xl:text-4xl lg:max-w-[70%] text-center  mx-auto">
						Together we can safeguard our women and children from sexual
						violators
					</p>
				</div>
			</div>
		</section>
	);
};

export default Cta;
