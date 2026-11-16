
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/10 px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-muted md:flex-row">
          <p>
            <span className="font-bold tracking-wider text-foreground">
              WARNING.
            </span>{' '}
            Survival Experience
          </p>

          <p>Stay aware. Make better decisions.</p>
        </div>
      </footer>
    </div>
  )
}
