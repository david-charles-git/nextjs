export interface uspItem {
	icon: string;
	icon_alt?: string;
	title: string;
	copy: string;
}

interface partnerCarouselItem {
	image: string;
	image_alt?: string;
}

export interface BrandArchiveDetails {
	intro: {
		instructions?: string;
		image: string;
		image_alt?: string;
		title: string;
		copy: string;
	};
	usp: {
		instructions?: string;
		include: boolean;
		image: string;
		image_alt?: string;
		items: uspItem[];
	};
	services_overview: {
		instructions?: string;
		include: boolean;
		image: string;
		image_alt?: string;
		title: string;
		copy: string;
	};
	client_carousel: {
		instructions?: string;
		include: boolean;
		title: string;
		items: partnerCarouselItem[];
	};
	partner_carousel: {
		instructions?: string;
		include: boolean;
		title: string;
		items: partnerCarouselItem[];
	};
}

export interface BrandArchiveData {
	acf: {
		post_details: BrandArchiveDetails;
	};
}

export interface BrandPostDetails {
	intro: {
		instructions?: string;
		image: string;
		image_alt?: string;
		title: string;
		copy: string;
	};
	usp: {
		instructions?: string;
		include: boolean;
		image: string;
		image_alt?: string;
		items: uspItem[];
	};
	content_block: [];
	services_overview: {
		instructions?: string;
		include: boolean;
		image: string;
		image_alt?: string;
		title: string;
		copy: string;
	};
	client_carousel: {
		instructions?: string;
		include: boolean;
		title: string;
		items: partnerCarouselItem[];
	};
	partner_carousel: {
		instructions?: string;
		include: boolean;
		title: string;
		items: partnerCarouselItem[];
	};
}

interface BrandPostYoastDetails {
	title: string;
	robots: {
		index: string;
		follow: string;
		"max-snippet": string;
		"max-image-preview": string;
		"max-video-preview": string;
	};
	canonical: string;
	og_locale: string;
	og_type: string;
	og_title: string;
	og_url: string;
	og_site_name: string;
	article_modified_time: string;
	twitter_card: string;
	schema: {
		"@context": string;
		"@graph": [
			{
				"@type": string;
				"@id": string;
				url: string;
				name: string;
				isPartOf: { "@id": string };
				datePublished: string;
				dateModified: string;
				breadcrumb: { "@id": string };
				inLanguage: string;
				potentialAction: [{ "@type": string; target: string[] }];
			},
			{
				"@type": string;
				"@id": string;
				itemListElement: Array<{ "@type": string; position: number; name: string; item?: string }>;
			},
			{
				"@type": string;
				"@id": string;
				url: string;
				name: string;
				description: string;
				potentialAction: Array<{ "@type": string; target: { "@type": string; urlTemplate: string }; "query-input": string }>;
				inLanguage: string;
			}
		];
	};
}

export interface BrandPostData {
	id: number;
	date: string;
	date_gmt: string;
	guid: { rendered: string };
	modified: string;
	modified_gmt: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: { rendered: string };
	featured_media: number;
	parent: number;
	template: string;
	acf: {
		instructions: string;
		post_details: BrandPostDetails;
	};
	yoast_head: string;
	yoast_head_json: BrandPostYoastDetails;
	_links: {
		self: Array<{ href: string }>;
		collection: Array<{ href: string }>;
		about: Array<{ href: string }>;
		"wp:attachment": Array<{ href: string }>;
		curies: Array<{ name: string; href: string; templated: boolean }>;
	};
}
