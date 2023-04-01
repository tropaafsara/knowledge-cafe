import React, { useEffect, useState } from 'react';

import './Cafe.css'
import Product from '../Product/Product';
const Cafe = () => {
    
    const [products, setProducts]= useState([]);
    const [bookmarked_blogs, setBookmarked_blogs] = useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[]);


    const handleBookmarks =(product)=>{
        const newBookmarked_blogs=[...bookmarked_blogs, product]
        setBookmarked_blogs(newBookmarked_blogs);
        

// const prevBookmak = JSON.parse(localStorage.getItem("WatchTime"));
// if(prevBookmak){
//     console.log(prevBookmak)
//     const sum = prevBookmak+product;
//     localStorage.setItem("WatchTime",sum)
// }else{
//     localStorage.setItem("WatchTime",product)
// }



    }


    
    let total =0;
    
    for (const product of products){
        
        total=total+parseInt(product.Read_time)
       
    }
    // let pew;
    // for(const product of products){
    //     pew =product.Blog_title
    // }
    


    return (
        <div className='cafe-container'>
            <div className="products-container">
            {
                products.map(product=> <Product
                key={product.id}
                product={product}
                handleBookmarks={handleBookmarks}></Product>)

            }
            </div>
            <div >
                <p className='spentTime'><b>Spent time on read : {total} min</b></p>
                <div>
                <h4 className="bookmark-container">Bookmarked Blogs: {bookmarked_blogs.length}</h4>
                
                
                </div>
            </div>
        </div>
    );
};

export default Cafe;