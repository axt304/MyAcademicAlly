import React, { useState, useEffect } from 'react';

function TaskManager() {
  const [inputText, setInputText] = useState('');
  const [entries, setEntries] = useState({});
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('entries')) || {};
    const storedCompleted = JSON.parse(localStorage.getItem('completed')) || {};

    setEntries(storedEntries);
    setCompleted(storedCompleted);
  }, []);

  const createReminder = (text) => {
    if (text !== '') {
      const entry = Date.now();
      const newEntries = { ...entries };
      newEntries[entry] = text;

      setEntries(newEntries);
      localStorage.setItem('entries', JSON.stringify(newEntries));

      setInputText('');
      display('entries');
    }
    input.focus();
  };

  const display = (list) => {
    const listData = JSON.parse(localStorage[list]);
    for (let entry in listData) {
      if (!document.getElementById(entry)) {
        const box = document.createElement('section');
        const task = document.createElement('input');
        const exit = document.createElement('input');

        task.type = 'text';
        task.value = listData[entry];
        task.onblur = () => edit(task.value, entry);

        exit.type = 'button';
        exit.value = '×';
        exit.onclick = () => complete(entry);

        box.id = entry;
        box.appendChild(task);
        box.appendChild(exit);
        
        document.body.insertBefore(box, document.getElementById('enter'));
      }
    }
  };

  const edit = (text, id) => {
    const newEntries = { ...entries };
    newEntries[id] = text;

    setEntries(newEntries);
    localStorage.setItem('entries', JSON.stringify(newEntries));
  };

  const complete = (id) => {
    const newEntries = { ...entries };
    const newCompleted = { ...completed };

    newCompleted[id] = newEntries[id];
    delete newEntries[id];

    setEntries(newEntries);
    setCompleted(newCompleted);

    localStorage.setItem('entries', JSON.stringify(newEntries));
    localStorage.setItem('completed', JSON.stringify(newCompleted));

    display('entries');
    const element = document.getElementById(id);
    if (element) element.remove();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      createReminder(inputText);
    }
  };

  return (
    <div>
      <h1>Reminders</h1>
      <section id="enter">
        <input
          type="text"
          autoFocus
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="button"
          value="+"
          onClick={() => createReminder(inputText)}
        />
      </section>
    </div>
  );
}

export default TaskManager;

