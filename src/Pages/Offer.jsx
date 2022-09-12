import React from 'react';
import MaterialTile from '../components/MaterialTile'


const Offer = () => {
    const woodImage = require("../images/Offer-images/wood.png");
    const tileImage = require("../images/Offer-images/tile.png");
    const tinewareImage = require("../images/Offer-images/tinware.png");
    const mugImage = require("../images/Offer-images/mug.png");
    const flashingsImage = require("../images/Offer-images/flashings.png");
    const windowsImage = require("../images/Offer-images/windows.png");

    return ( 
    <section id="offer" className="background--router">
        <h1>Kompleksowa budowa dachów</h1>
        <div className="desktop--row">
            <MaterialTile
                materialClass="material--wood"
                materialIconSrc={woodImage}
                materialIconAlt="wood logo"
                materialTitle="Drewno na dachu"
                >
                <ul>
                    <li>więźba dachowa – budowa nowych konstrukcji, remont i wymiana zużytych elementów</li>
                    <li>łaty i kontrłaty – ich odpowiedni montaż jest gwarancją prawidłowego umocowania dachówki, blachodachówki
                        itp., jak również estetycznego wyglądu dachu</li>
                    <li>podbitka – to taka kropka nad „i” jest w dużej mierze elementem wpływający na estetykę dachu. Dodatkowo
                        dociepla dom i chroni więźbę przed niekorzystnym wpływem warunków atmosferycznych</li>
                </ul>
            </MaterialTile>
            <MaterialTile
                materialClass="material--tile"
                materialIconSrc={tileImage}
                materialIconAlt="tile logo"
                materialTitle="Dachówka"
                >
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
            </MaterialTile>
            <MaterialTile
                materialClass="material--tinware"
                materialIconSrc={tinewareImage}
                materialIconAlt="tinware logo"
                materialTitle="Blacha"
                >
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
            </MaterialTile>
            <MaterialTile
                materialClass="material--mug"
                materialIconSrc={mugImage}
                materialIconAlt="flashings logo"
                materialTitle="Papa"
                >
                <p>
                    Oferujemy krycie dachów papą oraz hydroizolacje z użyciem m.in.
                </p>
                <ul>
                    <li>papy termozgrzewalnej</li>
                    <li>podkładowej</li>
                    <li>nawierzchniowej</li>
                    <li>styropapy</li>
                </ul>
            </MaterialTile>
            <MaterialTile
                materialClass="material--flashings"
                materialIconSrc={flashingsImage}
                materialIconAlt="flashings logo"
                materialTitle="Obróbki blacharskie"
                >
                <p>
                    Dbałość o szczegóły w wykonaniu wszystkich elementów dachu od początku do końca jest gwarantem
                    solidności,
                    trwałości oraz bezproblemowej eksploatacji zbudowanych przez nas dachów.
                    Oferujemy profilowanie i montaż niezbędnych obróbek blacharskich.
                </p>
            </MaterialTile>
            <MaterialTile
                materialClass="material--windows"
                materialIconSrc={windowsImage}
                materialIconAlt="windows logo"
                materialTitle="Reszta infrastruktury dachowej"
                >
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
            </MaterialTile>
        </div>
    </section>
    );
}

export default Offer;