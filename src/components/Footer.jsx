import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <address className="localization">
                    <img src={require("../images/Footer-images/placeholder-min-min.png")} alt="ikonka lokalizacji" width="51.2" height="51.2"></img>
                    <a target="_blank"
                        href="https://www.google.com/maps/place/Benowo+7,+82-420+Benowo/@53.8929861,18.9235004,17z/data=!3m1!4b1!4m5!3m4!1s0x4702a42cf149dbc1:0xc6bb4acc0cce881a!8m2!3d53.8929861!4d18.9256891">
                        Benowo 7
                        <br></br>
                        82-420 Ryjewo
                        <br></br>
                    </a>
                </address>
                <address className="phone">
                    <img src={require("../images/Footer-images/phone-min-min.png")} alt="ikonka telefonu" width="51.2" height="51.2"></img>
                    <a href="tel:601675058">
                        Krzysztof Dobies
                        <br></br>
                        601-675-058
                    </a>
                </address>
            </div>
            <div>
                <address className="phone">
                    <img src={require("../images/Footer-images/phone-min-min.png")} alt="ikonka telefonu" width="51.2" height="51.2"></img>
                    <a href="tel:601675024">
                        Elżbieta Dobies
                        <br></br>
                        601-675-024
                    </a>
                </address>
                <address className="email">
                    <img src={require("../images/Footer-images/email-min-min.png")} alt="ikonka maila" width="51.2" height="51.2"></img>
                    <a href="mailto: ela.dobies@gmail.com">
                        ela.dobies@gmail.com
                    </a>
                </address>
            </div>
        </footer>
    );
}
 
export default Footer