import { TechnologyArchiveDetails, TechnologyArchiveData, TechnologyPostData } from "../interfaces/Technology";

export const getTechnologyArchiveData: () => Promise<TechnologyArchiveDetails> = async () => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_ACF_API_ROUTE + "/options/technology?acf_format=standard";
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: TechnologyArchiveData = await response.json();

	return data.acf?.post_details;
};

export const getAllTechnologyPostData: () => Promise<TechnologyPostData[]> = async () => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + `/technology?acf_format=standard`;
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: TechnologyPostData[] = await response.json();

	return data;
};

export const getTechnologyPostDataBySlug: (_slug: string) => Promise<TechnologyPostData> = async (_slug) => {
	const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + `/technology/?slug=${_slug}&acf_format=standard`;
	const response: Response = await fetch(DATA_SOURCE_URL);
	const data: TechnologyPostData = await response.json();

	return data;
};
