import OverlayPanel from "../../components/OverlayPanel";
import { maimuDetail } from "../../data/talentDetailMaimu";
import "./AffiliationsPanel.css";

export default function AffiliationsPanel() {
    const d = maimuDetail;

    return (
        <OverlayPanel title="所属ユニット/参加プロジェクト">
            <div className="affiliation-layout">
                {/* 所属ユニット */}
                <div className="affiliation-section">
                    <h3 className="affiliation-section-title">所属ユニット</h3>
                    <div className="affiliation-card-list">
                        {d.units.map((unit, i) => (
                            <div key={`unit-${i}`} className="affiliation-card">
                                <div className="affiliation-header">
                                    <div className="affiliation-title-group">
                                        <h4 className="affiliation-title">{unit.title}</h4>
                                        {unit.icon && (
                                            <img
                                                src={unit.icon}
                                                alt={unit.title}
                                                className="affiliation-logo"
                                            />
                                        )}
                                    </div>
                                    {unit.links.length > 0 && (
                                        <div className="affiliation-links">
                                            {unit.links.map((link, j) => (
                                                <a
                                                    key={j}
                                                    className="affiliation-link"
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <p className="affiliation-description">{unit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 参加プロジェクト */}
                <div className="affiliation-section">
                    <h3 className="affiliation-section-title">参加プロジェクト</h3>
                    <div className="affiliation-card-list">
                        {d.projects.map((project, i) => (
                            <div key={`project-${i}`} className="affiliation-card">
                                <div className="affiliation-header">
                                    <div className="affiliation-title-group">
                                        <h4 className="affiliation-title">{project.title}</h4>
                                        {project.icon && (
                                            <img
                                                src={project.icon}
                                                alt={project.title}
                                                className="affiliation-logo"
                                            />
                                        )}
                                    </div>
                                    {project.links.length > 0 && (
                                        <div className="affiliation-links">
                                            {project.links.map((link, j) => (
                                                <a
                                                    key={j}
                                                    className="affiliation-link"
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <p className="affiliation-description">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </OverlayPanel>
    );
}
