import { Metadata } from "next";
import { MarketingPost } from "@/library/interfaces/MarketingPost";
import { endpoint, getMarketingPost } from "@/library/functions/MarketingFunctions";

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
		<main>
			<section className="intro">
				<div className="background">
					<img src={post.intro?.image?.src} alt={post.intro?.image?.alt} />
				</div>

				<h1>{post.intro?.title}</h1>

				<p>{post.intro?.copy}</p>
			</section>
		</main>
	);
};

export default MarketingChild;
