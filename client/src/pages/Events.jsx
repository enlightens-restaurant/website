import { Link } from "react-router-dom";

export function Events() {
  const eventData = [
    {
      icon: "🎂",
      title: "Birthday Parties & Anniversaries",
      description:
        "Celebrate special moments with customized decorations and menus",
    },
    {
      icon: "💍",
      title: "Engagements & Pre-Wedding Functions",
      description:
        "Create magical memories with elegant setups and photography",
    },
    {
      icon: "💼",
      title: "Corporate Events & Business Dinners",
      description:
        "Professional venues with AV equipment and catering services",
    },
    {
      icon: "☕",
      title: "Kitty Parties & High Teas",
      description: "Intimate gatherings with delicious snacks and beverages",
    },
    {
      icon: "🎉",
      title: "Bachelor/Bachelorette Parties",
      description: "Fun celebrations with customized themes and entertainment",
    },
    {
      icon: "🧘",
      title: "Spiritual Events & Yoga Brunches",
      description:
        "Peaceful settings for spiritual gatherings and wellness events",
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

  return (
    <section className="events py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Events & Celebrations</h2>
          <p>
            Create unforgettable memories with our comprehensive event planning
            services
          </p>
        </div>
        <div className="events-grid">
          {eventData.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-icon">{event.icon}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        <div className="services-section">
          <h3>What We Offer</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
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
      </div>
    </section>
  );
}
