import { useMemo, useState } from "react";
import type { Costume, ExpressionId } from "../types/talent-detail";
import "../pages/MaimuDetailPage.css";

const EXPRESSION_LABEL: Record<ExpressionId, string> = {
  neutral: "通常",
  smile: "笑顔",
  wink: "ウィンク",
  angry: "むすっ",
  cry: "しょぼん",
};

export function CostumeGallery({
  costumes,
  initialCostumeId,
}: {
  costumes: Costume[];
  initialCostumeId?: string;
}) {
  const first = useMemo(() => {
    const found = initialCostumeId ? costumes.find(c => c.id === initialCostumeId) : undefined;
    return found ?? costumes[0];
  }, [costumes, initialCostumeId]);

  const [selectedCostumeId, setSelectedCostumeId] = useState(first.id);
  const [expression, setExpression] = useState<ExpressionId>("neutral");

  const selected = useMemo(
    () => costumes.find(c => c.id === selectedCostumeId) ?? costumes[0],
    [costumes, selectedCostumeId]
  );

  const mainSrc = selected.expressions[expression];

  return (
    <section className="p5-section" id="costumes">
      <div className="p5-sectionHeader">
        <h2 className="p5-title">衣装・ビジュアル</h2>
        <div className="p5-sub">COSTUMES & VISUALS</div>
      </div>

      <div className="p5-gallery">
        {/* 左：衣装リスト */}
        <div className="p5-galleryLeft">
          <div className="p5-grid">
            {costumes.map((c) => {
              const active = c.id === selectedCostumeId;
              return (
                <button
                  key={c.id}
                  className={`p5-tile ${active ? "is-active" : ""}`}
                  onClick={() => {
                    setSelectedCostumeId(c.id);
                    setExpression("neutral");
                  }}
                >
                  <img className="p5-tileImg" src={c.thumbSrc} alt={c.name} loading="lazy" />
                  <div className="p5-tileLabel">{c.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 右：プレビュー */}
        <div className="p5-galleryRight">
          <div>
            <div className="p5-previewTop">
              <div className="p5-previewName">{selected.name}</div>
              <div className="p5-badges">
                <span className="p5-badge">Designer: {selected.designer}</span>
                <span className="p5-badge">Modeler: {selected.modeler}</span>
              </div>
            </div>

            <div className="p5-previewMain">
              <img className="p5-stand" src={mainSrc} alt={`${selected.name} - ${expression}`} />
            </div>

            <div className="p5-expressionRow">
              {(Object.keys(EXPRESSION_LABEL) as ExpressionId[]).map((id) => (
                <button
                  key={id}
                  className={`p5-chip ${expression === id ? "is-active" : ""}`}
                  onClick={() => setExpression(id)}
                >
                  {EXPRESSION_LABEL[id]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
