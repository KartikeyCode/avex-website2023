import React from 'react';
import './App.css';
import iconImage1 from 'file:///C:/Users/Asus/Downloads/avex%20images/USD%20Coin.svg';
import iconImage2 from 'file:///C:/Users/Asus/Downloads/avex%20images/Group%2046631%20(1).svg';
import iconImage3 from 'file:///C:/Users/Asus/Downloads/avex%20images/Cube-1%20(3).svg';
import iconImage4 from 'file:///C:/Users/Asus/Downloads/avex%20images/Color9.svg';
import iconImage5 from 'file:///C:/Users/Asus/Downloads/Group%2046622%20(1).svg';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={iconImage1} alt="Icon" className="icon icon1" />
        <img src={iconImage2} alt="Icon" className="icon icon2" />
        <img src={iconImage3} alt="Icon" className="icon icon3" />
        <img src={iconImage4} alt="Icon" className="icon icon4" />
        <img src={iconImage5} alt="Icon" className="icon icon5" />
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
