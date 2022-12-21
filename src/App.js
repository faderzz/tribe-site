import React, {useState} from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import ImageButton from './components/redpill.js';

function App() {
  const [showButton, setShowButton] = useState(true);
  const [showDiv, setShowDiv] = useState(false);

  return (
      <div style={{textAlign: 'center'}}>
        <ImageButton onClick={() => window.location.href='/home'}/>
      </div>
  );
}

export default App;
