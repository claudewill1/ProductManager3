import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
//import AllProducts from '../components/AllProducts'

const ProductForm = (props) => {
    const [title,setTitle] = useState("");
    const [price,setPrice]= useState(0);
    const [description,setDescription] = useState("");
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            title,
            price,
            description
        }

        axios.post('http://localhost:8000/api/products/create',newProduct)
            .then(res=>{
                setProducts([...products,res.data])
                navigate('/')
            })
            .catch(err=> console.log(err));

    }

    return(
        <div className='d-flex justify-content-center'>
            <form onSubmit={handleSubmit}>
                <h1>Product Manager</h1>
                <div>
                    <label>Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)} type="text"/>
                </div>
                <div>
                    <label>Price</label>
                    <input onChange={(e)=> setPrice(e.target.value)} type="number" step="0.01"/>
                </div>
                <div>
                    <label>Description</label>
                    <input onChange={(e)=> setDescription(e.target.value)} type="text"/>
                </div>
                <input type="submit" value="Create" />
            </form>
            
        </div>
    )
}

export default ProductForm;