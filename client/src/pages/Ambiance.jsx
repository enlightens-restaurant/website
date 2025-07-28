export function Ambiance() {
  const ambianceData = [
    {
      icon: "🌙",
      title: "Rooftop Dining",
      description:
        "Dine under the stars with scenic city views and ambient lighting",
    },
    {
      icon: "🏛️",
      title: "Banquet Hall",
      description:
        "Air-conditioned hall perfect for formal events and gatherings",
    },
    {
      icon: "🌿",
      title: "Gazebo Setup",
      description: "Covered outdoor area combining nature and comfort",
    },
    {
      icon: "🎨",
      title: "Custom Décor Services",
      description: "Personalized decoration themes for your special occasions",
    },
  ];

  return (
    <section className="ambiance py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Crafted Spaces, Styled Moments</h2>
          <p>
            Experience dining in our beautifully designed spaces, each crafted
            for different occasions and moods.
          </p>
        </div>
        <div className="ambiance-grid">
          {ambianceData.map((item, index) => (
            <div key={index} className="ambiance-card">
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
