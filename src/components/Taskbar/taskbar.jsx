import { useEffect, useState } from "react";
import "./taskbar.css";
import StartMenu from "#components/StartMenu/startMenu.jsx";
import TaskbarAppIcon from "#components/TaskbarAppIcon/taskbarAppIcon.jsx";


const Taskbar = ({ isOpen, isMinimized, onRestore }) => {
    const [time, setTime] = useState("");
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            setTime(formatted);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {openMenu && <StartMenu />}

            <div className="taskbar">
                <button
                    className="start-button"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                </button>
                {/* ICON APP */}
                {isOpen && (
                    <TaskbarAppIcon
                        title="My Showcase"
                        active={!isMinimized}
                        onClick={onRestore}
                    />
                )}

                <div className="clock">{time}</div>
            </div>
        </>
    );
};

export default Taskbar;