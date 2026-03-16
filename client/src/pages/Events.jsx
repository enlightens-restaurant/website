import { Link } from "react-router-dom";
import MediaGallery from "../components/MediaGallery";
import DeferredVideoCard from "../components/DeferredVideoCard";
import { foodGalleryItems } from "../data/mediaCatalog";

const eventData = [
  {
    icon: "🎂",
    title: "Birthday Parties & Anniversaries",
    description:
      "Celebrate special moments with customized decorations and menus.",
  },
  {
    icon: "💍",
    title: "Engagements & Pre-Wedding Functions",
    description:
      "Create magical memories with elegant setups and photography-friendly spaces.",
  },
  {
    icon: "💼",
    title: "Corporate Events & Business Dinners",
    description:
      "Professional hosting with dining, seating, and event-ready coordination.",
  },
  {
    icon: "☕",
    title: "Kitty Parties & High Teas",
    description: "Comfortable gatherings with snacks, drinks, and rooftop charm.",
  },
  {
    icon: "🎉",
    title: "Bachelor/Bachelorette Parties",
    description: "Fun celebrations with customized themes and energetic setups.",
  },
  {
    icon: "🧘",
    title: "Spiritual Events & Yoga Brunches",
    description:
      "Peaceful spaces for wellness-focused gatherings and intimate community events.",
  },
];

const services = [
  "End-to-End Event Planning",
  "Theme-Based Decor & Props",
  "Professional Sound & Lighting",
  "Stage, DJ, and Live Music Arrangements",
  "Photography & Videography",
  "Custom Menus & Buffet Styling",
];

const videos = [
  {
    title: "Ambience Walkthrough",
    description:
      "Hosted on YouTube and embedded only after click, so the page stays fast on first visit.",
    embedUrl: "https://www.youtube.com/embed/HvSKckKeOTA?autoplay=1&rel=0",
    posterSrc: "/media/Ambience/4.jpeg",
  },
  {
    title: "Past Event Highlights",
    description:
      "Streams from YouTube after interaction instead of downloading a local video file.",
    embedUrl: "https://www.youtube.com/embed/nbCMYrftAhg?autoplay=1&rel=0",
    posterSrc: "/media/Ambience/7.jpeg",
  },
];

export function Events() {
  return (
    <section className="events py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Events & Celebrations</h2>
          <p>
            Create unforgettable memories with curated spaces, hosted dining,
            and a media-ready presentation of your event.
          </p>
        </div>

        <div className="events-grid">
          {eventData.map((event) => (
            <div key={event.title} className="event-card">
              <div className="event-icon">{event.icon}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>

        <div className="services-section">
          <h3>What We Offer</h3>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service} className="service-item">
                ✓ {service}
              </div>
            ))}
          </div>
          <div className="events-cta">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Plan Your Event
            </Link>
          </div>
        </div>

        <div className="events-media-layout">
          <div className="events-gallery-panel">
            <div className="section-header section-header--compact">
              <h2>Event Food Gallery</h2>
              <p>Real dishes and presentation snapshots from the restaurant.</p>
            </div>
            <MediaGallery items={foodGalleryItems} />
          </div>

          <div className="events-video-panel">
            <div className="section-header section-header--compact">
              <h2>Video Previews</h2>
              <p>
                These videos now load from YouTube only after the visitor clicks
                play, which is much lighter for `gh-pages`.
              </p>
            </div>
            <div className="video-grid">
              {videos.map((video) => (
                <DeferredVideoCard key={video.title} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
