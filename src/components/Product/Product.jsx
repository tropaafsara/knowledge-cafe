import React from 'react';
import './Product.css'
import bookmark from '../../images/bookmark.png'
const Product = (props) => {
    // console.log(props.product.Blog_title)
    const {id,Author_name,Blog_title, Blog_images, Author_images,Publish_Date,Read_time} = props.product;
    const handleBookmarks   =props.handleBookmarks;




    
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

            <div className='right-div'>
            <p>{Read_time} min read</p>
            <img onClick={()=>handleBookmarks(props.product)} className='bookmark-logo' src={bookmark} alt="" srcset="" />
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