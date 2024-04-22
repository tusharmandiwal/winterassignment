import React, { useState } from 'react';

function EventHandler() {
  const [buttonColor, setButtonColor] = useState('#ff6347');
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    const randomColor = getRandomColor();
    setButtonColor(randomColor);
    setMessage('');
  };

  const handleButtonHover = () => {
    setMessage('Hover over me!');
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={handleButtonClick}
        onMouseEnter={handleButtonHover}
        onMouseLeave={() => setMessage('')}
        style={{ backgroundColor: buttonColor, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Click me!
      </button>
      <p style={{ marginTop: '20px', color: '#888', fontStyle: 'italic' }}>{message}</p>
    </div>
  );
}

export default EventHandler;
