import { CircularProgress, Stack } from "@mui/material";
import { styles } from "./styles";

export const Loader = () => {
	return (
		<Stack sx={styles.container}>
			<CircularProgress />
		</Stack>
	);
};
