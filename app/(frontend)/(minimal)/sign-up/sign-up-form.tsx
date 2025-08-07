'use client';

import { mergeForm, useTransform } from '@tanstack/react-form';
import { initialFormState } from '@tanstack/react-form/nextjs';
import { useActionState } from 'react';
import { useAppForm } from '@/components/form/form';
import { signUp } from '@/lib/mutations/sign-up';
import {
  displayNameSchema,
  emailSchema,
  fullNameSchema,
  passwordSchema,
} from '@/lib/schemas/sign-up-form-schema';

function SignUpForm() {
  const [state, action] = useActionState(signUp, initialFormState);

  const form = useAppForm({
    defaultValues: {
      fullName: '',
      displayName: '',
      email: '',
      password: '',
    },
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, state ?? {}),
      [state]
    ),
  });

  return (
    <form
      action={action}
      className="space-y-4"
      onSubmit={() => form.handleSubmit()}
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
        <form.SubmitButton fullWidth label="Submit" />
      </form.AppForm>
    </form>
  );
}

export { SignUpForm };
