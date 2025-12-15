# Copilot Instructions

このファイルは、GitHub Copilotがプロジェクト固有のコンテキストとガイドラインを理解するための指示書です。

## プロジェクト概要

このプロジェクトはVTuber鈴音舞夢の公式ウェブサイトです。

主な目的:
- github.ioを使った静的サイトを構築すること
- 鈴音舞夢の活動情報やコンテンツを提供すること

## 技術スタック

- **言語**: TypeScript, HTML, CSS
- **フレームワーク**: React 19.2.1
- **ビルドツール**: Vite 5.0
- **プラグイン**: @vitejs/plugin-react 5.1.2
- **TypeScript関連**: @types/react, @types/react-dom, @types/node
- **API統合**: microcms-js-sdk 3.2.0
- **パッケージマネージャー**: npm

## コーディング規約

### 命名規則
- **変数名**: camelCase (例: `userName`, `itemCount`)
- **定数**: UPPER_SNAKE_CASE (例: `MAX_SIZE`, `API_URL`)
- **関数名**: camelCase (例: `getUserData`, `calculateTotal`)
- **クラス名**: PascalCase (例: `UserService`, `DataModel`)

### コードスタイル
- **インデント**: スペース4個 (TypeScript/CSS共通)
- **行の長さ**: 100文字以内を推奨
- **セミコロン**: 必須
- **クォート**: シングルクォートを使用(TSX属性ではダブルクォート可)
- **空行**: 関数間やセクション間に1行の空行を挿入
- **中括弧の位置**: 開始中括弧は同じ行に配置
- **スペース**: 演算子の前後にスペースを入れる
- **配列とオブジェクト**: 最後の要素の後にカンマを付ける
- **プライベートメンバー**: 末尾にアンダースコアを付ける (例: `privateVar_`)
- **プライベートメソッド**: 末尾にアンダースコアを付ける (例: `privateMethod_`)

### ファイルエンコーディング
- **文字コード**: UTF-8 (BOMなし)
- **改行コード**: LF (Line Feed)
- **.editorconfig**: プロジェクトルートに配置済み
- **VSCode設定**: `.vscode/settings.json`で統一設定済み

### コメント
- 複雑なロジックには必ずコメントを記載
- 関数やクラスにはJSDoc/Docstring形式のドキュメントを記載
- TODOコメントには日付を含める

## スタイリング方針

- コンポーネント単位のプレーンCSSを採用（各コンポーネントで `import './Component.css'` を使用）
- グローバルなリセットやユーティリティは `src/css/style.css` に記載

## 重要ファイルと実装箇所

- `src/utils/newsApi.ts`: microCMS 統合（キャッシュ15分、モックフォールバック）
- `src/utils/youtubeApi.ts`: YouTube Data API v3 統合（キャッシュ15分）
- `src/utils/twitchApi.ts`: Twitch RSS 統合（DEV時は Vite プロキシ経由）
- `src/utils/scheduleApi.ts`: 上記を統合してスケジュールを生成

## 環境変数（例）

```bash
# .env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxxxxxx
VITE_TWITCH_CHANNEL_NAME=suzunemaimu
VITE_MICROCMS_SERVICE_DOMAIN=your_service_domain
VITE_MICROCMS_API_KEY=your_api_key_here
```

## 開発コマンド

```powershell
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# ビルドプレビュー
npm run preview

# distフォルダクリーンアップ
npm run clean

# GitHub Pagesデプロイ
npm run deploy
```

## 更新履歴

- 2025-12-11: 初版作成
- 2025-12-12: 指示書を正しいフォルダに移動、実際のプロジェクト構成に合わせて修正
- 2025-12-12: TypeScriptへ移行・インデントをスペース4個に変更
- 2025-12-12: UTF-8(BOMなし)・改行コードLFに統一
- 2025-12-12: API統合ガイドライン追加 (YouTube/Twitch API制限と推奨同期間隔)
- 2025-12-13: フェーズ3完了 (microCMS統合、NewsSection/ContactSection追加)
- 2025-12-16: ドキュメントをソースコードの現状に合わせて修正（プレーンCSSを明記）

---

