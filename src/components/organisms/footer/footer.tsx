import { Stack, StackProps, Typography } from "@mui/material";
import { FC } from "react";
import { styles } from "./styles";
import { DateTime } from "luxon";

export const Footer: FC<StackProps> = () => {
	const year = DateTime.now().year;
	return (
		<Stack component="footer" sx={styles.container}>
			<Typography variant="body1" color="secondary">
				© Copyright Social Brothers - {year}
			</Typography>
		</Stack>
	);
};
