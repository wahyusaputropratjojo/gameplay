'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useId, useState } from 'react';
import { Input, type InputProps } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert } from './alert';
import { useFieldContext } from './form';

export type InputPasswordFieldProps = Omit<InputProps, 'type'> & {
  label: string;
};

export function InputPasswordField({
  label,
  required,
  ...props
}: InputPasswordFieldProps) {
  const id = useId();
  const field = useFieldContext<string>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggleVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <div className="space-y-2">
      <div className="relative">
        <Input
          className="peer pr-14 pl-4 placeholder:text-transparent"
          id={`${id}-${field.name}`}
          name={field.name}
          onBlur={field.handleBlur}
          onChange={(event) => field.handleChange(event.target.value)}
          placeholder=" "
          type={isVisible ? 'text' : 'password'}
          value={field.state.value}
          variant={field.state.meta.isValid ? 'default' : 'error'}
          {...props}
        />
        <Label
          className="-top-1.5 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-1.5 absolute left-0 ml-2 cursor-text bg-background-100 pr-2 pl-2 text-gray-1000 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:select-none peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-900 peer-placeholder-shown:text-sm peer-focus:translate-y-0 peer-focus:bg-background-100 peer-focus:text-gray-1000 peer-focus:text-xs"
          htmlFor={`${id}-${field.name}`}
        >
          {label}
          {required && <span className="ml-1 text-red-700">*</span>}
        </Label>
        <button
          aria-controls="password"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          aria-pressed={isVisible}
          className="absolute inset-y-0 end-0 flex w-14 items-center justify-center text-neutral-400 transition-all hover:text-neutral-100 focus:text-neutral-100 focus:outline-none peer-disabled:pointer-events-none peer-disabled:cursor-not-allowed"
          onClick={toggleVisibility}
          type="button"
        >
          {isVisible ? (
            <EyeOffIcon aria-hidden="true" size={16} />
          ) : (
            <EyeIcon aria-hidden="true" size={16} />
          )}
        </button>
      </div>
      <Alert meta={field.state.meta} />
    </div>
  );
}
