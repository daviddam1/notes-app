import React from "react";
import './index.css'

import { nanoid } from "nanoid";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NotesList from "./components/NotesList";

export default function App(){
  
  const [notes,setNotes] = React.useState([])

  const [searchText,setSearchText] = React.useState('')

  const [darkMode,setDarkMode] = React.useState(false)

  React.useEffect(() =>{
    const savedNotes = JSON.parse(
      localStorage.getItem('save-notes-data'))
      
      if(savedNotes){
        setNotes(savedNotes)
      }
  },[])

  React.useEffect(() =>{
    localStorage.setItem(
      'save-notes-data',
      JSON.stringify(notes)
      )
  },[notes])

  function addNote(text){
    const date = new Date()
    const newNote ={
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes,newNote]
    setNotes(newNotes)
  }

  function deleteNote (id){
    const newNotes=notes.filter((note) => note.id!== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode ? 'dark-mode':'dark-mode-off'}`}>
      <div className="app">
        <Navbar
          handleToggleDarkMode = {setDarkMode}
        />
        <SearchBar
          handleSearchNote ={setSearchText}
        />
        <NotesList
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}     
        />
      </div>
    </div>
    
  )
}