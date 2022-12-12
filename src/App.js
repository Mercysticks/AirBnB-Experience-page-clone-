import React from "react";
import './App.css';
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Card from "./Component/Card";
import cardsData from "./data.js"


export default function App() {
  let cards = cardsData.map(card => <Card key={card.id} card={card} />)
  return (
    <>
      <Navbar />
      <Hero />
      <section className="card__list">
        {cards}
        </section>
    </>
  )
}