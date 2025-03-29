import IconGroup from "../IconGroup/IconGroup";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import ToolTip from "../ToolTip/Tooltip";
import "./Note.css";
import IconBox from "../ToolTip/IconBox";

const Note = ({
  note,
  toggleModal,
  setSelectedNote,
  onArchiveNote,
  onPinNote,
}) => {
  // destructre our note into title and text
  const { title, text } = note;

  // check if this note is pinned
  const pinnedNote = note.pinNote || false;

  //
  const handleNoteClick = () => {
    toggleModal();
    setSelectedNote(note);
  };

  return (
    <div className="note" onClick={handleNoteClick}>
      <span className="material-symbols-outlined check-circle note-icon">
        check_circle
      </span>
      <div className="title title-pin">
        <span>{title}</span>
        <ToolTip note={note} toolTipText={"Pin note"} onClick={onPinNote}>
          {!pinnedNote && <PushPinOutlinedIcon />}
          {pinnedNote && <PushPinIcon />}
        </ToolTip>
      </div>
      <div className="text">{text}</div>
      <IconGroup note={note} onClick={onArchiveNote} className="note-footer" />
    </div>
  );
};

export default Note;
