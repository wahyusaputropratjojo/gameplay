"use client";

import { useAppForm } from "@/components/ui/form/form";
import { toast } from "@/components/ui/toast/toast";
import { mergeForm, useStore, useTransform } from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { useActionState, useEffect } from "react";
import { signInFormAction } from "./action";
import { signInFormOption } from "./option";
import { emailSchema, passwordSchema } from "./schema";

export function SignInForm() {
	const [state, action] = useActionState(signInFormAction, initialFormState);

	const form = useAppForm({
		...signInFormOption,
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
