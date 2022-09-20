//W tym pliku wyświetlam tylko to , co pokaże mi sie w console.log(props), które ustawiłem wcześniej w realizations.jsx
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SliderTile = (props) => {
    const [value, setValue] = useState(0);
      return (
        <>
            <div className="container">
                <div className='buttons'>
                    <button type="button" className='left__button' onClick={() => value === 0 ? setValue(props.numberOfPictures - 1) : setValue(value - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"/></svg>
                    </button>
                    <button type="button" className='right__button' onClick={() => value === props.numberOfPictures - 1 ? setValue(0) : setValue(value + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>
                    </button>
                    
                </div>
            <Link 
                to={props.sliderAnchorHrefs}
                className='realization__links'
            >
                <img 
                    src={props.arrayOfPictures[value]} 
                    alt={props.sliderImagesAlts[value]} 
                />
                <p>{props.sliderDescription}</p>
            </Link>
            </div>
        </>
    );
}

export default SliderTile;


