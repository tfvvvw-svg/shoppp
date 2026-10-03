import { PRODUCTS } from '../products'

export function findProduct(id) {
  let i = 0
  while (i < PRODUCTS.length) {
    if (PRODUCTS[i].id === id) {
      return PRODUCTS[i]
    }
    i = i + 1
  }
  return null
}

export function getCount(cart) {
  let count = 0
  let i = 0
  while (i < cart.length) {
    count = count + cart[i].qty
    i = i + 1
  }
  return count
}

export function getRows(cart) {
  let rows = []
  let i = 0
  while (i < cart.length) {
    let product = findProduct(cart[i].id)
    if (product) {
      rows.push({ product: product, qty: cart[i].qty })
    }
    i = i + 1
  }
  return rows
}

export function findProducts(text) {
  let list = []
  if (!text) {
    return list
  }

  let low = text.toLowerCase()

  let i = 0
  while (i < PRODUCTS.length) {
    let name = PRODUCTS[i].name.toLowerCase()
    if (name.indexOf(low) !== -1) {
      list.push(PRODUCTS[i])
    }
    if (list.length === 5) {
      break
    }
    i = i + 1
  }

  return list
}

export function getTotal(rows) {
  let total = 0
  let i = 0
  while (i < rows.length) {
    total = total + rows[i].product.price * rows[i].qty
    i = i + 1
  }
  return total
}
