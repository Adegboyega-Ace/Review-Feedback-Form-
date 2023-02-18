import React from 'react';
import './style.css';
import FeedbackForm from './FeedbackForm';
import './App.css';

function App() {
  const handleSubmit = () => {
    console.log('Form submitted!');
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
