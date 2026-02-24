import "./startMenu.css";

const StartMenu = () => {
    return (
        <div className="start-menu">
            <div className="start-header">
                <img src="public/images/terminal.png" className="avatar" />
                <span className="username">User</span>
            </div>

            <div className="start-footer">
                <button className="turn-off">Turn Off Computer</button>
            </div>
        </div>
    );
};

export default StartMenu;