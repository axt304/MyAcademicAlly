// src/components/Reminder/ReminderComponent.js
import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

function ReminderComponent() {
  // State to manage reminders
  const [reminders, setReminders] = useState([]);

  // Function to add a new reminder
  const addReminder = (newReminder) => {
    setReminders([...reminders, newReminder]);
    // You can also trigger notifications here.
  };

  return (
    <div>
      <h2>Reminders</h2>
      <ReminderForm addReminder={addReminder} />
      <ReminderList reminders={reminders} />
    </div>
  );
}

export default ReminderComponent;

