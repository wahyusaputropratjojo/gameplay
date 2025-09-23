import type { ReactNode } from 'react';

type ContentSectionProps = {
  title?: string;
  children: ReactNode;
};

export function ContentSection({ children, title }: ContentSectionProps) {
  return (
    <section className="space-y-2">
      {title && <p className="heading-3">{title}</p>}
      {children}
    </section>
  );
}
