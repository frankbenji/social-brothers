import { SxProps } from "@mui/material";

export const styles = {
	recentPosts: {
		container: {
			gridColumn: "6 / 13",
			p: 3,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			alignItems: "center",
			transition: "all 0.3s ease",
			gap: 3,
		},
		blogs: {
			flexWrap: "wrap",
			alignContent: "flex-start",
			flexDirection: "row",
			gap: 3,
			transition: "all 0.3s ease",
			flexGrow: 1,
		},
	},
	blogsWithPagination: {
		container: {
			gridColumn: "1 / -1",
			gap: 3,
		},
		blogs: {
			flexWrap: "wrap",
			flexDirection: "row",
			gap: 3,
			flexGrow: 1,
			position: "relative",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			minHeight: "458px",
		},
		blog: {
			maxWidth: "calc((100% - 3 * 24px) / 4)",
		},
	},
	form: {
		container: {
			gridColumn: "1 / 6",
			maxHeight: "609px",
			p: 3,
			display: "flex",
			flexDirection: "column",
			gap: 3,
		},
		formControl: {
			gap: 1,
		},
		fileInput: {
			backgroundColor: "#fafafa",
			gap: 2,
			p: "10px 16px 9px",
		},
		fileInputProps: {
			p: 0,
			height: "unset",
		},
		submitContainer: {
			alignItems: "center",
		},
		icon: {
			color: "#888888",
		},
	} satisfies SxProps,
};
