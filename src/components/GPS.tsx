import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

function GPS() {
  // navigator.geolocation.getCurrentPosition(function(position) {
  //     console.log("Latitude is :", position.coords.latitude);
  //     console.log("Longitude is :", position.coords.longitude);
  //   });

  return (
    <>
      <Nav />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28993.66901355804!2d46.66859976611895!3d24.71971689812179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2!5e0!3m2!1sar!2ssa!4v1675515788951!5m2!1sar!2ssa"
        width="80%"
        height="800"
        style={{}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer/>
    </>
  );
}

export default GPS;
