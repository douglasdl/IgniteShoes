import { Input as GuestackInput } from '@/components/ui/input'
import { IInputProps } from '@gluestack-ui/input/lib/types';

export function Input({ ...rest }: IInputProps) {
  return (
    <GuestackInput 
      className='bg-gray-800 h-14 px-4 border-gray-600 text-white focus:bg-gray-800 focus:border-gray-600'
      size="md"
      {...rest}
    />
  );
}