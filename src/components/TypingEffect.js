import React, { useState, useEffect } from 'react';
import './TypingEffect.css';
import Download from './Download';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [showArrow, setShowArrow] = useState(true);

  const firstLine = 'Control your finances, own your data, embrace';
  const secondLine = 'your community';

  const startTyping = () => {
    let currentIndex = 0;
    let currentText = '';

    const typingInterval = setInterval(() => {
      if (currentIndex === firstLine.length + secondLine.length + 1) {
        clearInterval(typingInterval);
        setText('');
        startTyping();
        return;
      }

      if (currentIndex < firstLine.length) {
        currentText += firstLine[currentIndex];
      } else if (currentIndex === firstLine.length) {
        currentText += '\n'; // Add a line break before the second line
      } else {
        currentText += secondLine[currentIndex - firstLine.length - 1];
      }

      setText(currentText);
      currentIndex++;
    }, 100);

    return typingInterval;
  };

  useEffect(() => {
    const typingInterval = startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="typing-effect-container">
      <div className="typing-effect-content">
        <pre className="typing-effect-text">
          {text}
          <br />
          <span className="subtext">
            An ecosystem around decentralized identity to control your<br/> money, data, and communities at one convenient place
          </span>
        </pre>
      </div>
      {showArrow && (
        <div className="curtain-arrow" onClick={handleArrowClick}>
          <span className="arrow"></span>
        </div>
      )}
      <div className="download-container">
        <Download />
      </div>
    </div>
  );
};

export default TypingEffect;
