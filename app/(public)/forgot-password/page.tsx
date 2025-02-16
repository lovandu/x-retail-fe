import ForgotPassword from '@/src/components/auth/ForgotPassword';

export default function Login() {
  return (
    <main className='bg-white flex min-h-screen items-start max-md:pt-10 justify-center md:p-24'>
      <div className='h-[300px] w-full max-w-[350px]'>
        <ForgotPassword />
      </div>
    </main>
  );
}
