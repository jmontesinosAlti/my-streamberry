'use client'
import { usePathname } from 'next/navigation';

export default function Movie() {
  const pathname = usePathname();
  const slug = pathname.substring(7); 
    return <h1>Hello, MOVIES details {slug}</h1>
  }