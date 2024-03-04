import React, { useState, useEffect } from 'react';

const words = ['word1', 'word2', 'word3', 'word4', 'word5'];

const AnimationComponent = () => {
  const [currentWord, setCurrentWord] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLetters = Array.from({ length: currentWord.length }, () =>
        String.fromCharCode(65 + Math.floor(Math.random() * 26))
      ).join('');
      setCurrentWord(randomLetters);
    }, 200);
    
    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * words.length);
      setCurrentWord(words[randomIndex]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentWord]);
  
  return (
    <div>
      <p>
        Some text here and the last word will have the animation: <span>{currentWord}</span>
      </p>
    </div>
  );
};

export default AnimationComponent;
