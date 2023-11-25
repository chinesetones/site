import Option from "./Option";
import SubmitButton from "./SubmitButton";
import SoundButton from "./SoundButton";
import { useState, useEffect } from 'react';

export const OptionStatus = {
  UNSELECTED: "unselected",
  SELECTED: "selected",
  CORRECT: "correct",
  WRONG: "wrong",
  DISABLED: "disabled"
}

function Challenge({ audioFileName, options, answerPos, nextChallenge, isHintOn, isShowingKanji }) {
  const [optionStatuses, setOptionStatuses] = useState([OptionStatus.UNSELECTED,OptionStatus.UNSELECTED,OptionStatus.UNSELECTED,OptionStatus.UNSELECTED]);

  function handleOptionClick(pos) {
		const newOptionStatuses = optionStatuses.map((status, index) => {
			if (pos == index && optionStatuses[pos] == OptionStatus.UNSELECTED) {
				return OptionStatus.SELECTED;
			} else if (pos != index && optionStatuses[index] == OptionStatus.SELECTED) {
        return OptionStatus.UNSELECTED
      } else {
				return status;
			}
		});
		setOptionStatuses(newOptionStatuses);
  }

  function handleSubmitClick() {
    if (optionStatuses.includes(OptionStatus.CORRECT)) {
      nextChallenge();
    } else if (optionStatuses.includes(OptionStatus.SELECTED)) {
      const selectedOptionPos = optionStatuses.indexOf(OptionStatus.SELECTED)
      let newOptionStatuses;
      if (selectedOptionPos == answerPos) {
        newOptionStatuses = optionStatuses.map((status, index) => {
          if (selectedOptionPos == index) {
            return OptionStatus.CORRECT;
          } else {
            return OptionStatus.DISABLED;
          }
        });
      } else {
        newOptionStatuses = optionStatuses.map((status, index) => {
          if (selectedOptionPos == index) {
            return OptionStatus.WRONG;
          } else {
            return status;
          }
        });
      }
      setOptionStatuses(newOptionStatuses);
    }
  }

  return (
	  <div>
      <h3 className="challenge-question">Which pinyin matches this sound?</h3>
      <SoundButton fileName={audioFileName} isCorrect={optionStatuses.includes(OptionStatus.CORRECT)}/>
      <div class="options-container">
        <Option option={options[0]} status={optionStatuses[0]} handleClick={() => handleOptionClick(0)} isHintOn={isHintOn} isShowingKanji={isShowingKanji}/>
        <Option option={options[1]} status={optionStatuses[1]} handleClick={() => handleOptionClick(1)} isHintOn={isHintOn} isShowingKanji={isShowingKanji}/>
        { options.length >= 3 && <Option option={options[2]} status={optionStatuses[2]} handleClick={() => handleOptionClick(2)} isHintOn={isHintOn} isShowingKanji={isShowingKanji}/>}
        { options.length >= 4 && <Option option={options[3]} status={optionStatuses[3]} handleClick={() => handleOptionClick(3)} isHintOn={isHintOn} isShowingKanji={isShowingKanji}/>}
      </div>
      <SubmitButton 
        text={optionStatuses.includes(OptionStatus.CORRECT) ? "NEXT QUESTION" : "CHECK ANSWER"} 
        isDisabled={!optionStatuses.includes(OptionStatus.SELECTED) && !optionStatuses.includes(OptionStatus.CORRECT)} 
        handleClick={handleSubmitClick}/>
    </div>
  );
}

export default Challenge;