"use client";

import Link from "next/link";
import Picture from "../Picture";
import TiltWrapper from "../TiltWrapper";
import { useThemeContext } from "../../../contexts/Theme";

const EmailButton: React.FC = () => {
	const { name } = useThemeContext();

	const emailIcon: () => string = () => {
		switch (name) {
			case "red":
				return "/email-icon-red.svg";

			case "pink":
				return "/email-icon-pink.svg";

			case "blue":
				return "/email-icon-blue.svg";

			default:
				return "/email-icon-yellow.svg";
		}
	};

	return (
		<div className={`Button email ${name}`}>
			<TiltWrapper className={"bclr-white"} rotation={4} skew={4}>
				<Link className={"clr-white font-bold"} href={"mailto: italladdsup@addmustard.com?subject=addmustard | Website Enquiry"}>
					<Picture src={emailIcon()} alt="Email" width={30} height={30} />
					Email
				</Link>
			</TiltWrapper>
		</div>
	);
};

export default EmailButton;
