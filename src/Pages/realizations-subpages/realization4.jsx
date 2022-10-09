import React from 'react';
import sliderData from '../../data/sliderData';
const realization4 = () => {
    const { sliderDescription, sliderImages, sliderImagesAlts } = sliderData[3];
    return (
        <section className="section--background background--realizations">
            <h1>{sliderDescription}</h1>
            <div className="realizations--images">
                {sliderImages.map((src, index) => {
                    return (
                        <img
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

export default realization4;


