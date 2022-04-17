import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const ProductList = (props) => {
    const {products,setProducts} = props;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
        })
        .catch((err)=>console.log(err))
    },[])

    

    return (
        <div>
            <hr/>
            <h1>All Products</h1>
            {products.map((product)=>{
                return (
                    <p key={product._id}>Title: {product.title} Price: {product.price}
                    Description: {product.description}</p>

                )
            })}
        </div>
    )
}

export default ProductList;