import React from 'react';

function IconText({ img, title, description}){
    return(
        <div class = "IconText">
            <img src = {img}></img>
            <div class = 'text-cont'>
                <h3>{title}</h3>
                <h4>{description}</h4>
            </div>
        </div>
    );
}

export default IconText;