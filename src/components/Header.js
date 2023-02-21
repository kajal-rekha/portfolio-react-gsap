import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useRef } from "react";

import {
  useLinkDownfall,
  useLineForward,
  useTextUpward,
  useBoxScaling,
} from "../hooks/gsap";

const Header = () => {
  const link1 = useRef(null);
  const link2 = useRef(null);
  const link3 = useRef(null);
  const link4 = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const text4 = useRef(null);
  const text5 = useRef(null);
  const text6 = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  const linkArr = [link1, link2, link3, link4];
  const lineArr = [line1, line2, line3, line4];
  const textArr = [text1, text2, text3, text4, text5, text6];
  const boxArr = [box1, box2, box3];

  useLinkDownfall(linkArr);
  useLineForward(lineArr);
  useTextUpward(textArr);
  useBoxScaling(boxArr);
  return (
    <div className="header container">
      <div className="row">
        <h2 ref={text1}>
          K<span>a</span>j<span>a</span>l
        </h2>
        <h2 ref={text2}>
          R<span>ek</span>h<span>a</span>
        </h2>
      </div>

      <hr ref={line1} />

      <div className="row">
        <span ref={link1}>Front-end developer</span>
        <a
          ref={link2}
          href="https://docs.google.com/document/d/1EMSJU63KL6L1NDfXlTS9F_nWjINVLwZhYC0BuyFrA9w/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
        <a
          ref={link3}
          href="mailto:kajalrekha888@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Send Email
        </a>
        <Link ref={link4} href="/contact">
          Contact Me
        </Link>
      </div>

      <div className="row">
        <Link to="/about" className="box about" ref={box1}>
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text3}>Aspiring</h2>
        <Link to="/projects" className="box projects" ref={box2}>
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr ref={line2} />

      <div className="row">
        <h2 ref={text4}>
          MERN St<span>a</span>ck Dev<span>el</span>oper
        </h2>
      </div>

      <hr ref={line3} />

      <div className="row">
        <h2 ref={text5}>Based</h2>
        <Link to="/skills" className="box skills" ref={box3}>
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2 ref={text6}>in Bangladesh</h2>
      </div>

      <hr ref={line4} />
    </div>
  );
};

export default Header;
