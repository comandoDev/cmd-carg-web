import Image from 'next/image'

import { AuthForm } from '@/components/AuthForm'

export default function Login() {
  return (
    <div className="bg-[url('/login-background.png')] flex-1 h-full w-full object-cover bg-left flex items-end justify-between">
      <Image
        src={'/logo-comando-white.png'}
        alt=""
        width={200}
        height={200}
        quality={100}
        className="h-6 m-10 w-auto hidden md:flex"
      />

      <div className="flex justify-center items-center h-full w-full md:w-[60%] bg-white">
        <div className="w-[80%] md:w-auto">
          <h1 className="uppercase text-center font-semibold text-2xl mb-6">
            Controle de despesas
          </h1>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
