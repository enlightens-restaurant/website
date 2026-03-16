import { useState } from "react";

export default function DeferredVideoCard({
  title,
  description,
  embedUrl,
  posterSrc,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="video-card">
      {isActive ? (
        <div className="video-card-player">
          <iframe
            className="video-card-embed"
            src={embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ) : (
        <button
          type="button"
          className="video-card-launcher"
          onClick={() => setIsActive(true)}
          style={{ backgroundImage: `url(${posterSrc})` }}
          aria-label={`Play ${title}`}
        >
          <span className="video-card-play">Play Video</span>
        </button>
      )}

      <div className="video-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
