import { FaBars } from "react-icons/fa6";

const Header = () => {
	return (
		<header>
			<p className="px-3 text-sm bg-brick-red text-white overflow-hidden">
				<span className=" block w-[300%]">
					“Every 68 seconds, a Nigerian is sexually assaulted. And every 9
					minutes, that victim is a child.” - UNHCR (2023)
				</span>
			</p>
			<div className="px-3 py-2 md:px-6 md:py-4 flex items-center justify-between">
				<span className=" font-black text-brick-red">MARF</span>
				<FaBars className="w-5 h-auto" />
			</div>
		</header>
	);
};

export default Header;
