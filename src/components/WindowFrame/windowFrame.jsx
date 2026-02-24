import { useState } from "react";
import "./windowFrame.css";

const WindowFrame = ({
                         title = "Window",
                         onMinimize,
                         onClose,
                         children
                     }) => {
    const [isMaximized, setIsMaximized] = useState(false);

    return (
        <div
            className={`window-frame ${
                isMaximized ? "maximized" : ""
            }`}
        >
            <div className="window-titleBar">
                <span className="window-title">{title}</span>

                <div className="window-controls">
                    <button
                        onClick={onMinimize}
                        className="btn minimize"
                    ></button>

                    <button
                        onClick={() => setIsMaximized(!isMaximized)}
                        className="btn maximize"
                    ></button>

                    <button
                        onClick={onClose}
                        className="btn close"
                    ></button>
                </div>
            </div>

            <div className="window-body">
                {children}
            </div>
        </div>
    );
};

export default WindowFrame;