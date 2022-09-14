import React from 'react';
import SliderTile from '../components/SliderTile';
import SliderList from '../components/SliderList';


const Realizations = () => {

    return (
        <section id="realizations" className="background--router">
            <h1>Realizacje</h1>
            <div className="slider--containter">
            {
                SliderList.map((slider, index) => {
                    return (
                        <SliderTile 
                        key={index}
                        sliderAnchorHrefs = { slider.sliderAnchorHref }
                        numberOfPictures = { slider.sliderImages.length }
                        arrayOfPictures = { slider.sliderImages }
                        sliderDescription = { slider.sliderDescription }
                        sliderImagesAlts = { slider.sliderImagesAlts }
                        >    
                        </SliderTile>
                    )
                })
            }
            </div>
        </section>
    );
}
    export default Realizations;
