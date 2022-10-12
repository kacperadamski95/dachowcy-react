import React from 'react';
import sliderData from '../../data/sliderData';
const realization1 = () => {
    const { sliderDescription, sliderImages, sliderImagesAlts } = sliderData[0];
    return (
        <section className="section--background background--realizations">
            <h1>{sliderDescription}</h1>
            <div className="realizations--images">
                {sliderImages.map((src, index) => {
                    return (
                        <img
                            width='100%'
                            height='auto'
                            key={index}
                            src={src}
                            alt={sliderImagesAlts[index]}>
                        </img>
                    )
                })}
            </div>
        </section>
    );
}

export default realization1;



