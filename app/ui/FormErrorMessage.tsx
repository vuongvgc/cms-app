import { OctagonAlertIcon } from 'lucide-react';
export default function FormErrorMessage({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <div
      className='flex h-8 items-end space-x-1'
      aria-live='polite'
      aria-atomic='true'
    >
      {errorMessage && (
        <>
          <OctagonAlertIcon className='h-5 w-5 text-red-500' />
          <p className='text-sm text-red-500'>{errorMessage}</p>
        </>
      )}
    </div>
  );
}
