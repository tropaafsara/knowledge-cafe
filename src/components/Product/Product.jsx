import React from 'react';

const Product = (props) => {
    // console.log(props.product)
    const {id,Author_name,Blog_title, Blog_images, Author_images,Publish_Date} = props.product;
    return (
        <div>
            
            <img className='blog-img' src={Blog_images}alt="" srcset="" />
            <img className='author-img' src={Author_images}alt="" srcset="" />
            
            <h3>{Author_name}</h3>
            <p>{Publish_Date}</p>
            <h2>{Blog_title}</h2>
            
        </div>
    );
};

export default Product;