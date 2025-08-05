import { CornerUpRightIcon } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/ui/button';

export function NextButton(props: ButtonProps) {
  return (
    <Button variant="secondary" {...props}>
      <CornerUpRightIcon size={16} />
    </Button>
  );
}
