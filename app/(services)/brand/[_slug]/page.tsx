import { Metadata } from "next";
import { BrandPost } from "@/library/interfaces/BrandPost";
import { getBrandPosts, getBrandPostBySlug } from "@/library/functions/BrandFunctions";

interface BrandChildProps {
	params: { _slug: string };
	searchParams?: any;
}

const generateStaticParams: () => Promise<{ _slug: string }[]> = async () => {
	const posts: BrandPost[] = await getBrandPosts();

	return posts.map((post: any) => {
		return {
			_slug: post.slug
		};
	});
};

export const generateMetadata: ({ params }: BrandChildProps) => Promise<Metadata> = async ({ params }) => {
	const post: BrandPost = await getBrandPostBySlug(params._slug);

	return {
		title: post.intro?.title,
		description: post.intro?.copy
	};
};

const BrandChild: ({ params }: BrandChildProps) => Promise<JSX.Element> = async ({ params }) => {
	const post: BrandPost = await getBrandPostBySlug(params._slug);

	if (!post.ID) {
		throw new Error();
	}

	return (
		<main>
			<h1>Brand child Page</h1>
			<p>{JSON.stringify(post)}</p>
		</main>
	);
};

export default BrandChild;
