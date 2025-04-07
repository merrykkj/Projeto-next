"use client";

import { useRef, useEffect } from "react";
import "./home.css";
import Carrossel from "../components/carrossel/carrossel.jsx"; // o carrossel de baixo

export default function SlidePrincipal() {
  const slidesRef = useRef(null);
  const totalSlides = 3;
  const currentSlide = useRef(0);
  const intervalRef = useRef(null);

  const showSlide = (index) => {
    currentSlide.current = (index + totalSlides) % totalSlides;
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentSlide.current * 100}vw)`;
    }
  };

  useEffect(() => {
    showSlide(0);

    intervalRef.current = setInterval(() => {
      showSlide(currentSlide.current + 1);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slides" ref={slidesRef}>
          <div className="slide">
            <img src="/home/restaurante1.jpg" alt="Slide 1" />
          </div>
          <div className="slide">
            <img src="/home/restaurante2.jpg" alt="Slide 2" />
          </div>
          <div className="slide">
            <img src="/home/scooter.jpg" alt="Slide 3" />
          </div>
        </div>

        <div className="controls">
          <button className="control-btn" onClick={() => showSlide(currentSlide.current - 1)}>❮</button>
          <button className="control-btn" onClick={() => showSlide(currentSlide.current + 1)}>❯</button>
        </div>
      </div>

      {/* Carrossel de baixo */}
      <section style={{ padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Veja mais opções</h2>
        <Carrossel />
      </section>
    </>
  );
}
