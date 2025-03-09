import React from 'react';

function IconText({ img, title, description}){
    return(
        <div className="flex items-center gap-4 p-4">
            <img src={img} alt="icon" className="w-20 h-20 object-contain" />
            <div className="flex flex-col mx-4">
                {title}
                {description}
            </div>
        </div>
    );
}

export default IconText;