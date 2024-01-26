import { Loader, Pagination, Blog } from "@components/atoms";
import { Stack } from "@mui/material";
import { useBlogs, usePages } from "./hooks";
import { useState } from "react";
import { styles } from "./styles";

export const BlogsWithPagination = () => {
	const [page, setPage] = useState(1);
	const { data: pages } = usePages();
	const { data: blogs, isLoading } = useBlogs(page);

	return (
		<Stack sx={styles.blogsWithPagination.container}>
			<Stack sx={styles.blogsWithPagination.blogs}>
				{isLoading ? (
					<Loader />
				) : (
					blogs?.map(({ created_at, title, category, content, img_url }, index) => (
						<Blog
							key={`${index}-${created_at}`}
							createdAt={created_at}
							title={title}
							category={category}
							content={content}
							src={img_url}
							sx={styles.blogsWithPagination.blog}
						/>
					))
				)}
			</Stack>
			<Pagination page={page} count={pages} onChange={(_, page) => setPage(page)} />
		</Stack>
	);
};
