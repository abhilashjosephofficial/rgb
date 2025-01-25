import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import tenor from "./image/tenor.gif";
import dog from "./image/dog.png";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const audioRef = useRef(null); 


  const playAudio = () => {
    const audio = audioRef.current;
    audio.play(); 
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      console.log("Modal is open! Please click play to hear the music.");
    }
  }, [isModalOpen]);

  return (
    <div className="app">
      <img src={tenor} alt="gif" className="center-gif" />

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
            <img className="dog-image" src={dog}></img>
            <button onClick={playAudio}>Welcome</button>
          </div>
        </div>
      )}

      <audio ref={audioRef} loop>
        <source src="/assets/bgm.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;