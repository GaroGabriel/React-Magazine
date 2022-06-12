import React from 'react';
import './categoryPreview.scss'
import ProductCard from "../ProductCard/ProductCard";
import {Link} from "react-router-dom";

const CategoryPreview = ({title, products}) => {
    return (
        <div className='categoryPreview'>
            <h2>
                <Link to={title.toLowerCase()}
                    className="categoryPreview__title">
                        {title.toUpperCase()}
                </Link>
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
