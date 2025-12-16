import type { TimelineItem } from '../types/talent-detail';

/**
 * 鈴音舞夢のタイムラインデータ
 *
 * 【更新方法】
 * 1. 新しいイベントを配列の末尾に追加
 * 2. date は YYYY/MM/DD 形式で記載（例: 2024/12/18）
 * 3. type は必要に応じて指定（works | collaboration | events | anniversaries | other）
 * 4. note や url は任意で追加可能
 * 5. tags は検索やフィルタリング用に使用可能
 *
 * 【例】
 * {
 *   date: '2024/12/18',
 *   title: '歌ってみた動画投稿',
 *   type: 'anniversaries',
 *   note: '初めてのオリジナルアレンジ',
 *   url: 'https://www.youtube.com/watch?v=xxxxx',
 *   tags: ['音楽', '歌ってみた']
 * }
 */
export const maimuTimeline: TimelineItem[] = [
    {
        date: '2018/07/21',
        title: 'VTuberデビュー&初配信',
        type: 'anniversaries',
        note: '鈴音舞夢がVTuberデビューをした日！',
        url: 'https://www.youtube.com/watch?v=ctHcDHAmMyI',
    },
    {
        date: 'YYYY/MM/DD',
        title: '舞台/イベント出演（仮）',
        type: 'collaboration',
        url: 'https://example.com',
    },
    // 以下に新しいタイムラインを追加していく
    // {
    //     date: 'YYYY/MM/DD',
    //     title: '新しいイベント',
    //     type: 'achievement',
    //     note: '詳細説明',
    //     url: 'https://example.com',
    //     tags: ['タグ1', 'タグ2']
    // },
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
        return order === 'asc'
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
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
