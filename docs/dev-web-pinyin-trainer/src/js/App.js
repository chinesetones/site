// https://www.blandersoft.com/short/create-react-jekyll/

import Challenge from "./Challenge";
import { useState } from 'react';
import allChallenges from "./AllChallenges";
import shuffle from './HelperFunctions';

function App() {

	const [isHintOn, setIsHintOn] = useState(false);
	const [challenges, setChallenges] = useState(shuffle(allChallenges));
	const [currChallengeIndex, setCurrChallengeIndex] = useState(0)

	function nextChallenge() {
		setCurrChallengeIndex(currChallengeIndex+1);
	}

	function resetChallenges() {
		setCurrChallengeIndex(0);
		const newAllChallenges = shuffle(allChallenges);
		setChallenges(newAllChallenges);
	}

	if (currChallengeIndex < challenges.length) {
		const challenge = challenges[currChallengeIndex];
		return (
			<Challenge 
				audioFileName={challenge.options[challenge.answerIndex].audio} 
				options={challenge.options}
				answerPos={challenge.answerIndex}
				nextChallenge={nextChallenge}
			/>
		  );
	} else {
		return (
			<div>
				<p>You have finished all the questions!</p>
				<button onClick={ ()=> { setCurrChallengeIndex(0); } }>Reset</button>
			</div>
			
		)
	}
  	
}

export default App;
