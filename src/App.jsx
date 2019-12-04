import React from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<Search />
        <Results />
      </header>
    </div>
  );
}

export default App;
