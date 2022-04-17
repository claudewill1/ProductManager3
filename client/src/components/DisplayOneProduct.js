import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'

const DisplayOneProduct = () => {
    const { id } = useParams();
    console.log(id);
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const handleDeleteProduct = (id)=> {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            navigate("/");
        })
        .catch((err)=> console.log(err));
    };
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            const { data } = res;
            console.log(res);
            setProduct(data);
        })
        .catch((err) => console.log(err));
    },[]);
    return (
        <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p> 
            <button className='btn btn-danger' onClick={()=>handleDeleteProduct(product.id)}>DELETE</button>
        </div>
    )
}

export default DisplayOneProduct;