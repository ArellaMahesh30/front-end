import React from 'react';
import Button from './Button'; // Importing Button component
import Card from './Card'; // Importing Card component
import CardContent from './CardContent'; // Importing CardContent component
import BriefcaseIcon from './icons/BriefcaseIcon'; // Importing BriefcaseIcon component
import HeartIcon from './icons/HeartIcon'; // Importing HeartIcon component
import LightbulbIcon from './icons/LightbulbIcon'; // Importing LightbulbIcon component
import XIcon from './icons/XIcon'; // Importing XIcon component

import './styles.css'
const Main = () => {
  return (
    <div className="bg-white text-gray-600">
      <nav className="nav-bar" style={{ backgroundColor: '#333333' }}>
  <div className="flex space-x-4">
    <a className="nav-link" href="#">
      Emotions
    </a>
    <a className="nav-link hover:text-indigo-600" href="#">
      Mindfulness
    </a>
    <a className="nav-link hover:text-indigo-600" href="#">
      Self-awareness
    </a>
  </div>
  <button className="download-button">Download app</button>
</nav>
<header className="header">
  <h1 className="header-title">Master your life by mastering emotions</h1>
  <p className="header-subtitle">Ahead app</p>
  <img
    alt="App screenshot"
    className="header-image"
    src="https://example.com/your-image.jpg" // Your image link
  />
</header>

<section className="bg-indigo-50 py-16 px-8">
  <h2 className="text-3xl font-bold text-gray-800">EQ beats IQ</h2>
  <div className="mt-8 grid grid-cols-3 gap-8">
    <div className="card">
      <p className="text-gray-600">
        People with high emotional intelligence tend to live happier and have healthier relationships.
      </p>
    </div>
    <div className="card">
      <p className="text-gray-600">
        According to science, they handle and make for inspiring leaders.
      </p>
    </div>
    <div className="card">
      <p className="text-gray-600">EQ beats IQ video.</p>
    </div>
  </div>
</section>


      <section className="WorkWithUs">
        <h2>Work with us</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="card">
            <CardContent>
              <BriefcaseIcon className="text-indigo-600" />
              <h3 className="card-title">About</h3>
              <p className="card-text">
                At ahead our goal is to make self-improvement feel inviting. We
                know there's a way to make it work. And that's what ahead is
                all about!
              </p>
            </CardContent>
          </div>
          <div className="card">
            <CardContent>
              <LightbulbIcon className="text-yellow-400" />
              <h3 className="card-title">Product</h3>
              <p className="card-text">
                Sure, you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </CardContent>
          </div>
        </div>
      </section>
      <footer className="bg-indigo-600 text-white py-16 px-8">
  <div className="grid grid-cols-3 gap-8">
    <div className="logo-container">
      <img
        alt="Ahead logo"
        className="logo"
        src="/placeholder.svg"
      />
    </div>
    <div className="links">
      <a className="block mt-4" href="#">
        Apply now
      </a>
      <a className="block mt-4" href="#">
        Explore vacancies
      </a>
    </div>
  </div>
  <p className="text-center mt-8 text-sm">© 2023 Ahead App. All rights reserved.</p>
</footer>

    </div>
  );
};

export default Main;
