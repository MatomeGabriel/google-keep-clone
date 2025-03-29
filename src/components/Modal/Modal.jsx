import Form from "../Form/Form";
import "./Modal.css";

const Modal = ({
  toggleModal,
  selectedNote,
  editSelectedNote,
  onArchiveNote,
}) => {
  const handleToggle = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  return (
    <div className="modal" onClick={handleToggle}>
      <div className="modal-content">
        <Form
          edit
          editSelectedNote={editSelectedNote}
          selectedNote={selectedNote}
          toggleModal={toggleModal}
          onArchiveNote={onArchiveNote}
        />
      </div>
    </div>
  );
};

export default Modal;
