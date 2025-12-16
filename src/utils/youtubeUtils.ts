/**
 * YouTube URL判定と動画ID抽出のユーティリティ
 */

/**
 * URLがYouTubeリンクかどうかを判定
 * @param url URL文字列
 * @returns YouTubeリンクの場合true
 */
export function isYoutubeUrl(url?: string): boolean {
    if (!url) return false;

    const youtubePatterns = [
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];

    return youtubePatterns.some(pattern => pattern.test(url));
}

/**
 * YouTubeのURLから動画IDを抽出
 * @param url YouTubeの URL
 * @returns 動画ID（11文字）、抽出できない場合はnull
 */
export function extractYoutubeVideoId(url?: string): string | null {
    if (!url) return null;

    const patterns = [
        // https://www.youtube.com/watch?v=VIDEO_ID
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
        // https://youtu.be/VIDEO_ID
        /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]{11})/,
        // https://www.youtube.com/embed/VIDEO_ID
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }

    return null;
}

/**
 * YouTubeの埋め込みプレイヤーURLを生成
 * @param url YouTubeの URL
 * @returns 埋め込みプレイヤーURL
 */
export function getYoutubeEmbedUrl(url?: string): string | null {
    const videoId = extractYoutubeVideoId(url);
    if (!videoId) return null;

    return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * ユーティリティ関数のテスト用
 * @example
 * testYoutubeUtils();
 */
export function testYoutubeUtils(): void {
    const testUrls = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://youtu.be/dQw4w9WgXcQ',
        'https://www.youtube.com/embed/dQw4w9WgXcQ',
        'https://example.com',
        '',
    ];

    console.log('YouTube URL判定テスト:');
    testUrls.forEach(url => {
        const isYt = isYoutubeUrl(url);
        const videoId = extractYoutubeVideoId(url);
        const embedUrl = getYoutubeEmbedUrl(url);
        console.log(`URL: ${url}`, {
            isYoutube: isYt,
            videoId,
            embedUrl,
        });
    });
}
