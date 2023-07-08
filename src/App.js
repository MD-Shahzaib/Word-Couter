import React, { useState } from 'react';

const App = () => {

  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Word Counter App</h1>
      <textarea
        className="border border-gray-300 p-2 mb-4 w-full"
        rows="5"
        placeholder="Type or paste your text here"
        value={text}
        onChange={handleChange}
      ></textarea>
      <p className="mb-4">Word Count: {wordCount}</p>
    </div>
  );
};

export default App;