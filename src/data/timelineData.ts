import type { TimelineItem } from '../types/talent-detail';

/**
 * 鈴音舞夢のタイムラインデータ
 *
 * 【更新方法】
 * 1. 新しいイベントを配列の末尾に追加
 * 2. date は YYYY/MM/DD 形式で記載（例: 2024/12/18）
 * 3. type は必要に応じて指定（works | collaboration | events | anniversaries | other）
 * 4. note や url は任意で追加可能
 * 5. tags は検索やフィルタリング用に使用（このファイルでは「新衣装」「企画」「お仕事」のみで分類）
 */
export const maimuTimeline: TimelineItem[] = [
    {
        date: '2018/07/21',
        title: 'VTuberデビュー&初配信',
        type: 'anniversaries',
        note: 'VTuberとしてデビューし、初配信を実施。<br>活動開始をお知らせし、今後の方向性を発表しました。',
        url: 'https://www.youtube.com/watch?v=ctHcDHAmMyI',
        tags: ['企画'],
    },
    {
        // ※動画リンクからの推定。日付が異なる場合は調整してください。
        date: '2019/05/03',
        title: 'リニューアル（第1回）お披露目',
        type: 'events',
        note: '新モデル（リニューアル第1回）を公開。<br>お披露目配信で新ビジュアルを初公開しました。',
        url: 'https://www.youtube.com/watch?v=qafs2UjufOI',
        tags: ['新衣装'],
    },
    {
        date: '2019/07/21',
        title: 'デビュー1周年記念配信',
        type: 'anniversaries',
        note: 'デビュー1周年を記念して配信を実施。<br>節目の感謝企画として近況報告や振り返りを行いました。',
        url: 'https://www.youtube.com/watch?v=-TJY-pStgqA',
        tags: ['企画'],
    },
    {
        date: '2019/10/03',
        title: '東京VTuber劇場 出演（V劇ウォッチ）',
        type: 'events',
        note: '東京VTuber劇場「V劇ウォッチ」に出演。<br>ステージ企画に参加し、イベントを盛り上げました。',
        url: 'https://t.livepocket.jp/e/20191003vgekiwatch',
        tags: ['企画'],
    },
    {
        date: '2019/11/27',
        title: '初3Dモデルお披露目',
        type: 'events',
        note: 'VRoidを使用した3Dモデルをお披露目しました。',
        url: 'https://www.youtube.com/watch?v=Y_Yy0wbBTD4',
        tags: ['新衣装'],
    },
    {
        date: '2020/02/19',
        title: 'FF14 × にじさんじコラボ（静凛さんとエデン共鳴編零式）',
        type: 'events',
        note: 'にじさんじ所属の静凛さんとFF14でコラボ配信を実施。<br>エデン共鳴編零式に挑戦し、共演しました。',
        url: 'https://www.youtube.com/watch?v=aWAhP91Bzqo',
        tags: ['企画'],
    },
    {
        date: '2020/07/24',
        title: 'デビュー2周年＆3D新衣装お披露目',
        type: 'events',
        note: 'デビュー2周年を記念して配信を実施。<br>3Dの新衣装をお披露目しました。',
        url: 'https://www.youtube.com/watch?v=Y_Yy0wbBTD4',
        tags: ['新衣装'],
    },
    {
        date: '2021/07/21',
        title: 'デビュー3周年＆リニューアル（第2回）お披露目',
        type: 'events',
        note: '新モデル（リニューアル第2回）を公開。<br>お披露目配信でビジュアル刷新をお知らせしました。',
        url: 'https://www.youtube.com/watch?v=RNr3E7sUOc4',
        tags: ['新衣装'],
    },
    {
        date: '2022/09/10',
        title: 'バーチャル物産展『中華フェス』出演（汁なし黒ごま担々麺セット）',
        type: 'events',
        note: 'バーチャル物産展『中華フェス』に出演。<br>コラボ商品「汁なし黒ごま担々麺セット」をPR／販売しました。',
        url: 'https://x.com/Virtual_Exhib/status/1568482180598480898',
        tags: ['お仕事'],
    },
    {
        date: '2023/01/13',
        title: 'TravelVasket「ウェブポン」販売',
        type: 'collaboration',
        note: 'TravelVasketとしてウェブポン第1弾を実施。<br>コラボグッズ販売企画に参加しました。',
        url: 'https://webpon.net/shop/TRAV/plan/TRAV',
        tags: ['お仕事'],
    },
    {
        date: '2023/04/09',
        title: 'バンドリ！ガールズバンドパーティ！Vteam最強決定戦 参加',
        type: 'events',
        note: '2023/3/25〜2023/4/9の期間行われた「バンドリ！ガールズバンドパーティ！」の配信イベントに参加しました。<br>チーム戦イベントに参加し、企画を盛り上げました。',
        url: 'https://cp.playzy.jp/2023-glp',
        tags: ['企画'],
    },
    {
        date: '2023/06/06',
        title: 'ストグラ 初配信（あいまいみー）',
        type: 'events',
        note: 'ストグラにて初配信を実施（あいまいみー）。<br>RPサーバー参加を発表し、シリーズをスタートしました。',
        url: 'https://www.twitch.tv/videos/1839484786',
        tags: ['企画'],
    },
    {
        // YouTube側表記「Streamed 2 years ago」からの推定のため、日付は要確認
        date: '2023/06/18',
        title: 'チャンネル登録者5,000人達成 記念配信（バイオハザード5）',
        type: 'anniversaries',
        note: 'チャンネル登録者5,000人達成を記念して特別配信を実施。<br>ホラーは苦手ですが、節目の感謝を伝えつつ、記念企画として「バイオハザード5」を遊びました。',
        url: 'https://www.youtube.com/watch?v=p3iEWZnbHHo',
        tags: ['企画'],
    },
    {
        date: '2023/07/29',
        title: 'VTuberデビュー5周年 記念配信',
        type: 'anniversaries',
        note: 'デビュー5周年を記念した配信を実施。<br>節目として感謝企画・振り返りを行いました。',
        url: 'https://www.youtube.com/watch?v=h4nelC38xdY',
        tags: ['企画'],
    },
    {
        date: '2023/08/13',
        title: 'バーチャル物産展 #37「VTuberお盆祭り」出演（夜の部）',
        type: 'events',
        note: 'バーチャル物産展 #37「VTuberお盆祭り」夜の部に出演。<br>オンラインイベントに参加し、企画を盛り上げました。',
        url: 'https://virtualexhib.jp/posts/KaN-VYAc',
        tags: ['お仕事'],
    },
    {
        date: '2023/10/08',
        title: '新衣装お披露目（中華風衣装）',
        type: 'events',
        note: '新衣装（中華風衣装）を公開。<br>お披露目配信で全身ビジュアルを初公開しました。',
        url: 'https://www.youtube.com/watch?v=6b0Dwaq2IHg',
        tags: ['新衣装'],
    },
    {
        // YouTube側表記「Streamed 2 years ago」からの推定のため、日付は要確認
        date: '2024/01/17',
        title: '100時間カレー PR配信',
        type: 'collaboration',
        note: '「100時間カレー」コラボPR配信を実施。<br>コラボ内容の紹介と食レポで商品の魅力を発信しました。',
        url: 'https://www.youtube.com/watch?v=7SYX9TZbvSE',
        tags: ['お仕事'],
    },
    {
        date: '2024/02/22',
        title: 'シャニソン No.1配信者決定戦 PLAYZY by Game8 × シャニソン 参加',
        type: 'collaboration',
        note: '『アイドルマスター シャイニーカラーズ Song for Prism（シャニソン）』の配信キャンペーンに参加しました。<br>PR配信を実施し、プレイ内容・魅力を紹介しました。<br>再生リスト: https://www.youtube.com/playlist?list=PL4VTWL32NQTUohstmySqF8s00R2Yx6ywy',
        url: 'https://store.game8.jp/events/imassc-prism240222',
        tags: ['お仕事'],
    },
    {
        date: '2024/07/15',
        title: 'すず音さん主催「わたしの一番かわいいところ」歌ってみた企画参加',
        type: 'events',
        note: 'すず音さん主催の「わたしの一番かわいいところ」歌ってみたの企画に参加しました。',
        url: 'https://www.youtube.com/watch?v=eB4UM6qcDSc',
        tags: ['企画'],
    },
    {
        date: '2024/07/21',
        title: 'VTuberデビュー6周年',
        type: 'anniversaries',
        note: 'デビュー6周年を迎えました。<br>周年の節目として、感謝のメッセージを発信しました。',
        url: 'https://www.youtube.com/watch?v=XXlqDUwBpE0',
        tags: ['企画'],
    },
    {
        date: '2024/08/02',
        title: 'RIONECTION 参加',
        type: 'events',
        note: 'アーティスト発掘＆支援プロジェクトである「RIONECTION」に参加しました。',
        url: 'https://prtimes.jp/main/html/rd/p/000000014.000137814.html',
        tags: ['企画'],
    },
    {
        date: '2024/10/23',
        title: 'Alive Studioのサービス紹介配信',
        type: 'works',
        note: 'Alive Studioの案件配信／紹介を実施。<br>サービスの魅力や使い方を紹介しました。',
        url: 'https://www.youtube.com/watch?v=4rTXWL_fCMY',
        tags: ['お仕事'],
    },
    {
        date: '2024/10/31',
        title: '桃園りえるさん主催「Happy Halloween」歌ってみた企画参加',
        type: 'events',
        note: '桃園りえるさん主催の「Happy Halloween」歌ってみたの企画に参加しました。',
        url: 'https://www.youtube.com/watch?v=P1rAO0Bt9gA',
        tags: ['企画'],
    },
    {
        date: '2024/11/02',
        title: 'PLUG IN!! 2024.11 presented by RIONECTION 出演',
        type: 'events',
        note: 'RIONECTION主催イベント『PLUG IN!! 2024.11』に出演。<br>秋葉原エンタスにてライブパートに登場しました。',
        url: 'https://riotmusic-live.zaiko.io/e/plugin',
        tags: ['企画'],
    },
    {
        date: '2024/11/27',
        title: 'モニターアーム「DA112」案件（実写レビュー）',
        type: 'works',
        note: 'モニターアーム「DA112」の案件レビューを実施。<br>実写で使用感や設置ポイントを紹介しました。',
        url: 'https://youtu.be/hMBj2pB-yPg',
        tags: ['お仕事'],
    },
    {
        date: '2025/02/23',
        title: 'GANG BOSS FES 2025「ALL IN VS ANBRELLA」出演',
        type: 'works',
        note: 'GANG BOSS FES 2025「ALL IN VS ANBRELLA」にあいまいみー役として出演しました。',
        url: 'https://x.com/GBF_staff/status/1894016933881938006',
        tags: ['企画', 'お仕事'],
    },
    {
        date: '2024/06/23',
        title: 'すず音さん主催「行くぜっ！怪盗少女 -餡チア ver.」歌ってみた企画参加',
        type: 'events',
        note: 'すず音さん主催の「行くぜっ！怪盗少女 -餡チア ver.」歌ってみたの企画に参加しました。',
        url: 'https://www.youtube.com/watch?v=jxvt-C9Rbtk',
        tags: ['企画'],
    },
    {
        date: '2025/07/22',
        title: 'KANGOL REWARD コラボ（ZIPパーカー／Tシャツ／クッション受注販売）',
        type: 'collaboration',
        note: 'KANGOL REWARDとのアパレルコラボを実施。<br>ZIPパーカー／Tシャツ／クッションの受注販売を展開しました。<br>（受注：2025/07/22 12:00〜2025/09/08 23:59）',
        url: 'https://x.com/bc_hakumai/status/1947493016111133088?s=20',
        tags: ['お仕事'],
    },
    {
        date: '2025/07/22',
        title: 'VTuberデビュー7周年 記念配信',
        type: 'anniversaries',
        note: 'デビュー7周年の記念配信を実施。<br>周年企画として感謝をお伝えしました。',
        url: 'https://www.youtube.com/watch?v=93WvW4XdVQY',
        tags: ['企画'],
    },
    {
        date: '2025/11/01',
        title: 'SHORELINE 3DAYS ONLINE LIVE 出演（Day1）',
        type: 'events',
        note: 'RIONECTION×vortex共同主催 ONLINE LIVE『SHORELINE』Day1に出演。<br>オンラインライブでパフォーマンスを披露しました。',
        url: 'https://pjblue.zaiko.io/item/375344',
        tags: ['企画'],
    },
    {
        date: '2025/12/10',
        title: '新衣装お披露目（サイバーパンク衣装）',
        type: 'events',
        note: '新衣装（サイバーパンク衣装）を公開。<br>お披露目配信で新ビジュアルを初公開しました。',
        url: 'https://www.youtube.com/watch?v=wo7Lu0dnEj8',
        tags: ['新衣装'],
    },
];

/**
 * タイムラインを日付順にソートする関数
 * @param items タイムラインアイテムの配列
 * @param order 'asc' (昇順) または 'desc' (降順)
 * @returns ソート済みのタイムラインアイテム配列
 */
export function sortTimeline(items: TimelineItem[], order: 'asc' | 'desc' = 'desc'): TimelineItem[] {
    return [...items].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return order === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
}

/**
 * タイプでタイムラインをフィルタリングする関数
 * @param items タイムラインアイテムの配列
 * @param type フィルタリングするイベントタイプ
 * @returns フィルタリング済みのタイムラインアイテム配列
 */
export function filterTimelineByType(items: TimelineItem[], type: string): TimelineItem[] {
    return items.filter(item => item.type === type);
}

/**
 * タグでタイムラインをフィルタリングする関数
 * @param items タイムラインアイテムの配列
 * @param tag フィルタリングするタグ
 * @returns フィルタリング済みのタイムラインアイテム配列
 */
export function filterTimelineByTag(items: TimelineItem[], tag: string): TimelineItem[] {
    return items.filter(item => item.tags?.includes(tag));
}
