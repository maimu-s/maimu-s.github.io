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
      description: "FF14を中心に活動する、配信者・ストリーマーのチーム。<br>Xのハッシュタグ「#とらぶい」でコラボ配信や企画を展開。<br>メンバーそれぞれの視点で、攻略・雑談・イベント参加など幅広く盛り上げています。<br>ゲームの楽しさを“みんなで旅する”感覚で共有するコミュニティです。",
      icon: new URL('../assets/images/logo/trav_logo.png', import.meta.url).href,
      links: [
        { label: "公式X", url: "https://x.com/TraV_project" },
      ],
    },
    {
      title: "ノンストップアニマルズ",
      description: "春藤橘・犬倉晴・鈴音舞夢による、バーチャルバンド。<br>担当はベース：犬倉晴／キーボード：鈴音舞夢／ドラム：春藤橘。<br>バンドカバーや定期オンラインライブなど、音楽を届ける活動に奮闘中。<br>3人のわちゃっとした空気感と演奏のギャップも見どころです。",
      icon: new URL('../assets/images/logo/nonani_logo.png', import.meta.url).href,
      links: [
        { label: "公式Youtubeチャンネル", url: "https://www.youtube.com/@nonstop-animals" },
      ],
    },
  ],
  projects: [
    {
      title: "RIONECTION",
      description: "RIOT MUSICが運営する、VTuberの活動を総合的にサポートするプロジェクト。<br>配信・SNS・分析・グッズ・ライブ制作・3D・楽曲制作まで、様々な面でサポートが可能。<br>「本当にやりたいこと」を形にするための環境づくりを一緒に進めてくれます。<br>鈴音舞夢も参加メンバーの一人として名を連ねています。",
      icon: new URL('../assets/images/logo/rionection_logo.png', import.meta.url).href,
      links: [{ label: "公式HP", url: "https://riot-music.com/rionection/" }],
    },
  ],
  recommendedVideos: [
    {
      id: "intro",
      title: "初めての人向け動画",
      playlistId: "PL4VTWL32NQTV-F8-yhr6Uc_Ah2oHNU6Ul",
      description: "鈴音舞夢を知るならまずコレ！",
    },
    {
      id: "gaming",
      title: "切り抜き動画",
      playlistId: "PL4VTWL32NQTU6WxFt38qz6IZt_R2J4upR",
      description: "ゲーム配信のハイライト映像！",
    },
    {
      id: "collaboration",
      title: "案件動画&配信",
      playlistId: "PL4VTWL32NQTWZxZXNqvq4Pp5FOscfJiBk",
      description: "お仕事させていただいた動画や配信集！",
    },
    {
      id: "singing",
      title: "歌ってみた動画",
      playlistId: "PL4VTWL32NQTWQizZWchPDKj7Q1tiggfh6",
      description: "歌ってみちゃったりもする！",
    },
    {
      id: "galupa",
      title: "ガルパ配信",
      playlistId: "PL4VTWL32NQTVgGnUgnubqQOzxj7mz7RkZ",
      description: "バンドリ！ガールズバンドパーティ！配信集！",
    },
    {
      id: "stgr_aimaimi",
      title: "ストグラSeason1(あいまいみー)",
      playlistId: "PL4VTWL32NQTV8_Ytt6BS5y77i7ny3NodL",
      description: "ストグラSeason1「あいまいみー」の衛星集！",
    },
    {
      id: "stgr_aimaimi2",
      title: "ストグラSeason2(あいまいみー)",
      playlistId: "PL4VTWL32NQTU8axE3ZvyATc0y1i8dyPJ8",
      description: "ストグラSeason2「あいまいみー」の衛星集！",
    },
    {
      id: "stgr_maaka",
      title: "ストグラ配信(マアカ・ピィ)",
      playlistId: "PL4VTWL32NQTXQScQ5AinRyt_ncjgB8tj_",
      description: "ストグラ「マアカ・ピィ」の衛星集！",
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
