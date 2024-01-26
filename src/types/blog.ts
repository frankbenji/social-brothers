export interface Blog {
	id: number;
	created_at: string;
	updated_at: string;
	title: string;
	content: string;
	category_id: number;
	img_url: string;
	category: Category;
}

export interface Category {
	id: number;
	name: string;
	created_at: any;
	updated_at: any;
}

export type PostBlog = {
	title: string;
	content: string;
	category_id: string;
	image: FileList;
};
