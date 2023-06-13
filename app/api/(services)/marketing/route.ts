// import { NextRequest, NextResponse } from "next/server";
// import { MarketingPost } from "@/library/interfaces/Marketing";
// import { getConfiguredDataFromMarketingPosts } from "@/library/functions/Marketing";

// const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/marketing?acf_format=standard";

// const GET: (request: NextRequest) => Promise<NextResponse> = async (request) => {
// 	try {
// 		const response = await fetch(DATA_SOURCE_URL);
// 		const data = await response.json();
// 		const configuredData: MarketingPost[] = getConfiguredDataFromMarketingPosts(data);

// 		return NextResponse.json(configuredData);
// 	} catch (error) {
// 		return NextResponse.json(error);
// 	}
// };

// export { GET };
