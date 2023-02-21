import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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

export const useProjectTitleSpan = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    const trigEl = trig.current;

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
        scrollTrigger: {
          trigger: trigEl,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};

export const useProjectLines = (arr, trig) => {
  useEffect(() => {
    const el = arr;
    const trigEl = trig.current;

    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: trigEl,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};

export const useProjectTexts = (arr, trig, delay = 0.5) => {
  useEffect(() => {
    const el = arr;
    const trigEl = trig.current;

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: trigEl,
          start: "top center",
        },
      }
    );
  }, [arr, trig, delay]);
};

export const useProjectsNumbers = (arr, trig) => {
  useEffect(() => {
    const el = arr;
    const trigEl = trig.current;

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: trigEl,
          start: "top center",
        },
      }
    );
  }, [arr, trig]);
};
