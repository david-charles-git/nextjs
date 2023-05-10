import { NextRequest, NextResponse } from "next/server";

const GET: (request: NextRequest) => Promise<NextResponse> = async (request) => {
	return new NextResponse("Hello, Next.js!");
};

export { GET };
