import SoundPlayingPath from "./SoundPlayingPath";


function SoundButton({ fileName, isCorrect }) {

	return (
    <div className="soundbutton-audio-div">
      <audio 
        id="sound_button" 
        src={ fileName } 
        onEnded={()=> {
          document.getElementById('sound_button_playing').style.opacity = '0';
        }}
      />
      
      <a 
        className={ isCorrect ? "pressible-button-correct" : "pressible-button" }
        onClick={()=> {
          document.getElementById('sound_button').play();
          document.getElementById('sound_button_playing').style.opacity = '1';
        }}
      >
       
        <div className="soundbutton-container_row">
           
          <div className="soundbutton-layer1">
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <SoundPlayingPath fill="white" isPlaying={false}/>
            </svg>
          </div>
          
          <div id="sound_button_playing" className="soundbutton-layer2" style={{opacity:0}}>
            <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <SoundPlayingPath fill="white" isPlaying={true}/>
            </svg>        
          </div>
          
        </div>
      </a> 
    </div>
  );
}

export default SoundButton;