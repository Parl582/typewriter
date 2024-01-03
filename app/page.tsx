"use client";
import React, { useEffect, useState } from "react";

const WordMatchChecker = () => {
  // State to hold the input value and enable/disable the input field
  const [inputValue, setInputValue] = useState("");
  const [randomParagraph, setRandomParagraph] = useState('');

  // Function to generate random paragraph
  const generateRandomParagraph = () => {
    const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];
    const paragraphLength = 7; // You can adjust the number of sentences

    let generatedParagraph = '';

    for (let i = 0; i < paragraphLength; i++) {
      for (let j = 0; j < words.length; j++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        generatedParagraph += words[randomIndex] + ' ';
      }
      generatedParagraph += '. ';
    }

    setRandomParagraph(generatedParagraph.trim());
  };






  // Event handler for input change
  const handleInputChange = (e: any) => {
    const enteredChar = e.target.value;

    // Check if the entered character is in the paragraph
    if (!randomParagraph.includes(enteredChar)) {
      // Enable the input if the character is correct
      alert("Miss Match");
      // setInputEnabled(true);
    }
    // Update the input value
    setInputValue(enteredChar);
  };
  useEffect(() => {
    generateRandomParagraph();
  }, []);

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[90%] md:w-[60%] border p-5">
        <p>{randomParagraph}</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
          // readOnly={!inputEnabled}
          className="text-black w-full py-3 my-5 px-3 rounded-sm"
        />
      </div>
    </div>
  );
};

export default WordMatchChecker;
