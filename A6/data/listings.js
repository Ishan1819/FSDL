// Hardcoded "database" of used-item listings, sellers and site info.
// In a real app this would live in MongoDB/SQL; kept in-memory here per assignment scope
// (no database is used — everything below stands in for DB records).

const listings = [
  {
    id: 1,
    slug: "maruti-swift-vdi-2018",
    title: "Maruti Suzuki Swift VDI",
    category: "Cars",
    brand: "Maruti Suzuki",
    year: 2018,
    price: 485000,
    kmDriven: 42000,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: "1st Owner",
    location: "Pune, Maharashtra",
    color: "#2b6ca3",
    condition: "Excellent",
    shortDescription: "Well-maintained single-owner Swift diesel, all service records available.",
    description:
      "This Maruti Swift VDI has been driven carefully by a single owner and comes with a complete service history from authorized Maruti service centers. Tyres replaced 6 months ago, no accident history, insurance valid till Dec 2026.",
    features: ["Power Steering", "Power Windows", "ABS", "Airbags", "Music System"],
    images: 3,
    seller: { name: "Ishan Patil", phone: "+91 98765 43210", verified: true }
  },
  {
    id: 2,
    slug: "royal-enfield-classic-350-2020",
    title: "Royal Enfield Classic 350",
    category: "Bikes",
    brand: "Royal Enfield",
    year: 2020,
    price: 128000,
    kmDriven: 15500,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: "1st Owner",
    location: "Nashik, Maharashtra",
    color: "#8a4a2b",
    condition: "Good",
    shortDescription: "Classic 350 in Stealth Black, recently serviced with new tyres.",
    description:
      "Low mileage Royal Enfield Classic 350 kept in a covered garage. Recently serviced with new front and rear tyres. Minor scratches on the tank, otherwise in great riding condition.",
    features: ["Dual Channel ABS", "Alloy Wheels", "LED Tail Lamp"],
    images: 4,
    seller: { name: "Rohit Verma", phone: "+91 91234 56789", verified: true }
  },
  {
    id: 3,
    slug: "hyundai-creta-sx-2019",
    title: "Hyundai Creta SX",
    category: "Cars",
    brand: "Hyundai",
    year: 2019,
    price: 1150000,
    kmDriven: 38000,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: "2nd Owner",
    location: "Mumbai, Maharashtra",
    color: "#c9622a",
    condition: "Excellent",
    shortDescription: "Top-end SX automatic variant with sunroof and ventilated seats.",
    description:
      "Fully loaded Hyundai Creta SX automatic with panoramic sunroof, ventilated front seats and BlueLink connected car tech. Second owner, all documents clear, no loan pending.",
    features: ["Sunroof", "Ventilated Seats", "Cruise Control", "Rear Camera", "Touchscreen Infotainment"],
    images: 5,
    seller: { name: "Priya Nair", phone: "+91 99887 76655", verified: false }
  },
  {
    id: 4,
    slug: "honda-activa-6g-2021",
    title: "Honda Activa 6G",
    category: "Scooters",
    brand: "Honda",
    year: 2021,
    price: 62000,
    kmDriven: 9800,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    location: "Nagpur, Maharashtra",
    color: "#4f9d69",
    condition: "Excellent",
    shortDescription: "Low mileage Activa 6G, ideal city commuter, barely used.",
    description:
      "Almost showroom-condition Activa 6G with very low running. Bought for daily college commute, now upgrading. Includes helmet and original seat cover.",
    features: ["External Fuel Lid", "LED Headlamp", "Mobile Charging Socket"],
    images: 3,
    seller: { name: "Karan Mehta", phone: "+91 90909 12345", verified: true }
  },
  {
    id: 5,
    slug: "tata-nexon-xz-plus-2020",
    title: "Tata Nexon XZ+",
    category: "Cars",
    brand: "Tata",
    year: 2020,
    price: 895000,
    kmDriven: 27000,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: "1st Owner",
    location: "Aurangabad, Maharashtra",
    color: "#5a4fc9",
    condition: "Good",
    shortDescription: "5-star safety rated Nexon, XZ+ trim, well-maintained diesel.",
    description:
      "Tata Nexon XZ+ diesel with Global NCAP 5-star safety rating. Regularly serviced at Tata authorized center, minor wear on upholstery, mechanically sound.",
    features: ["Rain-sensing Wipers", "Cruise Control", "Rear Camera", "Harman Infotainment"],
    images: 4,
    seller: { name: "Ananya Sharma", phone: "+91 93456 78901", verified: true }
  },
  {
    id: 6,
    slug: "bajaj-pulsar-ns200-2019",
    title: "Bajaj Pulsar NS200",
    category: "Bikes",
    brand: "Bajaj",
    year: 2019,
    price: 98000,
    kmDriven: 22000,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: "2nd Owner",
    location: "Pune, Maharashtra",
    color: "#c92a2a",
    condition: "Good",
    shortDescription: "Sporty NS200 with aftermarket exhaust, well maintained.",
    description:
      "Bajaj Pulsar NS200 with perimeter frame and liquid cooling. Fitted with an aftermarket exhaust (stock exhaust also available). Regularly serviced, chain and sprocket recently replaced.",
    features: ["Liquid Cooled Engine", "Perimeter Frame", "Digital Console"],
    images: 3,
    seller: { name: "Meera Joshi", phone: "+91 97788 66554", verified: false }
  },
  {
    id: 7,
    slug: "toyota-innova-crysta-2017",
    title: "Toyota Innova Crysta",
    category: "Cars",
    brand: "Toyota",
    year: 2017,
    price: 1350000,
    kmDriven: 65000,
    fuelType: "Diesel",
    transmission: "Manual",
    owners: "1st Owner",
    location: "Nashik, Maharashtra",
    color: "#1f7a99",
    condition: "Good",
    shortDescription: "Spacious 7-seater Innova Crysta, ideal for family or fleet use.",
    description:
      "Reliable Toyota Innova Crysta, single owner, used mainly for long family trips and well serviced at Toyota service centers. Higher kilometers but strong engine health.",
    features: ["7-Seater", "Rear AC Vents", "Alloy Wheels", "Fog Lamps"],
    images: 4,
    seller: { name: "Ishan Patil", phone: "+91 98765 43210", verified: true }
  },
  {
    id: 8,
    slug: "tvs-jupiter-2020",
    title: "TVS Jupiter",
    category: "Scooters",
    brand: "TVS",
    year: 2020,
    price: 55000,
    kmDriven: 14200,
    fuelType: "Petrol",
    transmission: "Automatic",
    owners: "1st Owner",
    location: "Nagpur, Maharashtra",
    color: "#7a5cc9",
    condition: "Excellent",
    shortDescription: "TVS Jupiter with large under-seat storage, well maintained.",
    description:
      "TVS Jupiter in great condition with spacious under-seat storage and comfortable ride quality. No major repairs, regularly serviced, single owner.",
    features: ["Large Under-seat Storage", "Telescopic Suspension", "USB Charging Port"],
    images: 3,
    seller: { name: "Rohit Verma", phone: "+91 91234 56789", verified: true }
  },
  {
    id: 9,
    slug: "hero-splendor-plus-2021",
    title: "Hero Splendor Plus",
    category: "Bikes",
    brand: "Hero",
    year: 2021,
    price: 58000,
    kmDriven: 11000,
    fuelType: "Petrol",
    transmission: "Manual",
    owners: "1st Owner",
    location: "Mumbai, Maharashtra",
    color: "#2a8a5a",
    condition: "Excellent",
    shortDescription: "India's most trusted commuter bike, low running, great mileage.",
    description:
      "Fuel-efficient and low-maintenance Hero Splendor Plus, perfect for daily commuting. Well looked after with timely servicing and no mechanical issues.",
    features: ["i3S Start-Stop", "Integrated Braking System", "LED DRL"],
    images: 3,
    seller: { name: "Karan Mehta", phone: "+91 90909 12345", verified: false }
  },
  {
    id: 10,
    slug: "mahindra-thar-lx-2021",
    title: "Mahindra Thar LX",
    category: "Cars",
    brand: "Mahindra",
    year: 2021,
    price: 1495000,
    kmDriven: 19500,
    fuelType: "Diesel",
    transmission: "Automatic",
    owners: "1st Owner",
    location: "Pune, Maharashtra",
    color: "#8a8a2a",
    condition: "Excellent",
    shortDescription: "4x4 Thar LX automatic, hardtop, garage-kept and lightly used.",
    description:
      "Mahindra Thar LX 4x4 diesel automatic in hardtop configuration. Garage-kept, driven mostly on weekends, no off-road abuse. Comes with factory accessories.",
    features: ["4x4 Drive", "Touchscreen Infotainment", "Cruise Control", "Roll Cage"],
    images: 5,
    seller: { name: "Priya Nair", phone: "+91 99887 76655", verified: true }
  }
];

const testimonials = [
  {
    name: "Sanjay Kulkarni",
    text: "Sold my old Activa within two days of listing. Smooth experience end to end.",
    rating: 5
  },
  {
    name: "Neha Deshmukh",
    text: "Found a genuine single-owner Swift at a fair price. Seller details were accurate.",
    rating: 5
  },
  {
    name: "Amit Joshi",
    text: "Listing my bike was quick and the buyer contacted me the same evening.",
    rating: 4
  }
];

const siteInfo = {
  name: "SecondGear",
  tagline: "Buy & sell used cars, bikes and scooters — trusted by thousands.",
  email: "support@secondgear.example",
  phone: "+91 90000 11122",
  address: "2nd Floor, Trade Center, FC Road, Pune, Maharashtra, India",
  founded: 2019
};

module.exports = { listings, testimonials, siteInfo };
