import Image from "next/image";
import { Image as ImageType } from "@/library/interfaces/Media";

interface PictureProps extends ImageType {
	width: number;
	height: number;
}

const Picture: React.FC<PictureProps> = (props) => {
	return (
		<div className="Picture">
			<picture>
				<Image src={props.src} alt={props.alt || ""} width={props.width} height={props.height} />
			</picture>
		</div>
	);
};

export default Picture;
