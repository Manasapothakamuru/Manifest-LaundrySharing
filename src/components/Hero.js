import React from "react";
import WasherAccordion from "./WasherAccordion";
import DryerAccordion from "./DryerAccordion";
import ClubhouseAccordion from "./ClubhouseAccordion";
import BBQgrillAccordion from "./BBQgrillAccordion"

export default function Hero() {
  return (
    <div className="container">
      <section className="hero--content">
        <h2 className="hero--title">SELECT A SERVICE & DATE</h2>
        <div className="bookings--info">
          <button className="available--btn">Available Bookings</button>
          <button className="booking-btn">Your Bookings</button>
        </div>

        <WasherAccordion/>
        <DryerAccordion/>
        <ClubhouseAccordion/>
        <BBQgrillAccordion/>
        
        
       
      </section>
    </div>
  );
}
