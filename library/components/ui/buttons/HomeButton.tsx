"use client";

import Link from "next/link";
import Picture from "../Picture";
import { useThemeContext } from "@/library/contexts/Theme";

const HomeButton: React.FC = () => {
	const { name } = useThemeContext();

	const homeIcon: () => string = () => {
		switch (name) {
			case "black":
				return "/addmustard-icon-black.svg";

			default:
				return "/addmustard-icon-yellow.svg";
		}
	};

	return (
		<div className={`Button home`}>
			<Link className={"font-0"} href={"/"}>
				<Picture src={homeIcon()} alt="Email" width={300} height={63} />
				Home
			</Link>
		</div>
	);
};

export default HomeButton;
