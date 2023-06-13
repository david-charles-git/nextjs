import { Metadata } from "next";
import Spacer from "@/library/components/ui/Spacer";
import Picture from "@/library/components/ui/Picture";
import { uspItem } from "@/library/interfaces/Technology";
import TiltWrapper from "@/library/components/ui/TiltWrapper";
import { TechnologyPostModel } from "@/library/models/Technology";
import { TechnologyPostData } from "@/library/interfaces/Technology";
import { getAllTechnologyPostData, getTechnologyPostDataBySlug } from "@/library/functions/Technology";

interface TechnologyChildProps {
	params: { _slug: string };
}

const generateStaticParams: () => Promise<{ _slug: string }[]> = async () => {
	const posts: TechnologyPostData[] = await getAllTechnologyPostData();

	return posts.map((post: TechnologyPostData) => {
		return {
			_slug: post.slug
		};
	});
};

export const generateMetadata: ({ params }: TechnologyChildProps) => Promise<Metadata> = async ({ params }) => {
	const post: TechnologyPostData = await getTechnologyPostDataBySlug(params._slug);

	return {
		title: post.acf?.post_details?.intro?.title || "",
		description: post.acf?.post_details?.intro?.copy || "",
		robots: {
			index: post.yoast_head_json?.robots?.index === "index" ? true : false,
			follow: post.yoast_head_json?.robots?.follow === "follow" ? true : false
		}
	};
};

const TechnologyChild: ({ params }: TechnologyChildProps) => Promise<JSX.Element> = async ({ params }) => {
	const post: TechnologyPostData = await getTechnologyPostDataBySlug(params._slug);

	return (
		<main>
			<div className="page">
				<section className="intro grid">
					{post.acf?.post_details?.intro?.image ? (
						<Picture src={post.acf?.post_details?.intro?.image} alt={post.acf?.post_details?.intro?.image_alt || ""} width={790} height={780} />
					) : (
						<></>
					)}

					<h1 className="clr-white">
						<TiltWrapper className="bclr-black" rotation={4} skew={4}>
							{post.acf?.post_details?.intro?.title || TechnologyPostModel.acf.post_details.intro.title}
						</TiltWrapper>
					</h1>

					<p
						className="font-xl"
						dangerouslySetInnerHTML={{ __html: post.acf?.post_details?.intro?.copy || TechnologyPostModel.acf.post_details.intro.copy }}
					/>
				</section>

				{post.acf?.post_details?.usp?.include ? (
					<>
						<Spacer heights_px={{ desktop: 250, laptop: 200, tablet: 150, mobile: 100 }} />

						<section className="usp grid">
							<div className="background shape" />

							<div className="background image">
								{post.acf?.post_details?.usp?.image ? (
									<Picture src={post.acf?.post_details?.usp?.image} alt={post.acf?.post_details?.usp?.image_alt || ""} width={700} height={900} />
								) : (
									<></>
								)}
							</div>

							{post.acf?.post_details?.usp?.items ? (
								<ul className="grid">
									{post.acf?.post_details?.usp.items.map((item: uspItem, key: number) => {
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

				{post.acf?.post_details?.content_block ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="contentBlocks">
							{post.acf?.post_details?.content_block?.map((contentBlock: any, key: number) => {
								return <div key={key} className={`contentBlock ${contentBlock.type}`}></div>;
							})}
						</section>
					</>
				) : (
					<></>
				)}

				{post.acf?.post_details?.services_overview?.include ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="servicesOverview"></section>
					</>
				) : (
					<></>
				)}

				{post.acf?.post_details?.client_carousel?.include ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="clientCarousel"></section>
					</>
				) : (
					<></>
				)}

				{post.acf?.post_details?.partner_carousel?.include ? <section className="partnerCarousel"></section> : <></>}
			</div>
		</main>
	);
};

export default TechnologyChild;
