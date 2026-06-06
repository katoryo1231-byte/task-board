# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

**task-board** — タスクボードアプリ（Task Board Application）

## Tech Stack

- **Frontend**: HTML / CSS / JavaScript（バニラ、フレームワークなし）
- **バックエンド・DB**: なし（静的ファイルのみ）

## Commands

```bash
# ローカルで開発サーバーを起動
python3 -m http.server 8080
# → http://localhost:8080 でアクセス
```

ビルドツール・パッケージマネージャーは使用しない。外部依存ゼロ。

## Git 運用ルール

- **コードを変更するたびに、必ず GitHub にプッシュすること**
- コミットメッセージは変更内容が分かる日本語で書く
- 手順：

```bash
git add .
git commit -m "変更内容を説明するメッセージ"
git push origin main
```

## Architecture

### Directory Layout

```
task-board/
├── index.html      # エントリーポイント
├── css/
│   └── style.css   # スタイル
└── js/
    └── main.js     # アプリのロジック
```

## Key Behaviors

- タスクの追加・削除・完了チェックができる
- データはブラウザの `localStorage` に保存する
