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
      duration: 500,
      delay: i * 100 + 1400,
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
          <g>
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="rgba(14, 19, 25, 0.3)"
              fill="none"
              strokeWidth="6"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {progress}
            </text>
            <Circle
              initialPose="init"
              pose="origin"
              key={i}
              cx="25"
              cy="25"
              r="20"
              stroke="rgba(14, 19, 25, 0.6)"
              fill="none"
              strokeWidth="6"
              strokeDasharray="125.6"
              transform="rotate(-90 25 25)"
              poseKey={progressValue}
              i={i}
              progressValue={progressValue}
            />
          </g>
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
