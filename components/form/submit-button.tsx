import { Button, type ButtonProps } from '@/components/ui/button';
import { useFormContext } from './form';

export type SubmitButtonProps = ButtonProps & {
  label: string;
};

export function SubmitButton({ label, ...props }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <Button disabled={!canSubmit} type="submit" {...props}>
          {isSubmitting ? '...' : label}
        </Button>
      )}
    </form.Subscribe>
  );
}
