import React from 'react';

const Img = ({alt, ...props}) => {
    return (
        <img alt={alt} {...props} />
    );
}

export default Img;
