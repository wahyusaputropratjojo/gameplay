'use client';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { XIcon } from 'lucide-react';
import { toast as sonnerToast } from 'sonner';
import { cn } from '@/lib/cn';

export type ToastProps = VariantProps<typeof toastVariant> & {
  id: string | number;
  title?: string;
  description: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
};

export const toastVariant = cva(
  'flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-400 px-4 py-3 shadow-md focus-visible:ring-2 focus-visible:ring-neutral-700 md:w-96',
  {
    defaultVariants: {
      variant: 'default',
    },
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-1000',
        error: 'bg-red-800 text-light',
        success: 'bg-blue-800 text-light',
        warning: 'bg-amber-800 text-dark',
      },
    },
  }
);

export function toast(item: Omit<ToastProps, 'id'>) {
  return sonnerToast.custom((id) => (
    <Toast
      description={item.description}
      id={id}
      title={item.title}
      variant={item.variant}
    />
  ));
}

export function Toast({ description, id, title, variant }: ToastProps) {
  return (
    <div className={cn(toastVariant({ variant }))}>
      <div className="flex w-full items-center justify-between gap-1">
        <div className="w-full">
          {title && <p className="font-bold tracking-tighter">{title}</p>}
          <p className="text-pretty text-sm">{description}</p>
        </div>
      </div>
      <button
        className={cn(
          'flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-all hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-600',
          variant === 'success' && 'hover:bg-blue-700/80',
          variant === 'warning' && 'hover:bg-amber-700/80',
          variant === 'error' && 'hover:bg-red-700/80'
        )}
        onClick={() => {
          sonnerToast.dismiss(id);
        }}
        type="button"
      >
        <XIcon size={20} />
      </button>
    </div>
  );
}
