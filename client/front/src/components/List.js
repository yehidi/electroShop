import React, { useEffect, useState } from 'react'
import ProductComp from '../components/ProductComp'
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'


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
        <div className="row center">
            {
            loading? (<LoadingBox></LoadingBox>
            ) : error? ( 
            <MessageBox variant="danger">{error}</MessageBox>
            ) : ( 
            <div>
                {
                    products.map((data,key) => {
                   return <ProductComp name={data.name} price={data.price} key={key} id={data._id} />
                    })
                }
            </div>
             )
            }
        </div>
    );
}