import { formOptions } from "@tanstack/react-form/nextjs";
import { signInFormSchema } from "./schema";

export const signInFormOption = formOptions({
	defaultValues: {
		email: "",
		password: "",
	},
	validators: {
		onBlur: signInFormSchema,
	},
});
