import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Enlightens</h3>
            <p>Where Food Meets Serenity</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                📷 Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                ⭐ Google Reviews
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/menu">Menu</Link>
            <Link to="/ambiance">Ambiance</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>📍 Elite Tower, Neelbad, Bhopal</p>
            <p>📞 +91-7772095526</p>
            <p>✉️ prashantparashar2018@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Enlightens. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
