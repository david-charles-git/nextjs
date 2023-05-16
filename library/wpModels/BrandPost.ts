import { BrandPost } from "../interfaces/BrandPost";

const BrandPostModel: BrandPost = {
	ID: 0,
	slug: "",
	yoast: {
		title: "",
		robots: {
			index: "",
			follow: ""
		},
		canonical: "",
		og_locale: "",
		og_type: "",
		og_title: "",
		og_url: "",
		og_site_name: ""
	},
	intro: {
		image: {
			src: "",
			alt: ""
		},
		title: "",
		copy: ""
	},
	usp: {
		include: true,
		image: {
			src: "",
			alt: ""
		},
		items: [
			{
				image: {
					src: "",
					alt: ""
				},
				title: "",
				copy: ""
			}
		]
	},
	contentBlocks: [
		{
			type: "default",
			title: "",
			copy: "",
			quote: "",
			list: []
		}
	],
	servicesOverview: {
		include: true,
		image: {
			src: "",
			alt: ""
		},
		title: "",
		copy: ""
	},
	clientCarousel: {
		include: false,
		title: "",
		items: [
			{
				src: "",
				alt: ""
			}
		]
	},
	partnerCarousel: {
		include: false,
		title: "",
		items: [
			{
				src: "",
				alt: ""
			}
		]
	}
};

export default BrandPostModel;
