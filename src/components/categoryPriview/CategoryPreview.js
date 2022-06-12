import React from 'react';
import './categoryPreview.scss'
import ProductCard from "../ProductCard/ProductCard";

const CategoryPreview = ({title, products}) => {
    return (
        <div className='categoryPreview'>
            <h2>
                <span
                    className="categoryPreview__title">
                        {title.toUpperCase()}
                </span>
            </h2>
            <div className="categoryPreview__preview">
                {
                    products.filter((_,index)=>index<4)
                        .map((product)=> <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default CategoryPreview;
