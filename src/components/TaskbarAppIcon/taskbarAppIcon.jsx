import "./taskbarAppIcon.css";

const TaskbarAppIcon = ({ title, active, onClick }) => {
    return (
        <div
            className={`taskbar-app ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {title}
        </div>
    );
};

export default TaskbarAppIcon;