// import React, { useState } from 'react';

// const App = () => {

//   const [text, setText] = useState('');
//   const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Word Counter App</h1>
//       <textarea
//         className="border border-gray-300 p-2 mb-4 w-full"
//         rows="5"
//         placeholder="Type or paste your text here"
//         value={text}
//         onChange={handleChange}
//       ></textarea>
//       <p className="mb-4">Word Count: {wordCount}</p>
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const words = newText.trim().split(/\s+/).filter(Boolean);
    const characters = newText.length;
    const sentences = newText.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = newText.split(/\n\s*\n/).filter(Boolean).length;

    setWordCount(words.length);
    setCharacterCount(characters);
    setSentenceCount(sentences);
    setParagraphCount(paragraphs);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-2">Word Counter</h1>
      <textarea
        className="p-2 border border-gray-300 rounded mb-4"
        rows="6"
        cols="85"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <p className="text-sm mb-2">
        Word Count: {wordCount}
      </p>
      <p className="text-sm mb-2">
        Character Count: {characterCount}
      </p>
      <p className="text-sm mb-2">
        Sentence Count: {sentenceCount}
      </p>
      <p className="text-sm mb-2">
        Paragraph Count: {paragraphCount}
      </p>
    </div>
  );
}

export default App;




// Todos = Create a layout, styling and components like navbar and footer.