import React, {useContext} from 'react';
import {ProductsContext} from "../../contexts/product-context";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Shop_component.scss'
const Shop_component = () => {
    const {products} = useContext(ProductsContext)

    return (
        <div className='shop container'>
            <div className="shop__wrapper">
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Shop_component;
