import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function CustomZoom({img, alt}){
    return(
        <Zoom>
            <img class = "zoomed-img"
            alt={alt}
            src={img}
            width="500"
            />
        </Zoom>
    )
}

export default CustomZoom;