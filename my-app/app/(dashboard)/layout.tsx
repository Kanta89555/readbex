import type { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header>
        <h2>Dashboard</h2>
      </header>
      {children}
    </section>
  )
}
