interface YoastRobots {
	index: string;
	follow: string;
}

interface Yoast {
	title: string;
	robots: YoastRobots;
	canonical: string;
	og_locale: string;
	og_type: string;
	og_title: string;
	og_url: string;
	og_site_name: string;
}

export { type YoastRobots, type Yoast };
