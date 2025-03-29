import IconBox from "./IconBox";
import "./Tooltip.css";

const ToolTip = ({
  toolTipText,
  iconBoxClassName,
  children,
  onClick = () => null,
  note = null,
}) => {
  const handleClick = (e) => {
    onClick(note);
    // stops the event from bubbling
    e.stopPropagation();
  };

  return (
    <div className="tooltip" onClick={handleClick}>
      <IconBox iconBoxClassName={iconBoxClassName}>{children}</IconBox>
      <span className="tooltip-text">{toolTipText}</span>
    </div>
  );
};
export default ToolTip;
