import { NextRequest, NextResponse } from "next/server";
import getMediaItem from "@/library/functions/getMediaItem";

const DATA_SOURCE_URL: string = process.env.WORDPRESS_LOCAL_API_ROUTE + "/media";

const GET: (request: NextRequest, { params }: { params: { _id: string } }) => Promise<NextResponse> = async (request, { params }) => {
	var mediaEndpoint: string = `${DATA_SOURCE_URL}/${params._id}`;

	try {
		const response = await fetch(mediaEndpoint);
		const data = await response.json();
		const configuredData: string = getMediaItem(data);

		return NextResponse.json(configuredData);
	} catch (error) {
		return NextResponse.json(error);
	}
};

export { GET };
