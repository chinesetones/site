import OptionStatus from "./Challenge";

function Option({ option, status, handleClick }) {

  function onClick() {
    if (status == "selected" || status == "unselected") {
      document.getElementById(option.pinyin).play();
      handleClick();
    }
  }

	return (
    <div className={ "option-box option-" + status } onClick={ onClick }>
      <audio 
        id={ option.pinyin } 
        src={ option.audio } 
      />
      <h2>{ option.pinyin } ({ option.kanji })</h2>
    </div>

  );
}

export default Option;