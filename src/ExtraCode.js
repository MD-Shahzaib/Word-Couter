import React, { useState } from 'react';

const App = () => {

  // Method (1).
  // const [text, setText] = useState('');
  // const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;
  // const handleChange = (event) => {
  //   setText(event.target.value);
  // };


  // Method (2).
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
    <>
      {/* <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Word Counter App</h1>
        <textarea
          className="border border-gray-300 p-2 mb-4 w-full"
          rows="5"
          placeholder="Type or paste your text here"
          value={text}
          onChange={handleChange}
        ></textarea>
        <p className="mb-4">Word Count: {wordCount}</p>
  </div > */}


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
    </>
  );
};

export default App;



/*

import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

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

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleCapitalize = () => {
    const capitalizedText = text
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(capitalizedText);
  };

  const handleClearText = () => {
    setText('');
    setWordCount(0);
    setCharacterCount(0);
    setSentenceCount(0);
    setParagraphCount(0);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleRemoveExtraSpaces = () => {
    const trimmedText = text.replace(/\s+/g, ' ');
    setText(trimmedText);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container mx-auto mt-4 ${darkMode ? 'dark' : ''}`}>
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Word Counter</h1>
        <div>
          <button
            className={`px-2 py-1 rounded ${darkMode ? 'bg-gray-300 text-gray-800' : 'bg-blue-500 text-white'
              }`}
            onClick={handleToggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <textarea
            className={`p-2 border border-gray-300 rounded mb-4 ${darkMode ? 'bg-gray-800 text-white' : ''
              }`}
            rows="6"
            placeholder="Enter text here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleUpperCase}
            >
              Uppercase
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleLowerCase}
            >
              Lowercase
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleCapitalize}
            >
              Capitalize
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleClearText}
            >
              Clear Text
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleCopyText}
            >
              Copy Text
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleRemoveExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
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
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Preview</h3>
            <div className={`p-2 border border-gray-300 rounded ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
              {text}
            </div>
          </div>
        </div>
      </div>
      <footer className="p-4 bg-gray-200 dark:bg-gray-900 text-center">
        &copy; 2023 Word Counter App
      </footer>
    </div>
  );
};

export default App;
*/



























































/*
import React, { useState } from 'react';

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
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container mx-auto mt-4 ${darkMode ? 'dark' : ''}`}>
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Word Counter</h1>
        <div>
          <button
            className={`px-2 py-1 rounded ${
              darkMode ? 'bg-gray-300 text-gray-800' : 'bg-blue-500 text-white'
            }`}
            onClick={handleToggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 p-4">
          <textarea
            className={`p-2 border border-gray-300 rounded mb-4 ${
              darkMode ? 'bg-gray-800 text-white' : ''
            }`}
            rows="6"
            placeholder="Enter text here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <div className="flex flex-wrap gap-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleUpperCase}
            >
              Uppercase
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleLowerCase}
            >
              Lowercase
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleCapitalize}
            >
              Capitalize
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleClearText}
            >
              Clear Text
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleCopyText}
            >
              Copy Text
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleRemoveExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
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
            <p className="text-sm mb-2">
              Estimated Reading Time: {readingTime} minute(s)
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">Preview</h3>
            <div className={`p-2 border border-gray-300 rounded ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
              {text}
            </div>
          </div>
        </div>
      </div>
      <footer className="p-4 bg-gray-200 dark:bg-gray-900 text-center">
        &copy; 2023 Word Counter App
      </footer>
    </div>
  );
};

export default App;
*/