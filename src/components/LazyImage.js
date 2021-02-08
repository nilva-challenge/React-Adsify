import React from "react";
// import styled, { keyframes } from "styled-components";
// import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";


const LazyImage = ({ src, alt }) => {
    const refPlaceholder = React.useRef();

    const removePlaceholder = () => {
        refPlaceholder.current.remove();
    };

    return (
        <div>
            {/* <Placeholder ref={refPlaceholder} /> */}
            <LazyLoad>
                <div
                    onLoad={removePlaceholder}
                    onError={removePlaceholder}
                    src={src}
                    alt={alt}
                />
            </LazyLoad>
        </div>
    );
};

// LazyImage.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired
// };

export default LazyImage;