import { Image } from "./Media";
import { Yoast } from "./Yoast";

type MarketingPostContentBlockOption = "default" | "with_quote" | "with_list";

interface MarketingPostUSPItem {
	image: Image;
	title: string;
	copy: string;
}

interface MarketingPostIntro {
	image: Image;
	title: string;
	copy: string;
}

interface MarketingPostUSP {
	include: boolean;
	image?: Image;
	items?: MarketingPostUSPItem[];
}

interface MarketingPostContentBlock {
	type: MarketingPostContentBlockOption;
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

interface MarketingPostClientCarousel {
	include: boolean;
	title?: string;
	items?: Image[];
}

interface MarketingPostPartnerCarousel {
	include: boolean;
	title?: string;
	items?: Image[];
}

interface MarketingPost {
	ID: number;
	slug: string;
	yoast?: Yoast;
	intro: MarketingPostIntro;
	usp: MarketingPostUSP;
	contentBlocks: MarketingPostContentBlock[];
	servicesOverview: BreandPostServicesOverview;
	clientCarousel: MarketingPostClientCarousel;
	partnerCarousel: MarketingPostPartnerCarousel;
}

export { type Image, type MarketingPost, type MarketingPostContentBlock, type MarketingPostUSPItem };
