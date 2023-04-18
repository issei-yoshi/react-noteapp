import { useState } from 'react';
import uuid from 'react-uuid';

import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] =useState(false);

  const onAddNote = () => {
    console.log('called');
    const newNote = {
      id: uuid(),
      title: "new note",
      content: "new content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main />
    </div>
  )
}

export default App
