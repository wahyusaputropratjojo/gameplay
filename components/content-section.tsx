import { createElement, type JSX, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type TitleVariant =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'paragraph';

type ContentSectionProps = {
  title?: string;
  titleElement?: TitleVariant;
  titleSize?: TitleVariant;
  children: ReactNode;
};

const tagMap: Record<TitleVariant, keyof JSX.IntrinsicElements> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'heading-6': 'h6',
  paragraph: 'p',
};

export function ContentSection({
  children,
  title,
  titleElement = 'heading-1',
  titleSize,
}: ContentSectionProps) {
  const tag = tagMap[titleElement];
  const className = cn(titleSize ?? titleElement);

  return (
    <section className="relative grid gap-3">
      {title && createElement(tag, { className }, title)}
      {children}
    </section>
  );
}
