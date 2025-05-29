"use client";

import { useAppForm } from "@/components/ui/form/form";
import { mergeForm, useTransform } from "@tanstack/react-form";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { useActionState } from "react";
import { signUpFormAction } from "./action";
import { signUpFormOption } from "./option";
import {
	displayNameSchema,
	emailSchema,
	fullNameSchema,
	passwordSchema,
} from "./schema";

function SignUpForm() {
	const [state, action] = useActionState(signUpFormAction, initialFormState);

	const form = useAppForm({
		...signUpFormOption,
		transform: useTransform(
			(baseForm) => mergeForm(baseForm, state ?? {}),
			[state],
		),
	});

	return (
		<form
			action={action}
			onSubmit={() => form.handleSubmit()}
			className="space-y-4"
		>
			<form.AppField
				name="fullName"
				validators={{
					onBlur: fullNameSchema,
				}}
			>
				{(field) => <field.InputField label="Full Name" />}
			</form.AppField>
			<form.AppField
				name="displayName"
				validators={{
					onBlur: displayNameSchema,
				}}
			>
				{(field) => <field.InputField label="Display Name" />}
			</form.AppField>
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

export { SignUpForm };
