import { TPost_API } from "./getPosts";

export const getPost = async (id: string): Promise<TPost_API> => {
	const res = await fetch(
		`https://public-api.wordpress.com/rest/v1.1/sites/menagainstrapefoundation.wordpress.com/posts/${id}`
	);
	const data = res.json();
	return data;
};
