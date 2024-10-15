import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

import { CreateDots } from "./CreateDots";
import { ArrowLeft } from "./ArrowLeft";
import { ArrowRight } from "./ArrowRight";

type Breakpoint = {
  breakpoint: { max: number; min: number };
  items: number;
  slidesNumberToSlide: number;
};

type ResponsiveProps = {
  [key: string]: Breakpoint;
};

type CustomSliderProps = {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
  responsive?: ResponsiveProps;
  dots?: boolean;
};

const CustomSlider: React.FC<CustomSliderProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
  responsive,
  dots = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [setSlideView, setSetSlideView] = useState<number>(1);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const refSliderWrapper = useRef<HTMLDivElement>(null);

  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  );
  const slidesNumber = Math.ceil(childrenArray.length / setSlideView);
  const itemWidth = width / setSlideView;

  const updateWidth = useCallback(() => {
    if (refSliderWrapper.current) {
      setWidth(refSliderWrapper.current.offsetWidth);
    }
  }, []);

  const updateSetSlideView = useCallback(() => {
    const currentWidth = window.innerWidth;

    if (!responsive) {
      setSetSlideView(1);
      return;
    }

    for (const key in responsive) {
      const { breakpoint, items } = responsive[key];
      if (currentWidth <= breakpoint.max && currentWidth >= breakpoint.min) {
        setSetSlideView(items);
        break;
      }
    }
  }, [responsive]);

  useEffect(() => {
    updateWidth();
    updateSetSlideView(); // Update slide view immediately on mount

    const handleResize = () => {
      updateWidth();
      updateSetSlideView();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateWidth, updateSetSlideView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesNumber);
  }, [slidesNumber]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slidesNumber) % slidesNumber
    );
  }, [slidesNumber]);

  // Auto slide effect
  useEffect(() => {
    if (autoSlide) {
      slideIntervalRef.current = setInterval(nextSlide, autoSlideInterval);
    }
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <div ref={refSliderWrapper} className="relative w-full overflow-hidden">
      <ul
        className="flex gap-2 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100.5}%)`,
        }}
      >
        {childrenArray.map((child, index) => (
          <li
            key={index}
            className="flex-shrink-0"
            style={{ width: `${itemWidth - 6}px` }}
          >
            {child}
          </li>
        ))}
      </ul>

      {/* Navigation Buttons */}
      {currentIndex > 0 && <ArrowLeft onClick={prevSlide} />}
      {currentIndex < slidesNumber - 1 && <ArrowRight onClick={nextSlide} />}

      {/* Pagination Dots */}
      {dots && (
        <CreateDots
          length={slidesNumber}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
};

export default CustomSlider;
