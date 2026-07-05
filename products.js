let products = [
  // 🛞 WHEELS & RIMS
  {
    id: 1,
    name: "Apocalypse GEN 3 Bronze Rim (22x14 Jeep Wrangler / Gladiator)",
    price: 599.00,
    category: "Wheels",
    details: "Ultimate Offset | Offroad Rim",
    image: "images/apocalypse-gen3-bronze-rim.jpg"
  },
  {
    id: 2,
    name: "Apocalypse 5-Spoke Wheel Silver (Jeep Gladiator / Wrangler 5 Lug)",
    price: 599.00,
    category: "Wheels",
    image: "images/apocalypse-5-spoke-wheel.jpg"
  },
  {
    id: 3,
    name: "Genuine Mopar Alloy Wheel",
    price: 781.25,
    category: "Wheels",
    image: "images/genuine-mopar-alloy-wheel.jpg"
  },
  {
    id: 4,
    name: "Black Rhino Arsenal Wheel 17x9.5",
    price: 1345.00,
    category: "Wheels",
    image: "images/black-rhino-arsenal-wheel.jpg"
  },
  {
    id: 5,
    name: "17x9.5 Black Rhino Arsenal Wheel (5x127)",
    price: 382.00,
    category: "Wheels",
    image: "images/black-rhino-wheel.jpg"
  },
  {
    id: 6,
    name: "Chrysler Pacifica 18 Inch Alloy Rim",
    price: 845.31,
    category: "Wheels",
    image: "images/chrysler-pacifica-alloy-rim.jpg"
  },

  // 🚙 TIRES
  {
    id: 7,
    name: "37 Inch Offroad Tire 37/13.5R20",
    price: 599.00,
    category: "Tires",
    image: "images/37-inch-offroad-tire.jpg"
  },
  {
    id: 8,
    name: "Mud Claw MTX 33x12.50R18 Tire",
    price: 524.99,
    category: "Tires",
    image: "images/mud-claw-mtx-tire.jpg"
  },

  // 💡 LIGHTS
  {
    id: 9,
    name: "Jeep A-Pillar LED Light Brackets",
    price: 475.00,
    category: "Lights",
    details: "Wrangler / Gladiator 2018–2026",
    image: "images/jeep-a-pillar-led-brackets.jpg"
  },
  {
    id: 10,
    name: "Jeep Wrangler LED Headlight Pair",
    price: 698.87,
    category: "Lights",
    image: "images/jeep-wrangler-headlights.jpg"
  },
  {
    id: 11,
    name: "Jeep Renegade LED DRL Headlight Combo",
    price: 645.99,
    category: "Lights",
    image: "images/jeep-renegade-headlights.jpg"
  },
  {
    id: 12,
    name: '7" LED Headlights, Fog Lights & Tail Lamp Combo (2007-2018 Jeep Wrangler JK)',
    price: 427.91,
    category: "Lights",
    image: "images/led-light-kit.jpg"
  },
  {
    id: 13,
    name: "Smoked Avenger LED Tail Lights with Turn Signal (Jeep Wrangler JK/JKU 2007-2018)",
    price: 140.99,
    category: "Lights",
    image: "images/tail-lights.jpg"
  },

  // 🔧 JEEP PARTS
  {
    id: 14,
    name: "Jeep Wrangler Winch 9500lb (2018–2026)",
    price: 525.00,
    category: "Jeep Parts",
    details: "Heavy-duty off-road winch",
    image: "images/jeep-winch-9500lb.jpg"
  },
  {
    id: 15,
    name: "Jeep Wrangler Fender Liner Front (2018–2025)",
    price: 740.00,
    category: "Jeep Parts",
    details: "Front protective fender liner",
    image: "images/jeep-fender-liner.jpg"
  },
  {
    id: 16,
    name: "Jeep Wrangler Powersteps Running Boards",
    price: 1399.00,
    category: "Jeep Parts",
    image: "images/jeep-running-boards.jpg"
  },
  {
    id: 17,
    name: "Jeep Wrangler Front Grille Bumper",
    price: 1299.00,
    category: "Jeep Parts",
    image: "images/jeep-front-grille-bumper.jpg"
  },
  {
    id: 18,
    name: "Jeep Wrangler Engine Conversion Kit V6 to 6.4 HEMI",
    price: 2346.63,
    category: "Jeep Parts",
    image: "images/jeep-hemi-conversion-kit.jpg"
  },
  {
    id: 19,
    name: "Jeep Wrangler JK OEM 2 Door Black Cloth Rear Seat w/ Buckles (2011-2017)",
    price: 499.99,
    category: "Interior",
    image: "images/rear-seat.jpg"
  },
  {
    id: 20,
    name: "Front Driver & Passenger Door Latch Lock Actuator (Jeep Wrangler TJ 1997-2002)",
    price: 89.99,
    category: "Body Parts",
    image: "images/door-latch.jpg"
  },
  {
    id: 21,
    name: "OEM Rear Left Driver Door Trim Panel (Jeep Wrangler Rubicon 2018-2024)",
    price: 120.00,
    category: "Body Parts",
    image: "images/door-trim.jpg"
  },
  {
    id: 22,
    name: "Front Driveshaft CV Joint (Jeep Liberty 2002-2007)",
    price: 90.99,
    category: "Drivetrain",
    image: "images/cv-joint.jpg"
  },
  {
    id: 23,
    name: "Genuine Mopar 4-Door Factory Half Door Set - Hydro Blue (PBJ)",
    price: 600.99,
    category: "Body Parts",
    image: "images/half-door-set.jpg"
  },
  {
    id: 24,
    name: "Legato Performance Exhaust System Kit (2007-2016 Jeep Wrangler)",
    price: 200.00,
    category: "Exhaust",
    image: "images/legato-exhaust.jpg"
  },
  {
    id: 25,
    name: "OEM Jeep Wrangler JL/JLU 4-Door Black Hardtop",
    price: 1000.00,
    category: "Body Parts",
    image: "images/jlu-hardtop.jpg"
  },
  {
    id: 26,
    name: "Jeep Wrangler Rubicon JK Hood",
    price: 260.00,
    category: "Body Parts",
    image: "images/rubicon-hood.jpg"
  },

  // 🧰 ACCESSORIES
  {
    id: 27,
    name: "Jeep Waterproof Seat Covers",
    price: 920.00,
    category: "Accessories",
    image: "images/jeep-seat-covers.jpg"
  },
  {
    id: 28,
    name: "Waterproof PU Leather Seat Covers for Jeep (5 Pieces)",
    price: 180.90,
    category: "Accessories",
    image: "images/seat-covers.jpg"
  },
  {
    id: 29,
    name: "OEM Heated Steering Wheel",
    price: 530.00,
    category: "Accessories",
    image: "images/dodge-hornet-steering-wheel.jpg"
  },
  {
    id: 30,
    name: "DS18 BASS600.4BTA / JL-SBAR Overhead Sound Bar System",
    price: 160.90,
    category: "Audio",
    image: "images/sound-bar.jpg"
  },
  {
    id: 31,
    name: "Brake Caliper Covers for Mercedes 4MATIC",
    price: 200.85,
    category: "Brakes",
    image: "images/brake-caliper-covers.jpg"
  },

  // 🚗 VEHICLES
  {
    id: 32,
    name: "2021 Jeep Gladiator Sport",
    price: 28995.00,
    category: "Vehicles",
    image: "images/2021-jeep-gladiator-sport.jpg"
  },
  {
    id: 33,
    name: "2019 Jeep Wrangler Sahara",
    price: 20918.00,
    category: "Vehicles",
    image: "images/2019-jeep-wrangler-sahara.jpg"
  },
  {
    id: 34,
    name: "2023 Jeep Wrangler",
    price: 31195.00,
    category: "Vehicles",
    details: "260–470 HP | 3,500 lbs towing",
    image: "images/2023-jeep-wrangler.jpg"
  },
  {
    id: 35,
    name: "Jeep Wrangler Sahara Model",
    price: 33465.00,
    category: "Vehicles",
    details: "272 HP | 18-inch wheels",
    image: "images/jeep-wrangler-sahara-model.jpg"
  }
];