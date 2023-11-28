// ReminderForm.js
import React, { useState } from 'react';

function ReminderForm({ createReminder }) {
  const [inputText, setInputText] = useState('');
  const [dueDate, setDueDate] = useState('');  // State hook for the due date
  const [dueTime, setDueTime] = useState('');  // State hook for the due time
	
  const handleCreateReminder = () => {
    if (inputText.trim() !== '') {
      createReminder(inputText);
      setInputText('');
      setDueDate('');
      setDueTime('');
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
        type="date"
        placeholder="Due date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="time"
        placeholder="Due time"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
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

