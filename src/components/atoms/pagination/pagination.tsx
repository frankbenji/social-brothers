import { Stack, Typography, Pagination as MUIPagination, PaginationProps, PaginationItem } from "@mui/material";
import { styles } from "./styles";
import { FC } from "react";
import { KeyboardBackspace } from "@mui/icons-material";

export const Pagination: FC<PaginationProps> = (props) => {
	// TODO: Move text into general text folder
	return (
		<Stack sx={styles.container}>
			<MUIPagination
				{...props}
				renderItem={(item) =>
					item.disabled ? null : (
						<PaginationItem
							{...item}
							slots={{
								previous: () => (
									<Stack sx={styles.paginationItem}>
										<KeyboardBackspace fontSize="small" sx={styles.iconPrevious} />
										<Typography sx={styles.text}>Volgende pagina</Typography>
									</Stack>
								),
								next: () => (
									<Stack sx={styles.paginationItem}>
										<Typography sx={styles.text}>Volgende pagina</Typography>
										<KeyboardBackspace fontSize="small" sx={styles.iconNext} />
									</Stack>
								),
							}}
						/>
					)
				}
			/>
		</Stack>
	);
};
