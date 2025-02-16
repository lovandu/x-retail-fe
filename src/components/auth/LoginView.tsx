'use client';
import TextFieldInput from '@/src/components/form/TextFieldInput';
import { getRouter } from '@/src/utils/router.util';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { LuLock, LuUser } from 'react-icons/lu';

type FormValues = {
  username?: string;
  password?: string;
  remember?: string;
};
const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {},
  });

  const onSubmit = (data: any) => {
    console.log('data', data);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className=''>
      <div className='space-y-4 mb-10'>
        <div className='text-center  text-xl font-semibold'>Đăng nhập</div>
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
            name='email'
            control={control}
            rules={{
              required: 'Tên đăng nhập không được để trống',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Tên đăng nhập không hợp lệ' },
            }}
            label='Tên đăng nhập'
            fullWidth
            margin='normal'
            size='small'
            placeholder='Nhập tên đăng nhập'
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position='start'>
                    <LuUser />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextFieldInput
            name='password'
            control={control}
            rules={{
              required: 'Mật khẩu không được để trống',
              min: { value: 6, message: 'Mật khẩu không hợp lệ' },
            }}
            label='Mật khẩu'
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
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
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
          <Button type='submit' variant='contained' color='success' fullWidth sx={{ mt: 2 }}>
            Đăng nhập
          </Button>
        </form>
      </Box>
      <div className='space-y-6 mt-6 text-center'>
        <div className=''>
          <Link
            className='underline text-yellow-700 font-normal'
            href={getRouter('forgotPassword')}
          >
            Quên mật khẩu?
          </Link>
        </div>
        <div className=''>
          <Link className='' href={getRouter('register')}>
            <Button
              type='submit'
              variant='contained'
              className='bg-[C] text-[#333]'
              fullWidth
              sx={{ mt: 2 }}
              color='inherit'
            >
              Đăng ký tài khoản
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
