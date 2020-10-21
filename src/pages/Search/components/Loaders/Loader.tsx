import React from 'react';
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './style.scss'

const Loader = () => (
    <>
        <div className="loader-image">
            <ImageLoader />
        </div>
        <div className="loader-info">
            <InfoLoader />
        </div>
    </>
)

export default Loader;