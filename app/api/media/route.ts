import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/media";

const GET: (request: NextRequest) => Promise<NextResponse> = async (request) => {
	try {
		const response = await fetch(DATA_SOURCE_URL);
		const data = await response.json();

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json(error);
	}
};

export { GET };
