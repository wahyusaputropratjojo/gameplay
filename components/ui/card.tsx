import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

type CardProps = {
  isHoverable?: boolean;
  orientation?: 'horizontal' | 'vertical';
} & ComponentProps<'div'>;

export function Card({
  className,
  isHoverable,
  orientation = 'vertical',
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'flex gap-3 rounded-(--card-radius) bg-gray-100 p-(--card-padding) text-gray-1000 transition-all [--card-padding:--spacing(1.5)] [--card-radius:var(--radius-xl)]',
        {
          'flex-col': orientation === 'vertical',
          'flex-row': orientation === 'horizontal',
        },
        {
          'hover:bg-gray-200': isHoverable,
        },
        className
      )}
      {...props}
    />
  );
}

type CardHeaderProps = ComponentProps<'div'>;

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn(className)} {...props} />;
}

type CardFooterProps = ComponentProps<'div'>;

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={cn(className)} {...props} />;
}

type CardContentProps = ComponentProps<'div'>;

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn(className)} {...props} />;
}

type CardTitleProps = ComponentProps<'p'>;

export function CardTitle({ className, ...props }: CardTitleProps) {
  return <p className={cn('font-medium text-base', className)} {...props} />;
}

type CardDescriptionProps = ComponentProps<'p'>;

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return <p className={cn('font-light text-xs', className)} {...props} />;
}
