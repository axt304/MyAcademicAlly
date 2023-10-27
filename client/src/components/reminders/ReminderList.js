// src/components/Reminder/ReminderList.js
import React from 'react';

function ReminderList({ reminders }) {
  return (
    <ul>
      {reminders.map((reminder) => (
        <li key={reminder.id}>{reminder.text}</li>
      ))}
    </ul>
  );
}

export default ReminderList;

