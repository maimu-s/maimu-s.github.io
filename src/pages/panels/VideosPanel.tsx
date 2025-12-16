import OverlayPanel from "../../components/OverlayPanel";
import { maimuDetail } from "../../data/talentDetailMaimu";
import "./VideosPanel.css";

export default function VideosPanel() {
    const videos = maimuDetail.recommendedVideos;

    return (
        <OverlayPanel title="おすすめ動画">
            <div className="videos-grid">
                {videos.map((video) => (
                    <div key={video.id} className="video-item">
                        <h3 className="video-item-title">{video.title}</h3>
                        {video.description && (
                            <p className="video-item-description">{video.description}</p>
                        )}
                        <div className="video-player-wrapper">
                            <iframe
                                className="video-player"
                                src={`https://www.youtube.com/embed/videoseries?list=${video.playlistId}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                ))}
            </div>
        </OverlayPanel>
    );
}
