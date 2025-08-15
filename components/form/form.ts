import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { InputField } from './input-field';
import { InputPasswordField } from './input-password-field';
import { SubmitButton } from './submit-button';

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm, withForm } = createFormHook({
  fieldComponents: {
    InputField,
    InputPasswordField,
  },
  fieldContext,
  formComponents: {
    SubmitButton,
  },
  formContext,
});
