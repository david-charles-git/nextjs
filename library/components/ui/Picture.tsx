import { Image } from "@/library/interfaces/Media";

interface PictureProps extends Image {
	width: number;
	height: number;
}

const Picture: React.FC<PictureProps> = (props) => {
	return (
		<div className="Picture">
			<picture>
				<img src={props.src} alt={props.alt || ""} width={props.width} height={props.height} />
			</picture>
		</div>
	);
};

export default Picture;
