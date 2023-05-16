"use client";

import Link from "next/link";
import Picture from "../Picture";
import TiltWrapper from "../TiltWrapper";
import { useThemeContext } from "../../../contexts/Theme";

const WhatsappButton: React.FC = () => {
	const { name } = useThemeContext();

	const whatsappIcon: () => string = () => {
		switch (name) {
			case "red":
				return "/whatsapp-icon-red.svg";

			case "pink":
				return "/whatsapp-icon-pink.svg";

			case "blue":
				return "/whatsapp-icon-blue.svg";

			default:
				return "/whatsapp-icon-yellow.svg";
		}
	};

	return (
		<div className={`Button whatsapp ${name}`}>
			<TiltWrapper className={"bclr-white"} rotation={4} skew={4}>
				<Link className={"clr-white font-bold"} href={"https://wa.me/447457404143"} target="_blank">
					<Picture src={whatsappIcon()} alt="Whatsapp" width={30} height={30} />
					Whatsapp
				</Link>
			</TiltWrapper>
		</div>
	);
};

export default WhatsappButton;
