import LoginBox from '@/components/loginBox'
import Image from 'next/image'
import supabase from '@/lib/supabase_connector'
//NOTE: Add supabase auth here
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <LoginBox />
    </main>
  )
}
