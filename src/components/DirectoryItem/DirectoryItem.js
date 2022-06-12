import React from 'react';
import './directoryItem.scss'

const DirectoryItem = ({category}) => {
    let {title, imageUrl} = category
    return (
        <div className="directory" >
            <div className="directory__banner" style={{
                backgroundImage:`url(${imageUrl})`
            }}>
            </div>
                <div className="directory__body">
                    <h2 className="directory__title">
                        {title}
                    </h2>
                    <p className="directory__subTitle">
                        Shop Now
                    </p>
                </div>

        </div>
    );
};

export default DirectoryItem;
