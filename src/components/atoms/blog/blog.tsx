import { StackProps, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles";
import { FC } from "react";
import { Category } from "@types";
import { DateTime } from "luxon";
import { DATE_FORMAT_BLOG, URL } from "@constants";

interface Props extends StackProps {
	createdAt: string;
	category: Category;
	title: string;
	content: string;
	src: string;
}

export const Blog: FC<Props> = (props) => {
	const { createdAt, category, title, content, src: _src, sx } = props;
	const date = DateTime.fromISO(createdAt).toFormat(DATE_FORMAT_BLOG);
	const src = `${URL}/storage/${_src}`;

	return (
		<Stack sx={{ ...styles.container, ...sx }}>
			<Stack sx={styles.image}>
				<Image alt="" src={src} fill sizes="100% auto" />
				<Stack sx={styles.imagesDetails}>
					<Typography variant="caption">{date}</Typography>
					<Typography variant="caption">{category.name}</Typography>
				</Stack>
			</Stack>
			<Stack sx={styles.textContainer}>
				<Typography variant="h4" sx={styles.title}>
					{title}
				</Typography>
				<Typography variant="body1">{content}</Typography>
			</Stack>
		</Stack>
	);
};
