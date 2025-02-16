'use client';
import MenuSidebar from '@/src/components/layout/MenuSidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=''>
      <MenuSidebar />
      <div className=''>{children}</div>
    </div>
  );
}
