import { Link } from "react-router-dom";
import './TalentSection.css';
import maimPortrait from '../assets/images/talent/maimu-portrait.png?format=webp&quality=85&w=300';
// ロゴ画像（モバイル用とデスクトップ用）
import rionectionLogoMobile from '../assets/images/logo/rionection_logo.png?format=webp&quality=80&w=150';
import rionectionLogoDesktop from '../assets/images/logo/rionection_logo.png?format=webp&quality=80&w=300';
import travLogoMobile from '../assets/images/logo/trav_logo.png?format=webp&quality=80&w=150';
import travLogoDesktop from '../assets/images/logo/trav_logo.png?format=webp&quality=80&w=300';
import nonaniLogoMobile from '../assets/images/logo/nonani_logo.png?format=webp&quality=80&w=150';
import nonaniLogoDesktop from '../assets/images/logo/nonani_logo.png?format=webp&quality=80&w=300';

interface TalentData {
    image: string;
    name: string;
    nameEn: string;
    description: string;
    projects: {
        name: string;
        logoMobile: string;
        logoDesktop: string;
        url: string;
    }[];
    groups: {
        name: string;
        logoMobile: string;
        logoDesktop: string;
        url: string;
    }[];
    social: {
        youtube: string;
        twitch: string;
        twitter: string;
        booth: string;
    };
}

function TalentSection() {
    const talentData: TalentData = {
        image: maimPortrait,
        name: '鈴音舞夢',
        nameEn: 'Suzune Maimu',
        description: '都会に住むお狐の女の子。\n元気で明るく好奇心旺盛で、思い立ったらすぐ行動に移すタイプ。\nノンストップアニマルズのキーボードを担当している🎹',
        projects: [
            {
                name: 'RIONECTION',
                logoMobile: rionectionLogoMobile,
                logoDesktop: rionectionLogoDesktop,
                url: 'https://riot-music.com/rionection/'
            }
        ],
        groups: [
            {
                name: 'TravelVasket',
                logoMobile: travLogoMobile,
                logoDesktop: travLogoDesktop,
                url: 'https://x.com/TraV_project'
            },
            {
                name: 'ノンストップアニマルズ',
                logoMobile: nonaniLogoMobile,
                logoDesktop: nonaniLogoDesktop,
                url: 'https://www.youtube.com/@nonstop-animals'
            }
        ],
        social: {
            youtube: 'https://www.youtube.com/@suzunemaimu',
            twitch: 'https://www.twitch.tv/suzunemaimu',
            twitter: 'https://x.com/bc_hakumai',
            booth: 'https://suzune-maimu.booth.pm/'
        }
    };

    return (
        <section id="profile" className="talent-section">
            <div className="talent-container">
                <h2 className="section-title">
                    <span className="title-en">PROFILE</span>
                    <span className="title-ja">プロフィール</span>
                </h2>

                <div className="talent-card">
                    <div className="talent-icon-container">
                        <div className="talent-icon">
                            <img src={talentData.image} alt={talentData.name} />
                        </div>
                        <Link to="/talent/maimu" className="detail-button">
                            詳しく見る
                        </Link>
                    </div>
                    <div className="talent-info">
                        <div className="talent-header">
                            <h3 className="talent-name-ja">{talentData.name}</h3>
                            <p className="talent-name-en">{talentData.nameEn}</p>
                        </div>

                        <div className="talent-description">
                            <p style={{ whiteSpace: 'pre-wrap' }}>{talentData.description}</p>
                        </div>

                        <div className="talent-social">
                            <a href={talentData.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X/Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href={talentData.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href={talentData.social.twitch} target="_blank" rel="noopener noreferrer" aria-label="Twitch">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                </svg>
                            </a>
                            <a href={talentData.social.booth} target="_blank" rel="noopener noreferrer" aria-label="BOOTH">
                                <svg width="24" height="24" viewBox="150 150 700 700" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M773.828 438.341V389.068L650.744 192H608.227L541.093 353.238L475.077 214.446L438.138 214.382L326.272 478.653V227.833H250.172V250.007H192V327.26H250.172V550.306C250.172 570.098 266.227 586.141 286.004 586.141H324.033V832L401.683 831.946C401.683 831.946 401.695 720.762 401.695 720.644C401.695 658.964 455.026 608.963 520.963 608.563C521.198 608.563 521.445 608.535 521.707 608.535H521.744H521.786H521.875C629.722 608.612 717.139 690.28 717.139 790.983V832H773.828V611.427H832V489.487L773.828 438.341Z"/>
                                </svg>
                            </a>
                        </div>

                        {/* 所属グループ・参加プロジェクト */}
                        <div className="talent-affiliations">
                            {/* 所属グループ（左側） */}
                            {talentData.groups && talentData.groups.length > 0 && (
                                <div className="affiliations-section">
                                    <h4 className="affiliation-title">所属グループ</h4>
                                    <div className="affiliation-logos">
                                        {talentData.groups.map((group, index) => (
                                            <a
                                                key={`group-${index}`}
                                                href={group.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="affiliation-item"
                                                title={group.name}
                                            >
                                                <span className="affiliation-name">{group.name}</span>
                                                <picture>
                                                    <source media="(max-width: 767px)" srcSet={group.logoMobile} />
                                                    <img src={group.logoDesktop} alt={group.name} className="affiliation-logo" />
                                                </picture>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 参加プロジェクト（右側） */}
                            {talentData.projects && talentData.projects.length > 0 && (
                                <div className="affiliations-section">
                                    <h4 className="affiliation-title">参加プロジェクト</h4>
                                    <div className="affiliation-logos">
                                        {talentData.projects.map((project, index) => (
                                            <a
                                                key={`project-${index}`}
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="affiliation-item"
                                                title={project.name}
                                            >
                                                <span className="affiliation-name">{project.name}</span>
                                                <picture>
                                                    <source media="(max-width: 767px)" srcSet={project.logoMobile} />
                                                    <img src={project.logoDesktop} alt={project.name} className="affiliation-logo" />
                                                </picture>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TalentSection;
