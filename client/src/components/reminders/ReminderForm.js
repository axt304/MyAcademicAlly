// ReminderForm.js
import React, { useState } from 'react';

function ReminderForm({ createReminder }) {
  const [inputText, setInputText] = useState('');

  const handleCreateReminder = () => {
    if (inputText.trim() !== '') {
      createReminder(inputText);
      setInputText('');
    }
  };

  return (
    <section id="enter">
      <input
        type="text"
        autoFocus
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <input
        type="button"
        value="+"
        onClick={handleCreateReminder}
      />
    </section>
  );
}

export default ReminderForm;

