import Note from "./Note";
import "./Notes.css";
import backgroundImage from "@assets/add_note.svg";

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
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              color: "yellow",
            }}
            className="empty-icon">
            <img className="empty-img" src={backgroundImage} alt="" />
          </div>
          <p className="empty-text">Notes you add appear here</p>
        </div>
      )}
    </div>
  );
};

export default Notes;
