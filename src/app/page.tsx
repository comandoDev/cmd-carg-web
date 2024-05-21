import { Header } from '@/components/Header'
import { MovimentationForm } from '@/components/MovimentationForm'
import { Table } from '@/components/Table'

export default function Home() {
  return (
    <div className="max-h-screen h-full flex items-center justify-between flex-col">
      <Header />
      <div className="container flex flex-col px-6 flex-1 py-10 space-y-4 h-full">
        <h1 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
          Nova Movimentação
        </h1>
        <MovimentationForm />
        <Table />
      </div>
    </div>
  )
}
