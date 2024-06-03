import { Helmet } from 'react-helmet-async'

import { CargoTypesChart } from './cargo-types-chart'
import { supplierTypesChart } from './contract-types-chart'
import { DayExpensesCard } from './day-expenses-card'
import { DayMovementsAmountCard } from './day-movements-amount-card'
import { MonthExpensesCard } from './month-expenses-card'
import { MonthMovementsAmountCard } from './month-movements-amount-card'
import { MovementChart } from './movement-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-4">
            <MonthExpensesCard />
            <DayExpensesCard />
            <MonthMovementsAmountCard />
            <DayMovementsAmountCard />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <MovementChart />
            <CargoTypesChart />
            <supplierTypesChart />
          </div>
        </div>
      </div>
    </>
  )
}
