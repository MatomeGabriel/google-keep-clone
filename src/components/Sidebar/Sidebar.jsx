import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconBox from "../ToolTip/IconBox";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="sidebar">
        <div className="sidebar-item active-item">
          <IconBox iconBoxClassName={"active"}>
            <LightbulbOutlinedIcon />
          </IconBox>
          <span className="sidebar-text">Notes</span>
        </div>

        <div className="sidebar-item">
          <IconBox>
            <NotificationsNoneOutlinedIcon />
          </IconBox>
          <span className="sidebar-text">Reminders</span>
        </div>

        <div className="sidebar-item">
          <IconBox>
            <EditOutlinedIcon />
          </IconBox>
          <span className="sidebar-text">Edit labels</span>
        </div>
        <div className="sidebar-item">
          <IconBox>
            <ArchiveOutlinedIcon />
          </IconBox>
          <span className="sidebar-text">Archive</span>
        </div>

        <div className="sidebar-item">
          <IconBox>
            <DeleteOutlineIcon />
          </IconBox>
          <span className="sidebar-text">Trash</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
