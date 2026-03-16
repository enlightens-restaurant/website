import { useState } from "react";

export default function MediaGallery({
  items,
  columnsClassName = "gallery-grid",
  cardClassName = "gallery-item",
}) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <>
      <div className={columnsClassName}>
        {items.map((item) => (
          <button
            key={item.src}
            type="button"
            className={`${cardClassName} media-card-button`}
            onClick={() => setActiveItem(item)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="gallery-photo"
              loading="lazy"
              decoding="async"
            />
            {item.caption ? (
              <div className="gallery-caption">
                <h4>{item.caption}</h4>
                {item.subcaption ? <p>{item.subcaption}</p> : null}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          className="media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          onClick={() => setActiveItem(null)}
        >
          <button
            type="button"
            className="media-lightbox-close"
            aria-label="Close image viewer"
            onClick={() => setActiveItem(null)}
          >
            ×
          </button>
          <figure
            className="media-lightbox-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activeItem.src} alt={activeItem.alt} className="media-lightbox-image" />
            {activeItem.caption || activeItem.subcaption ? (
              <figcaption className="media-lightbox-caption">
                {activeItem.caption ? <strong>{activeItem.caption}</strong> : null}
                {activeItem.subcaption ? <span>{activeItem.subcaption}</span> : null}
              </figcaption>
            ) : null}
          </figure>
        </div>
      ) : null}
    </>
  );
}
