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
          {
            name: 'TDD',
            progress: 40,
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
          <span className="person-info__details">21, Front-end Developer</span>
          <p className="person-info__profile">
            Hey, I’m a self-taught Front-End Developer with a background in
            Electronics Engineering. <br /> I love watching how pieces of code
            can create beautiful and interactive web apps, whether they are
            simple and elegant or extravagant and dynamic. I specialize in
            applications written in React but I’m becoming a big fan of Vue.js.
            Having a small experience in Back-end development such as Ruby on
            Rails and Django (1.11, 2.0) I have a solid understanding of network
            and database structure, whether it is SQL or NoSQL. <br /> P.S. I’m
            slowly starting to become TDD approach adept to bulletproof my
            future projects. <br /> P.S.S. Love movies, anime and traveling.
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
