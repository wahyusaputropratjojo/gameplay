'use client';

import { mergeForm, useStore, useTransform } from '@tanstack/react-form';
import { initialFormState } from '@tanstack/react-form/nextjs';
import { useActionState, useEffect } from 'react';
import { useAppForm } from '@/components/form/form';
import { toast } from '@/components/ui/toast';
import { signIn } from '@/lib/mutations/sign-in';
import { emailSchema, passwordSchema } from '@/lib/schemas/sign-in-form-schema';

export function SignInForm() {
  const [state, action] = useActionState(signIn, initialFormState);

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    transform: useTransform(
      (baseForm) => mergeForm(baseForm, state ?? {}),
      [state]
    ),
  });

  const formErrors = useStore(form.store, (formState) => formState.errors);

  useEffect(() => {
    formErrors.map((error) => {
      return toast({
        title: 'Server Error',
        description: `${error}`,
        variant: 'error',
      });
    });
  }, [formErrors]);

  return (
    <form
      action={action}
      className="space-y-4"
      onSubmit={() => form.handleSubmit()}
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
        <form.SubmitButton fullWidth label="Submit" />
      </form.AppForm>
    </form>
  );
}
