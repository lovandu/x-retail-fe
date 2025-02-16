'use client';
import TextFieldInput from '@/src/components/form/TextFieldInput';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { LuLock } from 'react-icons/lu';

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};
const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
  });

  const password = watch('newPassword');

  const onSubmit = (data: any) => {
    console.log('data', data);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  return (
    <div className=''>
      <div className='space-y-4 mb-10'>
        <div className='text-center  text-xl font-semibold'>Quên mật khẩu</div>
        <div className='w-full flex justify-center'>
          <div className='m-auto w-10 h-10 bg-[#d9d9d9]'>logo</div>
        </div>
      </div>
      <Box
        sx={{
          maxWidth: 400,
          mx: 'auto',
          p: 2,
          border: {
            sm: '1px solid #ccc',
          },
          borderRadius: 2,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextFieldInput
            name='newPassword'
            control={control}
            rules={{
              required: 'Mật khẩu không được để trống',
              min: { value: 6, message: 'Mật khẩu không hợp lệ' },
            }}
            label='Mật khẩu mới'
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin='normal'
            size='small'
            placeholder='Nhập mật khẩu'
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label={showPassword ? 'hide the password' : 'display the password'}
                      onClick={handleClickShowPassword}
                      edge='end'
                    >
                      {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position='start'>
                    <LuLock />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextFieldInput
            name='confirmPassword'
            control={control}
            rules={{
              required: 'Mật khẩu không được để trống',
              min: { value: 6, message: 'Mật khẩu không hợp lệ' },
              validate: (value) => value.length === password || 'Mật khẩu không trùng khớp',
            }}
            label='Xác nhận mật khẩu'
            type={showConfirmPassword ? 'text' : 'password'}
            fullWidth
            margin='normal'
            size='small'
            placeholder='Xác nhận mật khẩu'
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label={
                        showConfirmPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowConfirmPassword}
                      edge='end'
                    >
                      {showConfirmPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position='start'>
                    <LuLock />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button type='submit' variant='contained' color='success' fullWidth sx={{ mt: 2 }}>
            Tạo mật khẩu mới
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default ForgotPassword;
