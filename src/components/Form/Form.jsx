import { useEffect, useState } from "react";
import ToolTip from "../ToolTip/Tooltip";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";
import IconGroup from "../IconGroup/IconGroup";
import { useRef } from "react";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

// FFORM COMPONENT
const Form = ({
  addNote,
  edit,
  toggleModal,
  selectedNote,
  editSelectedNote,
  onArchiveNote,
}) => {
  const [title, setTitle] = useState((edit && selectedNote.title) || "");
  const [text, setText] = useState((edit && selectedNote.text) || "");
  const [isFormActive, setIsFormActive] = useState(edit);
  const textareaRef = useRef(null);

  // use effect to increase text area size
  useEffect(
    function () {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto"; // Reset height to handle shrinking
        textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height dynamically
      }
    },
    [text]
  );

  const handleFormActive = () => setIsFormActive(true);
  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };
  let editDate;
  let createdDate;
  if (edit) {
    editDate = new Date(selectedNote.editedDate).toLocaleTimeString("en-Za", {
      hour: "2-digit",
      minute: "2-digit",
    });
    createdDate = new Date(selectedNote.createdDate).toLocaleDateString(
      "en-Za"
    );
  }
  // when the form is submitted
  const handleFormSubmit = (e) => {
    // 1. prevent the default
    e.preventDefault();
    // 1.1 check if we are editing or we are adding

    if (!edit) {
      const currDate = new Date();
      const isoDateTime = currDate.toISOString();
      // check if text and title are empty
      if (text.trim() || title.trim()) {
        // 2. create the note
        const newNote = {
          title,
          text,
          id: uuidv4(),
          createdDate: isoDateTime,
          editedDate: isoDateTime,
        };
        // 3. add new note
        addNote(newNote);
      }
    } else {
      // if nothing has been edited return
      if (selectedNote.title === title && selectedNote.text === text)
        return toggleModal();

      // 2.1 check if text and title are empty
      toggleModal();
      const editedNote = {
        ...selectedNote,
        title,
        text,
        editedDate: new Date().toISOString(),
      };
      editSelectedNote(editedNote);
    }

    // 4. set the active form to false
    setIsFormActive(false);

    // 5. Reset the input fields
    setTitle("");
    setText("");
  };

  return (
    <div
      className={`form-container ${isFormActive && "active-form"}`}
      onClick={handleFormActive}>
      <form action="" onSubmit={handleFormSubmit}>
        {isFormActive && (
          <input
            value={title}
            className="note-title"
            type="text"
            placeholder="Title"
            onChange={handleSetTitle}
            style={{ fontSize: edit ? "22px" : "16px", fontWeight: "500" }}
          />
        )}

        <textarea
          ref={textareaRef}
          rows={1}
          value={text}
          className="note-text"
          type="textContent"
          placeholder="Take a note..."
          onChange={handleSetText}></textarea>
        {edit && (
          <div className="note-date">
            <div className="labels"></div>
            <ToolTip toolTipText={`Create on ${createdDate} `}>
              <span className="note-edited">Edited at {editDate}</span>
            </ToolTip>
          </div>
        )}
        {!isFormActive && (
          <div className="form-actions">
            <ToolTip toolTipText={"New List"}>
              <AssignmentTurnedInOutlinedIcon />
            </ToolTip>
            <ToolTip toolTipText={"New note with drawing"}>
              <BrushOutlinedIcon />
            </ToolTip>
            <ToolTip toolTipText={"New note with image"}>
              <ImageOutlinedIcon />
            </ToolTip>
          </div>
        )}
        {isFormActive && (
          <div className="form-actions">
            <IconGroup
              onClick={onArchiveNote}
              note={selectedNote}
              className="icons small-icons"
              includeUndoandRedo={true}
            />
            <button className="close-btn">close</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
