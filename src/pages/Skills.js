import { useRef } from "react";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "Bootstrap",
  },
  {
    id: 4,
    title: "Tailwind CSS",
  },
  {
    id: 5,
    title: "JavaScript",
  },
  {
    id: 6,
    title: "React.js",
  },
  {
    id: 7,
    title: "React Router",
  },
  {
    id: 8,
    title: "Redux",
  },
  {
    id: 9,
    title: "GSAP",
  },
  {
    id: 10,
    title: "Firebase",
  },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillTextRef = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills container" id="skills">
      <h2>My Skills</h2>

      <div className="skills-wrapper">
        <ul className="skills-left">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number ">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name"> {skill.title}</span>
                </div>
              </li>
            ))}
        </ul>

        <ul className="skills-right ">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item "
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex "
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number ">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name"> {skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Skills;
