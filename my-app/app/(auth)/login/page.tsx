import { LoginForm } from '@/features/auth/components/LoginForm'

export default function LoginPage() {
  return (
    <main>
      <section>
        <h1>ログイン</h1>
        <p>メールアドレスとパスワードでログインします。</p>
        <LoginForm />
      </section>
      <style jsx>{`
        main {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: #f8fafc;
        }

        section {
          width: 100%;
          max-width: 480px;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          padding: 2rem;
        }

        h1 {
          margin: 0 0 0.75rem;
          font-size: 2rem;
        }

        p {
          margin: 0 0 1.5rem;
          color: #4b5563;
        }
      `}</style>
    </main>
  )
}
