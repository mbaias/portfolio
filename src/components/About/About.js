import React, { Component } from 'react';
import posed from 'react-pose';
import Skills from './Skills';
import '../../styles/about.css';

const Section = posed.div({
  enter: { x: '0%', opacity: 1 },
  exit: { x: '100%', opacity: 0 },
});

const Article = posed.div({
  enter: { staggerChildren: 40 },
  exit: { staggerChildren: 20 },
});

const H3 = posed.div({
  enter: {
    x: '0%',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 40,
      delay: 200,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
});

const SkillContaner = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
  exit: {
    x: 500,
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 40,
    },
  },
});

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: {
        frontEnd: [
          {
            name: 'HTML/CSS',
            progress: 85,
          },
          {
            name: 'JavaScript/ES6/ES7/ES8',
            progress: 75,
          },
          {
            name: 'React/Redux',
            progress: 70,
          },
        ],
        backEnd: [
          {
            name: 'Django',
            progress: 50,
          },
          {
            name: 'Python 3',
            progress: 50,
          },
          {
            name: 'MySQL/MongoDB',
            progress: 60,
          },
        ],
        other: [
          {
            name: 'Responsive Design',
            progress: 90,
          },
          {
            name: 'Webpack',
            progress: 75,
          },
          {
            name: 'Git',
            progress: 70,
          },
          {
            name: 'OOP',
            progress: 80,
          },
          {
            name: 'Agile',
            progress: 85,
          },
        ],
      },
    };
  }

  render() {
    const { frontEnd, backEnd, other } = this.state.skills;
    return (
      <div className="about-container">
        <Section className="person-info">
          <h1 className="person-info__name">Baias Mametjanov</h1>
          <span className="person-info__details">21, Front-End Developer</span>
          <p className="person-info__profile">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            aut perspiciatis fugit sunt facilis nisi ad. Quod, accusamus quam
            modi eius quos, nostrum mollitia excepturi autem totam dicta
            voluptatum tempore? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam illo soluta facilis provident voluptas
            autem, veniam ullam. Quia ipsa dicta illum, natus, iure voluptatibus
            numquam perspiciatis amet voluptate eum ab.
          </p>
        </Section>
        <Article className="skills">
          <section className="skills-column">
            <H3 className="skills-column__header--animated">
              <h3 className="skills-column__header">Front End</h3>
            </H3>
            {frontEnd.map((skill, i) => (
              <SkillContaner key={i} i={i}>
                <Skills skill={skill} i={i} />
              </SkillContaner>
            ))}
          </section>
          <section className="skills-column">
            <H3 className="skills-column__header--animated">
              <h3 className="skills-column__header">Back End</h3>
            </H3>
            {backEnd.map((skill, i) => (
              <SkillContaner key={i} i={i}>
                <Skills skill={skill} i={i} />
              </SkillContaner>
            ))}
          </section>
          <section className="skills-column">
            <H3 className="skills-column__header--animated">
              <h3 className="skills-column__header">Other</h3>
            </H3>
            {other.map((skill, i) => (
              <SkillContaner key={i} i={i}>
                <Skills skill={skill} i={i} />
              </SkillContaner>
            ))}
          </section>
        </Article>
      </div>
    );
  }
}

export default About;
