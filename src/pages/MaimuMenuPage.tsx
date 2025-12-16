import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { maimuDetail } from "../data/talentDetailMaimu";
import "../components/talentDetail.css";

export default function MaimuMenuPage() {
  const d = maimuDetail;
  const loc = useLocation();

  // 現在選択中の衣装インデックス
  const [selectedCostumeIndex, setSelectedCostumeIndex] = useState(0);
  const [isThreeviewOpen, setIsThreeviewOpen] = useState(false);
  const resetTimerRef = useRef<number | null>(null);
  const [isAnimationReady, setIsAnimationReady] = useState(false);

  // 初期衣装の画像読み込み完了でアニメーション開始
  const handleInitialImageLoad = () => {
    setIsAnimationReady(true);
  };

  // 三面図を開く
  const openThreeview = () => {
    setIsThreeviewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // 三面図を閉じる
  const closeThreeview = () => {
    setIsThreeviewOpen(false);
    document.body.style.overflow = '';
  };

  // パネルが開いてるか（ネストルートにいるか）
  const isPanelOpen =
    loc.pathname.includes("/talent/maimu/profile") ||
    loc.pathname.includes("/talent/maimu/history") ||
    loc.pathname.includes("/talent/maimu/videos") ||
    loc.pathname.includes("/talent/maimu/affiliations");

  // パネル表示時にメニューページのスクロールを無効化
  useEffect(() => {
    // 既存のタイマーをクリア
    if (resetTimerRef.current !== null) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    if (isPanelOpen) {
      // スクロールバーの幅を計算
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // スクロールバーの幅分だけ padding を追加してズレを防ぐ
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        // ヘッダーにも padding-right を設定してズレを防ぐ
        const header = document.querySelector('.header') as HTMLElement;
        if (header) {
          header.style.paddingRight = `${scrollbarWidth}px`;
        }
      }
    } else {
      // パネルが閉じる際は、アニメーション完了を待ってからスタイルをリセット
      resetTimerRef.current = window.setTimeout(() => {
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

        // ヘッダーの padding-right もリセット
        const header = document.querySelector('.header') as HTMLElement;
        if (header) {
          header.style.paddingRight = '';
        }
        resetTimerRef.current = null;
      }, 300);
    }

    return () => {
      // クリーンアップ時はタイマーをキャンセル
      if (resetTimerRef.current !== null) {
        clearTimeout(resetTimerRef.current);
        resetTimerRef.current = null;
      }
    };
  }, [isPanelOpen]);

  return (
    <main className={`td-page ${isPanelOpen ? 'panel-active' : ''}`}>
      <section className={`td-stage ${isAnimationReady ? 'is-ready' : ''}`}>
        {/* 左：メニュー */}
        <div className="td-menu">
          <h1 className="td-head">
            <span className="td-head-ja">鈴音舞夢</span>
            <span className="td-head-en">Suzune Maimu</span>
          </h1>

          <div className="td-menuGrid">
            <NavLink to="profile" className={({ isActive }) => `td-btn ${isActive ? "is-active" : ""}`}>
              プロフィール
            </NavLink>

            <NavLink to="history" className={({ isActive }) => `td-btn ${isActive ? "is-active" : ""}`}>
              経歴/実績
            </NavLink>

            <NavLink to="videos" className={({ isActive }) => `td-btn ${isActive ? "is-active" : ""}`}>
              おすすめ動画
            </NavLink>

            <NavLink to="affiliations" className={({ isActive }) => `td-btn ${isActive ? "is-active" : ""}`}>
              所属ユニット<br/>参加プロジェクト
            </NavLink>
          </div>
        </div>

        {/* 中央：立ち絵（いまの画像UIに合わせて差し替えOK） */}
        <div className="td-figureArea">
          {d.costumes.map((costume, index) => (
            <img
              key={costume.id}
              className={`td-figure ${selectedCostumeIndex === index ? 'td-figure-active' : ''}`}
              src={costume.expressions.neutral}
              alt={`鈴音舞夢 立ち絵 - ${costume.name}`}
              draggable={false}
              loading="eager"
              fetchPriority={index === 0 ? "high" : "low"}
              onLoad={index === 0 ? handleInitialImageLoad : undefined}
            />
          ))}
        </div>

        {/* 右：衣装サムネ（ここは後で切替ギャラリーに発展させられる） */}
        <div className="td-costumeRail" aria-label="衣装">
          {d.costumes.map((c, index) => (
            <button
              key={c.id}
              className={`td-costumeThumb ${selectedCostumeIndex === index ? "is-active" : ""}`}
              type="button"
              onClick={() => setSelectedCostumeIndex(index)}
              aria-label={`${c.name}に切り替え`}
            >
              <img src={c.thumbSrc} alt={c.name} />
            </button>
          ))}
          {/* 三面図ボタン */}
          {d.costumes[selectedCostumeIndex]?.threeviewSrc && (
            <button
              className="td-costumeThumb td-threeviewBtn"
              type="button"
              onClick={openThreeview}
              aria-label="三面図を見る"
            >
              三面図
            </button>
          )}
        </div>
      </section>

      {/* 三面図モーダル */}
      {isThreeviewOpen && d.costumes[selectedCostumeIndex]?.threeviewSrc && (
        <div className="td-threeviewModal" onClick={closeThreeview}>
          <div className="td-threeviewContent" onClick={(e) => e.stopPropagation()}>
            <button
              className="td-threeviewClose"
              onClick={closeThreeview}
              aria-label="閉じる"
            >
              ×
            </button>
            <img
              src={d.costumes[selectedCostumeIndex].threeviewSrc}
              alt={`${d.costumes[selectedCostumeIndex].name} 三面図`}
              className="td-threeviewImage"
            />
          </div>
        </div>
      )}

      {/* ネストルート＝パネル */}
      {isPanelOpen && <Outlet />}
    </main>
  );
}
