import React, { useEffect, useRef } from "react";

const Carousel = ({ children }) => {
    const carousel = useRef(null);
    const currentIndex = useRef(0);

    const shiftCarousel = () => {
        const carouselInner = carousel.current;

        const carouselHeight = carouselInner ? carouselInner.offsetHeight : 0;

        if (!carouselInner) return;

        const carouselItems = carouselInner.children;
        const totalItems = carouselItems.length;

        if (currentIndex.current === totalItems - 1) {
            carouselInner.style.transition = "none";
            currentIndex.current = 0;
        } else {
            carouselInner.style.transition = "transform 0.5s ease-in-out";
            currentIndex.current++;
        }

        const translateY = -currentIndex.current * (carouselHeight / totalItems);
        carouselInner.style.transform = `translateY(${translateY}px)`;

        Array.from(carouselItems).forEach((item, index) => {
            item.classList.toggle("active-scale", index === currentIndex.current);
            item.classList.toggle("inactive-scale", index !== currentIndex.current);
        });
    };

    useEffect(() => {
        const interval = setInterval(shiftCarousel, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full relative rounded-xl">
            <div ref={carousel} className="flex flex-col absolute top-0 w-full">
                {children}
            </div>
        </div>
    );
};

export default Carousel;
