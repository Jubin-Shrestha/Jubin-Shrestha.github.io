const phones = [
  {
    name: "iPhone 16 Pro Max",
    image: "Iphone-16-Pro-Max.jpg",
    price: "$1,199",
    specs: {
      screen: "6.9\" Super Retina XDR",
      processor: "A18 Pro chip",
      camera: "48MP Main",
      battery: "4,685 mAh",
    },
    rating: 9.5,
    pros: [
      "Titanium design",
      "Exceptional cameras",
      "Best-in-class performance",
      "Premium build quality"
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    image: "S24-Ultra.jpg",
    price: "$1,299",
    specs: {
      screen: "6.8\" Dynamic AMOLED",
      processor: "Snapdragon 8 Gen 3",
      camera: "200MP Main",
      battery: "5,000 mAh",
    },
    rating: 9.3,
    pros: [
      "S Pen functionality",
      "Versatile camera system",
      "Large bright display",
      "Long battery life"
    ],
  },
  {
    name: "Google Pixel 9 Pro",
    image: "Pixel-9-Pro.jpg",
    price: "$999",
    specs: {
      screen: "6.3\" LTPO OLED",
      processor: "Google Tensor G4",
      camera: "50MP Main",
      battery: "4700 mAh",
    },
    rating: 9.2,
    pros: [
      "Outstanding camera",
      "Clean Android experience",
      "AI features",
      "Great display"
    ],
  },
];
function createPhoneCard(phone) {
  return `
    <div class="phone-card">
      <div class="phone-image">
        <img src="${phone.image}" alt="${phone.name}" loading="lazy">
        <div class="phone-rating">${phone.rating}/10</div>
      </div>
      <div class="phone-details">
        <h3>${phone.name}</h3>
        <p class="phone-price">${phone.price}</p>
        <div class="phone-specs">
          <div class="spec-chip">🔋 ${phone.specs.battery}</div>
          <div class="spec-chip">📱 ${phone.specs.screen}</div>
          <div class="spec-chip">📸 ${phone.specs.camera}</div>
          <div class="spec-chip">⚡ ${phone.specs.processor}</div>
        </div>
        <div class="phone-features">
          <h4>Key Features:</h4>
          <ul>
            ${phone.pros.map(pro => `<li>${pro}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}
document.addEventListener('DOMContentLoaded', () => {
  const phoneGrid = document.getElementById('phoneGrid');
  phones.forEach(phone => {
    phoneGrid.innerHTML += createPhoneCard(phone);
  });
});