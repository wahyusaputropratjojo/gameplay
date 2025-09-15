import { RichText } from '@payloadcms/richtext-lexical/react';

type AboutSectionProps = {
  data:
    | {
        root: {
          type: string;
          children: {
            type: string;
            version: number;
            [k: string]: unknown;
          }[];
          direction: ('ltr' | 'rtl') | null;
          format:
            | 'left'
            | 'start'
            | 'center'
            | 'right'
            | 'end'
            | 'justify'
            | '';
          indent: number;
          version: number;
        };
        [k: string]: unknown;
      }
    | null
    | undefined;
};

export function AboutSection({ data }: AboutSectionProps) {
  if (data) {
    return (
      <section className="space-y-2">
        <h2 className="heading-3">About</h2>
        <RichText className="text-pretty" data={data} />
      </section>
    );
  }
}
