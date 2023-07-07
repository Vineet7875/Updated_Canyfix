// Spingame.js
import React, { useState } from 'react';
import Wheel from './Wheel';
import './Spingame.css';

const Spingame = () => {
  const places = ['10', '20', '30', '40', '50', '60'];
  const [showDialog, setShowDialog] = useState(false);
  const [result, setResult] = useState('');

  const handleSpin = (selectedItem) => {
    setResult(selectedItem);
    setTimeout(() => {
      setShowDialog(true);
    }, 5000);
  };

  const handleOK = () => {
    setShowDialog(false);
    setResult('');
  };

  return (
    <div className="Spin-Game">
      <Wheel items={places} onSpin={handleSpin} />
      {showDialog && (
        <div className="dialog">
          <img src="man-hurray.jpg" alt="Dialog Image" />
          <h2>{result}</h2>
          <button onClick={handleOK}>OK</button>
        </div>
      )}
    </div>
  );
};

export default Spingame;







