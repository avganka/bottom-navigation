import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 200;
const VISIBILITY_TIMEOUT = 1000;

export const useTapbarVisibility = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [startScroll, setStartScroll] = useState(window.scrollY);
  const [currentScroll, setCurrentScroll] = useState(window.scrollY);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      setCurrentScroll(window.scrollY);

      if (startScroll < currentScroll && currentScroll - startScroll > SCROLL_THRESHOLD) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      const scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setStartScroll(currentScroll);
      }, 500);

      return () => clearTimeout(scrollTimeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentScroll, startScroll]);

  useEffect(() => {
    let visibilityTimeout: NodeJS.Timeout | null = null;
    if (!isScrolling) {
      visibilityTimeout = setTimeout(() => {
        setIsVisible(true);
      }, VISIBILITY_TIMEOUT);
    }
    return () => {
      if (visibilityTimeout) {
        clearTimeout(visibilityTimeout);
      }
    };
  }, [isScrolling]);

  return { isVisible, isScrolling };
};
