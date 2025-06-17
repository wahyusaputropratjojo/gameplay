import { formOptions } from "@tanstack/react-form/nextjs";

export const signInFormOption = formOptions({
	defaultValues: {
		email: "",
		password: "",
	},
});
