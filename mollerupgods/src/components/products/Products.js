import React from 'react';
import Product from './Product';

const Products = (props) => {
    const allProducts = props.allProductsProps.map(s => {

        return (
            <Product productsProps={s} />
        )

    });

    return (
        <div>
            {allProducts}
        </div>
    )
}

export default Products;
