import React from 'react';
import SliderList from '../../components/SliderList';
const realization3 = () => {
    const {sliderDescription, sliderImages, sliderImagesAlts } = SliderList[2];
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

export default realization3;

