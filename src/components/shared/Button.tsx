import { ButtonHTMLAttributes, ReactNode } from "react";

export enum BUTTON_TYPES {
	regular = "bg-black text-white hover:bg-gray-800 transition",
	inverted = "bg-none",
}
type Props = {
	children: ReactNode;
	buttonType?: BUTTON_TYPES;
	extraClasses?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	children,
	buttonType = BUTTON_TYPES.regular,
	extraClasses,
}: Props) => {
	return (
		<a href="https://chat.whatsapp.com/KsUlhS6mi5LILGhW8FVCcd" className="inline-block">
			<button
				className={
					"capitalize rounded px-3 py-1  md:px-4 md:py-2 lg:px-6 " +
					buttonType +
					" " +
					extraClasses
				} >
				{children}
			</button>
		</a>
	);
};

export default Button;
