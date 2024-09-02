# 【Auth.js】NextAuth v5 の認証ボタンを shadcn/ui でリッチにカスタマイズする

## YouTube

[!["【Auth.js】NextAuth v5の認証ボタンをshadcn/uiでリッチにカスタマイズする"](https://i.ytimg.com/vi/eltuhsmIc7g/maxresdefault.jpg)](https://youtu.be/eltuhsmIc7g)

## 技術選定

- TypeScript
- Next.js
- Tailwind CSS
- shadcn/ui
- Auth.js(NextAuth.js) v5
- Cloudflare Pages

## 初期設定

### NodeModule をインストール

```bash
bun install
```

### 環境変数を設定

ファイル`.env.local.sample`を`.env.local`に変更して、各環境変数を指定する

```sh:.env.local
AUTH_SECRET=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
```
