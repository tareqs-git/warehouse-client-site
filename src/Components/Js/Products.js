import React from 'react';
import Product from './Product';
import useProducts from './UseProducts';
import './../Css/Products.css';
const Products = () => {
    const [products] = useProducts();
    const Products = products.slice(0, 100);

    return (
        <div className='bg-black pb-5'>
            <h2 className='text-warning py-5 mx-auto'>INVENTORY</h2>
            <div className='products w-75 mx-auto'>

                {
                    Products?.map(homeProduct => <Product
                        key={homeProduct._id}
                        Product={homeProduct}
                    ></Product>)
                }
            </div>
        </div>
    );
};


export default Products;