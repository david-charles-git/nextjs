import Link from "next/link";
import Picture from "@/library/components/ui/Picture";
import WhatsappButton from "./ui/buttons/WhatsappButton";
import EmailButton from "./ui/buttons/EmailButton";

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="background bclr-black" />

			<div className="Footer grid">
				<div className="top grid">
					<WhatsappButton />

					<EmailButton />
				</div>

				<div className="bottom grid">
					<div className="left grid">
						<Picture src={"/bing-partner-logo.svg"} alt={"Bing Partner"} width={155} height={30} />

						<Picture src={"/google-partner-logo.svg"} alt={"Google Partner"} width={68} height={30} />
					</div>

					<nav className="right grid">
						<Link className="clr-white font-s" href={"/how-can-we-help/"}>
							How can we help?
						</Link>

						<a className="clr-white font-s" href={"https://www.linkedin.com/company/2933120/"}>
							LinkedIn
						</a>

						<a className="clr-white font-s" href={"https://www.glassdoor.co.uk/Overview/Working-at-addmustard-EI_IE1027262.11,21.htm"}>
							GlassDoor
						</a>
					</nav>
				</div>

				<div className="legal">
					<Link className="clr-white font-xs" href={"/terms-conditions.pdf"}>
						Terms & conditions
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
