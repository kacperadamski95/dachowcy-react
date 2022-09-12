import React from 'react';

const MaterialTile = (props) => {

    return (
        <div className={props.materialClass}>
            <div>
                <img 
                    src={props.materialIconSrc} 
                    alt={props.materialIconAlt}>    
                </img>
                <h2>{props.materialTitle}</h2>
            </div>
        
            { props.children }
            
        </div>
    )
}

export default MaterialTile;