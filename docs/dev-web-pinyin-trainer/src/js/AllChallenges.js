const allCombinations = [
    [
        {
            kanji: "妈",
            pinyin: "mā",
            audio: "/assets/audio/challenge-audio/ma1.mp3",
        }, 
        {
            kanji: "麻",
            pinyin: "má",
            audio: "/assets/audio/challenge-audio/ma2.mp3",
        }, 
        {
            kanji: "马",
            pinyin: "mǎ",
            audio: "/assets/audio/challenge-audio/ma3.mp3",
        }, 
        {
            kanji: "骂",
            pinyin: "mà",
            audio: "/assets/audio/challenge-audio/ma4.mp3",
        }
    ],
    [
        {
            kanji: "八",
            pinyin: "bā",
            audio: "/assets/audio/challenge-audio/ba1.mp3",
        }, 
        {
            kanji: "拔",
            pinyin: "bá",
            audio: "/assets/audio/challenge-audio/ba2.mp3",
        }, 
        {
            kanji: "把",
            pinyin: "bǎ",
            audio: "/assets/audio/challenge-audio/ba3.mp3",
        }, 
        {
            kanji: "爸",
            pinyin: "bà",
            audio: "/assets/audio/challenge-audio/ba4.mp3",
        }
    ],
    [
        {
            kanji: "衣",
            pinyin: "yī",
            audio: "/assets/audio/challenge-audio/yi1.mp3",
        }, 
        {
            kanji: "椅",
            pinyin: "yǐ",
            audio: "/assets/audio/challenge-audio/yi3.mp3",
        }
    ],
    [
        {
            kanji: "安",
            pinyin: "ān",
            audio: "/assets/audio/challenge-audio/an1.mp3",
        }, 
        {
            kanji: "暗",
            pinyin: "àn",
            audio: "/assets/audio/challenge-audio/an4.mp3",
        }
    ],
    [
        {
            kanji: "白",
            pinyin: "bái",
            audio: "/assets/audio/challenge-audio/bai2.mp3",
        }, 
        {
            kanji: "百",
            pinyin: "bǎi",
            audio: "/assets/audio/challenge-audio/bai3.mp3",
        }, 
        {
            kanji: "拜",
            pinyin: "bài",
            audio: "/assets/audio/challenge-audio/bai4.mp3",
        }
    ],
];

function generateChallenges() {
    let challenges = [];
    allCombinations.forEach((combination) => {
        for (let i = 0; i < combination.length; i++) {
            const challenge = {
                options: combination,
                answerIndex: i
            };
            challenges.push(challenge);
        }
    });
    return challenges;
}

const allChallenges = generateChallenges()

export default allChallenges;