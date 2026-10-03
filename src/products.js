import bag from './assets/bag.png'
import boots from './assets/boots.png'
import camera from './assets/camera.png'
import car from './assets/car.png'
import cesar from './assets/cesar.png'
import chair from './assets/chair.png'
import coat from './assets/coat.png'
import cooler from './assets/cooler.png'
import crem from './assets/crem.png'
import gamepad from './assets/gamepad.png'
import jacket from './assets/jacket.png'
import keyboard from './assets/keyboard.png'
import laptop from './assets/laptop.png'
import monitor from './assets/monitor.png'
import pad from './assets/pad.png'
import table from './assets/table.png'

export let PRODUCTS = [
  {
    id: 1,
    name: 'HAVIT HV-G92 Gamepad',
    price: 120,
    oldPrice: 160,
    discount: 40,
    image: gamepad,
    rating: 5,
    reviews: 88
  },
  {
    id: 2,
    name: 'AK-900 Wired Keyboard',
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: keyboard,
    rating: 4,
    reviews: 75
  },
  {
    id: 3,
    name: 'IPS LCD Gaming Monitor',
    price: 370,
    oldPrice: 400,
    discount: 30,
    image: monitor,
    rating: 5,
    reviews: 99
  },
  {
    id: 4,
    name: 'S-Series Comfort Chair',
    price: 375,
    oldPrice: 400,
    discount: 25,
    image: chair,
    rating: 4.5,
    reviews: 99
  },
  {
    id: 5,
    name: 'The north coat',
    price: 260,
    oldPrice: 360,
    discount: 0,
    image: coat,
    rating: 5,
    reviews: 65
  },
  {
    id: 6,
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    discount: 35,
    image: bag,
    rating: 4.5,
    reviews: 65
  },
  {
    id: 7,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    discount: 0,
    image: cooler,
    rating: 4.5,
    reviews: 65
  },
  {
    id: 8,
    name: 'Small BookSelf',
    price: 360,
    oldPrice: 0,
    discount: 0,
    image: table,
    rating: 5,
    reviews: 65
  },
  {
    id: 9,
    name: 'Breed Dry Dog Food',
    price: 100,
    oldPrice: 0,
    discount: 0,
    image: cesar,
    rating: 3,
    reviews: 35
  },
  {
    id: 10,
    name: 'CANON EOS DSLR Camera',
    price: 360,
    oldPrice: 0,
    discount: 0,
    image: camera,
    rating: 4,
    reviews: 95
  },
  {
    id: 11,
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    oldPrice: 0,
    discount: 0,
    image: laptop,
    rating: 5,
    reviews: 325
  },
  {
    id: 12,
    name: 'Curology Product Set',
    price: 500,
    oldPrice: 0,
    discount: 0,
    image: crem,
    rating: 4.5,
    reviews: 145
  },
  {
    id: 13,
    name: 'Kids Electric Car',
    price: 960,
    oldPrice: 0,
    discount: 0,
    image: car,
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ['#FB1314', '#DB4444']
  },
  {
    id: 14,
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    oldPrice: 0,
    discount: 0,
    image: boots,
    rating: 5,
    reviews: 35,
    colors: ['#EEFF61', '#DB4444']
  },
  {
    id: 15,
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    oldPrice: 0,
    discount: 0,
    image: pad,
    rating: 4.5,
    reviews: 55,
    isNew: true,
    colors: ['#000000', '#DB4444']
  },
  {
    id: 16,
    name: 'Quilted Satin Jacket',
    price: 660,
    oldPrice: 0,
    discount: 0,
    image: jacket,
    rating: 4.5,
    reviews: 55,
    colors: ['#184A48', '#DB4444']
  }
]
