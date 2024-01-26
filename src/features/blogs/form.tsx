import { Button, FormControl, InputBase, Paper, Stack, Typography } from "@mui/material";
import { useCategories, usePostBlog } from "./hooks";
import { PostBlog } from "@types";
import { SubmitHandler, useForm } from "react-hook-form";
import CameraAltOutlined from "@mui/icons-material/CameraAltOutlined";
import { styles } from "./styles";
import { text } from "./text";

export const Form = () => {
	const { data: categories } = useCategories();
	const { mutate: post, isLoading } = usePostBlog();
	const { handleSubmit, register } = useForm<PostBlog>({
		defaultValues: {
			title: "",
			content: "",
			category_id: undefined,
			image: undefined,
		},
	});
	const onSubmit: SubmitHandler<PostBlog> = (body) => post(body);

	return (
		<Paper component="form" onSubmit={handleSubmit(onSubmit)} sx={styles.form.container}>
			<Typography variant="h4">{text.form.header}</Typography>
			<FormControl sx={styles.form.formControl} required>
				<label htmlFor="berichtnaam">{text.form.titleLabel}</label>
				<input placeholder="Geen titel" {...register("title")} />
			</FormControl>
			<FormControl sx={styles.form.formControl} required>
				<label htmlFor="categorie">{text.form.categoryIdLabel}</label>
				<select id="categorie" {...register("category_id")}>
					<option key="no_value" value="">
						{text.form.noCategory}
					</option>
					{categories?.map(({ id, name }) => (
						<option key={name} value={id}>
							{name}
						</option>
					))}
				</select>
			</FormControl>
			<FormControl sx={styles.form.formControl} required fullWidth>
				<label htmlFor="header_afbeelding">{text.form.imageLabel}</label>
				<InputBase
					id="header_afbeelding"
					type="file"
					{...register("image")}
					startAdornment={<CameraAltOutlined fontSize="small" sx={styles.form.icon} />}
					sx={styles.form.fileInput}
					inputProps={{ sx: styles.form.fileInputProps }}
				/>
			</FormControl>
			<FormControl sx={styles.form.formControl} required>
				<label htmlFor="berichtnaam">{text.form.imageLabel}</label>
				<textarea id="berichtnaam" rows={10} cols={30} {...register("content")} />
			</FormControl>
			<Stack sx={styles.form.submitContainer}>
				<Button variant="contained" type="submit" disabled={isLoading}>
					{text.form.submit(isLoading)}
				</Button>
			</Stack>
		</Paper>
	);
};
