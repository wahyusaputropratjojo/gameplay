import { cva, type VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

export const alertVariants = cva(
  'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-xl bg-gray-100 px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    defaultVariants: {
      variant: 'primary',
    },
    variants: {
      variant: {
        error:
          'bg-red-100 text-red-800 *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current',
        primary: 'text-gray-1000',
        warning:
          'bg-amber-100 text-amber-800 *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current',
      },
    },
  }
);

export type AlertProps = ComponentProps<'div'> &
  VariantProps<typeof alertVariants>;

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-slot="alert"
      role="alert"
      {...props}
    />
  );
}

export type AlertTitleProps = ComponentProps<'div'>;

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className
      )}
      data-slot="alert-title"
      {...props}
    />
  );
}

export type AlertDescriptionProps = ComponentProps<'div'>;

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return (
    <div
      className={cn(
        'col-start-2 grid justify-items-start gap-1 text-muted-foreground text-sm [&_p]:leading-relaxed',
        className
      )}
      data-slot="alert-description"
      {...props}
    />
  );
}
