"use client";

import { mergeForm, useStore, useTransform } from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { useActionState, useEffect } from "react";
import { useAppForm } from "@/components/form/form";
import { toast } from "@/components/ui/toast";
import { signIn } from "@/lib/mutations/sign-in";
import { emailSchema, passwordSchema } from "@/lib/schemas/sign-in-form-schema";

export function SignInForm() {
	const [state, action] = useActionState(signIn, initialFormState);

	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		},
		transform: useTransform(
			(baseForm) => mergeForm(baseForm, state ?? {}),
			[state],
		),
	});

	const formErrors = useStore(form.store, (state) => state.errors);

	useEffect(() => {
		formErrors.map((error) => {
			console.log(error);
			toast({
				title: "Server Error",
				description: `${error}`,
				variant: "error",
			});
		});

		console.log(formErrors);
	}, [formErrors]);

	return (
		<form
			action={action}
			onSubmit={() => form.handleSubmit()}
			className="space-y-4"
		>
			<form.AppField
				name="email"
				validators={{
					onBlur: emailSchema,
				}}
			>
				{(field) => <field.InputField label="Email" />}
			</form.AppField>
			<form.AppField
				name="password"
				validators={{
					onBlur: passwordSchema,
				}}
			>
				{(field) => <field.InputPasswordField label="Password" />}
			</form.AppField>
			<form.AppForm>
				<form.SubmitButton
					label="Submit"
					fullWidth
				/>
			</form.AppForm>
		</form>
	);
}
