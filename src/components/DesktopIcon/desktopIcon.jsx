import "./desktopIcon.css"

const DesktopIcon = ({ title, icon, onDoubleClick }) => {
    return (
        <div className="desktop-icon" onDoubleClick={onDoubleClick}>
            <img src={icon}/>
            <span>{title}</span>
        </div>
    );
};

export default DesktopIcon;