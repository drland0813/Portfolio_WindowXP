import Desktop from "./components/Desktop/Desktop";
import Taskbar from "./components/Taskbar/Taskbar";
import "./App.css"
const App = () => {
    return (
        <>
            <div className="scanlines"></div>
            <Desktop>
                <Taskbar />
            </Desktop>
        </>
    );
};

export default App;