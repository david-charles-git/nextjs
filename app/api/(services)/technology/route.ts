import { NextRequest, NextResponse } from "next/server";
import { TechnologyPost } from "@/library/interfaces/TechnologyPost";
import { getConfiguredDataFromTechnologyPosts } from "@/library/functions/TechnologyFunctions";

const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/technology?acf_format=standard";

const GET: (request: NextRequest) => Promise<NextResponse> = async (request) => {
	try {
		const response = await fetch(DATA_SOURCE_URL);
		const data = await response.json();
		const configuredData: TechnologyPost[] = getConfiguredDataFromTechnologyPosts(data);

		return NextResponse.json(configuredData);
	} catch (error) {
		return NextResponse.json(error);
	}
};

export { GET };
