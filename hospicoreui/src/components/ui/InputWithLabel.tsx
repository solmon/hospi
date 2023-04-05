import {
  Input,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'

const InputWithLabel = ({
  label,
  name,
  type = 'text',
  error,
  descriptionText,
  ...props
}: InputProps) => {
  const classes = Array<string>();
  let isError:boolean=false;
  if (error) {
    isError=true;
  }

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        {...props}
        type={type}                
      />
      {!isError ? (
        <FormHelperText>
          {descriptionText}
        </FormHelperText>
      ) : (
        <FormErrorMessage>{error}</FormErrorMessage>
      )}
    </FormControl>    
  );
};

interface InputProps {
  label: string;
  name: string;
  onChange?(x: React.ChangeEvent<HTMLInputElement>): void;
  type?: string;
  error?: string;
  descriptionText?: string;
  placeholder?: string;
  value?: string;
}

export default InputWithLabel;
