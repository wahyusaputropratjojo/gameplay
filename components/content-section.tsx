import type { ReactNode } from 'react';

type ContentSectionProps = {
  title?: string;
  children: ReactNode;
};

export function ContentSection({ children, title }: ContentSectionProps) {
  return (
    <section className="relative grid gap-3">
      {title && <p className="heading-3">{title}</p>}
      {children}
    </section>
  );
}
