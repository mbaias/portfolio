import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

const Circle = posed.circle({
  init: {
    strokeDashoffset: 125.6,
  },
  origin: {
    strokeDashoffset: ({ progressValue }) => progressValue,
    transition: ({ i }) => ({
      duration: 600,
      delay: i * 30,
    }),
  },
});

const Skill = ({ skill, i }) => {
  const { name, progress } = skill;
  const progressValue = 125.6 - (125.6 * progress) / 100;

  return (
    <React.Fragment>
      <div className="skill">
        <svg className="skill__progress" width="50" height="50">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="rgba(14, 19, 25, 0.3)"
            fill="none"
            strokeWidth="6"
          />
          <Circle
            initialPose="init"
            pose="origin"
            key={i}
            cx="25"
            cy="25"
            r="20"
            stroke="#0E1319"
            fill="none"
            strokeWidth="6"
            strokeDasharray="125.6"
            transform="rotate(-90 25 25)"
            poseKey={progressValue}
            i={i}
            progressValue={progressValue}
          />
        </svg>
        <span className="skill__name">{skill.name}</span>
      </div>
    </React.Fragment>
  );
};

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};

export default Skill;
