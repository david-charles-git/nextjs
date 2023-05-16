import { NextRequest, NextResponse } from "next/server";
import { BrandPost } from "@/library/interfaces/BrandPost";
import { getConfiguredDataFromBrandPosts } from "@/library/functions/BrandFunctions";

const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/brand?acf_format=standard";

const GET: (request: NextRequest) => Promise<NextResponse> = async (request) => {
	try {
		const response = await fetch(DATA_SOURCE_URL);
		const data = await response.json();
		const configuredData: BrandPost[] = getConfiguredDataFromBrandPosts(data);

		return NextResponse.json(configuredData);
	} catch (error) {
		return NextResponse.json(error);
	}
};

export { GET };
