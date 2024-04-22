import './App.css';

import React from 'react';
import EventHandler from './components/EventHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Handler Example</h1>
      </header>
      <main>
        <EventHandler />
      </main>
    </div>
  );
}

export default App;
