import React, {Fragment, useContext} from 'react';
import {CategoriesContext} from "../../contexts/categories-context";

import './categoriesPreview.scss'
import CategoryPreview from "../../components/categoryPriview/CategoryPreview";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)

    return (
        <div className='container'>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview
                            key={title}
                            title={title}
                            products={products}/>
                    )
                })
            }


        </div>
    );
};

export default CategoriesPreview;
