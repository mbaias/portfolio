import React from 'react';
import '../../styles/contacts.css';

const Contacts = () => (
  <div className="contacts-wrapper">
    <header className="contacts-header">
      <h1 className="contacts-heading">Say Hello</h1>
      <p className="contact-encouragement">
        If you think I am suitable for your project or if you'd just like to say
        'Hello, feel free to get in touch
      </p>
    </header>
    <section className="contacts-main">
      <div className="contacts-list">
        <p>mametjanov.baias@gmail.com</p>
        <p>+1 312 874 9399</p>
        <a href="https://github.com/mbaias">https://github.com/mbaias</a>
      </div>
      <form action="" className="contact-form">
        <label htmlFor="name">
          <input type="text" id="name" name="name" placeholder="name" />
        </label>
        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder="email" />
        </label>
        {/* eslint-disable-next-line */}
        <label htmlFor="message" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="I want to hire you "
        />
      </form>
    </section>
  </div>
);

export default Contacts;
