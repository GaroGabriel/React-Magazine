import React from 'react';
import './category.scss'

const Category = ({category}) => {
    let {title, imageUrl} = category
    return (
        <div className="category" >
            <div className="category__banner" style={{
                backgroundImage:`url(${imageUrl})`
            }}>
            </div>
                <div className="category__body">
                    <h2 className="category__title">
                        {title}
                    </h2>
                    <p className="category__subTitle">
                        Shop Now
                    </p>
                </div>

        </div>
    );
};

export default Category;
