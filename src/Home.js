import React from 'react';
const Home = () => {
    return ( 
        <section className="main-page background--router">
            <div className="mobile-main-container">
                <h1>O nas</h1>
                <div className="about-us">
                    <p>Dachy to nasza specjalność. Remontujemy i budujemy dachy od wielu lat.
                        Jesteśmy rodzinną firmą, działająca głównie na terenie woj. pomorskiego,
                        choć zdarzało się, że podejmowaliśmy się realizacji inwestycji poza granicami naszego
                        województwa, głównie w województwach ościennych.
                        Nasze usługi świadczymy zarówno dużym przedsiębiorcom, jak i indywidualnym klientom.
                        Nasze doświadczenie i jakość usług dokumentują zrealizowane inwestycje,
                        z których wybrane prezentujemy w zakładce realizacje.
                    </p>
                    <p>Oferujemy najwyższy poziom usług w zakresie:</p>
                    <ul>
                        <li>więźba dachowa – stawianie nowej więźby dachowej, remont, wymiana zużytych elementów</li>
                        <li>pokrycie dachowe - dachówka cementowa, ceramiczna, karpiówka, blachodachówka, blacha na rąbek,
                            blacha
                            trapezowa, papa termozgrzewalna</li>
                        <li>okna i wyłazy dachowe</li>
                        <li>elementy infrastruktury dachowej – stopnie kominiarskie, śniegołapy, kominki wentylacyjne</li>
                        <li>obróbki blacharskie</li>
                        <li>rynny i rynny spustowe</li>
                        <li>kominy – budowa, ocieplanie, obróbka</li>
                        <li>demontaż eternitu</li>
                    </ul>
                </div>
                <img className="main-page__picture" src={require("./images/roof.avif")} alt=""></img>
            </div>
        </section>
    );
}

export default Home;