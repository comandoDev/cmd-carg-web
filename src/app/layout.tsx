import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { MovimentationProvider } from '@/contexts/MovimentationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CMD Carg',
  description: 'Plataforma para controle de despesas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MovimentationProvider>
          <main className="flex-1 h-screen overflow-hidden max-h-screen bg-zinc-100 box-border">
            {children}
          </main>
        </MovimentationProvider>
        <ToastContainer
          autoClose={1500}
          closeOnClick
          position="bottom-right"
          pauseOnFocusLoss
          icon={false}
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  )
}
