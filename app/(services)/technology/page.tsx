import { Metadata } from "next";
import "@/styles/page/TechnologyArchive.scss";
import Spacer from "@/library/components/ui/Spacer";
import Picture from "@/library/components/ui/Picture";
import TiltWrapper from "@/library/components/ui/TiltWrapper";
import LinkButton from "@/library/components/ui/buttons/LinkButton";
import { TechnologyArchiveModel } from "@/library/models/Technology";
import { getTechnologyArchiveData } from "@/library/functions/Technology";
import { TechnologyArchiveDetails, uspItem } from "@/library/interfaces/Technology";

export const metadata: Metadata = {
	title: "Technology",
	description: "This is Technology"
};

const TechnologyArchive = async () => {
	const postDetails: TechnologyArchiveDetails = await getTechnologyArchiveData();

	return (
		<main className="TechnologyArchive">
			<div className="page">
				<section className="intro grid">
					{postDetails.intro?.image ? <Picture src={postDetails.intro?.image} alt={postDetails.intro?.image_alt || ""} width={790} height={780} /> : <></>}

					<h1 className="clr-white">
						<TiltWrapper className="bclr-black" rotation={4} skew={4}>
							{postDetails.intro?.title || TechnologyArchiveModel.intro.title}
						</TiltWrapper>
					</h1>

					<p className="font-xl" dangerouslySetInnerHTML={{ __html: postDetails.intro?.copy || TechnologyArchiveModel.intro.copy }} />

					<LinkButton href={"/technology"} className="clr-white font-bold">
						View work
					</LinkButton>
				</section>

				{postDetails.usp?.include ? (
					<>
						<Spacer heights_px={{ desktop: 250, laptop: 200, tablet: 150, mobile: 100 }} />

						<section className="usp grid">
							<div className="background shape" />

							<div className="background image">
								{postDetails.usp?.image ? (
									<Picture src={postDetails.usp?.image} alt={postDetails.usp?.image_alt || ""} width={700} height={900} />
								) : (
									<></>
								)}
							</div>

							{postDetails.usp?.items ? (
								<ul className="grid">
									{postDetails.usp.items.map((item: uspItem, key: number) => {
										return (
											<li key={key} className="grid">
												{item.icon ? <Picture src={item.icon} alt={item.icon_alt || ""} width={30} height={30} /> : <></>}

												<h6 className="clr-white" dangerouslySetInnerHTML={{ __html: item.title }} />

												<p className="clr-white" dangerouslySetInnerHTML={{ __html: item.copy }} />
											</li>
										);
									})}
								</ul>
							) : (
								<></>
							)}
						</section>
					</>
				) : (
					<></>
				)}

				{postDetails.services_overview?.include ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="servicesOverview"></section>
					</>
				) : (
					<></>
				)}

				{postDetails.client_carousel?.include ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="clientCarousel"></section>
					</>
				) : (
					<></>
				)}

				{postDetails.partner_carousel?.include ? <section className="partnerCarousel"></section> : <></>}
			</div>
		</main>
	);
};
export default TechnologyArchive;
