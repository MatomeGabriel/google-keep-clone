import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components//Form/Form";
import Modal from "./components/Modal/Modal";

import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/Notes/Notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [isGrid, setIsGrid] = useState(true);

  // check if we have any pinned note
  const isPinned = Boolean(notes.find((note) => note.pinNote === true));

  //  runs when the app mounts
  useEffect(function () {
    // when th app initially mounts, we check if we have any saved data from our local storage
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    // const archivedNotes = JSON.parse(localStorage.getItem("archivedNotes"));
    if (savedNotes) setNotes(() => [...savedNotes]);
  }, []);

  // for storing notes
  useEffect(
    function () {
      if (notes.length !== 0)
        localStorage.setItem("notes", JSON.stringify(notes));

      if (notes.length === 0) localStorage.clear();
    },
    [notes]
  );

  // Add notes
  const handleAddNote = (newNote) => {
    // add new note first
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  // opens Modal
  const handleToggleModal = () => {
    // open or close the modal based on previous state
    setIsModalOpen((prevState) => !prevState);
  };

  // Edit notes
  const handleEditNote = (note) => {
    setNotes((prevNotes) =>
      prevNotes.map((prevNote) => (prevNote.id === note.id ? note : prevNote))
    );
  };

  // archives or deletes the note
  const handleArchiveNote = (note) => {
    setNotes((prevNotes) =>
      prevNotes.filter((prevNote) => prevNote.id !== note.id)
    );
    setIsModalOpen(false);
  };

  // toggling between grid and list view
  const handleSetIsGrid = () => {
    setIsGrid((prev) => !prev);
  };

  // Pinning a note
  const handlePinNote = (note) => {
    setNotes((prevNotes) =>
      prevNotes.map((prevNote) =>
        prevNote.id === note.id
          ? { ...prevNote, pinNote: !note.pinNote }
          : prevNote
      )
    );
  };

  return (
    <>
      <Navbar setNotes={setNotes} isGrid={isGrid} setIsGrid={handleSetIsGrid} />

      <main>
        <Sidebar />
        <div className="main-content">
          <Form addNote={handleAddNote} />

          {isPinned && (
            <>
              <div className={`pinned ${isGrid ? "" : "list"}`}>
                <p className="pinned-text margin-top-md">Pinned</p>
              </div>
              <Notes
                setSelectedNote={setSelectedNote}
                notes={notes}
                toggleModal={handleToggleModal}
                onArchiveNote={handleArchiveNote}
                onPinNote={handlePinNote}
                isPinned={true}
                isGrid={isGrid}
              />
            </>
          )}

          {isPinned && (
            <div className={`pinned ${isGrid ? "" : "list"}`}>
              <p className="pinned-text margin-top-md">Others</p>
            </div>
          )}
          <Notes
            setSelectedNote={setSelectedNote}
            notes={notes}
            toggleModal={handleToggleModal}
            onArchiveNote={handleArchiveNote}
            onPinNote={handlePinNote}
            isPinned={false}
            isGrid={isGrid}
          />

          {isModalOpen && (
            <Modal
              editSelectedNote={handleEditNote}
              selectedNote={selectedNote}
              toggleModal={handleToggleModal}
              onArchiveNote={handleArchiveNote}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
