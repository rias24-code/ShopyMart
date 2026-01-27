import { useEffect, useState } from "react";
import "./Hero.css";

const slides = [
  { title: "Big Sale", subtitle: "Up to 50% OFF", image: "/images/slide1.jpg" },
  { title: "New Arrivals", subtitle: "Latest Fashion Trends", image: "/images/slide2.jpg" },
  { title: "Best Deals", subtitle: "Limited Time Offer", image: "/images/slide1.jpg" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;