import { SxProps } from "@mui/material";

export const styles = {
	container: {
		alignItems: "center",
	},
	paginationItem: {
		gap: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		color: "#F27623",
	},
	iconPrevious: {
		color: "#F27623",
	},
	iconNext: {
		transform: "rotateY(180deg)",
		color: "#F27623",
	} satisfies SxProps,
};
