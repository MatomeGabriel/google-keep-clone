import Note from "./Note";
import "./Notes.css";

const Notes = ({
  notes,
  toggleModal,
  setSelectedNote,
  onArchiveNote,
  onPinNote,
  isPinned,
  isGrid,
}) => {
  //  sort notes without mutating any array so we can display the latest first
  const editedNotes = [...notes].sort(
    (a, b) => new Date(b.editedDate) - new Date(a.editedDate)
  );
  return (
    <div className={`notes ${isGrid ? "grid" : "list"}`}>
      {editedNotes.map(
        (note) =>
          Boolean(note.pinNote) == isPinned && (
            <Note
              toggleModal={toggleModal}
              key={note.id}
              note={note}
              setSelectedNote={setSelectedNote}
              onArchiveNote={onArchiveNote}
              onPinNote={onPinNote}
            />
          )
      )}{" "}
      {notes.length === 0 && (
        <div className="empty">
          <div className="empty-icon bg-note-icon"></div>
          <p className="empty-text">Notes you add appear here</p>
        </div>
      )}
    </div>
  );
};

export default Notes;
