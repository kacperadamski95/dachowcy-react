import React from 'react';
import SliderList from '../../components/SliderList';
const realization1 = () => {
    return ( 
        <section className="background--router">
        <h1>Realizacja 1</h1>
        <div className="desktop--row">
            { SliderList[0].sliderDescription }
            
            {SliderList[0].sliderImages.map((src) => {
                return(
                    <img
                    src = {src}
                    >
                    </img>
                )
            })}
            
        </div>
    </section>
     );
}
 
export default realization1;

