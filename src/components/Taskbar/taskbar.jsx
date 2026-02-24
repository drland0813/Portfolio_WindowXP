import { useEffect, useState } from "react";
import "./taskbar.css";
import StartMenu from "#components/StartMenu/startMenu.jsx";


const Taskbar = () => {
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

                <div className="clock">{time}</div>
            </div>
        </>
    );
};

export default Taskbar;