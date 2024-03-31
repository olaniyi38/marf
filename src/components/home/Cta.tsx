const Cta = () => {
	return (
		<section className="py-8">
			<div className=" md:flex ">
				<div className=" bg-gray-300 aspect-square md:flex-1"></div>
				<div className="bg-brick-red text-white space-y-8 md:space-y-4 py-8 px-6 md:flex-1">
					<h1 className=" font-black uppercase text-xl md:text-2xl">
						our plans
					</h1>
					<p className=" space-y-8 *:block ">
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
					<button className="bg-black px-4 py-1  md:px-4 md:py-2 rounded-md">
						Join us
					</button>
				</div>
			</div>
			<div className="bg-white py-12 md:px-12">
				<div className="max-w-[85%] md:max-w-none mx-auto rounded-lg bg-brick-red text-white py-8 px-8 text-center space-y-4 md:space-y-8">
					<p className=" font-semibold md:px-4 text-lg md:text-[1.7rem]">
						Together we can safeguard our women and children from sexual
						violators Join us today
					</p>
					<button className="bg-black px-4 py-1  md:px-4 md:py-2 rounded-md">Join us</button>
				</div>
			</div>
		</section>
	);
};

export default Cta;
