import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <p>Welcome to the starter app structure.</p>
      <p>
        <Link href="/login">ログインページへ</Link>
      </p>
    </main>
  )
}
