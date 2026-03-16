const buildItem = (folder, file, title, description) => ({
  src: `/media/${folder}/${file}`,
  alt: `${title} at Enlightens Restaurant`,
  caption: title,
  subcaption: description,
});

// Update the titles/descriptions here whenever you want to rename gallery items.
export const ambianceGalleryItems = [
  buildItem("Ambience", "1.jpeg", "Rooftop Floor View", "Tap to view a larger version."),
  buildItem("Ambience", "2.jpeg", "Outdoor Dining Corner", "Tap to view a larger version."),
  buildItem("Ambience", "3.jpeg", "Ceiling Lighting & Seating", "Tap to view a larger version."),
  buildItem("Ambience", "4.jpeg", "Open-Air Lounge Setup", "Tap to view a larger version."),
  buildItem("Ambience", "5.jpeg", "Warm Night Ambience", "Tap to view a larger version."),
  buildItem("Ambience", "6.jpeg", "Dining Layout Detail", "Tap to view a larger version."),
  buildItem("Ambience", "7.jpeg", "Celebration Seating View", "Tap to view a larger version."),
];

export const foodGalleryItems = [
  buildItem(
    "Food",
    "1.jpeg",
    "Signature Plated Starter",
    "A closer look at plating and presentation for dining and events."
  ),
  buildItem(
    "Food",
    "2.jpeg",
    "Chef's Special Presentation",
    "A closer look at plating and presentation for dining and events."
  ),
  buildItem(
    "Food",
    "3.jpeg",
    "Curated Table Serving",
    "A closer look at plating and presentation for dining and events."
  ),
  buildItem(
    "Food",
    "4.jpeg",
    "Celebration Plate Styling",
    "A closer look at plating and presentation for dining and events."
  ),
  buildItem(
    "Food",
    "5.jpeg",
    "Event Dining Spread",
    "A closer look at plating and presentation for dining and events."
  ),
  buildItem(
    "Food",
    "6.jpeg",
    "Signature Finish",
    "A closer look at plating and presentation for dining and events."
  ),
];
