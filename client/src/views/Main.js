import React, {useState} from 'react'
import axios from 'axios' 
import ProductForm from '../components/ProductForm'
import DisplayAllProducts from '../components/AllProducts'

const Main = (props) =>{
    const [product,setProduct] = useState([]);
    return (
        <div>
            <ProductForm product={product} setProduct={setProduct}/>
            <hr/>
            <DisplayAllProducts product={product} setProduct={setProduct}/>

        </div>
    )
}

export default Main