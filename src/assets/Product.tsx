
import banner01 from "../assets/images/banner-1.jpg"
import banner02 from "../assets/images/banner-2.jpg"
import  card01 from  "../assets/images/cat1.jpg"
import  card02 from  "../assets/images/cat2.jpg"
import  card03 from  "../assets/images/cat3.jpg"

import  card04 from  "../assets/images/cat4.jpg"
import  card05 from  "../assets/images/cat5.jpg"
import  card06 from  "../assets/images/cat6.jpg"

import  card07 from  "../assets/images/cat7.jpg"
import  card08 from  "../assets/images/cat8.jpg"
import  card09 from  "../assets/images/cat9.jpg"


import card1 from "../assets/images/pro-img-01.jpg"
import card3 from "../assets/images/pro-img-04.jpg"
import card4 from "../assets/images/pro-img-05.jpg"
import card5 from "../assets/images/pro-img-06.jpg"
import card6 from "../assets/images/pro-img-08.jpg"
import card7 from "../assets/images/pro-img-10.jpg"
import card8 from "../assets/images/pro-img-11.jpg"
import card9 from "../assets/images/pro-img-13.jpg"
import hcard1 from "../assets/images/pro-img-4.jpg"
export  const serviceData = [
  {
    img: banner01,
    title: "Fresh fruits,vagetable on our product",
  },
  {
    img:banner02,
    title: "vagetable eggplant 100% fresh food",
    
  }]

  export const cards = [
  { id: 1, name: "Card 1", image: card01},
  { id: 2, name: "Card 2", image: card02},
  { id: 3, name: "Card 3", image: card03},
  { id: 4, name: "Card 4", image: card04 },
  { id: 5, name: "Card 5", image: card05 },
  { id: 6, name: "Card 6", image: card06 },
  { id: 7, name: "Card 7", image: card07 },
  { id: 8, name: "Card 8", image: card08 },
  { id: 9, name: "Card 9", image:card09 },
  
];

export const products = [
  {
    id: "01",
    productName: "Fresh Organic food",
    imgUrl: card1,
    price: "$150.00 USD",
    rating: 4,
    discount: 10,
    partner: "Nature's Best",
    description: "Fresh organic food grown without pesticides. Great for health-conscious diets.",
    isNew: true,
  },
 
  {
    id: "03",
    productName: "Fresh litchi 100% organic",
    imgUrl: card3,
    hoverimg: hcard1,
    price: "$340.00 USD",
    rating: 5,
    discount: 15,
    partner: "Organic Life",
    description: "Delicious and juicy litchis, 100% organically grown and packed with nutrients.",
    isNew: false,
  },

  {
    id: "04",
    productName: "Vegetable tomato fresh",
    imgUrl: card4,
    price: "$160.00 USD",
    rating: 4,
    discount: 5,
    partner: "FreshFields",
    description: "Red ripe tomatoes perfect for cooking and salads. Naturally grown and handpicked.",
    isNew: false,
  },
  {
    id: "05",
    productName: "Natural Grassbean",
    imgUrl: card5,
    price: "$50.00 USD",
    rating: 3,
    discount: 20,
    partner: "Green Harvest",
    description: "Wholesome grassbeans rich in protein and fiber. Perfect for stews and soups.",
    isNew: true,
  },
  {
    id: "06",
    productName: "Orange juice (5ltr)",
    imgUrl: card6,
    price: "$99.00 USD",
    rating: 4,
    discount: 8,
    partner: "Citrus Co.",
    description: "Freshly squeezed orange juice with no added sugar. Rich in vitamin C.",
    isNew: false,
  },
  {
    id: "07",
    productName: "Shrimp jimbo (5Lb)",
    imgUrl: card7,
    price: "$250.00 USD",
    rating: 5,
    discount: 18,
    partner: "Ocean Fresh",
    description: "Premium quality shrimp for gourmet seafood dishes. Sustainably sourced.",
    isNew: true,
  },
  {
    id: "08",
    productName: "Fresh guava",
    imgUrl: card8,
    price: "$68.00 USD",
    rating: 4,
    discount: 12,
    partner: "Tropical Treats",
    description: "Crisp and sweet guavas full of fiber and antioxidants. Perfect as a snack.",
    isNew: false,
  },
  {
    id: "09",
    productName: "Orange",
    imgUrl: card9,
    price: "$260.00 USD",
    rating: 3,
    discount: 10,
    partner: "Fruit Basket",
    description: "Juicy oranges packed with vitamins. Perfect for juicing or eating fresh.",
    isNew: true,
  }
];
