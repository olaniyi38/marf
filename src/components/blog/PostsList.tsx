import { TPost } from "../../types";
import Post from "./Post";
import { useState } from "react";
type Props = {
	posts: TPost[];
};

const PostsList = ({ posts }: Props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 8;

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;

	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const totalPages = Math.ceil(posts.length / postsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	return (
		<section className="py-8 md:pt-20 flex flex-col gap-y-16 border-t border-t-gray-600">
			<div className=" grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-y-16 gap-x-10">
				{currentPosts.map((p) => (
					<>
						<Post
							data={p}
							key={p.ID}
						/>
					</>
				))}
			</div>
			<div className=" self-end flex items-center gap-x-2 text-sm">
				<button
					className="text-brick-red underline disabled:text-gray-600"
					onClick={handlePrevPage}
					disabled={currentPage === 1}>
					Prev
				</button>
				<span>
					Page {currentPage} of {totalPages}
				</span>
				<button
					className="text-brick-red underline disabled:text-gray-600"
					onClick={handleNextPage}
					disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</section>
	);
};

export default PostsList;
