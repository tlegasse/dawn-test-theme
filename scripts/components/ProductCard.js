import React from "react"
import './ProductCard.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const ProductCard = ({ product }) => (
    <div className="card-wrapper">
        {JSON.stringify(product.images)}
        <a href={window.location + '/products/' + product.handle} className="full-unstyled-link">
            <OwlCarousel className='owl-theme' loop margin={10} nav>
                {product.images.map((value,key)=> (
                    <div class="item">
                        <img src={value} alt={product.title} />
                    </div>
                ))}
            </OwlCarousel>

            <span className="visually-hidden">{product.title}</span>

            <div className="card card--product" tabIndex="-1">
            <div className="card__inner">
                
            <div className="card__content"><h2 className="card__text h2">{product.title}</h2></div>
                <div className="card__badge">
                </div>
            </div>
            </div>

            <div className="card-information">
            <div className="card-information__wrapper">
                {product.price}
            </div>
            </div>
        </a>
    </div>
)