import React from 'react';
import { useState } from 'react';

const SliderTile = () => {
  const [value, setValue] = useState(0);
  const arr = [
        {
          image: require("../images/Realizations-images/kwidzyn/Milosna_1.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_2.jpg"),
        },
        {
          image: require("../images/Realizations-images/kwidzyn/Milosna_3.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_4.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_5.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_6.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_7.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_8.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_9.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_10.jpg"),
        },
        {
            image: require("../images/Realizations-images/kwidzyn/Milosna_11.jpg"),
        }
    ]
      ; 
      return (
        <>
            <div className="container">
                <div className='buttons'>
                    <button type="button" className='left__button' onClick={() => value === 0 ? setValue(arr.length - 1) : setValue(value - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg>
                    </button>
                    <button type="button" className='right__button' onClick={() => value === arr.length - 1 ? setValue(0) : setValue(value + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
                    </button>
                    
                </div>
                <img src={arr[value].image} alt={arr[value].id} />
            <p>Kwidzyn, Pensjonat Willa Miłosna - remont dachu, dachówka Ceramiczna Klasztorna</p>
            </div>
        </>
    );
}

export default SliderTile;
