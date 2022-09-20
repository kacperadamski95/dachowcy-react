import React from 'react';
import SliderList from '../../components/SliderList';
const realization2 = () => {
    return (
        <section className="background--router background--realizations">
            <h1>{SliderList[1].sliderDescription}</h1>
            <div className="realizations--images">
                {SliderList[1].sliderImages.map((src) => {
                    return (
                        <img
                            src={src}
                        >
                        </img>
                    )
                })}

            </div>
        </section>
    );
}

export default realization2;

