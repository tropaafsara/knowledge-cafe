import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props.product)
    const {id,Author_name,Blog_title, Blog_images, Author_images,Publish_Date} = props.product;
    return (
        <div>
            
            <img className='blog-img' src={Blog_images}alt="" srcset="" />

            <div className='outer-div'>
            <div className='inner-div'>
            <img className='author-img' src={Author_images}alt="" srcset="" />
            <div>
            <h3>{Author_name}</h3>
            <p>{Publish_Date}</p>
            </div>
            </div>

            <div>
            <p>5 min read</p>
            <button>bol</button>
            </div>

            </div>
            
            <h2>{Blog_title}</h2>
            <p>#beginners #programming</p>
            <a href="">Mark as read</a>
            <hr></hr>
            
        </div>
    );
};

export default Product;