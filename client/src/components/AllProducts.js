import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const DisplayAllProducts = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        console.log("useEffectFired");
        axios.get("http://localhost:8000/api/products")
        .then((res)=> {
            console.log(res)
            setProducts(res.data);
        })
        .catch((err)=>console.log(err.res));
    },[])

    const handleDeleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=> {
            console.log(res);
            const filteredProducts = products.filter((product, index)=>{
                return product._id !== id;
            });

            console.log(filteredProducts);
            setProducts(filteredProducts);
        })
        .catch((err)=>console.log(err));
    };

    return (
        <div className='container'>
            <h1>Display</h1>
            <table className='table table-dark table-striped text-light'>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index)=>{
                        return(
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td className='d-flex'>
                                    <button className='btn btn-primary'>
                                        <Link className='text-light text-decoration-none' to={`/product/${product._id}/edit`}>EDIT</Link>
                                    </button>{" "}
                                    <button className='btn btn-danger' style={{backgroundColor: "red",color:"white"}}
                                        onClick={()=>handleDeleteProduct(product._id)}>DELETE
                                    </button>{" "}
                                    <Link className='btn btn-success text-light text-decoration-none' to={`/product/${product._id}`}>Details</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DisplayAllProducts;
