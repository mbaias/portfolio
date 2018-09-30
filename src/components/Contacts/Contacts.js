import React from 'react';
import posed from 'react-pose';
import '../../styles/contacts.css';

const ContactsContainer = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 50, damping: 10 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
});

const Contacts = () => (
  <ContactsContainer className="contacts-container">
    <header className="contacts-header">
      <h1 className="contacts-heading">Say Hello!</h1>
      <p className="contacts-encouragement">
        If you think I am suitable for your project or if you'd just like to say
        'Hello', feel free to get in touch.
      </p>
    </header>
    <div className="contacts-list">
      <p className="contacts-list__email">
        <i className="far fa-envelope" />
        <span className="contacts-list__text">mametjanov.baias@gmail.com</span>
      </p>
      <p className="contacts-list__phone">
        <i className="fas fa-phone" />
        <span className="contacts-list__text">+1 312 874 9399</span>
      </p>
      <a className="contacts-list__github" href="https://github.com/mbaias">
        <i className="fab fa-github" />
        <span className="contacts-list__text">github.com/mbaias</span>
      </a>
    </div>
    <form
      name="contact"
      method="POST"
      netlify
      className="contacts-form"
      action=""
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="contacts-form__label" htmlFor="name">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className="contacts-form__input"
        />
      </label>
      <label className="contacts-form__label" htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="contacts-form__input"
        />
      </label>
      <div data-netlify-recaptcha />
      {/* eslint-disable-next-line */}
        <label  className="contacts-form__label" />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="I want to hire you"
        className="contacts-form__input"
      />
      <button type="submit" className="contacts-form__button">
        Send Message
      </button>
    </form>
  </ContactsContainer>
);

export default Contacts;
