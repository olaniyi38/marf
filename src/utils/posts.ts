import { TPost } from "../types";

export const getLatestPosts = (posts: TPost[], count: number = 5): TPost[] => {
	return [...posts]
		.sort(
			(a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()
		)
		.slice(0, count)
};

export const getLatestFeaturedPosts = (
	posts: TPost[],
	count: number = 3
): TPost[] => {
	return [...posts]
		.filter(
			(post) =>
				post.terms.category &&
				Object.values(post.terms.category).some(
					(category) => category.name.toLowerCase() === "featured"
				)
		)
		.sort(
			(a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime()
		)
		.slice(0, count);
};
