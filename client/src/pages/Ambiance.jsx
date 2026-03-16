import MediaGallery from "../components/MediaGallery";
import { ambianceGalleryItems, foodGalleryItems } from "../data/mediaCatalog";

const ambianceHighlights = [
  {
    icon: "🌙",
    title: "Rooftop Dining",
    description:
      "An open-air dining experience built around evening views and a calm atmosphere.",
  },
  {
    icon: "🏛️",
    title: "Event-Ready Layouts",
    description:
      "Flexible setups for intimate dinners, celebrations, and curated gatherings.",
  },
  {
    icon: "🌿",
    title: "Warm Visual Tone",
    description:
      "Soft lighting, layered decor, and rooftop textures that photograph beautifully.",
  },
  {
    icon: "✨",
    title: "Click-To-View Gallery",
    description:
      "Images open in a full-screen viewer so guests can explore the space in detail.",
  },
];

export function Ambiance() {
  return (
    <section className="ambiance py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Crafted Spaces, Styled Moments</h2>
          <p>
            Explore the rooftop mood, event setups, and dining atmosphere at
            Enlightens through a full-screen image gallery.
          </p>
        </div>

        <div className="ambiance-grid">
          {ambianceHighlights.map((item) => (
            <div key={item.title} className="ambiance-card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="ambiance-gallery-shell">
          <MediaGallery items={ambianceGalleryItems} />
        </div>

        <div className="ambiance-gallery-shell">
          <div className="section-header section-header--compact">
            <h2>Event Food Gallery</h2>
            <p>
              Signature food presentation and plated highlights from the
              restaurant and hosted events.
            </p>
          </div>
          <MediaGallery items={foodGalleryItems} />
        </div>
      </div>
    </section>
  );
}
