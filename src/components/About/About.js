import React, { Component } from 'react';
import Skills from './Skills';
import '../../styles/About.css';

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
            progress: 80,
          },
          {
            name: 'React/Redux',
            progress: 80,
          },
        ],
        backEnd: [
          {
            name: 'Django',
            progress: 60,
          },
          {
            name: 'Python 3',
            progress: 60,
          },
          {
            name: 'MySQL/MongoDB',
            progress: 70,
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
      <div className="about-wrapper">
        <section className="person-info">
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
        </section>
        <article className="skills">
          <section className="skills-column">
            <h3 className="skills-column__header">Front End</h3>
            {frontEnd.map((skill, i) => (
              <Skills key={i} skill={skill} i={i} />
            ))}
          </section>
          <section className="skills-column">
            <h3 className="skills-column__header">Back End</h3>
            {backEnd.map((skill, i) => (
              <Skills key={i} skill={skill} i={i} />
            ))}
          </section>
          <section className="skills-column">
            <h3 className="skills-column__header">Other</h3>
            {other.map((skill, i) => (
              <Skills key={i} skill={skill} i={i} />
            ))}
          </section>
        </article>
      </div>
    );
  }
}

export default About;
