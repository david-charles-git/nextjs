import { Metadata } from "next";
import "@/styles/page/howCanWeHelp.scss";
import Picture from "@/library/components/ui/Picture";
import TiltWrapper from "@/library/components/ui/TiltWrapper";
import ContactSection from "@/library/components/page/ContactSection";

export const metadata: Metadata = {
	title: "Get in touch",
	description: "Contact us to discuss how we can help you join-up brand, marketing and technology and deliver growth for your entrepreneurial business."
};

const HowCanWeHelp: React.FC = () => {
	return (
		<main className="HowCanWeHelp">
			<section className="page grid">
				<div className="left">
					<div className="background">
						<Picture src={"/how-can-we-help-image.webp"} alt={"person in a hedge maze"} width={520} height={780} />
					</div>

					<h1 className="font-h2">
						<TiltWrapper className="bclr-yellow" rotation={2} skew={2}>
							How can we
						</TiltWrapper>

						<span style={{ display: "block", height: "0.1em" }} />

						<TiltWrapper className="bclr-yellow" rotation={2} skew={2}>
							help?
						</TiltWrapper>
					</h1>
				</div>

				<div className="right">
					<ContactSection />
				</div>
			</section>
		</main>
	);
};
export default HowCanWeHelp;
