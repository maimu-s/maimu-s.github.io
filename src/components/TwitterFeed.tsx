import { useEffect, useRef, useState } from "react";
import "../pages/MaimuDetailPage.css";

export function TwitterFeed({ handle, theme = "dark" }: { handle: string; theme?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting)) {
          setMounted(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // widgets.js を必要な時だけ読み込む
    const id = "twitter-wjs";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // すでにある場合、再描画を試みる
      // @ts-expect-error - twttr may exist
      window.twttr?.widgets?.load?.();
    }
  }, [mounted]);

  return (
    <section className="p5-section" id="sns">
      <div className="p5-sectionHeader">
        <h2 className="p5-title">SNS</h2>
        <div className="p5-sub">SOCIAL</div>
      </div>

      <div ref={ref} className="p5-card">
        <a className="twitter-timeline"
           data-theme={theme}
           data-tweet-limit="3"
           href={`https://twitter.com/${handle}`}>
          Tweets by @{handle}
        </a>

        <div className="p5-muted">
          うまく表示されない場合は、上のリンクからXへ移動できます。
        </div>
      </div>
    </section>
  );
}
