import { useRef } from "react";
import { useImageReveal, useHeadlineReveal } from "../hooks/gsap";

const About = () => {
  const aboutImageRef = useRef(null);
  const aboutHeadlineRef = useRef(null);

  useImageReveal(aboutImageRef, 0.5);
  useHeadlineReveal(aboutHeadlineRef, 1);

  return (
    <div className="about container" id="about">
      <div className="about-wrapper">
        <h2 ref={aboutHeadlineRef}>About Me</h2>
        <div className="about-img" ref={aboutImageRef}>
          <img
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1676059221/git_m6zhkt.jpg"
            alt=""
          />
        </div>
        <div className="about-left">
          <p>
            I am a front-end developer with a passion for creating user-friendly
            and visually appealing websites. I have expertise in HTML, CSS,
            JavaScript, and React, and have a strong understanding of responsive
            design and cross-browser compatibility. I stay up-to-date with the
            latest development trends and techniques to ensure that my projects
            are up to industry standards. My goal is to deliver a seamless user
            experience that meets and exceeds the needs of my clients and their
            users.
          </p>
          <a
            href="https://docs.google.com/document/d/1EMSJU63KL6L1NDfXlTS9F_nWjINVLwZhYC0BuyFrA9w/edit?usp=sharing"
            target="_blank"
            rel="noreferrrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:border-cyan-400/20 hover:bg-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
