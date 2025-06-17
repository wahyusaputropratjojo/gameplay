import { formOptions } from "@tanstack/react-form/nextjs";

export const signUpFormOption = formOptions({
	defaultValues: {
		fullName: "",
		displayName: "",
		email: "",
		password: "",
	},
});
