import { BrandPost, Image, BrandPostContentBlock, BrandPostUSPItem } from "../interfaces/BrandPost";

export const endpoint: string = `${process.env.NEXTJS_LOCAL_URL}/api/brand/`;

export const getBrandPostBySlug = async (_slug: string) => {
	const response: Response = await fetch(`${endpoint + _slug}?acf_format=standard`);
	const post: BrandPost = await response.json();

	return post;
};

export const getBrandPosts = async () => {
	const response: Response = await fetch(`${endpoint}?acf_format=standard`);
	const posts: BrandPost[] = await response.json();

	return posts;
};

const getBrandPostUSPItems: (post: any) => BrandPostUSPItem[] = (post) => {
	var items: BrandPostUSPItem[] = [];
	const uspItems: any = post.acf?.postDetails?.usp_items || [];

	uspItems.map((uspItem: any) => {
		items.push({
			image: {
				src: uspItem.usp_item_icon || "",
				alt: uspItem.usp_item_icon_alt || ""
			},
			title: uspItem.usp_item_title || "",
			copy: uspItem.usp_item_copy || ""
		});
	});

	return items;
};

const getBrandPostContentBlockList: (contentBlock: any) => string[] = (contentBlock) => {
	var items: string[] = [];
	const listItems: any = contentBlock.contentBlocks_item_listItems || [];

	listItems.map((item: any) => {
		items.push(item);
	});

	return items;
};

const getBrandPostContentBlocks: (post: any) => BrandPostContentBlock[] = (post) => {
	var items: BrandPostContentBlock[] = [];
	const contentBlocks: any = post.acf?.postDetails?.contentBlocks_items || [];

	contentBlocks.map((contentBlock: any) => {
		items.push({
			type: contentBlock.contentBlocks_item_type || "default",
			title: contentBlock.contentBlocks_item_title || "",
			copy: contentBlock.contentBlocks_item_copy || "",
			quote: contentBlock.contentBlocks_item_quote || "",
			list: getBrandPostContentBlockList(contentBlock) || []
		});
	});

	return items;
};

const getBrandPostClientCarouselItems: (post: any) => Image[] = (post) => {
	var items: Image[] = [];
	const carouselItems: any = post.acf?.postDetails?.clientCarousel_items || [];

	carouselItems.map((item: any) => {
		items.push({
			src: item.clientCarousel_item_image || "",
			alt: item.clientCarousel_item_image_alt || ""
		});
	});

	return items;
};

const getBrandPostPartnerCarouselItems: (post: any) => Image[] = (post) => {
	var items: Image[] = [];
	const carouselItems: any = post.acf?.postDetails?.partnerCarousel_items || [];

	carouselItems.map((item: any) => {
		items.push({
			src: item.partnerCarousel_item_image || "",
			alt: item.partnerCarousel_item_image_alt || ""
		});
	});

	return items;
};

export const getConfiguredDataFromBrandPosts: (data: any) => BrandPost[] = (data) => {
	var configuredData: BrandPost[] = [];

	data.map((post: any) => {
		const postDetails = post.acf?.postDetails;
		const yoastDetails = post.yoast_head_json;

		const configuredPost: BrandPost = {
			ID: post.id,
			slug: post.slug,
			yoast: {
				title: yoastDetails?.title,
				robots: {
					index: yoastDetails?.robots?.index,
					follow: yoastDetails?.robots?.follow
				},
				canonical: yoastDetails?.canonical,
				og_locale: yoastDetails?.og_locale,
				og_site_name: yoastDetails?.og_site_name,
				og_title: yoastDetails?.og_title,
				og_type: yoastDetails?.og_type,
				og_url: yoastDetails?.og_url
			},
			intro: {
				image: {
					src: postDetails?.intro_image || "",
					alt: postDetails?.intro_image_alt || ""
				},
				title: postDetails?.intro_title || "",
				copy: postDetails?.intro_copy || ""
			},
			usp: {
				include: postDetails?.usp_include || false,
				image: {
					src: postDetails?.usp_image || "",
					alt: postDetails?.usp_image_alt || ""
				},
				items: getBrandPostUSPItems(post)
			},
			contentBlocks: getBrandPostContentBlocks(post),
			servicesOverview: {
				include: postDetails?.servicesOverview_include || false,
				image: {
					src: postDetails?.servicesOverview_image || "",
					alt: postDetails?.servicesOverview_image_alt || ""
				},
				title: postDetails?.servicesOverview_title || "",
				copy: postDetails?.servicesOverview_copy || ""
			},
			clientCarousel: {
				include: postDetails?.clientCarousel_include || false,
				title: postDetails?.clientCarousel_title || "",
				items: getBrandPostClientCarouselItems(post)
			},
			partnerCarousel: {
				include: postDetails?.partnerCarousel_include || true,
				title: postDetails?.partnerCarousel_title || "",
				items: getBrandPostPartnerCarouselItems(post)
			}
		};

		configuredData.push(configuredPost);
	});

	return configuredData;
};
