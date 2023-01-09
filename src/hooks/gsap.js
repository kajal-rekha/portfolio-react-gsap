import gsap from "gsap";
import { useEffect } from "react";

export const useLinkDownfall = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

export const useLineForward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 2,
        delay: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

export const useTextUpward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

export const useBoxScaling = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        delay: 2,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};
