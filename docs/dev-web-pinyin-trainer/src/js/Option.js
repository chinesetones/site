import OptionStatus from "./Challenge";
import SoundPlayingPath from "./SoundPlayingPath";

function Option({ option, status, handleClick, isHintOn, isShowingKanji }) {

  function onClick() {
    if (isHintOn) {
      document.getElementById(option.pinyin).play();
      document.getElementById(option.pinyin + "_playing").style.opacity = '1';
    }
    if (status == "selected" || status == "unselected") {
      handleClick();
    }
  }

  return (
    <div className={"option-box option-" + status} onClick={onClick}>

      {isHintOn &&

        <div className="option-audio-image">
          <div className="soundbutton-container_row">

            <div className="soundbutton-layer1">
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <SoundPlayingPath fill={status == "selected" ? "#0C71C4" : status == "correct" ? "#13A538" : status == "wrong" ? "#CE1510" : status == "disabled" ? "#8B8B8B" : "black"} isPlaying={false} />
              </svg>
            </div>

            <div id={option.pinyin + "_playing"} className="soundbutton-layer2" style={{ opacity: 0 }}>
              <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <SoundPlayingPath fill={status == "selected" ? "#0C71C4" : status == "correct" ? "#13A538" : status == "wrong" ? "#CE1510" : status == "disabled" ? "#8B8B8B" : "black"} isPlaying={true} />
              </svg>
            </div>

          </div>
        </div>
        // <div className="option-audio-image">
        //   <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <SoundPlayingPath fill={ status == "selected" ? "#0C71C4" : status == "correct" ? "#13A538" : status == "wrong" ? "#CE1510" : status == "disabled" ?  "#8B8B8B" : "black" } isPlaying={true}/>
        //   </svg>   
        // </div>
      }

      <audio
        id={option.pinyin}
        src={option.audio}
        onEnded={() => {
          let id = option.pinyin + "_playing"
          document.getElementById(id).style.opacity = '0';
        }}
      />
      <h2>
        <span className="pinyin">{option.pinyin}</span><span className="kanji">{isShowingKanji && " " + option.kanji}</span></h2>

    </div>

  );
}

export default Option;