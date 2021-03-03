import React from 'react'
import ProductComp from '../components/ProductComp'

export default function List() {
    const [products, setProducts] = React.useState([]);

  React.useEffect(() => {        

    fetch('http://localhost:5000/api/products')
    .then((response) => response.json())
    .then((data) => setProducts(data)); }, );

        if (products.length < 1){
            return "";
        }

    // let url = 'http://localhost:8081/movies';
    // if (q !== null && q !== "")
    //     url += '/title/' + q;

//     fetch('http://localhost:5000/api/products')
//     .then((response) => response.json())
//     .then((data) => setProducts(data));
// }, [q]);

    return (
        <div>
            { products.map((data,key) => {
                  return <ProductComp name={data.name} price={data.price} key={key} id={data._id} />
                 }) }
        </div>
    )
}