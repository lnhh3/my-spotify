import Player from "./components/Player";
import SideBar from "./components/SideBar";
import Display from "./components/Display";
import { useContext } from "react";
import { PlayerContext } from "./context/PlayerContext";

function App() {
    const { audioRef, track } = useContext(PlayerContext);

    return (
        <div className="h-screen bg-black">
            <div className="h-[90%] flex">
                <SideBar />
                <Display />
            </div>
            <Player />
            <audio ref={audioRef} preload="auto" src={track.file}></audio>
        </div>
    );
}

export default App;