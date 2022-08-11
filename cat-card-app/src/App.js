import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <nav>
      <Link className='link' to="/cat"><strong>Cats</strong></Link>
    </nav>
    </div>
  );
}

export default App;
