import { NextRequest, NextResponse } from "next/server";
import { MarketingPost } from "@/library/interfaces/MarketingPost";
import { getConfiguredDataFromMarketingPosts } from "@/library/functions/MarketingFunctions";

const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/marketing";

const GET: (request: NextRequest, { params }: { params: { _slug: string } }) => Promise<NextResponse> = async (request, { params }) => {
	var postEndpoint: string = `${DATA_SOURCE_URL}/?slug=${params._slug}&acf_format=standard`;

	try {
		const response = await fetch(postEndpoint);
		const data = await response.json();
		const configuredData: MarketingPost = getConfiguredDataFromMarketingPosts(data)[0];

		return NextResponse.json(configuredData);
	} catch (error) {
		return NextResponse.json(error);
	}
};

export { GET };
