import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="cmd-carg-theme">
        <Helmet titleTemplate="%s | CMD Cargas" />

        <Toaster richColors />

        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
