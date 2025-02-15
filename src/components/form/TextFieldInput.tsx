'use client';
import { TextField, TextFieldProps } from '@mui/material';
import { Control, Controller, FieldValues, RegisterOptions } from 'react-hook-form';

interface IProps extends Omit<TextFieldProps, 'name'> {
  name: string;
  control?: any;
  rules?: RegisterOptions;
}
const TextFieldInput = ({ control, name, rules, ...rest }: IProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...rest}
          error={!!fieldState?.error?.message}
          helperText={fieldState?.error?.message}
        />
      )}
    />
  );
};

export default TextFieldInput;
