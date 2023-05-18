import { Metadata } from "next";
import "@/styles/page/MarketingChild.scss";
import Spacer from "@/library/components/ui/Spacer";
import TiltWrapper from "@/library/components/ui/TiltWrapper";
import { endpoint, getMarketingPost } from "@/library/functions/MarketingFunctions";
import { MarketingPost, MarketingPostUSPItem } from "@/library/interfaces/MarketingPost";

export const metadata: Metadata = {
	title: "Marketing Child",
	description: "This is the Marketing child page"
};

async function generateStaticParams(): Promise<{ _slug: string }[]> {
	const response: Response = await fetch(`${endpoint}?acf_format=standard`);
	const posts: MarketingPost[] = await response.json();

	return posts.map((post: any) => {
		return {
			_slug: post.slug
		};
	});
}

const MarketingChild: ({ params }: { params: any }) => Promise<JSX.Element> = async ({ params }) => {
	const post: MarketingPost = await getMarketingPost(params._slug);

	return (
		<main className="MarketingChild">
			<div className="page">
				<section className="intro grid">
					<div className="background">
						<img src={post.intro?.image?.src} alt={post.intro?.image?.alt} width={790} height={780} />
					</div>

					<h1 className="clr-white font-h2">
						<TiltWrapper className="bclr-black">{post.intro?.title}</TiltWrapper>
					</h1>

					<p className="font-xl">{post.intro?.copy}</p>
				</section>

				{post.usp?.include ? (
					<>
						<Spacer heights_px={{ desktop: 250, laptop: 200, tablet: 150, mobile: 100 }} />

						<section className="usp grid">
							<div className="background shape" />

							<div className="background image">
								<img src={post.usp?.image?.src} alt={post.usp?.image?.alt} width={700} height={900} />
							</div>

							<ul className="grid">
								{post.usp?.items?.map((item: MarketingPostUSPItem, key: number) => {
									return (
										<li key={key} className="grid">
											<img src={item.image?.src} alt={item.image?.alt || ""} width={30} height={30} />

											<h6 className="clr-white" dangerouslySetInnerHTML={{ __html: item.title }} />

											<p className="clr-white" dangerouslySetInnerHTML={{ __html: item.copy }} />
										</li>
									);
								})}
							</ul>
						</section>
					</>
				) : (
					<></>
				)}

				{post.contentBlocks ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="contentBlocks">
							{post.contentBlocks?.map((contentBlock, key: number) => {
								return <div key={key} className={`contentBlock ${contentBlock.type}`}></div>;
							})}
						</section>
					</>
				) : (
					<></>
				)}

				{post.servicesOverview?.include ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="servicesOverview"></section>
					</>
				) : (
					<></>
				)}

				{post.clientCarousel?.include ? (
					<>
						<Spacer heights_px={{ desktop: 300, laptop: 250, tablet: 200, mobile: 150 }} />

						<section className="clientCarousel"></section>
					</>
				) : (
					<></>
				)}

				{post.partnerCarousel?.include ? <section className="partnerCarousel"></section> : <></>}
			</div>
		</main>
	);
};

export default MarketingChild;
