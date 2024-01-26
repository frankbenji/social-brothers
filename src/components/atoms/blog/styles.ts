import { SxProps } from "@mui/material";

export const styles = {
	container: {
		width: 1,
		maxWidth: "calc((100% - 24px) / 2)",
		height: "217px",
		overflow: "hidden",
		backgroundColor: "#FFFFFF",
		boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
	},
	image: {
		position: "relative",
		height: "72px",
		justifyContent: "flex-end",
		p: "8px 16px",
		"> img": {
			objectFit: "cover",
		},
	},
	imagesDetails: {
		flexDirection: "row",
		zIndex: 1,
		justifyContent: "space-between",
	},
	textContainer: {
		p: 2,
		gap: 1,
	},
	title: {
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		maxWidth: "229px",
	} satisfies SxProps,
};
