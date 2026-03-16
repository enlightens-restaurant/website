import { useState } from "react";

const menuSections = [
  {
    id: "warm-comfort-cups",
    label: "Warm Comfort Cups",
    items: [
      {
        icon: "🌶️",
        name: "Hot & Sour Soup",
        description: "Available in veg or chicken.",
        price: "₹149 / ₹189",
      },
      {
        icon: "🍜",
        name: "Manchaw Soup",
        description: "Available in veg or chicken.",
        price: "₹149 / ₹189",
      },
      {
        icon: "🍋",
        name: "Lemon Coriander Soup",
        description: "Available in veg or chicken.",
        price: "₹149 / ₹189",
      },
      {
        icon: "🌽",
        name: "Sweet Corn Soup",
        description: "Available in veg or chicken.",
        price: "₹149 / ₹189",
      },
      {
        icon: "🧄",
        name: "Burnt Garlic Clear Soup",
        description: "Available in veg or chicken.",
        price: "₹139 / ₹169",
      },
      {
        icon: "🍄",
        name: "Cream of Mushroom Soup",
        price: "₹169",
      },
      {
        icon: "🥦",
        name: "Cream of Broccoli Soup",
        price: "₹169",
      },
      {
        icon: "🍅",
        name: "Roasted Tomato Basil Soup",
        price: "₹169",
      },
    ],
  },
  {
    id: "experimental-chaat-fusion",
    label: "Experimental Chaat Fusion",
    items: [
      {
        icon: "🥟",
        name: "Schezwan Momo Chaat",
        description:
          "Crispy momos layered with yogurt, green chutney, tamarind chutney, onions, sev, and coriander.",
        price: "₹369 / ₹389",
      },
      {
        icon: "🍣",
        name: "Aloo Chaat Sushi Rolls",
        description:
          "Spiced potato rolls with paneer, capsicum, chili mayo, curd, chutney, sev, and pomegranate.",
        price: "₹359 / ₹399",
      },
      {
        icon: "🥬",
        name: "Stuffed Palak Pakoda Chaat",
        description:
          "Stuffed palak pakoda finished with yogurt, chutneys, onions, sev, and coriander.",
        price: "₹359",
      },
      {
        icon: "🌽",
        name: "Smoky Butter Corn Chaat",
        description:
          "Pan-grilled American corn with butter, lemon juice, chef special spice, and coriander.",
        price: "₹289",
      },
    ],
  },
  {
    id: "green-and-goodness",
    label: "Green And Goodness",
    items: [
      {
        icon: "🥗",
        name: "Garden Fresh Green Salad",
        price: "₹149",
      },
      {
        icon: "🥜",
        name: "Peanut",
        description: "Plain or masala.",
        price: "₹129 / ₹189",
      },
      {
        icon: "🥬",
        name: "Caesar Salad",
        description: "Iceberg, lettuce, bread croutons, Caesar dressing, and parmesan.",
        price: "₹199",
      },
      {
        icon: "🍍",
        name: "Mexican Salad",
        description:
          "Red cabbage, pineapple, lettuce, onions, cucumber, and Mexican dressing.",
        price: "₹199 / ₹249",
      },
    ],
  },
  {
    id: "global-grazer-platters",
    label: "Global Grazer Platters",
    items: [
      {
        icon: "🍔",
        name: "Mutton Shami Kebab Slider",
        description: "Lettuce, masala onion, and shami kebab slider buns.",
        price: "₹449",
      },
      {
        icon: "🧆",
        name: "Lemon Garlic Chickpea Sliders",
        description:
          "Creamy chickpea patty with parsley, garlic, lemon zest, and fresh seasonal toppings.",
        price: "₹369",
      },
      {
        icon: "🫓",
        name: "Con Moley Chicken Nachos",
        description:
          "Nachos topped with chicken in mole, cheese, onion, jalapeno, avocado, sour cream, and cilantro.",
        price: "₹369",
      },
      {
        icon: "🫒",
        name: "Greek Mazze Platter with Lemon Drizzle",
        description:
          "Chicken, cherry tomatoes, cucumber, red onion, olives, feta, hummus, and pita.",
        price: "₹889",
      },
      {
        icon: "🥣",
        name: "Hummus Bowl with Meat Balls",
        description:
          "Meatballs over hummus with cucumber, cherry tomatoes, olive oil, paprika, and parsley.",
        price: "₹529",
      },
      {
        icon: "🌯",
        name: "Chicken Avocado Ranch Burritos",
        description:
          "Shredded chicken, ranch dressing, black beans, corn, and diced tomatoes.",
        price: "₹429",
      },
      {
        icon: "🍞",
        name: "Tomato Basil Bruschetta",
        description:
          "Bruschetta finished with balsamic glaze, torn basil, and a final seasoning.",
        price: "₹379",
      },
      {
        icon: "🧆",
        name: "Falafel Hummus Bowl",
        description: "Classic hummus, falafel, and pickled vegetables.",
        price: "₹449",
      },
      {
        icon: "🧄",
        name: "Garlicky Hummus Platter",
        description: "Garlic hummus with herb grilled pita and pickled vegetables.",
        price: "₹449",
      },
    ],
  },
  {
    id: "pasta-mood",
    label: "Pasta Mood",
    items: [
      {
        icon: "🍝",
        name: "Penne Alfredo",
        description: "Available in veg or chicken.",
        price: "₹349 / ₹399",
      },
      {
        icon: "🍅",
        name: "Penne Arrabiata",
        description: "Available in veg or chicken.",
        price: "₹339 / ₹399",
      },
      {
        icon: "🌿",
        name: "Spaghetti Pesto",
        description: "Available in veg or chicken.",
        price: "₹389 / ₹419",
      },
      {
        icon: "🧀",
        name: "Baked Macaroni Cheese Pasta",
        description: "Available in veg or chicken.",
        price: "₹349 / ₹399",
      },
    ],
  },
  {
    id: "asian-quarter-cuisine",
    label: "Asian Quarter Cuisine",
    items: [
      {
        icon: "🐟",
        name: "Coconut Lime Fish Curry Bowl with Jasmine Rice",
        description:
          "Tender white fish in a coconut curry sauce with zesty lime and jasmine rice.",
        price: "₹499",
      },
      {
        icon: "🍛",
        name: "Red Thai Curry with Jasmine Rice",
        price: "₹429 / ₹479",
      },
      {
        icon: "🥥",
        name: "Green Thai Curry with Jasmine Rice",
        price: "₹399",
      },
      {
        icon: "🍗",
        name: "Chilli Chicken Bowl",
        description: "Served with noodles or rice.",
        price: "₹349",
      },
      {
        icon: "🧈",
        name: "Chilli Paneer Bowl",
        description: "Served with noodles or rice.",
        price: "₹329",
      },
      {
        icon: "🥡",
        name: "Manchurian Bowl",
        description: "Served with noodles or rice.",
        price: "₹429 / ₹479",
      },
      {
        icon: "🌯",
        name: "The Maggi Magic Spring Roll",
        description:
          "Maggi noodles, stir-fried veggies, schezwan spice, and cheese in crispy spring roll sheets.",
        price: "₹349",
      },
      {
        icon: "🧈",
        name: "Chilli Paneer",
        price: "₹319",
      },
      {
        icon: "🌿",
        name: "Lotus Stem Honey Chilly",
        description:
          "Crispy fried lotus stem tossed in chilly honey sauce with bell peppers and spring onion.",
        price: "₹299 / ₹319",
      },
      {
        icon: "🥬",
        name: "Veg Manchurian",
        price: "₹339",
      },
      {
        icon: "🍄",
        name: "Mushroom Dynamite",
        description: "Fried crisp mushroom with a hot seasoning finish.",
        price: "₹349",
      },
      {
        icon: "🍖",
        name: "Chilli Chicken",
        price: "₹389",
      },
      {
        icon: "🐠",
        name: "Fish",
        description: "Choice of chilli, schezwan, hot garlic, or lemon sauce.",
        price: "₹429",
      },
      {
        icon: "🌽",
        name: "Crispy Corn",
        price: "₹259 / ₹299",
      },
      {
        icon: "🥔",
        name: "Chilli Honey Potato",
        price: "₹259 / ₹299",
      },
      {
        icon: "🍜",
        name: "Hakka Noodles",
        price: "₹249 / ₹289",
      },
      {
        icon: "🔥",
        name: "Schezwan Noodles",
        price: "₹329",
      },
      {
        icon: "🧄",
        name: "Burnt Chilli Garlic Noodles",
        price: "₹249 / ₹289",
      },
      {
        icon: "🍚",
        name: "Fried Rice",
        price: "₹259 / ₹299",
      },
      {
        icon: "🌶️",
        name: "Schezwan Fried Rice",
        price: "₹259 / ₹299",
      },
    ],
  },
  {
    id: "asian-dumpling-garden",
    label: "Asian Dumpling Garden",
    items: [
      {
        icon: "🥟",
        name: "Kimchi Paneer Bao",
        price: "₹300",
      },
      {
        icon: "🍄",
        name: "Wild Mushroom Cracker Bao",
        price: "₹300",
      },
      {
        icon: "🍗",
        name: "Chicken Gochu Jang Bao",
        price: "₹340",
      },
      {
        icon: "🥠",
        name: "Spicy Basil Chicken Dim Sum",
        price: "₹340",
      },
      {
        icon: "🧀",
        name: "Five Treasure Cream Cheese Dim Sum",
        price: "₹300",
      },
      {
        icon: "🥣",
        name: "Jhol Momo",
        price: "₹300 / ₹340",
      },
    ],
  },
  {
    id: "smokewood-skewers",
    label: "Smokewood Skewers",
    items: [
      { icon: "🧈", name: "Paneer Tikka", price: "₹349" },
      { icon: "🌶️", name: "Thecha Paneer Tikka", price: "₹349" },
      { icon: "🥛", name: "Paneer Malai Tikka", price: "₹339" },
      { icon: "🥒", name: "Paneer Achari Tikka", price: "₹349" },
      {
        icon: "🥦",
        name: "Broccoli Corn Seekh Kebab",
        description:
          "Broccoli and corn mixed with Indian herbs, cooked in a clay oven with salad and mint chutney.",
        price: "₹349",
      },
      {
        icon: "🧀",
        name: "Cheese Burst Palak Corn Kebab",
        description:
          "Spinach and potato mix stuffed with sweet corn, grated cheese, and chilli.",
        price: "₹389",
      },
      { icon: "🍄", name: "Stuffed Mushroom Pesto", price: "₹319" },
      { icon: "🍗", name: "Classic Chicken Tikka", price: "₹389" },
      { icon: "🔥", name: "Thecha Chicken Roast", price: "₹429" },
      { icon: "🥛", name: "Murg Malai Tikka", price: "₹459" },
      { icon: "🌿", name: "Chicken Pesto Tikka", price: "₹499" },
      { icon: "🐟", name: "Classic Fish Tikka", price: "₹499" },
      { icon: "🍢", name: "Mutton Seekh Kebab", price: "₹399" },
      { icon: "🥩", name: "Mutton Shami Kebab", price: "₹649" },
      { icon: "🍡", name: "Chicken Seekh Kebab", price: "₹429" },
    ],
  },
  {
    id: "desi-handi",
    label: "Desi Handi",
    items: [
      { icon: "🧈", name: "Paneer Makhni", price: "₹369" },
      { icon: "🧄", name: "Paneer Longlata", price: "₹359" },
      { icon: "🔥", name: "Paneer Tikka Masala", price: "₹319" },
      { icon: "🥘", name: "Kadhai Paneer", price: "₹359" },
      { icon: "🥬", name: "Palak Paneer Kofta", price: "₹369" },
      { icon: "🍅", name: "Indori Sev Tomato", price: "₹369" },
      { icon: "🥕", name: "Subz Miloni", price: "₹399" },
      { icon: "🥦", name: "Seasonable Veg", price: "₹459" },
      { icon: "🍗", name: "Chicken Gharwala", price: "₹599" },
      { icon: "🌿", name: "Murgh Tikka Makhan Palak", price: "₹599" },
      { icon: "🍛", name: "Murgh Makhni Boneless / With Bone", price: "₹489" },
      { icon: "🥩", name: "Mutton Rogan Josh", price: "₹489" },
      { icon: "🍖", name: "Mutton Bhuna", price: "₹489" },
      { icon: "🥚", name: "Egg Masala Curry", price: "₹319" },
    ],
  },
  {
    id: "desi-comfort-pots",
    label: "Desi Comfort Pots",
    items: [
      { icon: "🫘", name: "Dal Tadka", price: "₹249" },
      { icon: "🍲", name: "Dal Fry", price: "₹249" },
      { icon: "🧈", name: "Dal Makhani", price: "₹149 / ₹169" },
      { icon: "🍚", name: "Butter Khichdi", price: "₹239" },
      { icon: "🥣", name: "Makhani Khichdi", price: "₹349" },
    ],
  },
  {
    id: "desi-rice-bowl",
    label: "Desi Rice Bowl",
    items: [
      {
        icon: "🍚",
        name: "Rice",
        description: "Steamed or jeera.",
        price: "₹299 / ₹319",
      },
      {
        icon: "🥘",
        name: "Pulao",
        description: "Available in veg or chicken.",
        price: "₹219 / ₹329",
      },
      {
        icon: "🍲",
        name: "Biryani",
        description: "Veg or paneer tikka.",
        price: "₹549",
      },
      {
        icon: "🍗",
        name: "Biryani",
        description: "Chicken or malai kebab.",
        price: "₹319 / ₹339",
      },
      {
        icon: "🥩",
        name: "Mutton Biryani",
        price: "₹339 / ₹349",
      },
    ],
  },
  {
    id: "solo-meal-bowls",
    label: "Solo Meal Bowls",
    items: [
      {
        icon: "🧈",
        name: "Paneer Makhni Bowl",
        description: "Served with rice.",
        price: "₹319",
      },
      {
        icon: "🔥",
        name: "Paneer Tikka Masala Bowl",
        description: "Served with lachha paratha or naan.",
        price: "₹299",
      },
      {
        icon: "🥬",
        name: "Palak Paneer Kofta Bowl",
        description: "Served with rice.",
        price: "₹319",
      },
      {
        icon: "🍗",
        name: "Chicken Gharwala Bowl",
        description: "Served with rice.",
        price: "₹349",
      },
      {
        icon: "🌿",
        name: "Murgh Tikka Makhan Palak Bowl",
        description: "Served with lachha paratha or naan.",
        price: "₹299",
      },
      {
        icon: "🍛",
        name: "Murgh Makhni Bowl",
        description: "Boneless or with bone, served with rice.",
        price: "₹299",
      },
      {
        icon: "🥩",
        name: "Mutton Rogan Josh Bowl",
        description: "Served with rice.",
        price: "₹359",
      },
      {
        icon: "🥚",
        name: "Egg Masala Curry Bowl",
        description: "Served with rice.",
        price: "₹359",
      },
      {
        icon: "🫘",
        name: "Dal Makhani Bowl",
        description: "Served with rice.",
        price: "₹399",
      },
    ],
  },
  {
    id: "artisanal-indian-breads",
    label: "Artisanal Indian Breads",
    items: [
      {
        icon: "🫓",
        name: "Roti",
        description: "Plain or butter.",
        price: "₹30 / ₹35",
      },
      {
        icon: "🥜",
        name: "Nutty Masala Roti",
        description: "Indian spiced flatbread with mixed nuts.",
        price: "₹75",
      },
      {
        icon: "🥐",
        name: "Lachha Paratha Butter",
        price: "₹55",
      },
      {
        icon: "🌿",
        name: "Pudina Paratha",
        price: "₹60",
      },
      {
        icon: "🍞",
        name: "Naan",
        description: "Plain or butter.",
        price: "₹45 / ₹50",
      },
      {
        icon: "🧄",
        name: "Garlic Naan",
        price: "₹70",
      },
      {
        icon: "🧀",
        name: "Cheese Chilli Naan",
        price: "₹99",
      },
      {
        icon: "🥔",
        name: "Stuffed Kulcha",
        description: "Aloo or paneer.",
        price: "₹80 / ₹119",
      },
      {
        icon: "🥩",
        name: "Keema Parotha",
        description: "North Indian flatbread stuffed with spiced minced goat meat.",
        price: "₹150",
      },
      {
        icon: "🧺",
        name: "Roti Ki Tokry",
        description: "Six types of Indian bread.",
        price: "₹319",
      },
    ],
  },
  {
    id: "crispy-affairs",
    label: "Crispy Affairs",
    items: [
      { icon: "🍟", name: "Classic Fries", price: "₹199" },
      { icon: "🌶️", name: "Peri-Peri Fries", price: "₹219" },
      { icon: "🧀", name: "Mexican Loaded Fries", price: "₹220 / ₹319" },
      { icon: "🫑", name: "Jalapeno Cheese Poppers", price: "₹119" },
      {
        icon: "🥠",
        name: "Papad",
        description: "Roasted or fry.",
        price: "₹79",
      },
      {
        icon: "✨",
        name: "Papad Masala",
        description: "Roasted or fry.",
        price: "₹299",
      },
    ],
  },
  {
    id: "dessert-grazing-board",
    label: "Dessert Grazing Board",
    items: [
      {
        icon: "🍫",
        name: "Sizzling Brownie with Ice Cream",
        description:
          "Warm chocolate brownie on a hot sizzler plate with ice cream and chocolate sauce.",
        price: "₹299",
      },
      {
        icon: "🍍",
        name: "Pineapple Sheera",
        description: "Semolina dessert with pineapple.",
        price: "₹419",
      },
      {
        icon: "🥛",
        name: "Panna Cotta Nuts",
        description: "Served with fruit filling and granola.",
        price: "₹419",
      },
      {
        icon: "🍮",
        name: "Ras Malai Tiramisu",
        description:
          "A fusion dessert combining tiramisu layers with rich ras malai flavors.",
        price: "Price on request",
      },
    ],
  },
  {
    id: "fusion-crust-slice",
    label: "Fusion Crust Slice",
    items: [
      { icon: "🍕", name: "Fusion Crust Slice", price: "₹289" },
      { icon: "🧀", name: "Margerita Pizza", price: "₹299" },
      { icon: "🥬", name: "Exotic Veg Pizza", price: "₹319 / ₹359" },
      {
        icon: "🍛",
        name: "Makhni Pizza",
        description: "Paneer or chicken.",
        price: "₹319 / ₹359",
      },
      {
        icon: "🔥",
        name: "Smoky and Spicy Pizza",
        description: "Paneer tikka or chicken tikka.",
        price: "₹299",
      },
      { icon: "🌽", name: "Corn Cheese Pizza", price: "₹319" },
      { icon: "🍄", name: "Grilled Mushroom Pepper Pizza", price: "Price on request" },
    ],
  },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState(menuSections[0].id);

  const activeSection =
    menuSections.find((section) => section.id === activeTab) ?? menuSections[0];

  return (
    <section className="menu py-16 page-section">
      <div className="container">
        <div className="section-header">
          <h2>Enlightens Signature Menu</h2>
          <p>
            Browse the latest categories and dishes from the current Enlightens
            menu.
          </p>
        </div>

        <div className="menu-tabs">
          {menuSections.map((section) => (
            <button
              key={section.id}
              className={`tab-btn ${activeTab === section.id ? "active" : ""}`}
              onClick={() => setActiveTab(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="menu-content">
          <div className="tab-content active">
            <div className="menu-grid">
              {activeSection.items.map((item) => (
                <div key={`${activeSection.id}-${item.name}`} className="menu-item">
                  <div className="menu-item-image">
                    <span>{item.icon ?? "🍽️"}</span>
                  </div>
                  <h4>{item.name}</h4>
                  {item.description ? <p>{item.description}</p> : null}
                  <span className="price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-actions">
          <button className="btn btn--primary">Explore More Categories</button>
          <button className="btn btn--outline">Ask for Today&apos;s Availability</button>
        </div>
      </div>
    </section>
  );
}
