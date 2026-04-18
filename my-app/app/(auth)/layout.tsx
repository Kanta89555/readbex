import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <header>
        <h2>Auth Section</h2>
      </header>
      {children}
    </section>
  )
}
