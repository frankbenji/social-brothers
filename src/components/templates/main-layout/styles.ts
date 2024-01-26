import { SxProps } from "@mui/material";

export const styles = {
	container: {
		display: "grid",
		gridTemplateColumns: "repeat(12,  1fr)",
		columnGap: 3,
		maxWidth: "1116px !important",
		p: { xs: 0 },
		my: 8,
		mx: "auto",
	} satisfies SxProps,
};
