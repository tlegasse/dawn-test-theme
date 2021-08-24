import React from "react"
import { ProductCard } from "./ProductCard"

export const ProductCards = ({ products }) => (
  <>
    {products.map((product, index) => (
      <li className="grid__item" key={index} >
          <ProductCard product={product} />
      </li>
    ))}
  </>
)