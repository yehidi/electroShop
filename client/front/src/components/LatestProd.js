import React, { useEffect, useState } from 'react'
import ProductComp from '../components/ProductComp'
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import ProductHome from './ProductHome';


export default function List() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const {data} = await axios.get('/api/products');
            setLoading(false);
            setProducts(data);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
        fetchData();
      }, []);

    return (
        <div>
        {
            products.map((data,key) => {
           return <ProductHome name={data.name} price={data.price} imageUrl={data.imageUrl} key={key} id={data._id} />
            })
        }
    </div>
    );
}