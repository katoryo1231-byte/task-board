# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**task-board** — タスクボードアプリ（Task Board Application）

## Tech Stack

- **Frontend**: React 19 + Vite
- **スタイル**: CSS（バニラ、フレームワークなし）
- **バックエンド・DB**: なし（静的ファイルのみ）
- **デプロイ**: GitHub Pages（gh-pagesを使用）
- **パッケージマネージャー**: npm

## Commands

```bash
# ローカルで開発サーバーを起動
npm run dev
# → http://localhost:5173 でアクセス

# GitHub Pagesへデプロイ
npm run deploy
```

## Git 運用ルール

- **コードを変更するたびに、必ず GitHub にプッシュすること**
- コミットメッセージは変更内容が分かる日本語で書く
- 手順：

```bash
git add .
git commit -m "変更内容を説明するメッセージ"
git push origin main
```

## デプロイ情報

- **GitHubリポジトリ**: https://github.com/katoryo1231-byte/task-board.git
- **公開URL（GitHub Pages）**: https://katoryo1231-byte.github.io/task-board/
- **デプロイツール**: gh-pages
- **ビルド出力先**: dist/

## Architecture

### Directory Layout

```
task-board/
├── index.html              # エントリーポイント
├── vite.config.js          # Vite設定（base: '/task-board/'）
├── package.json            # 依存関係・スクリプト
├── src/
│   ├── main.jsx            # Reactのエントリーポイント
│   ├── App.jsx             # 最上位コンポーネント
│   ├── App.css             # スタイル
│   └── components/
│       ├── TaskList.jsx    # タスク一覧コンポーネント
│       └── TaskItem.jsx    # タスク1件コンポーネント
└── dist/                   # ビルド後のファイル（自動生成）
```

## コンポーネント構成

| コンポーネント | 役割 |
|---|---|
| `App` | 画面全体の管理・タスクの状態管理 |
| `TaskList` | タスク一覧の表示 |
| `TaskItem` | タスク1件の表示（チェック・削除） |

## コンポーネントの命名規約

- コンポーネント名は**パスカルケース**（例：`TaskItem`、`TaskList`）
- ファイル名はコンポーネント名と同じにする（例：`TaskItem.jsx`）
- コンポーネントは `src/components/` フォルダーに格納する

## Key Behaviors

- タスクの追加・削除・完了チェックができる
- 完了済みタスクはグレー＋取り消し線で表示
- 日本語IME変換中のEnterキーでは誤追加されない
- データはブラウザのメモリに保存（ページをリロードするとリセットされる）
