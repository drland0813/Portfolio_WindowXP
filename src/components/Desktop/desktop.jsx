import { useState } from "react";
import DesktopIcon from "#components/DesktopIcon/desktopIcon.jsx";
import Taskbar from "#components/Taskbar/taskbar.jsx";
import WindowFrame from "#components/WindowFrame/windowFrame.jsx";

import "./desktop.css";

const Desktop = () => {
    const [docsWindow, setDocsWindow] = useState({
        open: false,
        minimized: false,
    });

    const openDocs = () => {
        setDocsWindow({ open: true, minimized: false });
    };

    const closeDocs = () => {
        setDocsWindow({ open: false, minimized: false });
    };

    const minimizeDocs = () => {
        setDocsWindow(prev => ({ ...prev, minimized: true }));
    };

    const restoreDocs = () => {
        setDocsWindow(prev => ({ ...prev, minimized: false }));
    };

    return (
        <div className="desktop">

            {/* ICON */}
            <DesktopIcon
                title="My Showcase"
                icon="src/assets/windows/showcase_logo.png"
                onDoubleClick={openDocs}
            />

            {/* WINDOW */}
            {docsWindow.open && !docsWindow.minimized && (
                <WindowFrame
                    title="My Showcase"
                    onClose={closeDocs}
                    onMinimize={minimizeDocs}
                >
                    <h2>Showcase</h2>
                    <p>Portfolio content will be added later...</p>
                </WindowFrame>
            )}

            {/* TASKBAR */}
            <Taskbar
                isOpen={docsWindow.open}
                isMinimized={docsWindow.minimized}
                onRestore={restoreDocs}
            />
        </div>
    );
};

export default Desktop;