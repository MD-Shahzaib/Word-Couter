import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const words = newText.trim().split(/\s+/).filter(Boolean);
    const characters = newText.length;
    const sentences = newText.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = newText.split(/\n\s*\n/).filter(Boolean).length;
    const wordsPerMinute = 200; // Adjust this value based on reading speed

    setWordCount(words.length);
    setCharacterCount(characters);
    setSentenceCount(sentences);
    setParagraphCount(paragraphs);
    setReadingTime(Math.ceil(words.length / wordsPerMinute));
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    const capitalizedText = text
      .toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setText(capitalizedText);
  };

  const handleClearText = () => {
    setText('');
    setWordCount(0);
    setCharacterCount(0);
    setSentenceCount(0);
    setParagraphCount(0);
    setReadingTime(0);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleRemoveExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, ' ');
    setText(trimmedText);
  };

  return (
    <>
      <Navbar mode={darkMode} setMode={setDarkMode} />
      <div className="container mx-auto py-4 px-6">
        <h1 className="text-3xl font-semibold mb-2">Word Counter</h1>
        <textarea className="p-2 border border-gray-300 outline-blue-500 rounded  w-full" rows="6" cols="85" placeholder="Type or paste your text here..." value={text} onChange={handleTextChange}></textarea>
        <div className="flex items-center flex-wrap gap-2 rounded mb-4 w-full">
          <button className="p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={handleUpperCase}>Uppercase</button>
          <button className="p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={handleLowerCase}>Lowercase</button>
          <button className="p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={handleCapitalize}>Capitalize</button>
          <button className="p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={handleClearText}>Clear Text</button>
          <button className="p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={handleCopyText}>Copy Text</button>
          <button className="p-2 bg-blue-500 text-white rounded text-sm hover:bg-blue-600" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded mb-4">
          <h1 className="text-2xl font-semibold mb-2">Your Text Summary</h1>
          <p className="text-sm mb-2">Word Count: {wordCount}</p>
          <p className="text-sm mb-2">Character Count: {characterCount}</p>
          <p className="text-sm mb-2">Sentence Count: {sentenceCount}</p>
          <p className="text-sm mb-2">Paragraph Count: {paragraphCount}</p>
          <p className="text-sm mb-2">Estimated Reading Time: {readingTime}</p>
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded ">
          <h3 className="text-2xl font-semibold mb-2">Preview</h3>
          <div className={`py-2 rounded ${darkMode ? 'bg-gray-800 text-white' : ''}`}>{text.length > 0 ? text : "Nothing to preview! Enter something in the textbox above to preview it here."}</div>
        </div>
      </div>
      <Footer mode={darkMode} />
    </>
  );
};

export default App;