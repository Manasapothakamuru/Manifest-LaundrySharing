import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <section className="hero--content">
        <h2 className="hero--title">SELECT A SERVICE & DATE</h2>
        <div className="bookings--info">
          <button className="available--btn">Available Bookings</button>
          <button className="booking-btn">Your Bookings</button>
        </div>
        <h2 className="hero--sub">YOU CAN ONLY BOOK 5 SERVICES AT A TIME</h2>
        <section className="washers--info">
          Washers
          <button className="washers--btn">Available Now</button>
        </section>
        <section className="dryers--info">
          Dryers
          <button className="dryers--btn">Available after 5 PM</button>
        </section>
      </section>
    </div>
  );
}
