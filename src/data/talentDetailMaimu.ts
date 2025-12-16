import type { TalentDetail } from "../types/talent-detail";
import { maimuTimeline } from "./timelineData";

// 初期衣装の neutral 画像を直接 import（Vite が最適化）
import c1InitialNeutral from '../assets/images/talent/detail/costumes/c1_initial/neutral.png?format=webp&quality=80&w=1200';

// vite-imagetoolsを使って画像をインポート（PNG→WebP自動変換）
const importCostumeImage = (costumePath: string) => {
  return new URL(`../assets/images/talent/detail/costumes/${costumePath}?format=webp&quality=80&w=1200`, import.meta.url).href;
};

// const expr: ExpressionId[] = ["neutral", "smile", "wink", "angry", "cry"];

const costume = (id: string, name: string, designer: string, modeler: string) => ({
  id,
  name,
  designer,
  modeler,
  thumbSrc: importCostumeImage(`${id}/thumb.png`),
  threeviewSrc: importCostumeImage(`${id}/threeviews.png`),
  expressions: {
    neutral: importCostumeImage(`${id}/neutral.png`),
    smile: importCostumeImage(`${id}/smile.png`),
    wink: importCostumeImage(`${id}/wink.png`),
    angry: importCostumeImage(`${id}/angry.png`),
    cry: importCostumeImage(`${id}/cry.png`),
  },
});

export const maimuDetail: TalentDetail = {
  slug: "maimu",
  pageTitle: "鈴音舞夢を詳しく知りたい！",
  heroCatch: "プロフィールまとめ",
  profile: {
    name: "鈴音 舞夢",
    reading: "すずね まいむ",
    birthday: "2/2",
    height: "155cm",
    weight: "秘密♡",
    age: "永遠の17歳",
    species: "都会のお狐",
    origin: "都会の森",
    fanName: "ばこんず",
    motto: "一期一会",
  },
  character: {
    personality: ["（仮）", "（仮）", "（仮）"],
    likes: ["コーンポタージュ", "うどん", "まぐろ", "ピアノ", "歌", "DTM", "寝ること", "歌うこと", "ゲーム"],
    dislikes: ["ホラー", "虫", "早起き"],
    taboo: ["（仮）", "（仮）"],
  },
  costumes: [
    // 初期衣装は neutral を直接 import で最適化
    {
      ...costume("c1_initial", "初期衣装", "Designer（仮）", "Modeler（仮）"),
      expressions: {
        neutral: c1InitialNeutral,
        smile: importCostumeImage("c1_initial/smile.png"),
        wink: importCostumeImage("c1_initial/wink.png"),
        angry: importCostumeImage("c1_initial/angry.png"),
        cry: importCostumeImage("c1_initial/cry.png"),
      }
    },
    costume("c2_china", "チャイナ衣装", "Designer（仮）", "Modeler（仮）"),
    costume("c3_cyber", "サイバー衣装", "Designer（仮）", "Modeler（仮）"),
    // 3D衣装（neutral のみ）
    {
      id: "c100_3d",
      name: "3D衣装",
      designer: "Designer（仮）",
      modeler: "Modeler（仮）",
      thumbSrc: importCostumeImage("c100_3d/thumb.png"),
      threeviewSrc: importCostumeImage("c100_3d/threeviews.png"),
      expressions: {
        neutral: importCostumeImage("c100_3d/neutral.png"),
        smile: importCostumeImage("c100_3d/neutral.png"),
        wink: importCostumeImage("c100_3d/neutral.png"),
        angry: importCostumeImage("c100_3d/neutral.png"),
        cry: importCostumeImage("c100_3d/neutral.png"),
      },
    },
  ],
  history: {
    achievements: maimuTimeline,
  },
  units: [
    {
      title: "TravelVasket",
      description: "ユニット説明（仮）",
      icon: new URL('../assets/images/logo/trav_logo.png', import.meta.url).href,
      links: [
        { label: "公式/関連リンク（仮）", url: "https://example.com" },
      ],
    },
    {
      title: "ノンストップアニマルズ",
      description: "ユニット説明（仮）",
      icon: new URL('../assets/images/logo/nonani_logo.png', import.meta.url).href,
      links: [
        { label: "公式/関連リンク（仮）", url: "https://example.com" },
      ],
    },
  ],
  projects: [
    {
      title: "RIONECTION",
      description: "プロジェクト説明（仮）",
      icon: new URL('../assets/images/logo/rionection_logo.png', import.meta.url).href,
      links: [{ label: "公式/関連リンク（仮）", url: "https://example.com" }],
    },
  ],
  archives: [
    {
      title: "はじめての人向け",
      items: [
        { label: "自己紹介回（仮）", url: "https://www.youtube.com/" },
        { label: "代表回（仮）", url: "https://www.youtube.com/" },
      ],
    },
    {
      title: "歌が聴きたい方はこちら！",
      items: [
        { label: "歌枠おすすめ①（仮）", url: "https://www.youtube.com/" },
        { label: "歌枠おすすめ②（仮）", url: "https://www.youtube.com/" },
      ],
    },
  ],
  recommendedVideos: [
    {
      id: "intro",
      title: "初めての人向け動画",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "鈴音舞夢を知るならまずコレ！",
    },
    {
      id: "gaming",
      title: "切り抜き動画",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "ゲーム配信のハイライト映像！",
    },
    {
      id: "collaboration",
      title: "案件動画&配信",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "お仕事させていただいた動画や配信集！",
    },
    {
      id: "singing",
      title: "歌ってみた動画",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "歌ってみちゃったりもする！",
    },
    {
      id: "galupa",
      title: "ガルパ配信",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "バンドリ！ガールズバンドパーティ！配信集！",
    },
    {
      id: "stgr_aimaimi",
      title: "ストグラ配信(あいまいみー)",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "ストグラ「あいまいみー」の衛星集！",
    },
    {
      id: "stgr_maaka",
      title: "ストグラ配信(マアカ・ピィ)",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "ストグラ「マアカ・ピィ」の衛星集！",
    },
    {
      id: "challenge",
      title: "チャレンジ系動画",
      playlistId: "PLxxxxxxxxxxxxxxx",
      description: "DTMしてみたり初めてしてみたり！",
    },
  ],
  socials: {
    twitter: { label: "X (Twitter)", url: "https://x.com/bc_hakumai" },
    youtube: { label: "YouTube", url: "https://www.youtube.com/@suzunemaimu" },
    twitch: { label: "Twitch", url: "https://www.twitch.tv/suzunemaimu" },
    booth: { label: "BOOTH", url: "https://suzune-maimu.booth.pm/" },
  },
  twitter: { handle: "bc_hakumai", widgetTheme: "dark" },
};
