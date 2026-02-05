"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
  link?: string;
  bgColor: string;
}

export default function HeroSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Slides data
  const slides: Slide[] = [
    {
      id: 1,
      image:
        "https://placehold.co/1200x400/F59E0B/white?text=ПРОДУКЦИЯ+МЕЖДУ+ПРИРОДОЙ+И+ЧЕЛОВЕКОМ",
      title: "Продукция между природой и человеком",
      bgColor: "bg-amber-100",
      link: "/products/category-1",
    },
    {
      id: 2,
      image:
        "https://placehold.co/1200x400/8B5CF6/white?text=ПОДАРОК+ОТ+RISINGSTAR",
      title: "Подарок от RisingStar",
      subtitle:
        "Хочешь лайкнуть косметику по уходу за кожей? Мы тебя не обманем",
      bgColor: "bg-purple-500",
      link: "/promotions/risingstar",
    },
    {
      id: 3,
      image:
        "https://placehold.co/1200x400/06B6D4/white?text=Health+Solution+СКИДКИ+30%",
      title: "Бренд месяца Health Solution",
      subtitle: "Скидки до 30%",
      bgColor: "bg-cyan-400",
      link: "/brands/health-solution",
    },
    {
      id: 4,
      image: "https://placehold.co/1200x400/10B981/white?text=АПТЕКА+ВИТАМИНОВ",
      title: "Аптека витаминов",
      bgColor: "bg-emerald-100",
      link: "/categories/vitamins",
    },
    {
      id: 5,
      image:
        "https://placehold.co/1200x400/F59E0B/white?text=СПЕЦИАЛЬНОЕ+ПРЕДЛОЖЕНИЕ",
      title: "Специальное предложение",
      bgColor: "bg-yellow-300",
      link: "/deals",
    },
  ];

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {slide.link ? (
              <Link href={slide.link} className="block h-full w-full">
                <div className={`h-full w-full ${slide.bgColor}`}>
                  <img
                    src={slide.image}
                    alt={slide.title || `Slide ${slide.id}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            ) : (
              <div className={`h-full w-full ${slide.bgColor}`}>
                <img
                  src={slide.image}
                  alt={slide.title || `Slide ${slide.id}`}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-900" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-[#E4A11B]"
                : "w-2 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
