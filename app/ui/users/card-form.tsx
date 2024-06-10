import BackButton from '@/app/ui/BackButton';
import UserForm, { UserFormProps } from '@/app/ui/users/form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type CardUserFormProps = {
  title: string;
  description: string;
} & UserFormProps;

export function CardUserForm({
  description,
  onSubmit,
  title,
  defaultValues,
  isReadOnly,
}: CardUserFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <UserForm
          onSubmit={onSubmit}
          defaultValues={defaultValues}
          isReadOnly={isReadOnly}
        />
      </CardContent>
      <CardFooter className='flex justify-between'>
        <BackButton />
        {isReadOnly ? null : (
          <Button type='submit' form='user-form'>
            Save
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
