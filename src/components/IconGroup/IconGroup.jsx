import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

import ToolTip from "../ToolTip/Tooltip";

const IconGroup = ({
  className = "",
  includeUndoandRedo = false,
  onClick,
  note,
}) => {
  return (
    <div className={className}>
      <ToolTip toolTipText={"Remind me"}>
        <AddAlertOutlinedIcon />
      </ToolTip>
      <ToolTip toolTipText={"Collaborator"}>
        <PersonAddAltOutlinedIcon />
      </ToolTip>

      <ToolTip toolTipText={"Change Color"}>
        <ColorLensOutlinedIcon />
        <div className="color">
          <span className="1"></span>
          <span className="2"></span>
          <span className="3"></span>
          <span className="4"></span>
        </div>
      </ToolTip>

      <ToolTip toolTipText={"Add Image"}>
        <ImageOutlinedIcon />
      </ToolTip>

      <ToolTip onClick={onClick} note={note} toolTipText={"Archive"}>
        <ArchiveOutlinedIcon className="archive" />
      </ToolTip>

      <ToolTip toolTipText={"More"}>
        <MoreVertOutlinedIcon />
      </ToolTip>

      {includeUndoandRedo && (
        <>
          <ToolTip toolTipText={"Undo"}>
            <UndoOutlinedIcon />
          </ToolTip>
          <ToolTip toolTipText={"Redo"}>
            <RedoOutlinedIcon />
          </ToolTip>
        </>
      )}
    </div>
  );
};
export default IconGroup;
