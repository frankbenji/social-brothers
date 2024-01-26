import { CssBaseline, ThemeProvider as Provider } from "@mui/material";
import { theme } from "./theme";
import { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider theme={theme}>
			<CssBaseline />
			{children}
		</Provider>
	);
};
