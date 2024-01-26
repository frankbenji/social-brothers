import { useMutation, useQueryClient } from "react-query";
import { postBlog } from "../api";

export const usePostBlog = () => {
	const { refetchQueries } = useQueryClient();

	const onSuccess = () => {
		// TODO: Check why it updates so slow
		refetchQueries(["blogs"]);
	};

	return useMutation(postBlog, { onSuccess });
};
