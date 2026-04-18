# Architecture

## Goal

Provide a scalable and maintainable Next.js application structure using feature-based organization.

## Key concepts

- `app/` contains App Router routes and route groups.
- `components/` holds shared UI primitives and layout components.
- `features/` is the core of extensibility: feature domains own their own components, hooks, and server actions.
- `lib/` contains low-level shared logic such as database, authentication, and utility functions.
- `hooks/`, `types/`, `utils/` are shared across the application.

## Project structure

```text
my-app/
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── common/
│   │   └── Button.tsx
│   └── layout/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── server-actions.ts
│   │   └── types.ts
│   ├── dashboard/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── server-actions.ts
│   └── products/
├── lib/
│   ├── db.ts
│   ├── auth.ts
│   ├── utils.ts
│   └── constants.ts
├── hooks/
├── types/
├── utils/
├── public/
├── .env.local
├── next.config.mjs
├── tsconfig.json
├── package.json
└── middleware.ts
```

<!--
  ファイル構成と各ファイルの特徴

  - `my-app/app/`
    - `layout.tsx`: ルートレイアウト。HTML 構造と共通スタイルを定義し、全ページに共通するレイアウトを提供します。
    - `page.tsx`: ホームページ。アプリのエントリーポイントとなるメインページです。
    - `loading.tsx` / `error.tsx`: App Router の共通ロード画面とエラーハンドリングを定義します。
    - `globals.css`: グローバルスタイル。アプリ全体のベース CSS を管理します。
    - `(auth)` / `(dashboard)`: ルートグループ。URL には影響させず、レイアウトやページ構造を分離するために使用します。

  - `my-app/components/`
    - `ui/`: UI ライブラリ向けの primitives やビルディングブロックを格納します。
    - `common/`: ボタン、カード、モーダルなど再利用性の高い共通 UI コンポーネントを置きます。
    - `layout/`: Header、Sidebar、Footer などレイアウト関連のコンポーネントを整理します。

  - `my-app/features/`
    - 各機能ドメインを独立させ、関連するコンポーネント、hooks、server-action を同じフォルダ内に集約します。
    - `auth/`: 認証に関する UI、ロジック、型、サーバーアクションを管理します。
    - `dashboard/`: 認証後のダッシュボード機能と、それに紐づく UI・データ処理を管理します。
    - `products/`: 新規機能追加時の拡張ポイント。機能ごとにフォルダを追加していきます。

  - `my-app/lib/`
    - `db.ts`: データベース接続や ORM 初期化方法を定義します。
    - `auth.ts`: 認証チェックやセッション管理などの共通ヘルパーをまとめます。
    - `utils.ts`: 日付、フォーマット、文字列変換などの汎用ユーティリティを配置します。
    - `constants.ts`: サイト名や API ベース URL など、アプリ全体で使う定数を一元管理します。

  - `my-app/hooks/`: 複数機能で使うカスタムフックを格納し、共通の振る舞いを再利用します。
  - `my-app/types/`: グローバル型定義を管理し、型安全な共有を実現します。
  - `my-app/utils/`: 副作用なしの純粋関数を分離することで、テストしやすく保守性の高い実装にします。
  - `my-app/public/`: 静的ファイルを公開する場所です。画像や favicon、静的アセットを配置します。
  - `next.config.mjs` / `tsconfig.json` / `package.json`: Next.js 設定、TypeScript 設定、依存関係・スクリプト定義を保持します。
  - `.env.local`: ローカル環境変数。機密情報は Git 管理せず環境ごとに設定します。
  - `middleware.ts`: 認証・i18n・リダイレクトなどリクエスト前処理を行う場所です。
-->

## Routing and grouping

Route groups such as `(auth)` and `(dashboard)` are used for layout partitioning without affecting URL paths. This keeps routing logic thin and layout-specific concerns isolated.

## Separation of concerns

- App Router files stay focused on routing and page composition.
- Feature folders own domain-specific logic and UI.
- Shared utilities and types remain outside feature folders to avoid duplication.
