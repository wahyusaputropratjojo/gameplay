import type { AnyFieldMeta } from '@tanstack/react-form';
import { OctagonAlertIcon } from 'lucide-react';
import type { ZodError } from 'zod';

export type AlertProps = {
  meta: AnyFieldMeta;
};

export function Alert({ meta }: AlertProps) {
  return (
    <ul>
      {meta.errors.slice(0, 1).map(({ message }: ZodError) => (
        <li
          className="flex items-start gap-1 text-red-900 text-sm"
          key={message}
        >
          <span className="flex h-[1lh] items-center">
            <OctagonAlertIcon className="shrink-0 text-error-800" size={14} />
          </span>
          {message}
        </li>
      ))}
    </ul>
  );
}
