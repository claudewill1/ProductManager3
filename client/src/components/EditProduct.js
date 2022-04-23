import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';
const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const [errors,setErrors] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            const {data} = res;
            setTitle(data.title);
            setPrice(data.price);
            setDescription(data.description);

        })
        .catch((err)=>console.log(err));
    },[]);

    // edit handler
    const handleEditProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}/edit`,{
        title,
        price,
        description
        })
        .then((res)=> {
            console.log(res)
            navigate("/");
        })
        .catch((err)=> {
            console.log(err.response)
            setErrors(err.response.data.errors);
        });
    };

    return (
        <form onSubmit={handleEditProduct}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div>
                <label htmlFor='price'>Price</label>
                <input 
                    id="price"
                    type="number"
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input
                    id="description"
                    type="text"
                    onChange={(e)=>setDescription(e.target.value)}
                    value={description}
                />
            </div>
            <input className='btn btn-primary' type='submit' value='Submit'/>
            {errors && Object.keys(errors).map((errKey,index)=>{
                        return <p style={{color:"red"}} key={index}>{errors[errKey].message}</p>
                    })}
        </form>
    );
};

export default EditProduct;