import { useEffect, useState } from 'react'
import { FiCamera, FiHeadphones, FiMonitor, FiSmartphone } from 'react-icons/fi'
import { IoWatchOutline } from 'react-icons/io5'
import { TbDeviceGamepad2 } from 'react-icons/tb'

import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import banner5 from '../../assets/banner5.png'
import { PRODUCTS } from '../../products'
import BackToTop from './BackToTop'
import Banner from './Banner'
import BestSelling from './BestSelling'
import Categories from './Categories'
import Explore from './Explore'
import FlashSales from './FlashSales'
import Jbl from './Jbl'
import NewArrival from './NewArrival'
import Services from './Services'
import './Home.css'

let MENU = ['m0', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8']

let LIST = [
  { key: 'c0', icon: <FiSmartphone /> },
  { key: 'c1', icon: <FiMonitor /> },
  { key: 'c2', icon: <IoWatchOutline /> },
  { key: 'c3', icon: <FiCamera /> },
  { key: 'c4', icon: <FiHeadphones /> },
  { key: 'c5', icon: <TbDeviceGamepad2 /> },
  { key: 'c6', icon: <FiHeadphones /> },
  { key: 'c7', icon: <FiMonitor /> },
]

let BANNERS = [banner1, banner2, banner3, banner4, banner5]

let LABELS = ['days', 'hours', 'minutes', 'seconds']

let TIMER_START = 3 * 86400 + 23 * 3600 + 19 * 60 + 56

function twoDigits(value) {
  let text = String(value)
  if (text.length < 2) {
    return '0' + text
  }
  return text
}

function splitTime(left) {
  let days = Math.floor(left / 86400)
  let hours = Math.floor((left % 86400) / 3600)
  let minutes = Math.floor((left % 3600) / 60)
  let seconds = left % 60
  return [days, hours, minutes, seconds]
}

function Home(props) {
  let [left, setLeft] = useState(TIMER_START)
  let [slide, setSlide] = useState(0)

  let [flashPos, setFlashPos] = useState(0)
  let [catPos, setCatPos] = useState(0)
  let [explorePos, setExplorePos] = useState(0)

  let [flashAll, setFlashAll] = useState(false)
  let [bestAll, setBestAll] = useState(false)
  let [exploreAll, setExploreAll] = useState(false)

  useEffect(function () {
    let timer = setInterval(function () {
      setLeft(function (value) {
        if (value > 0) {
          return value - 1
        }
        return TIMER_START
      })
    }, 1000)

    return function () {
      clearInterval(timer)
    }
  }, [])

  useEffect(function () {
    let timer = setInterval(function () {
      setSlide(function (value) {
        return (value + 1) % BANNERS.length
      })
    }, 4000)

    return function () {
      clearInterval(timer)
    }
  }, [])

  let parts = splitTime(left)
  let nums = []
  let i = 0
  while (i < parts.length) {
    nums.push(twoDigits(parts[i]))
    i = i + 1
  }

  let flash = []
  let best = []
  let explore = []
  i = 0
  while (i < PRODUCTS.length) {
    if (i < 4) {
      flash.push(PRODUCTS[i])
    } else if (i < 8) {
      best.push(PRODUCTS[i])
    } else {
      explore.push(PRODUCTS[i])
    }
    i = i + 1
  }

  return (
    <div className="home-page page-anim">
      <Banner menu={MENU} banners={BANNERS} slide={slide} setSlide={setSlide} t={props.t} />

      <FlashSales
        items={flash}
        pos={flashPos}
        setPos={setFlashPos}
        showAll={flashAll}
        setShowAll={setFlashAll}
        nums={nums}
        labels={LABELS}
        t={props.t}
        wishes={props.wishes}
        addToCart={props.addToCart}
        toggleWish={props.toggleWish}
      />

      <hr className="divider divider-cats" />

      <Categories categories={LIST} pos={catPos} setPos={setCatPos} t={props.t} />

      <BestSelling
        items={best}
        showAll={bestAll}
        setShowAll={setBestAll}
        t={props.t}
        wishes={props.wishes}
        addToCart={props.addToCart}
        toggleWish={props.toggleWish}
      />

      <Jbl t={props.t} />

      <Explore
        items={explore}
        pos={explorePos}
        setPos={setExplorePos}
        showAll={exploreAll}
        setShowAll={setExploreAll}
        t={props.t}
        wishes={props.wishes}
        addToCart={props.addToCart}
        toggleWish={props.toggleWish}
      />

      <NewArrival t={props.t} />

      <Services t={props.t} />

      <BackToTop t={props.t} />
    </div>
  )
}

export default Home
