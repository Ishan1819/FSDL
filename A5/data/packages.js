// Hardcoded "database" of travel packages, destinations, testimonials and team.
// In a real app this would live in MongoDB/SQL; kept in-memory here per assignment scope.

const packages = [
  {
    id: 1,
    slug: "goa-beach-escape",
    title: "Goa Beach Escape",
    destination: "Goa, India",
    category: "Beach",
    duration: "4 Days / 3 Nights",
    price: 12999,
    rating: 4.6,
    color: "#ff9f68",
    shortDescription: "Sun, sand and seafood — a relaxed getaway along Goa's best beaches.",
    description:
      "Unwind on the golden shores of North and South Goa with this beach-lover's itinerary. Enjoy water sports, beach shacks, sunset cruises and a night out in Baga, all wrapped up in a comfortable 4-day package.",
    highlights: [
      "Beachfront resort stay",
      "Sunset dolphin cruise",
      "Water sports session (parasailing, jet-ski)",
      "Guided Old Goa heritage walk"
    ],
    itinerary: [
      { day: 1, plan: "Arrival, check-in, evening at Baga Beach" },
      { day: 2, plan: "Water sports + Old Goa churches tour" },
      { day: 3, plan: "Sunset dolphin cruise + Tito's Lane nightlife" },
      { day: 4, plan: "Leisure morning, departure" }
    ]
  },
  {
    id: 2,
    slug: "manali-mountain-retreat",
    title: "Manali Mountain Retreat",
    destination: "Manali, Himachal Pradesh",
    category: "Mountain",
    duration: "5 Days / 4 Nights",
    price: 15499,
    rating: 4.8,
    color: "#4f9d69",
    shortDescription: "Snow-capped peaks, river valleys and cozy cafes in the Himalayas.",
    description:
      "Escape to the mountains with visits to Solang Valley, Rohtang Pass (subject to weather) and the charming cafes of Old Manali. Perfect for adventure seekers and couples alike.",
    highlights: [
      "Solang Valley adventure activities",
      "Rohtang Pass excursion",
      "Old Manali cafe hopping",
      "Riverside camping night"
    ],
    itinerary: [
      { day: 1, plan: "Arrival in Manali, local market visit" },
      { day: 2, plan: "Solang Valley adventure sports" },
      { day: 3, plan: "Rohtang Pass day trip" },
      { day: 4, plan: "Old Manali + riverside camping" },
      { day: 5, plan: "Departure" }
    ]
  },
  {
    id: 3,
    slug: "kerala-backwaters",
    title: "Kerala Backwaters Bliss",
    destination: "Alleppey, Kerala",
    category: "Nature",
    duration: "3 Days / 2 Nights",
    price: 10999,
    rating: 4.7,
    color: "#2b8a8a",
    shortDescription: "Drift through palm-fringed canals on a traditional houseboat.",
    description:
      "Experience God's Own Country aboard a private houseboat, cruising the tranquil backwaters of Alleppey with home-cooked Kerala meals and stunning sunset views.",
    highlights: [
      "Private houseboat stay",
      "Traditional Kerala Sadhya meals",
      "Village and canal cruise",
      "Ayurvedic massage session"
    ],
    itinerary: [
      { day: 1, plan: "Boarding houseboat, backwater cruise begins" },
      { day: 2, plan: "Village visit, Ayurvedic spa, overnight on boat" },
      { day: 3, plan: "Morning cruise, disembark, departure" }
    ]
  },
  {
    id: 4,
    slug: "rajasthan-royal-trail",
    title: "Rajasthan Royal Trail",
    destination: "Jaipur - Udaipur, Rajasthan",
    category: "Heritage",
    duration: "6 Days / 5 Nights",
    price: 21999,
    rating: 4.9,
    color: "#c9622a",
    shortDescription: "Forts, palaces and desert culture across royal Rajasthan.",
    description:
      "Travel through the Pink City and the City of Lakes, exploring majestic forts, royal palaces and vibrant local bazaars on this heritage-packed journey.",
    highlights: [
      "Amber Fort elephant/jeep ride",
      "City Palace, Udaipur",
      "Boat ride on Lake Pichola",
      "Local bazaar shopping tour"
    ],
    itinerary: [
      { day: 1, plan: "Arrival in Jaipur, Hawa Mahal visit" },
      { day: 2, plan: "Amber Fort + City Palace Jaipur" },
      { day: 3, plan: "Drive to Udaipur" },
      { day: 4, plan: "City Palace Udaipur + Lake Pichola boat ride" },
      { day: 5, plan: "Local bazaars and leisure" },
      { day: 6, plan: "Departure" }
    ]
  },
  {
    id: 5,
    slug: "andaman-island-hopping",
    title: "Andaman Island Hopping",
    destination: "Port Blair - Havelock, Andaman",
    category: "Beach",
    duration: "5 Days / 4 Nights",
    price: 24999,
    rating: 4.8,
    color: "#1f7a99",
    shortDescription: "Turquoise waters, coral reefs and pristine white-sand beaches.",
    description:
      "Discover the untouched beauty of the Andaman Islands with scuba diving at Havelock, a visit to Radhanagar Beach and the historic Cellular Jail in Port Blair.",
    highlights: [
      "Scuba diving at Havelock Island",
      "Radhanagar Beach visit",
      "Cellular Jail light & sound show",
      "Glass-bottom boat ride"
    ],
    itinerary: [
      { day: 1, plan: "Arrival Port Blair, Cellular Jail evening show" },
      { day: 2, plan: "Ferry to Havelock, Radhanagar Beach" },
      { day: 3, plan: "Scuba diving / snorkeling session" },
      { day: 4, plan: "Glass-bottom boat ride, return to Port Blair" },
      { day: 5, plan: "Departure" }
    ]
  },
  {
    id: 6,
    slug: "himachal-shimla-getaway",
    title: "Shimla Hill Station Getaway",
    destination: "Shimla, Himachal Pradesh",
    category: "Mountain",
    duration: "3 Days / 2 Nights",
    price: 8999,
    rating: 4.4,
    color: "#7a5cc9",
    shortDescription: "A quick colonial-era hill station escape with toy-train charm.",
    description:
      "A short and sweet trip to Shimla covering the Mall Road, Kufri and a ride on the iconic Kalka-Shimla toy train.",
    highlights: [
      "Kalka-Shimla toy train ride",
      "Mall Road & Ridge walk",
      "Kufri snow point visit",
      "Jakhoo Temple trek"
    ],
    itinerary: [
      { day: 1, plan: "Toy train arrival, Mall Road evening walk" },
      { day: 2, plan: "Kufri excursion" },
      { day: 3, plan: "Jakhoo Temple, departure" }
    ]
  }
];

const testimonials = [
  {
    name: "Ananya Sharma",
    trip: "Goa Beach Escape",
    quote: "Everything was so well organized, from pickup to the last day. Would book again!",
    rating: 5
  },
  {
    name: "Rohit Verma",
    trip: "Rajasthan Royal Trail",
    quote: "The heritage tour was breathtaking. Our guide knew so much history about every fort.",
    rating: 5
  },
  {
    name: "Priya Nair",
    trip: "Kerala Backwaters Bliss",
    quote: "The houseboat stay was the highlight of our honeymoon. Highly recommended.",
    rating: 4
  }
];

const team = [
  { name: "Ishan Patil", role: "Founder & Travel Consultant" },
  { name: "Meera Joshi", role: "Itinerary Planner" },
  { name: "Karan Mehta", role: "Customer Relations" }
];

const companyInfo = {
  name: "Wanderly Travels",
  tagline: "Your journey, planned to perfection.",
  email: "contact@wanderlytravels.example",
  phone: "+91 98765 43210",
  address: "3rd Floor, Horizon Plaza, MG Road, Pune, Maharashtra, India",
  founded: 2016
};

module.exports = { packages, testimonials, team, companyInfo };
