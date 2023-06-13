import { BrandArchiveDetails, BrandArchiveData, BrandPostData } from "../interfaces/Brand";

export const getBrandArchiveData: () => Promise<BrandArchiveDetails> = async () => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_ACF_API_ROUTE + "/options/brand?acf_format=standard";
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: BrandArchiveData = await response.json();

	return data.acf?.post_details;
};

export const getAllBrandPostData: () => Promise<BrandPostData[]> = async () => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + `/brand?acf_format=standard`;
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: BrandPostData[] = await response.json();

	return data;
};

export const getBrandPostDataBySlug: (_slug: string) => Promise<BrandPostData> = async (_slug) => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + `/brand/?slug=${_slug}&acf_format=standard`;
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: BrandPostData[] = await response.json();
	const post: BrandPostData = data[0];

	return post;
};
