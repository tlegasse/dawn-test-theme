import ReactDOM from "react-dom"
import React from "react"
import { ProductCards } from "./components/ProductCards"

const rootEl = document.getElementById("main-collection-product-grid")
const productData = JSON.parse(document.getElementById('collection-product-data').textContent)

rootEl && ReactDOM.render(<ProductCards products={productData} />, rootEl)