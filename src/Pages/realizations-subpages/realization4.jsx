import React from 'react';
import SliderList from '../../components/SliderList';
const realization4 = () => {
    return (
        <section className="background--router background--realizations">
            <h1>{SliderList[3].sliderDescription}</h1>
            <div className="realizations--images">
                {SliderList[3].sliderImages.map((src) => {
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

export default realization4;

                
