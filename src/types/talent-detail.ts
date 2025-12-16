export type ExpressionId = "neutral" | "smile" | "wink" | "angry" | "cry";

export type Costume = {
  id: string;
  name: string;
  designer: string;
  modeler: string;
  thumbSrc: string;
  threeviewSrc?: string;
  expressions: Record<ExpressionId, string>;
};

export type TalentProfile = {
  name: string;
  reading: string;
  birthday: string;
  height: string;
  weight: string;
  age: string;
  species: string;
  origin: string;
  fanName: string;
  motto: string;
};

export type TalentCharacter = {
  personality: string[];
  likes: string[];
  dislikes: string[];
  taboo: string[];
};

// タイムラインイベントの種別
export type TimelineEventType = "works" | "collaboration" | "events" | "anniversaries" | "other";

// タイムラインアイテムの型定義
export type TimelineItem = {
    date: string;           // YYYY/MM/DD 形式
    title: string;          // イベントタイトル
    type?: TimelineEventType; // イベント種別（オプション）
    note?: string;          // 補足説明（オプション）
    url?: string;           // 関連URL（オプション）
    tags?: string[];        // タグ（オプション）
};

export type TalentHistory = {
    achievements: TimelineItem[];
};

export type TalentLinkBlock = {
  title: string;
  description: string;
  icon?: string;
  links: { label: string; url: string }[];
};

export type RecommendedVideo = {
  id: string;              // 一意のID
  title: string;           // タイトル
  playlistId: string;      // YouTubeプレイリストID
  description?: string;    // 説明（オプション）
};

export type TalentDetail = {
  slug: string;
  pageTitle: string;
  heroCatch: string;
  profile: TalentProfile;
  character: TalentCharacter;
  costumes: Costume[];
  history: TalentHistory;
  units: TalentLinkBlock[];
  projects: TalentLinkBlock[];
  archives: { title: string; items: { label: string; url: string; note?: string }[] }[];
  recommendedVideos: RecommendedVideo[];  // 追加
  socials: Record<string, { label: string; url: string }>;
  twitter: { handle: string; widgetTheme?: "light" | "dark" };
};
