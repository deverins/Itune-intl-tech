// productsData.js
import product1 from '../Components/imgs/laptop.png';
import product2 from '../Components/imgs/smart-watch.png';
import product3 from '../Components/imgs/laptop (2).png';
import product4 from '../Components/imgs/usb.png';
import product5 from '../Components/imgs/laptop-2.png';
import product6 from '../Components/imgs/laptop-3.png';
import product7 from '../Components/imgs/sandix.png';
import product8 from '../Components/imgs/iphone-14.png';

const products = [
  {
    id: 1,
    name: "Lenovo ThinkVision",
    description: [
      "21.5 Inch (546mm)",
      "TFT LCD",
      "1920 x 1080",
      "16.7 Million Colours"
    ],
    price: "NGN120,000.00",
    image: `${product1}`,
  },
  {
    id: 2,
    name: "Oraimo Smart Watch",
    description: [
      "Waterproof",
      "Blood Oxygen 24",
      "Fitness Pro"
    ],
    price: "NGN60,000.00",
    image: `${product2}`
  },
  {
    id: 3,
    name: "HP Elitebook 1040",
    description: [
      "Core I7",
      "256SSD",
      "16Gb Ram",
      "8th Gen"
    ],
    price: "NGN290,000.00",
    image: `${product3}`
  },
  {
    id: 4,
    name: "USB Type X to Port",
    description: [
      "Core I7",
      "256SSD",
      "16Gb Ram",
      "8th Gen"
    ],
    price: "NGN290,000.00",
    image:`${product4}`,
  },
  {
    id: 5,
    name: "Dell Latitude 7390 0",
    description: [
      "Core I7",
      "256SSD",
      "16Gb Ram",
      "8th Gen"
    ],
    price: "NGN290,000.00",
    image: `${product5}`,
  },
  {
    id: 6,
    name: "HP Elitebook 1040",
    description: [
      "Core I7",
      "256SSD",
      "16Gb Ram",
      "8th Gen"
    ],
    price: "NGN290,000.00",
    image:`${product6}`,
  },
  {
    id: 7,
    name: "HP Elitebook 1040",
    description: [
      "Core I7",
      "256SSD",
      "16Gb Ram",
      "8th Gen"
    ],
    price: "NGN290,000.00",
    image: `${product7}`,
  },
  {
    id: 8,
    name: "HP Elitebook 1040",
    description: [
      "Core I7",
      "256SSD",
      "16Gb Ram",
      "8th Gen"
    ],
    price: "NGN290,000.00",
    image: `${product8}`,
  },
  // Add other products similarly...
];

export default products;
