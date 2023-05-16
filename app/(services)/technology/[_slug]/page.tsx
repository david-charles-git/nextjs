import { Metadata } from "next";
import { TechnologyPost } from "@/library/interfaces/TechnologyPost";
import { endpoint, getTechnologyPost } from "@/library/functions/TechnologyFunctions";

export const metadata: Metadata = {
	title: "Technology Child",
	description: "This is the Technology Child page"
};

async function generateStaticParams(): Promise<{ _slug: string }[]> {
	const response: Response = await fetch(`${endpoint}?acf_format=standard`);
	const posts: TechnologyPost[] = await response.json();

	return posts.map((post: any) => {
		return {
			_slug: post.slug
		};
	});
}

const TechnologyChild: ({ params }: { params: any }) => Promise<JSX.Element> = async ({ params }) => {
	const post: TechnologyPost = await getTechnologyPost(params._slug);

	return (
		<main>
			<h1>Technology child Page</h1>
			<p>{JSON.stringify(post)}</p>
		</main>
	);
};

export default TechnologyChild;
