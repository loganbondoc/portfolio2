import React from 'react';

function IconText({ img, title, description}){
    return(
        <div class = "IconText">
            <img src = {img}></img>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    );
}

export default IconText;