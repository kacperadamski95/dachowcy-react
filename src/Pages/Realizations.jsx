import React from 'react';
import SliderTile from '../components/SliderTile';
import sliderData from '../data/sliderData';


const Realizations = () => {

    return (
        <section id="realizations" className="section--background">
            <h1>Realizacje</h1>
            <div className="slider--containter">
            {
                sliderData.map((slider, index) => {
                    return (
                        <SliderTile 
                        key={index}
                        realizationLink = { slider.sliderAnchorHref }
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
