import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductComp from '../components/ProductComp'
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { getProducts as listProducts } from '../actions/productActions';

export default function List() {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="row center">
            {
            loading? (<LoadingBox></LoadingBox>
            ) : error? ( 
            <MessageBox variant="danger">{error}</MessageBox>
            ) : ( 
            <div>
                {
                    products.map((product) => (
                    <ProductComp countInStock={product.countInStock} name={product.name} price={product.price} imageUrl={product.imageUrl} key={product._id} productId={product._id} />
                    ))
                }
            </div>
             )
            }
        </div>
    );
}