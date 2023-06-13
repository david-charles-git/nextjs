import { MarketingArchiveDetails, MarketingPostData, MarketingPostDetails } from "../interfaces/Marketing";

export const MarketingArchiveModel: MarketingArchiveDetails = {
	intro: {
		instructions: "",
		image: "",
		image_alt: "",
		title: "Marketing",
		copy: ""
	},
	usp: {
		instructions: "",
		include: false,
		image: "",
		image_alt: "",
		items: []
	},
	services_overview: {
		instructions: "",
		include: false,
		image: "",
		image_alt: "",
		title: "",
		copy: ""
	},
	client_carousel: {
		instructions: "",
		include: false,
		title: "",
		items: []
	},
	partner_carousel: {
		instructions: "",
		include: false,
		title: "",
		items: []
	}
};

export const MarketingPostACFModel: MarketingPostDetails = {
	intro: {
		instructions: "",
		image: "",
		image_alt: "",
		title: "",
		copy: ""
	},
	usp: {
		instructions: "",
		include: false,
		image: "",
		image_alt: "",
		items: []
	},
	content_block: [],
	services_overview: {
		instructions: "",
		include: false,
		image: "",
		image_alt: "",
		title: "",
		copy: ""
	},
	client_carousel: {
		instructions: "",
		include: false,
		title: "",
		items: []
	},
	partner_carousel: {
		instructions: "",
		include: false,
		title: "",
		items: []
	}
};

export const MarketingPostModel: MarketingPostData = {
	id: 0,
	date: "",
	date_gmt: "",
	guid: { rendered: "" },
	modified: "",
	modified_gmt: "",
	slug: "",
	status: "",
	type: "",
	link: "",
	title: { rendered: "" },
	featured_media: 0,
	parent: 0,
	template: "",
	acf: {
		instructions: "",
		post_details: MarketingPostACFModel
	},
	yoast_head: "",
	yoast_head_json: {
		title: "",
		robots: {
			index: "",
			follow: "",
			"max-snippet": "",
			"max-image-preview": "",
			"max-video-preview": ""
		},
		canonical: "",
		og_locale: "",
		og_type: "",
		og_title: "",
		og_url: "",
		og_site_name: "",
		article_modified_time: "",
		twitter_card: "",
		schema: {
			"@context": "",
			"@graph": [
				{
					"@type": "",
					"@id": "",
					url: "",
					name: "",
					isPartOf: { "@id": "" },
					datePublished: "",
					dateModified: "",
					breadcrumb: { "@id": "" },
					inLanguage: "",
					potentialAction: [{ "@type": "", target: [""] }]
				},
				{
					"@type": "",
					"@id": "",
					itemListElement: [{ "@type": "", position: 0, name: "", item: "" }]
				},
				{
					"@type": "",
					"@id": "",
					url: "",
					name: "",
					description: "",
					potentialAction: [
						{
							"@type": "",
							target: { "@type": "", urlTemplate: "" },
							"query-input": ""
						}
					],
					inLanguage: ""
				}
			]
		}
	},
	_links: {
		self: [{ href: "" }],
		collection: [{ href: "" }],
		about: [{ href: "" }],
		"wp:attachment": [{ href: "" }],
		curies: [{ name: "", href: "", templated: false }]
	}
};
