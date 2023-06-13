import { MarketingArchiveDetails, MarketingArchiveData, MarketingPostData } from "../interfaces/Marketing";

export const getMarketingArchiveData: () => Promise<MarketingArchiveDetails> = async () => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_ACF_API_ROUTE + "/options/marketing?acf_format=standard";
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: MarketingArchiveData = await response.json();

	return data.acf?.post_details;
};

export const getAllMarketingPostData: () => Promise<MarketingPostData[]> = async () => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + `/marketing?acf_format=standard`;
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: MarketingPostData[] = await response.json();

	return data;
};

export const getMarketingPostDataBySlug: (_slug: string) => Promise<MarketingPostData> = async (_slug) => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + `/marketing/?slug=${_slug}&acf_format=standard`;
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: MarketingPostData = await response.json();

	return data;
};
