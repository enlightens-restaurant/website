import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Enlightens – Where Food Meets Serenity</h1>
          <p className="hero-subtitle">
            Premium Rooftop Restaurant • Banquet Hall • Event Destination
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn--primary btn--lg">
              Explore Menu
            </Link>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Book a Table
            </Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* About Section */}
      <section className="about py-16">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Welcome to Enlightens</h2>
              <p>
                Located at the top of Elite Tower, Neelbad, Bhopal – Enlightens
                is a tranquil escape from the ordinary. From rooftop dining
                under the stars to hosting graceful events in our banquet or
                gazebo, we offer a blend of elegance, flavor, and unforgettable
                ambiance.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🌟</div>
                  <div>
                    <h4>Premium Location</h4>
                    <p>Scenic rooftop views of Bhopal city</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🍽️</div>
                  <div>
                    <h4>Diverse Cuisine</h4>
                    <p>Indian, Continental & Global flavors</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🎉</div>
                  <div>
                    <h4>Event Specialists</h4>
                    <p>Complete event planning & execution</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>🏢</span>
                <p>Beautiful Rooftop View</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery py-16">
        <div className="container">
          <div className="section-header">
            <h2>Gallery</h2>
            <p>
              Take a glimpse into our beautiful spaces and delicious creations
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🍽️</span>
                <p>Elegant Dining Setup</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🌃</span>
                <p>Rooftop Night View</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🎂</span>
                <p>Birthday Celebration</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🍛</span>
                <p>Delicious Food</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>💐</span>
                <p>Wedding Decoration</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-placeholder">
                <span>🏢</span>
                <p>Banquet Hall</p>
              </div>
            </div>
          </div>
          <div className="gallery-cta">
            <button className="btn btn--outline">View Full Gallery</button>
          </div>
        </div>
      </section>
    </>
  );
}
