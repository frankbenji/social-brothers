import { TOKEN } from "@constants";
import { Blog, Category, PostBlog } from "@types";

type BlogParams = {
	page: number;
};

export const getBlogs = async (params: BlogParams): Promise<Blog[]> => {
	const { page } = params;
	const url = `https://frontend-case-api.sbdev.nl/api/posts?page=${page}&perPage=8&sortBy=created_at&sortDirection=desc&searchPhrase=test%20ber&categoryId=1`;

	const req = await fetch(url, {
		method: "GET",
		headers: {
			token: TOKEN,
		},
	});
	const res = await req.json();
	return res.data;
};

export const postBlog = async (params: PostBlog) => {
	const url = "https://frontend-case-api.sbdev.nl/api/posts";
	var body = new FormData();
	body.append("title", params.title);
	body.append("content", params.content);
	body.append("image", params.image[0]);
	body.append("category_id", params.category_id);

	const response = await fetch(url, {
		method: "POST",
		headers: {
			token: TOKEN,
		},
		body: body,
	});

	return response.json();
};

export const getCategories = async (): Promise<Category[]> => {
	const url = "https://frontend-case-api.sbdev.nl/api/categories";
	const response = await fetch(url, {
		method: "GET",
		headers: {
			token: TOKEN,
		},
	});
	return response.json();
};

export const getPages = async (): Promise<number> => {
	const url =
		"https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=8&sortBy=created_at&sortDirection=asc&searchPhrase=test%20ber&categoryId=1";
	const req = await fetch(url, {
		method: "GET",
		headers: {
			token: TOKEN,
		},
	});
	const res = await req.json();
	return res.last_page;
};
