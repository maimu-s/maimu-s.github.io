import OverlayPanel from "../../components/OverlayPanel";
import { maimuDetail } from "../../data/talentDetailMaimu";
import { TwitterFeed } from "../../components/TwitterFeed";
import "./ProfilePanel.css";

export default function ProfilePanel() {
    const d = maimuDetail;

    return (
        <OverlayPanel title="プロフィール">
            <div className="profile-layout">
                {/* 左側：プロフィール */}
                <div className="profile-left">
                    <div className="panel-section">
                        <div className="info-card profile-grid">
                            {/* 行1：名前、よみがな */}
                            <div className="profile-row profile-row-2">
                                <div className="info-item">
                                    <span className="label">名前</span>
                                    <span className="value">{d.profile.name}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">よみがな</span>
                                    <span className="value">{d.profile.reading}</span>
                                </div>
                            </div>

                            {/* 行2：誕生日、身長、体重 */}
                            <div className="profile-row profile-row-3">
                                <div className="info-item">
                                    <span className="label">誕生日</span>
                                    <span className="value">{d.profile.birthday}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">身長</span>
                                    <span className="value">{d.profile.height}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">体重</span>
                                    <span className="value">{d.profile.weight}</span>
                                </div>
                            </div>

                            {/* 行3：年齢、種族、出身地 */}
                            <div className="profile-row profile-row-3">
                                <div className="info-item">
                                    <span className="label">年齢</span>
                                    <span className="value">{d.profile.age}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">種族</span>
                                    <span className="value">{d.profile.species}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">出身地</span>
                                    <span className="value">{d.profile.origin}</span>
                                </div>
                            </div>

                            {/* 行4：ファンネーム、座右の銘 */}
                            <div className="profile-row profile-row-2">
                                <div className="info-item">
                                    <span className="label">ファンネーム</span>
                                    <span className="value">{d.profile.fanName}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">座右の銘</span>
                                    <span className="value">{d.profile.motto}</span>
                                </div>
                            </div>

                            {/* 行5：好きなもの */}
                            <div className="profile-row profile-row-1">
                                <div className="info-item">
                                    <span className="label">好きなもの</span>
                                    <div className="tag-list">
                                        {d.character.likes.map((x, i) => (
                                            <span key={i} className="tag">{x}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 行6：嫌いなもの */}
                            <div className="profile-row profile-row-1">
                                <div className="info-item">
                                    <span className="label">嫌いなもの</span>
                                    <div className="tag-list">
                                        {d.character.dislikes.map((x, i) => (
                                            <span key={i} className="tag">{x}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 右側：SNS、Xフィード、性格など */}
                <div className="profile-right">
                    <div className="panel-section">
                        <h3 className="panel-section-title">SNS・リンク</h3>
                        <div className="sns-links">
                            {Object.entries(d.socials).map(([key, social]) => (
                                <a key={key} href={social.url} target="_blank" rel="noopener noreferrer" className="sns-link" aria-label={social.label}>
                                    {key === 'twitter' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                    )}
                                    {key === 'youtube' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                    )}
                                    {key === 'twitch' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                        </svg>
                                    )}
                                    {key === 'booth' && (
                                        <svg width="24" height="24" viewBox="150 150 700 700" fill="currentColor">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M773.828 438.341V389.068L650.744 192H608.227L541.093 353.238L475.077 214.446L438.138 214.382L326.272 478.653V227.833H250.172V250.007H192V327.26H250.172V550.306C250.172 570.098 266.227 586.141 286.004 586.141H324.033V832L401.683 831.946C401.683 831.946 401.695 720.762 401.695 720.644C401.695 658.964 455.026 608.963 520.963 608.563C521.198 608.563 521.445 608.535 521.707 608.535H521.744H521.786H521.875C629.722 608.612 717.139 690.28 717.139 790.983V832H773.828V611.427H832V489.487L773.828 438.341Z"/>
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="panel-section twitter-feed-section">
                        <h3 className="panel-section-title">X フィード</h3>
                        <div className="twitter-embed-wrapper">
                            <TwitterFeed handle="bc_hakumai" theme="dark" />
                            <a href="https://twitter.com/bc_hakumai" target="_blank" rel="noopener noreferrer" className="twitter-link">
                                Xで最新情報をチェック →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </OverlayPanel>
    );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
      <span style={{ opacity: 0.75 }}>{k}</span>
      <b>{v}</b>
    </div>
  );
}
