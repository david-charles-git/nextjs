import { Image } from "./Media";
import { Yoast } from "./Yoast";

type TechnologyPostContentBlockOption = "default" | "with_quote" | "with_list";

interface TechnologyPostUSPItem {
	image: Image;
	title: string;
	copy: string;
}

interface TechnologyPostIntro {
	image: Image;
	title: string;
	copy: string;
}

interface TechnologyPostUSP {
	include: boolean;
	image?: Image;
	items?: TechnologyPostUSPItem[];
}

interface TechnologyPostContentBlock {
	type: TechnologyPostContentBlockOption;
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

interface TechnologyPostClientCarousel {
	include: boolean;
	title?: string;
	items?: Image[];
}

interface TechnologyPostPartnerCarousel {
	include: boolean;
	title?: string;
	items?: Image[];
}

interface TechnologyPost {
	ID: number;
	slug: string;
	yoast?: Yoast;
	intro: TechnologyPostIntro;
	usp: TechnologyPostUSP;
	contentBlocks: TechnologyPostContentBlock[];
	servicesOverview: BreandPostServicesOverview;
	clientCarousel: TechnologyPostClientCarousel;
	partnerCarousel: TechnologyPostPartnerCarousel;
}

export { type Image, type TechnologyPost, type TechnologyPostContentBlock, type TechnologyPostUSPItem };
