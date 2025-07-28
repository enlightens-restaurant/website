import { useState } from "react";

export function Menu() {
  const [activeTab, setActiveTab] = useState("indian");

  const menuData = {
    indian: [
      {
        icon: "🍛",
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken pieces",
        price: "₹450",
      },
      {
        icon: "🫘",
        name: "Dal Makhani",
        description: "Rich black lentils slow-cooked with cream and spices",
        price: "₹320",
      },
      {
        icon: "🍖",
        name: "Tandoori Platter",
        description: "Assorted grilled meats and vegetables from the tandoor",
        price: "₹650",
      },
      {
        icon: "🍚",
        name: "Biryani Special",
        description: "Fragrant basmati rice with aromatic spices and meat",
        price: "₹480",
      },
    ],
    "south-indian": [
      {
        icon: "🥞",
        name: "Masala Dosa",
        description: "Crispy rice crepe with spiced potato filling",
        price: "₹280",
      },
      {
        icon: "⚪",
        name: "Idli Sambar",
        description: "Steamed rice cakes with lentil curry",
        price: "₹220",
      },
      {
        icon: "🥞",
        name: "Uttapam",
        description: "Thick pancake topped with vegetables",
        price: "₹260",
      },
      {
        icon: "☕",
        name: "Filter Coffee",
        description: "Authentic South Indian coffee",
        price: "₹120",
      },
    ],
    global: [
      {
        icon: "🍝",
        name: "Pasta Primavera",
        description: "Fresh vegetables tossed with penne pasta",
        price: "₹380",
      },
      {
        icon: "🍛",
        name: "Thai Green Curry",
        description: "Coconut-based curry with vegetables and herbs",
        price: "₹420",
      },
      {
        icon: "🍕",
        name: "Wood-fired Pizza",
        description: "Crispy base with fresh toppings",
        price: "₹450",
      },
      {
        icon: "🍣",
        name: "Sushi Platter",
        description: "Assorted fresh sushi rolls",
        price: "₹580",
      },
    ],
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="menu py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Culinary Journeys on Every Plate</h2>
          <p>
            Explore our diverse menu featuring authentic flavors from around the
            world
          </p>
        </div>

        <div className="menu-tabs">
          <button
            className={`tab-btn ${activeTab === "indian" ? "active" : ""}`}
            onClick={() => handleTabClick("indian")}
          >
            Indian Classics
          </button>
          <button
            className={`tab-btn ${
              activeTab === "south-indian" ? "active" : ""
            }`}
            onClick={() => handleTabClick("south-indian")}
          >
            South Indian Delights
          </button>
          <button
            className={`tab-btn ${activeTab === "global" ? "active" : ""}`}
            onClick={() => handleTabClick("global")}
          >
            Global Bites
          </button>
        </div>

        <div className="menu-content">
          <div
            className={`tab-content ${activeTab === "indian" ? "active" : ""}`}
          >
            <div className="menu-grid">
              {menuData.indian.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="menu-item-image">
                    <span>{item.icon}</span>
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`tab-content ${
              activeTab === "south-indian" ? "active" : ""
            }`}
          >
            <div className="menu-grid">
              {menuData["south-indian"].map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="menu-item-image">
                    <span>{item.icon}</span>
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`tab-content ${activeTab === "global" ? "active" : ""}`}
          >
            <div className="menu-grid">
              {menuData.global.map((item, index) => (
                <div key={index} className="menu-item">
                  <div className="menu-item-image">
                    <span>{item.icon}</span>
                  </div>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-actions">
          <button className="btn btn--primary">View Full Menu</button>
          <button className="btn btn--outline">Download PDF</button>
        </div>
      </div>
    </section>
  );
}
