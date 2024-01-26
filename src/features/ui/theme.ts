import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal"],
	subsets: ["latin"],
});

const theme = createTheme({
	palette: {
		text: {
			primary: "#2B2B2B",
			secondary: "#FFFFFF",
		},
		primary: {
			light: "#ed7e59",
			main: "#E95E30",
			dark: "#a34121",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#FFFFFF",
		},
		background: {
			default: "#FAFAFA",
			paper: "#FFFFFF",
		},
	},
	typography: {
		fontFamily: inter.style.fontFamily,
		h1: {
			fontFamily: inter.style.fontFamily,
			color: "#FFFFFF",
			fontSize: "48px",
			fontWeight: "bold",
			letterSpacing: 0,
			lineHeight: "62px",
			textAlign: "center",
			textTransform: "capitalize" as const,
		},
		h4: {
			fontFamily: inter.style.fontFamily,
			fontWeight: "bold",
			fontSize: 24,
			lineHeight: "29px",
		},
		body1: {
			fontFamily: inter.style.fontFamily,
			fontSize: 12,
			lineHeight: "19px",
			color: "#868686",
		},
		caption: {
			fontFamily: inter.style.fontFamily,
			fontSize: 8,
			lineHeight: "10px",
			color: "#FFFFFF",
			fontStyle: "italic",
			letterSpacing: 0,
		},
		button: {
			fontFamily: inter.style.fontFamily,
			fontWeight: 600,
			fontSize: 12,
			lineHeight: "15px",
			color: "#FFFFFF",
			textTransform: "capitalize" as const,
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: {
						padding: "12px 48px",
						borderRadius: "20px",
						boxShadow: "unset",
						backgroundColor: "#F27623",
					},
				},
			],
		},
	},
});

export { theme };
