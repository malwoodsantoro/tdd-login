import React from 'react';
import './App.css';
import Login from './components/Login'

function App() {

  const handleSubmit = () => {
    alert('submitted!')
  }
  return (
    <div className="App">
      <Login onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
