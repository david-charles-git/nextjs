import { Image } from "./Media";
import { Yoast } from "./Yoast";

type BrandPostContentBlockOption = "default" | "with_quote" | "with_list";

interface BrandPostUSPItem {
	image: Image;
	title: string;
	copy: string;
}

interface BrandPostIntro {
	image: Image;
	title: string;
	copy: string;
}

interface BrandPostUSP {
	include: boolean;
	image?: Image;
	items?: BrandPostUSPItem[];
}

interface BrandPostContentBlock {
	type: BrandPostContentBlockOption;
	title: string;
	copy: string;
	quote?: string;
	list?: string[];
}

interface BreandPostServicesOverview {
	include: boolean;
	image?: Image;
	title?: string;
	copy?: string;
}

interface BrandPostClientCarousel {
	include: boolean;
	title?: string;
	items?: Image[];
}

interface BrandPostPartnerCarousel {
	include: boolean;
	title?: string;
	items?: Image[];
}

interface BrandPost {
	ID: number;
	slug: string;
	yoast?: Yoast;
	intro: BrandPostIntro;
	usp: BrandPostUSP;
	contentBlocks: BrandPostContentBlock[];
	servicesOverview: BreandPostServicesOverview;
	clientCarousel: BrandPostClientCarousel;
	partnerCarousel: BrandPostPartnerCarousel;
}

export { type Image, type BrandPost, type BrandPostContentBlock, type BrandPostUSPItem };
