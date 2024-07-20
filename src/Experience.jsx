import React from "react";

const Experiences = [
  {
    id: 0,
    name: "Emaka and Sons",
    details:
      "A great platform for my business. Was not getting enought time for my customers until I was introduced to mechdly.",
    image: "./exp-image.png",
  },
  {
    id: 1,
    name: "Sam Automobile",
    details:
      "Everything is organized now, clients are happy and I am happy. Superb platform!",
    image: "./exp-image.png",
  },
  {
    id: 2,
    name: "Chima's Fixes",
    details:
      "Happy I took the advice, this is the level of professionality my clients want to see. Goes hand in hand with my skills. Love it!",
    image: "./exp-image.png",
  },
];

const Experience = () => {
  return (
    <div className="exp">
      <h2>
        WHAT OTHER MECHANICS SAY <br /> ABOUT THE EXPERIENCE
      </h2>
      <div className="ex-all">
        <span className="exp-blur-left"></span>
        <div className="exp-container">
          {Experiences.map((exp) => (
            <div key={exp.id} className="exp-box">
              <img src={exp.image} alt={exp.name} />
              <div className="exp-details">
                <h4>{exp.name}</h4>
                <p>{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
        <span className="exp-blur"></span>
      </div>
    </div>
  );
};

export default Experience;
