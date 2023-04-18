import { useState } from 'react';
import uuid from 'react-uuid';

import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [notes, setNotes] = useState([]);

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

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes}/>
      <Main />
    </div>
  )
}

export default App
