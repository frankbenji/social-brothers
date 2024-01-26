import { Loader, Blog } from "@components/atoms";
import { Button, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useBlogs } from "./hooks";
import { styles } from "./styles";
import { text } from "./text";

export const RecentPosts = () => {
	const { data: blogs = [], isLoading } = useBlogs();
	const [showMore, setShowMore] = useState(false);
	const length = showMore ? [undefined, undefined] : [0, 4];
	const slicedBlogs = blogs.slice(...length);
	const handleClick = () => setShowMore(!showMore);

	return (
		<Paper sx={styles.recentPosts.container}>
			<Stack sx={styles.recentPosts.blogs}>
				{isLoading ? (
					<Loader />
				) : (
					slicedBlogs?.map(({ created_at, title, category, content, img_url }, index) => (
						<Blog
							key={`${index}-${created_at.toString()}`}
							createdAt={created_at}
							title={title}
							category={category}
							content={content}
							src={img_url}
						/>
					))
				)}
			</Stack>
			<Button variant="contained" onClick={handleClick}>
				{text.recentPosts.loadMore}
			</Button>
		</Paper>
	);
};
