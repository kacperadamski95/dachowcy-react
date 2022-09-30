import React from 'react';
import SliderList from '../../components/SliderList';
const realization2 = () => {
    const {sliderDescription, sliderImages, sliderImagesAlts } = SliderList[1];
    return (
        <section className="section--background background--realizations">
            <h1>{sliderDescription}</h1>
            <div className="realizations--images">
            {sliderImages.map((src, index) => {
                return (
                    <img
                        src={src}
                        alt={sliderImagesAlts[index]}>
                    </img>
                )
            })}
            </div>
        </section>
    );
}

export default realization2;

