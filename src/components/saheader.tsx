import {
  ArrowLeftRight,
  BarChart,
  Building2,
  LayoutDashboard,
  Users,
} from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="fixed z-20 w-full border-b bg-background">
      <div className="flex h-16 w-full items-center gap-6 px-6">
        <BarChart className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </NavLink>
          <NavLink to="/movimentacoes">
            <ArrowLeftRight className="h-4 w-4 rotate-90" />
            Movimentações
          </NavLink>
          <NavLink to="/motoristas">
            <Users className="h-4 w-4" />
            Motoristas
          </NavLink>
          <NavLink to="/fornecedores">
            <Building2 className="h-4 w-4" />
            Fornecedores
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />

          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
