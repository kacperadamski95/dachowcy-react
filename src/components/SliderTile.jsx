import React from 'react';
import { useState } from 'react';

const SliderTile = () => {
  const [value, setValue] = useState(0);
  const arr = [
        {
          image: require("../images/Realizations-images/kwidzyn/Milosna_1.jpg"),
          text: "Kwidzyn, Pensjonat Willa Miłosna - remont dachu, dachówka Ceramiczna Klasztorna",
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
                <img src={arr[value].image} alt={arr[value].id} />
                <div>
                    <button type="button" onClick={() => value === 0 ? setValue(10) : setValue(value - 1)}>Next</button>
                    <button type="button" onClick={() => value === 10 ? setValue(0) : setValue(value + 1)}>Previous</button>

                </div>
            </div>
            <h2>{arr[value].text}</h2>
        </>
    );
}

export default SliderTile;
