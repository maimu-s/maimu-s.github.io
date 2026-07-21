import { useState, useRef, useEffect } from "react";
import OverlayPanel from "../../components/OverlayPanel";
import { maimuDetail } from "../../data/talentDetailMaimu";
import { sortTimeline } from "../../data/timelineData";
import { isYoutubeUrl, getYoutubeEmbedUrl } from "../../utils/youtubeUtils";
import type { TimelineItem } from "../../types/talent-detail";

export default function HistoryPanel() {
    const d = maimuDetail;
    // タイムラインを日付順（昇順：古い順）にソート
    const sortedAchievements = sortTimeline(d.history.achievements, 'asc');

    // 選択されたタイムラインアイテムを管理
    const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(
        sortedAchievements.length > 0 ? sortedAchievements[0] : null
    );

    // タイムラインリストのRef
    const timelineListWrapperRef = useRef<HTMLDivElement>(null);

    // タイムラインの縦線の高さを動的に計算・更新
    useEffect(() => {
        const updateTimelineLineHeight = () => {
            if (!timelineListWrapperRef.current) return;

            const wrapper = timelineListWrapperRef.current;
            const list = wrapper.querySelector('.timeline-list') as HTMLElement;

            if (!list) return;

            // リストの最後のアイテムの下端を基準に、必要な高さを計算
            const listHeight = list.scrollHeight;
            const wrapperHeight = wrapper.clientHeight;

            // 縦線がリストの最後のアイテムまで届くように、負の値を計算
            // リストが親（wrapper）に収まっていない場合は、超過分を計算
            if (listHeight > wrapperHeight) {
                // スクロール可能な場合、スクロール量を含める
                const scrollBottom = listHeight - wrapperHeight;
                const bottomValue = `-${scrollBottom}px`;
                wrapper.style.setProperty('--timeline-bottom', bottomValue);
            } else {
                // リストが親に収まる場合
                wrapper.style.setProperty('--timeline-bottom', '-100%');
            }
        };

        // 初期計算
        updateTimelineLineHeight();

        // アイテム数変更時や画面リサイズ時に再計算
        const observer = new ResizeObserver(() => {
            updateTimelineLineHeight();
        });

        if (timelineListWrapperRef.current) {
            observer.observe(timelineListWrapperRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [sortedAchievements]);

    // イベントタイプに応じたラベル表示
    const getEventTypeLabel = (type?: string) => {
        switch (type) {
            case 'works':
                return '🏆 仕事';
            case 'collaboration':
                return '🤝 コラボ';
            case 'events':
                return '🎙️ 出演';
            case 'anniversaries':
                return '🎉 記念';
            default:
                return '🗂️ その他';
        }
    };

    return (
        <OverlayPanel title="経歴/実績">
            <div className="history-layout">
                {/* 左側：タイムラインリスト */}
                <div className="timeline-list-wrapper" ref={timelineListWrapperRef}>
                    <div className="timeline-list">
                        {sortedAchievements.map((item: TimelineItem, i: number) => (
                            <div
                                key={i}
                                className={`timeline-list-item-wrapper ${selectedItem === item ? 'is-selected' : ''}`}
                            >
                                <div className="timeline-dot"></div>
                                <button
                                    className={`timeline-list-item ${selectedItem === item ? 'is-selected' : ''}`}
                                    onClick={() => setSelectedItem(item)}
                                    data-type={item.type || 'other'}
                                >
                                    <div className="timeline-list-date">{item.date}</div>
                                    <div className="timeline-list-title">
                                        {item.type && (
                                            <span className="timeline-list-icon">{getEventTypeLabel(item.type).split(' ')[0]}</span>
                                        )}
                                        {item.title}
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 右側：選択されたアイテムの詳細 */}
                <div className="timeline-detail">
                    {selectedItem ? (
                        <div className="timeline-detail-content">
                            <div className="timeline-detail-header">
                                {selectedItem.type && (
                                    <div className="timeline-detail-type">
                                        {getEventTypeLabel(selectedItem.type)}
                                    </div>
                                )}
                                <div className="timeline-detail-date">{selectedItem.date}</div>
                            </div>
                            <h3 className="timeline-detail-title">{selectedItem.title}</h3>
                            {selectedItem.note && (
                                <div className="timeline-detail-section">
                                    <div
                                        className="timeline-detail-note"
                                        dangerouslySetInnerHTML={{ __html: selectedItem.note }}
                                    />
                                </div>
                            )}

                            {selectedItem.tags && selectedItem.tags.length > 0 && (
                                <div className="timeline-detail-section">
                                    <div className="timeline-detail-tags">
                                        {selectedItem.tags.map((tag, idx) => (
                                            <span key={idx} className="timeline-detail-tag">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedItem.url && (
                                <div className="timeline-detail-section">
                                    {isYoutubeUrl(selectedItem.url) ? (
                                        // YouTube埋め込みプレイヤー
                                        <>
                                            <h4 className="timeline-detail-subtitle">動画はこちら！</h4>
                                            <div className="timeline-youtube-wrapper">
                                                <iframe
                                                    className="timeline-youtube-player"
                                                    src={getYoutubeEmbedUrl(selectedItem.url) || ''}
                                                    title={selectedItem.title}
                                                    allowFullScreen
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        // 通常のリンク
                                        <a
                                            className="timeline-detail-link"
                                            href={selectedItem.url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            詳細はこちら →
                                        </a>
                                    )}
                                </div>
                            )}

                        </div>
                    ) : (
                        <div className="timeline-detail-empty">
                            タイムラインを選択してください
                        </div>
                    )}
                </div>
            </div>
        </OverlayPanel>
    );
}
