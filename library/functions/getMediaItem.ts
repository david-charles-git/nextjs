const getMediaItem: (data: any) => string = (data) => {
	const mediaitem: string = data.source_url || "";

	return mediaitem;
};

export default getMediaItem;
