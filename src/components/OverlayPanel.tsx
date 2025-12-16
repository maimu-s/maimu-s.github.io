import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./talentDetail.css";

export default function OverlayPanel({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const navigate = useNavigate();
    const closeBtnRef = useRef<HTMLButtonElement | null>(null);
    const panelBodyRef = useRef<HTMLDivElement | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);

    const close = () => {
        setIsClosing(true);
        // アニメーション完了後にナビゲート
        setTimeout(() => {
            navigate("/talent/maimu");
        }, 300);
    };

    // ESCで閉じる + 初期フォーカス
    useEffect(() => {
        closeBtnRef.current?.focus();

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    // パネルボディのスクロール可能状態を判定
    useEffect(() => {
        const checkIfScrollable = () => {
            if (panelBodyRef.current) {
                const { scrollHeight, clientHeight } = panelBodyRef.current;
                setIsScrollable(scrollHeight > clientHeight);
            }
        };

        checkIfScrollable();

        const observer = new ResizeObserver(() => {
            checkIfScrollable();
        });

        if (panelBodyRef.current) {
            observer.observe(panelBodyRef.current);
        }

        return () => observer.disconnect();
    }, [children]);

    return (
        <div
            className={`td-overlay ${isClosing ? "is-closing" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <button className="td-backdrop" onClick={close} aria-label="閉じる（背景）" />
            <aside className="td-panel">
                <div className="shooting-star-1"></div>
                <div className="shooting-star-2"></div>
                <div className="shooting-star-3"></div>

                <button ref={closeBtnRef} className="td-close" onClick={close} aria-label="閉じる">
                    ×
                </button>

                <header className="td-panelHeader">
                    <h2 className="td-panelTitle">{title}</h2>
                </header>

                <div ref={panelBodyRef} className="td-panelBody" data-is-scrollable={isScrollable} onWheel={(e) => e.stopPropagation()} onTouchMove={(e) => e.stopPropagation()}>{children}</div>
            </aside>
        </div>
    );
}
