import React from 'react';
import './App.css';

import { iconImage1, iconImage2, iconImage3, iconImage4, iconImage5, iconImage6 } from './assets';
import TypingEffect from './TypingEffect';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={iconImage1} alt="Icon" className="icon icon1" />
        <img src={iconImage2} alt="Icon" className="icon icon2" />
        <img src={iconImage3} alt="Icon" className="icon icon3" />
        <img src={iconImage4} alt="Icon" className="icon icon4" />
        <img src={iconImage5} alt="Icon" className="icon icon5" />
        <img src={iconImage6} alt="Icon" className="icon icon6" />
       
        
        <img
          src="https://imagizer.imageshack.com/img924/5035/Kx4ZJU.png"
          alt="Icon"
          className="icon icon7"
        />
        <img
          src="https://imagizer.imageshack.com/img923/1076/0fQPye.png"
          alt="Icon"
          className="icon icon8"
        />
        <img
          src="https://imagizer.imageshack.com/img924/3694/AqnFIq.png"
          alt="Icon"
          className="icon icon9"
        />
        <img
          src="https://imagizer.imageshack.com/img922/3060/HjN0l4.png"
          alt="Icon"
          className="icon icon10"
        />
        <img
          src="https://imagizer.imageshack.com/img924/3653/qZvXJ4.png"
          alt="Icon"
          className="icon icon11"
        />

        <img
          src="https://imagizer.imageshack.com/img923/5011/i4nzJl.png"
          alt="Icon"
          className="icon icon12"
        />
        <img
          src="https://imagizer.imageshack.com/img923/4822/hbFwto.png"
          alt="Icon"
          className="icon icon13"
        />
        <img
          src="https://imagizer.imageshack.com/img924/6554/NyX9k0.png"
          alt="Icon"
          className="icon icon14"
        />
        <img
          src="https://imagizer.imageshack.com/img922/9087/L6PYHA.png"
          alt="Icon"
          className="icon icon15"
        />
        <img
          src="https://imagizer.imageshack.com/img923/1592/XBh9Dj.png"
          alt="Icon"
          className="icon icon16"
        />
        <img
          src="https://imagizer.imageshack.com/img922/6306/XgsQjS.png"
          alt="Icon"
          className="icon icon17"
        />
        <img
          src="https://imagizer.imageshack.com/img923/1926/s13rhT.png"
          alt="Icon"
          className="icon icon18"
        />
        <img
          src="https://imagizer.imageshack.com/img922/5294/MfIksc.png"
          alt="Icon"
          className="icon icon19"
        />
        <img
          src="https://imagizer.imageshack.com/img923/1488/2DE4ea.jpg"
          alt="Icon"
          className="icon icon20"
        />
        <img
          src="https://imagizer.imageshack.com/img924/2617/ocRKwu.png"
          alt="Icon"
          className="icon icon21"
        />
        <img 
        src="https://imageshack.com/i/pn2CGcQOp"
        alt="Icon"
        className="icon icon22"/>
        <img 
        src="https://imageshack.com/i/pnOKGZW6p"
        alt="Icon"
        className="icon icon23"/>
        <img 
        src="https://imagizer.imageshack.com/img923/8242/6KcFty.png"
        alt="Icon"
        className="icon icon24"/>
        <img 
        src="https://imagizer.imageshack.com/img924/9577/kpp23B.png"
        alt="Icon"
        className="icon icon25"></img>
        <img 
        src="https://imageshack.com/i/poqQgV5mp"
        alt="Icon"
        className="icon icon26"></img>
        <img 
        src="https://imageshack.com/i/pmy8uAbWp"
        alt="Icon"
        className="icon icon27"></img>
        <img 
        src="https://imageshack.com/i/pniOJTusp"
        alt="Icon"
        className="icon icon28"></img>
         <img 
        src="https://imageshack.com/i/pocfoPiUp"
        alt="Icon"
        className="icon icon29"></img>
        <img
        src="https://imageshack.com/i/poq9txTvp"
        alt="Icon"
        className='icon icon30'></img> 
        <img
        src="https://imageshack.com/i/pobTILMip"
        alt="Icon"
        className='icon icon31'></img> 
        <img
        src="https://imagizer.imageshack.com/img923/9131/OHZhu5.png"
        alt="Icon"
        className='icon icon32'></img>
        <img
        src="https://imageshack.com/i/poqSH4XOp"
        alt="Icon"
        className='icon icon33'></img>
              
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="text-container">
        <h1 className="text"><center>Your pass to <br />decentralized future</center></h1>
        <div className="sub-text-container">
          <h2 className="sub-text">
            Control your finance,
            Own your data,
            Embrace your 
            <br />community
          </h2>
        </div>
      </div>

      
      <TypingEffect/>
    </div>
  );
}
export default App;
