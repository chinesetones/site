// https://www.blandersoft.com/short/create-react-jekyll/

import Challenge from "./Challenge";
import { useState, useMemo } from 'react';
import allChallenges from "./AllChallenges";
import shuffle from './HelperFunctions';
import HintToggle from "./HintToggle";
import { translations } from './translations';

function App() {

	const [isAudioHintOn, setIsAudioHintOn] = useState(true);
  const [isShowingKanji, setIsShowingKanji] = useState(true);
	const challenges = useMemo(() => {
    return shuffle(allChallenges);
  }, []);
	const [currChallengeIndex, setCurrChallengeIndex] = useState(0);
	const language = process.env.REACT_APP_LANGUAGE || 'en';

	function nextChallenge() {
		setCurrChallengeIndex(currChallengeIndex+1);
	}

	const challenge = challenges[currChallengeIndex];

	return (
		<div>
      <h2 style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif", fontWeight: 900, color: "#1489E8" }}>
        {translations[language].app.title}
      </h2>
      <div className="sliders-container">
        <HintToggle
          text={translations[language].toggles.characters}
          isChecked={isShowingKanji}
          onToggle={ ()=> { setIsShowingKanji(!isShowingKanji) } }
        />
        <HintToggle
          text={translations[language].toggles.optionAudio}
          isChecked={isAudioHintOn}
          onToggle={ ()=> { setIsAudioHintOn(!isAudioHintOn) } }
        />
      </div>
			{ currChallengeIndex < challenges.length ? 
				<Challenge language={language}
          key={challenge.options[challenge.answerIndex].audio}
					audioFileName={challenge.options[challenge.answerIndex].audio} 
					options={challenge.options}
					answerPos={challenge.answerIndex}
					nextChallenge={nextChallenge}
          isHintOn={isAudioHintOn}
          isShowingKanji={isShowingKanji}
				/> :
				<div>
					<p>{translations[language].app.finished}</p>
				</div>
			}
		</div>
	)

	// if (currChallengeIndex < challenges.length) {
	// 	const challenge = challenges[currChallengeIndex];
	// 	return (
	// 		<Challenge 
	// 			audioFileName={challenge.options[challenge.answerIndex].audio} 
	// 			options={challenge.options}
	// 			answerPos={challenge.answerIndex}
	// 			nextChallenge={nextChallenge}
	// 		/>
	// 	  );
	// } else {
	// 	return (
	// 		<div>
	// 			<p>You have finished all the questions!</p>
	// 			<button onClick={ ()=> { setCurrChallengeIndex(0); } }>Reset</button>
	// 		</div>
			
	// 	)
	// }
  	
}

export default App;
