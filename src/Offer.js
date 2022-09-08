import React from 'react';
const Offer = () => {
    return ( 
    <section id="offer" className="background--router">
        <h1>Kompleksowa budowa dachów</h1>
        <div className="desktop--row">
            <div className="material--wood">
                <div>
                    <img src={require("./images/wood.png")} alt="wood logo"></img>
                    <h2>Drewno na dachu</h2>
                </div>
                <ul>
                    <li>więźba dachowa – budowa nowych konstrukcji, remont i wymiana zużytych elementów</li>
                    <li>łaty i kontrłaty – ich odpowiedni montaż jest gwarancją prawidłowego umocowania dachówki, blachodachówki
                        itp., jak również estetycznego wyglądu dachu</li>
                    <li>podbitka – to taka kropka nad „i” jest w dużej mierze elementem wpływający na estetykę dachu. Dodatkowo
                        dociepla dom i chroni więźbę przed niekorzystnym wpływem warunków atmosferycznych</li>
                </ul>
            </div>
            <div className="material--tile">
                <div>
                    <img src={require("./images/tile.png")} alt="tile logo"></img>
                    <h2>Dachówka</h2>
                </div>
                <p>
                    Na rynku obecnych jest wiele rodzajów dachówki ceramicznej i cementowej.
                    Jest to m.in.
                </p>
                <ul>
                    <li>karpiówka</li>
                    <li>dachówka klasztorna</li>
                    <li>dachówka ceramiczna płaska</li>
                    <li>mniszka</li>
                    <li>holenderka</li>
                    <li>marsylka</li>
                    <li>łupek</li>
                </ul>
                <p>
                    Zgodnie z życzeniem Klienta
                    oferujemy krycie każdą z nich.
                </p>
            </div>
            <div className="material--tinware">
                <div>
                    <img src={require("./images/tinware.png")} alt="tinware logo"></img>
                    <h2>Blacha</h2>
                </div>
                <p>
                    Wykonujemy pokrycia dachowe ze wszystkich dostępnych na rynku rodzajów blach, takich jak:
                </p>
                <ul>
                    <li>blachodachówka</li>
                    <li>blacha na rąbek</li>
                    <li>blachodachówka modułowa</li>
                    <li>blachodachówka z posypką</li>
                    <li>blacha trapezowa</li>
                </ul>
            </div>
            <div className="material--mug">
                <div>
                    <img src={require("./images/mug.png")} alt="mug logo"></img>
                    <h2>Papa</h2>
                </div>
                <p>
                    Oferujemy krycie dachów papą oraz hydroizolacje z użyciem m.in.
                </p>
                <ul>
                    <li>papy termozgrzewalnej</li>
                    <li>podkładowej</li>
                    <li>nawierzchniowej</li>
                    <li>styropapy</li>
                </ul>
            </div>
            <div className="material--flashings">
                <div>
                    <img src={require("./images/flashings.png")} alt="flashings logo"></img>
                    <h2>Obróbki blacharskie</h2>
                </div>
                <p>
                    Dbałość o szczegóły w wykonaniu wszystkich elementów dachu od początku do końca jest gwarantem
                    solidności,
                    trwałości oraz bezproblemowej eksploatacji zbudowanych przez nas dachów.
                    Oferujemy profilowanie i montaż niezbędnych obróbek blacharskich.
                </p>
            </div>
            <div className="material--windows">
                <div>
                    <img src={require("./images/windows.png")} alt="windows logo"></img>
                    <h2>Reszta infrastruktury dachowej</h2>
                </div>
                <p>
                    Montujemy:
                </p>
                <ul>
                    <li>okna i wyłazy dachowe</li>
                    <li>okna i wyłazy dachowe</li>
                    <li>okna i wyłazy dachowe</li>
                    <li>kominki wentylacyjne</li>
                    <li>stopnie kominiarskie</li>
                    <li>śniegołapy</li>
                </ul>
            </div>
        </div>
    </section>
    );
}

export default Offer;