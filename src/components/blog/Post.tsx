import { TPost } from "../../types";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

type Props = {
	data: TPost;
};

const Post = ({ data }: Props) => {
	const { title, featured_image, author, excerpt, ID } = data;

	return (
		<div className="flex flex-col gap-y-4">
			<Link
				to={`/blog/${ID}`}
				className="bg-gray-300 h-[20rem]  aspect-[4/3] block">
				<img
					src={featured_image}
					alt={ title }
					className="w-full h-full object-cover"
				/>
			</Link>
			<div className="space-y-3">
				<p className="bg-brick-red text-white w-fit px-4 py-1 font-semibold capitalize text-[.9rem]">
					News
				</p>
				<Link
					to={`/blog/${ID}`}
					className="font-semibold inline-block hover:underline">
					{title}
				</Link>
				<p className="text-gray-600 text-[.95rem]">{parse(excerpt)}</p>
			</div>
			<div className="mt-auto">
				<p className="flex items-center gap-x-1 font-semibold text-gray-800 capitalize text-sm">
					<BsPerson className="w-4 h-auto" /> {author.name}
				</p>
			</div>
		</div>
	);
};

export default Post;
