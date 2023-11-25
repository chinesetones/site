// https://www.blandersoft.com/short/create-react-jekyll/

import Challenge from "./Challenge";
import { useState, useMemo } from 'react';
import allChallenges from "./AllChallenges";
import shuffle from './HelperFunctions';
import HintToggle from "./HintToggle";

function App() {

	const [isAudioHintOn, setIsAudioHintOn] = useState(true);
  const [isShowingKanji, setIsShowingKanji] = useState(true);
	const challenges = useMemo(() => {
    return shuffle(allChallenges);
  }, []);
	const [currChallengeIndex, setCurrChallengeIndex] = useState(0);

	function nextChallenge() {
		setCurrChallengeIndex(currChallengeIndex+1);
	}

	const challenge = challenges[currChallengeIndex];

	return (
		<div>
      <div className="sliders-container">
        <HintToggle
          text="CHARACTERS"
          isChecked={isShowingKanji}
          onToggle={ ()=> { setIsShowingKanji(!isShowingKanji) } }
        />
        <HintToggle
          text="OPTION AUDIO"
          isChecked={isAudioHintOn}
          onToggle={ ()=> { setIsAudioHintOn(!isAudioHintOn) } }
        />
      </div>
			{ currChallengeIndex < challenges.length ? 
				<Challenge 
          key={challenge.options[challenge.answerIndex].audio}
					audioFileName={challenge.options[challenge.answerIndex].audio} 
					options={challenge.options}
					answerPos={challenge.answerIndex}
					nextChallenge={nextChallenge}
          isHintOn={isAudioHintOn}
          isShowingKanji={isShowingKanji}
				/> :
				<div>
					<p>You have finished all the questions! Refresh the page to attempt them again.</p>
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
