import { SxProps } from "@mui/material";

export const styles = {
	header: {
		backgroundImage: "url('/images/Mask.png')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		height: "208px",
		alignItems: "center",
		overflow: "hidden",
		gap: 3,
	},
	container: {
		flexDirection: "row",
		pt: 4,
		maxWidth: "1116px",

		width: 1,
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	links: {
		flexDirection: "row",
		gap: 3,
	} satisfies SxProps,
};
