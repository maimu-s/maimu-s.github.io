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

## 重要ファイルと実装箇所

### ページ構成
- `src/pages/HomePage.tsx`: ホームページ（6つのセクション構成）
- `src/pages/MaimuMenuPage.tsx`: キャラクターメニュー（プロフィール詳細）
- `src/pages/panels/ProfilePanel.tsx`: プロフィール情報
- `src/pages/panels/HistoryPanel.tsx`: 履歴情報
- `src/pages/panels/VideosPanel.tsx`: 動画一覧
- `src/pages/panels/AffiliationsPanel.tsx`: アファリエーション情報

### コンポーネント
- `src/components/Header.tsx`: 固定ヘッダー（ナビゲーション、SNSリンク）
- `src/components/HeroSection.tsx`: ヒーロー画像（3D傾斜エフェクト）
- `src/components/NewsSection.tsx`: microCMS統合ニュース一覧
- `src/components/TalentSection.tsx`: プロフィール表示
- `src/components/ScheduleSection.tsx`: YouTube/Twitch統合スケジュール
- `src/components/ContactSection.tsx`: お問い合わせセクション
- `src/components/Footer.tsx`: フッター（著作権、SNSリンク）
- `src/components/CostumeGallery.tsx`: 衣装ギャラリー
- `src/components/TwitterFeed.tsx`: Twitter Feed（参考実装）
- `src/components/OverlayPanel.tsx`: モーダルパネル（ニュース詳細表示）

### ユーティリティ・API統合
- `src/utils/newsApi.ts`: microCMS API統合（ニュース取得、キャッシュ15分、モックフォールバック）
- `src/utils/youtubeApi.ts`: YouTube Data API v3統合（ライブ検索、スケジュール取得、キャッシュ15分）
- `src/utils/youtubeUtils.ts`: YouTube関連ユーティリティ関数
- `src/utils/twitchApi.ts`: Twitch RSS統合（配信情報取得、DEV時はViteプロキシ経由）
- `src/utils/scheduleApi.ts`: YouTube/Twitch統合スケジュール生成（最大10件、新順ソート）

### データ・型定義
- `src/data/talentDetailMaimu.ts`: キャラクター詳細データ（プロフィール、経歴）
- `src/data/timelineData.ts`: タイムライン情報
- `src/types/talent-detail.ts`: キャラクター型定義

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
- 2025-12-31: ページ/コンポーネント/ユーティリティ構成を更新

---

