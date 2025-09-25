import { AlertTriangleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function UnpopulatedRelationshipFieldAlert() {
  return (
    <Alert variant="warning">
      <AlertTriangleIcon />
      <AlertTitle className="select-none">
        Unpopulated Relationship Field
      </AlertTitle>
      <AlertDescription className="select-none">
        The response only included an ID for a related item instead of the full
        data. The Payload CMS query should be reviewed and the depth value
        increased to fully populate the nested data.
      </AlertDescription>
    </Alert>
  );
}
