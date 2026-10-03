import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import About from './components/About/About'
import Account from './components/Account/Account'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Product from './components/Product/Product'
import SignUp from './components/SignUp/SignUp'
import Wishes from './components/Wishes/Wishes'
import { auth } from './firebase'
import { translations } from './translations'

function readList(key) {
  let raw = localStorage.getItem(key)
  if (!raw) {
    return []
  }
  return JSON.parse(raw)
}

function App() {
  let [cart, setCart] = useState(readList('cart'))
  let [wishes, setWishes] = useState(readList('wishes'))

  let [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)

  let [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  let t = translations[lang]

  useEffect(function () {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(function () {
    localStorage.setItem('wishes', JSON.stringify(wishes))
  }, [wishes])

  useEffect(function () {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(function () {
    return onAuthStateChanged(auth, current => {
      setUser(current)
      setLoading(false)
    })
  }, [])

  function addToCart(id, qty = 1) {
    setCart(items => {
      let found = items.find(item => item.id === id)

      if (found) {
        return items.map(item => {
          if (item.id === id) return { id: id, qty: item.qty + qty }
          return item
        })
      }

      return [...items, { id: id, qty: qty }]
    })
  }

  function changeQty(id, qty) {
    if (qty < 1) qty = 1

    setCart(items => {
      return items.map(item => {
        if (item.id === id) return { id: id, qty: qty }
        return item
      })
    })
  }

  function removeFromCart(id) {
    setCart(items => items.filter(item => item.id !== id))
  }

  function toggleWish(id) {
    setWishes(ids => {
      if (ids.includes(id)) return ids.filter(x => x !== id)
      return [...ids, id]
    })
  }

  function clearCart() {
    setCart([])
  }

  return (
    <>
      <Header cart={cart} wishes={wishes} user={user} lang={lang} setLang={setLang} t={t} />

      <Routes>
        <Route
          path="/"
          element={
            <Home wishes={wishes} addToCart={addToCart} toggleWish={toggleWish} t={t} />
          }
        />

        <Route path="/contact" element={<Contact t={t} />} />

        <Route path="/about" element={<About t={t} />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              user={user}
              loading={loading}
              changeQty={changeQty}
              removeFromCart={removeFromCart}
              t={t}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishes
              wishes={wishes}
              user={user}
              loading={loading}
              addToCart={addToCart}
              toggleWish={toggleWish}
              t={t}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<Product wishes={wishes} addToCart={addToCart} toggleWish={toggleWish} t={t} />}
        />

        <Route path="/login" element={<Login t={t} />} />

        <Route path="/signup" element={<SignUp t={t} />} />

        <Route path="/account" element={<Account user={user} loading={loading} t={t} />} />

        <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} t={t} />} />

        <Route path="*" element={<NotFound t={t} />} />
      </Routes>

      <Footer t={t} />
    </>
  )
}

export default App
