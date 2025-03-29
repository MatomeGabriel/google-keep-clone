import Tooltip from "../ToolTip/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";

import "./Navbar.css";
const Navbar = ({ setNotes, setIsGrid, isGrid }) => {
  const handleClearNotes = () => {
    setNotes([]);
  };
  return (
    <nav>
      <div className="logo-area">
        <Tooltip toolTipText={"Main Menu"}>
          <MenuRoundedIcon />
        </Tooltip>
        <a href="#" className="logo-link">
          <img
            className="logo"
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt=""
            aria-hidden="true"
            role="presentation"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="logo-text">Keep</span>
        </a>
      </div>
      <div className="search-area">
        <Tooltip toolTipText={"Search"} iconBoxClassName={"margin-left-sm"}>
          <SearchIcon className="search-icon" />
        </Tooltip>
        <input type="text" placeholder="Search" />
      </div>
      <div className="settings-area">
        <Tooltip toolTipText={"Delete All Notes"} onClick={handleClearNotes}>
          <RefreshIcon />
        </Tooltip>

        <Tooltip
          toolTipText={isGrid ? "List View" : " Grid View"}
          onClick={setIsGrid}>
          {isGrid ? <ViewAgendaOutlinedIcon /> : <GridViewOutlinedIcon />}
        </Tooltip>

        <Tooltip toolTipText={"Settings"}>
          <SettingsOutlinedIcon />
        </Tooltip>
      </div>
      <div className="profile-actions-area">
        <Tooltip toolTipText={"Apps"}>
          <AppsRoundedIcon />
        </Tooltip>
        <Tooltip toolTipText={"Apps"}>
          <AccountCircleOutlinedIcon />
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;
