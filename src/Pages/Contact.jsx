import React from 'react';

class Contact extends React.Component {
    render() {
     return <section className="contact">
        <div id="ff-compose"></div>
        </section>
     }
     componentDidMount(){
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/108593390326212194144/form/1FAIpQLSfVlF43KcO1mhpO0I9EZcau2S7NZqhLsxsGEtVV1SbbHUft_w/classic.js?div=ff-compose";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
 }
}

export default Contact;

{/* <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg> */}