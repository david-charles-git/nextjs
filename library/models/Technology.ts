import { TechnologyArchiveDetails, TechnologyPostData, TechnologyPostDetails } from "../interfaces/Technology";

export const TechnologyArchiveModel: TechnologyArchiveDetails = {
	intro: {
		instructions: "",
		image: "",
		image_alt: "",
		title: "Technology",
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

export const TechnologyPostACFModel: TechnologyPostDetails = {
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

export const TechnologyPostModel: TechnologyPostData = {
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
		post_details: TechnologyPostACFModel
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
