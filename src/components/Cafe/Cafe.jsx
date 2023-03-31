import React, { useEffect, useState } from 'react';
import './Cafe.css'
import Product from '../Product/Product';
const Cafe = () => {
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[]);
    return (
        <div className='cafe-container'>
            <div className="products-container">
            
            {
                products.map(product=> <Product
                key={product.id}
                product={product}></Product>)

            }
            </div>
            <div className="bookmark-container">
                <h4>Bookmarked Blogs</h4>
            </div>
        </div>
    );
};

export default Cafe;