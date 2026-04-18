'use client'

import { useState } from 'react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // TODO: call server action or API route for authentication
      console.log('Login attempt:', { email, password })
      await new Promise((resolve) => setTimeout(resolve, 600))
    } catch (err) {
      setError('ログインに失敗しました。再度お試しください。')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>

      {error ? <p className="error">{error}</p> : null}

      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <style jsx>{`
        .login-form {
          display: grid;
          gap: 1rem;
          max-width: 380px;
          width: 100%;
        }

        label {
          display: block;
          margin-bottom: 0.25rem;
          font-weight: 600;
        }

        input {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
        }

        .error {
          color: #b91c1c;
          margin: 0;
        }

        button {
          padding: 0.9rem 1.2rem;
          border: none;
          border-radius: 0.5rem;
          background: #2563eb;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  )
}
