import { Link } from "react-router-dom";
import { useEffect } from "react";
import bodhiLogo from "../assets/logo_bodhi_resize.png";

export function Home() {
  useEffect(() => {
    const layer = document.querySelector(".leaf-layer");
    if (!layer) return;

    const leafSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path d="M 50 20 C 65 0 100 30 100 60 C 100 100 70 120 54 135 L 54 148 L 46 135 C 30 120 0 100 0 60 C 0 30 35 0 50 20 Z" stroke="none" />
  <path d="M50 148 L50 28" stroke="#ffffff80" stroke-width="3" />
  <path d="M50 38  C62 40 78 55 88 70" stroke="#ffffff50" stroke-width="2" />
  <path d="M50 52  C60 55 72 70 80 85" stroke="#ffffff40" stroke-width="1.7" />
  <path d="M50 66  C57 69 65 80 70 94" stroke="#ffffff35" stroke-width="1.4" />
  <path d="M50 38  C38 40 22 55 12 70" stroke="#ffffff50" stroke-width="2" />
  <path d="M50 52  C40 55 28 70 20 85" stroke="#ffffff40" stroke-width="1.7" />
  <path d="M50 66  C43 69 35 80 30 94" stroke="#ffffff35" stroke-width="1.4" />
</svg>`;

    const colors = ["#a6d86c", "#30c5c4", "#4ec8ff", "#ffc85d"];

    const createLeaf = (side = "left") => {
      const leaf = document.createElement("span");
      leaf.innerHTML = leafSvg;
      leaf.style.position = "absolute";
      if (side === "left") {
        leaf.style.left = Math.random() * 35 + "vw";
      } else {
        leaf.style.right = Math.random() * 35 + "vw";
      }
      leaf.style.animationDuration = 7 + Math.random() * 6 + "s";
      leaf.style.animationDelay = -Math.random() * 8 + "s";
      leaf.style.color = colors[Math.floor(Math.random() * colors.length)];
      layer.appendChild(leaf);
    };

    for (let i = 0; i < 25; i++) createLeaf("left");
    for (let i = 0; i < 25; i++) createLeaf("right");

    return () => {
      layer.innerHTML = "";
    };
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="leaf-layer"></div>
        <div className="hero-content">
          <img className="bodhi" src={bodhiLogo} alt="Bodhi tree logo" />
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
