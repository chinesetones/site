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
    [
        {
            kanji: "班",
            pinyin: "bān",
            audio: "/assets/audio/challenge-audio/ban1.mp3",
        }, 
        {
            kanji: "半",
            pinyin: "bàn",
            audio: "/assets/audio/challenge-audio/ban4.mp3",
        },
        {
            kanji: "帮",
            pinyin: "bāng",
            audio: "/assets/audio/challenge-audio/bang1.mp3",
        },
        {
            kanji: "棒",
            pinyin: "bàng",
            audio: "/assets/audio/challenge-audio/bang4.mp3",
        }
    ],
    [
        {
            kanji: "保",
            pinyin: "bǎo",
            audio: "/assets/audio/challenge-audio/bao3.mp3",
        }, 
        {
            kanji: "抱",
            pinyin: "bào",
            audio: "/assets/audio/challenge-audio/bao4.mp3",
        }
    ],
    [
        {
            kanji: "杯",
            pinyin: "bēi",
            audio: "/assets/audio/challenge-audio/bei1.mp3",
        }, 
        {
            kanji: "北",
            pinyin: "běi",
            audio: "/assets/audio/challenge-audio/bei3.mp3",
        }, 
        {
            kanji: "被",
            pinyin: "bèi",
            audio: "/assets/audio/challenge-audio/bei4.mp3",
        }
    ],
    [
        {
            kanji: "鼻",
            pinyin: "bí",
            audio: "/assets/audio/challenge-audio/bi2.mp3",
        }, 
        {
            kanji: "比",
            pinyin: "bǐ",
            audio: "/assets/audio/challenge-audio/bi3.mp3",
        }, 
        {
            kanji: "必",
            pinyin: "bì",
            audio: "/assets/audio/challenge-audio/bi4.mp3",
        }
    ],
    [
        {
            kanji: "波",
            pinyin: "bō",
            audio: "/assets/audio/challenge-audio/bo1.mp3",
        }, 
        {
            kanji: "柏",
            pinyin: "bó",
            audio: "/assets/audio/challenge-audio/bo2.mp3",
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