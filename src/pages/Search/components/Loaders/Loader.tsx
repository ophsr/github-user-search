import React from 'react';
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './style.scss'

const Loader = () => (
    <div className="loaders">
        <div>
            <ImageLoader />
        </div>
        <div className="loader-info">
            <InfoLoader />
        </div>
    </div>
)

export default Loader;