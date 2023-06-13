// import { NextRequest, NextResponse } from "next/server";
// import { BrandPost } from "@/library/interfaces/Brand";
// import { getConfiguredDataFromBrandPosts } from "@/library/functions/Brand";

// const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/brand";

// const GET: (request: NextRequest, { params }: { params: { _slug: string } }) => Promise<NextResponse> = async (request, { params }) => {
// 	var postEndpoint: string = `${DATA_SOURCE_URL}/?slug=${params._slug}&acf_format=standard`;

// 	try {
// 		const response = await fetch(postEndpoint);
// 		const data = await response.json();
// 		const configuredData: BrandPost = getConfiguredDataFromBrandPosts(data)[0];

// 		return NextResponse.json(configuredData);
// 	} catch (error) {
// 		return NextResponse.json(error);
// 	}
// };

// export { GET };
