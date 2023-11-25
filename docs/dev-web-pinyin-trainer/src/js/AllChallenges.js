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
    [
        {
            kanji: "吃",
            pinyin: "chī",
            audio: "/assets/audio/challenge-audio/chi1.mp3",
        }, 
        {
            kanji: "迟",
            pinyin: "chí",
            audio: "/assets/audio/challenge-audio/chi2.mp3",
        }, 
        {
            kanji: "齿",
            pinyin: "chǐ",
            audio: "/assets/audio/challenge-audio/chi3.mp3",
        }, 
        {
            kanji: "翅",
            pinyin: "chì",
            audio: "/assets/audio/challenge-audio/chi4.mp3",
        }
    ],
    [
        {
            kanji: "抽",
            pinyin: "chōu",
            audio: "/assets/audio/challenge-audio/chou1.mp3",
        }, 
        {
            kanji: "仇",
            pinyin: "chóu",
            audio: "/assets/audio/challenge-audio/chou2.mp3",
        }, 
        {
            kanji: "丑",
            pinyin: "chǒu",
            audio: "/assets/audio/challenge-audio/chou3.mp3",
        }, 
        {
            kanji: "臭",
            pinyin: "chòu",
            audio: "/assets/audio/challenge-audio/chou4.mp3",
        }
    ],
    [
        {
            kanji: "穿",
            pinyin: "chuān",
            audio: "/assets/audio/challenge-audio/chuan1.mp3",
        }, 
        {
            kanji: "船",
            pinyin: "chuán",
            audio: "/assets/audio/challenge-audio/chuan2.mp3",
        }, 
        {
            kanji: "窗",
            pinyin: "chuāng",
            audio: "/assets/audio/challenge-audio/chuang1.mp3",
        }, 
        {
            kanji: "床",
            pinyin: "chuáng",
            audio: "/assets/audio/challenge-audio/chuang2.mp3",
        }
    ],
    [
        {
            kanji: "刀",
            pinyin: "dāo",
            audio: "/assets/audio/challenge-audio/dao1.mp3",
        }, 
        {
            kanji: "岛",
            pinyin: "dǎo",
            audio: "/assets/audio/challenge-audio/dao3.mp3",
        }
    ],
    [
        {
            kanji: "东",
            pinyin: "dōng",
            audio: "/assets/audio/challenge-audio/dong1.mp3",
        }, 
        {
            kanji: "洞",
            pinyin: "dòng",
            audio: "/assets/audio/challenge-audio/dong4.mp3",
        }
    ],
    [
        {
            kanji: "都",
            pinyin: "dōu",
            audio: "/assets/audio/challenge-audio/dou1.mp3",
        }, 
        {
            kanji: "豆",
            pinyin: "dòu",
            audio: "/assets/audio/challenge-audio/dou4.mp3",
        }
    ],
    [
        {
            kanji: "读",
            pinyin: "dú",
            audio: "/assets/audio/challenge-audio/du2.mp3",
        }, 
        {
            kanji: "度",
            pinyin: "dù",
            audio: "/assets/audio/challenge-audio/du4.mp3",
        }
    ],
    [
        {
            kanji: "俄",
            pinyin: "é",
            audio: "/assets/audio/challenge-audio/e2.mp3",
        }, 
        {
            kanji: "饿",
            pinyin: "è",
            audio: "/assets/audio/challenge-audio/e4.mp3",
        }, 
        {
            kanji: "儿",
            pinyin: "ér",
            audio: "/assets/audio/challenge-audio/er2.mp3",
        }, 
        {
            kanji: "二",
            pinyin: "èr",
            audio: "/assets/audio/challenge-audio/er4.mp3",
        }
    ],
    [
        {
            kanji: "烦",
            pinyin: "fán",
            audio: "/assets/audio/challenge-audio/fan2.mp3",
        }, 
        {
            kanji: "反",
            pinyin: "fǎn",
            audio: "/assets/audio/challenge-audio/fan3.mp3",
        }, 
        {
            kanji: "饭",
            pinyin: "fàn",
            audio: "/assets/audio/challenge-audio/fan4.mp3",
        }
    ],
    [
        {
            kanji: "房",
            pinyin: "fáng",
            audio: "/assets/audio/challenge-audio/fang2.mp3",
        }, 
        {
            kanji: "访",
            pinyin: "fǎng",
            audio: "/assets/audio/challenge-audio/fang3.mp3",
        }, 
        {
            kanji: "放",
            pinyin: "fàng",
            audio: "/assets/audio/challenge-audio/fang4.mp3",
        }
    ],
    [
        {
            kanji: "锅",
            pinyin: "guō",
            audio: "/assets/audio/challenge-audio/guo1.mp3",
        }, 
        {
            kanji: "国",
            pinyin: "guó",
            audio: "/assets/audio/challenge-audio/guo2.mp3",
        }, 
        {
            kanji: "果",
            pinyin: "guǒ",
            audio: "/assets/audio/challenge-audio/guo3.mp3",
        }, 
        {
            kanji: "过",
            pinyin: "guò",
            audio: "/assets/audio/challenge-audio/guo4.mp3",
        }
    ],
    [
        {
            kanji: "孩",
            pinyin: "hái",
            audio: "/assets/audio/challenge-audio/hai2.mp3",
        }, 
        {
            kanji: "海",
            pinyin: "hǎi",
            audio: "/assets/audio/challenge-audio/hai3.mp3",
        }, 
        {
            kanji: "害",
            pinyin: "hài",
            audio: "/assets/audio/challenge-audio/hai4.mp3",
        }
    ],
    [
        {
            kanji: "花",
            pinyin: "hūa",
            audio: "/assets/audio/challenge-audio/hua1.mp3",
        }, 
        {
            kanji: "华",
            pinyin: "húa",
            audio: "/assets/audio/challenge-audio/hua2.mp3",
        }, 
        {
            kanji: "画",
            pinyin: "hùa",
            audio: "/assets/audio/challenge-audio/hua4.mp3",
        }
    ],
    [
        {
            kanji: "灰",
            pinyin: "huī",
            audio: "/assets/audio/challenge-audio/hui1.mp3",
        }, 
        {
            kanji: "回",
            pinyin: "huí",
            audio: "/assets/audio/challenge-audio/hui2.mp3",
        }, 
        {
            kanji: "悔",
            pinyin: "huǐ",
            audio: "/assets/audio/challenge-audio/hui3.mp3",
        },
        {
            kanji: "会",
            pinyin: "huì",
            audio: "/assets/audio/challenge-audio/hui4.mp3",
        }
    ],
    [
        {
            kanji: "活",
            pinyin: "húo",
            audio: "/assets/audio/challenge-audio/huo2.mp3",
        }, 
        {
            kanji: "火",
            pinyin: "hǔo",
            audio: "/assets/audio/challenge-audio/huo3.mp3",
        }, 
        {
            kanji: "货",
            pinyin: "hùo",
            audio: "/assets/audio/challenge-audio/huo4.mp3",
        }
    ],
    [
        {
            kanji: "家",
            pinyin: "jiā",
            audio: "/assets/audio/challenge-audio/jia1.mp3",
        }, 
        {
            kanji: "假",
            pinyin: "jiǎ",
            audio: "/assets/audio/challenge-audio/jia3.mp3",
        }, 
        {
            kanji: "价",
            pinyin: "jià",
            audio: "/assets/audio/challenge-audio/jia4.mp3",
        }
    ],
    [
        {
            kanji: "教",
            pinyin: "jiāo",
            audio: "/assets/audio/challenge-audio/jiao1.mp3",
        }, 
        {
            kanji: "脚",
            pinyin: "jiǎo",
            audio: "/assets/audio/challenge-audio/jiao3.mp3",
        }, 
        {
            kanji: "叫",
            pinyin: "jiào",
            audio: "/assets/audio/challenge-audio/jiao4.mp3",
        }
    ],
    [
        {
            kanji: "教",
            pinyin: "jiāo",
            audio: "/assets/audio/challenge-audio/jiao1.mp3",
        }, 
        {
            kanji: "脚",
            pinyin: "jiǎo",
            audio: "/assets/audio/challenge-audio/jiao3.mp3",
        }, 
        {
            kanji: "叫",
            pinyin: "jiào",
            audio: "/assets/audio/challenge-audio/jiao4.mp3",
        }
    ],
    [
        {
            kanji: "哭",
            pinyin: "kū",
            audio: "/assets/audio/challenge-audio/ku1.mp3",
        }, 
        {
            kanji: "苦",
            pinyin: "kǔ",
            audio: "/assets/audio/challenge-audio/ku3.mp3",
        }, 
        {
            kanji: "酷",
            pinyin: "kù",
            audio: "/assets/audio/challenge-audio/ku4.mp3",
        }
    ],
    [
        {
            kanji: "狼",
            pinyin: "láng",
            audio: "/assets/audio/challenge-audio/lang2.mp3",
        }, 
        {
            kanji: "朗",
            pinyin: "lǎng",
            audio: "/assets/audio/challenge-audio/lang3.mp3",
        }, 
        {
            kanji: "浪",
            pinyin: "làng",
            audio: "/assets/audio/challenge-audio/lang4.mp3",
        }
    ],
    [
        {
            kanji: "劳",
            pinyin: "láo",
            audio: "/assets/audio/challenge-audio/lao2.mp3",
        }, 
        {
            kanji: "老",
            pinyin: "lǎo",
            audio: "/assets/audio/challenge-audio/lao3.mp3",
        }
    ],
    [
        {
            kanji: "连",
            pinyin: "lián",
            audio: "/assets/audio/challenge-audio/lian2.mp3",
        }, 
        {
            kanji: "脸",
            pinyin: "liǎn",
            audio: "/assets/audio/challenge-audio/lian3.mp3",
        }, 
        {
            kanji: "练",
            pinyin: "liàn",
            audio: "/assets/audio/challenge-audio/lian4.mp3",
        }
    ],
    [
        {
            kanji: "凉",
            pinyin: "liáng",
            audio: "/assets/audio/challenge-audio/liang2.mp3",
        }, 
        {
            kanji: "两",
            pinyin: "liǎng",
            audio: "/assets/audio/challenge-audio/liang3.mp3",
        }, 
        {
            kanji: "亮",
            pinyin: "liàng",
            audio: "/assets/audio/challenge-audio/liang4.mp3",
        }
    ],
    [
        {
            kanji: "没",
            pinyin: "méi",
            audio: "/assets/audio/challenge-audio/mei2.mp3",
        }, 
        {
            kanji: "美",
            pinyin: "měi",
            audio: "/assets/audio/challenge-audio/mei3.mp3",
        }, 
        {
            kanji: "妹",
            pinyin: "mèi",
            audio: "/assets/audio/challenge-audio/mei4.mp3",
        }
    ],
    [
        {
            kanji: "迷",
            pinyin: "mí",
            audio: "/assets/audio/challenge-audio/mi2.mp3",
        }, 
        {
            kanji: "米",
            pinyin: "mǐ",
            audio: "/assets/audio/challenge-audio/mi3.mp3",
        }, 
        {
            kanji: "蜜",
            pinyin: "mì",
            audio: "/assets/audio/challenge-audio/mi4.mp3",
        }
    ],
    [
        {
            kanji: "七",
            pinyin: "qī",
            audio: "/assets/audio/challenge-audio/qi1.mp3",
        }, 
        {
            kanji: "旗",
            pinyin: "qí",
            audio: "/assets/audio/challenge-audio/qi2.mp3",
        }, 
        {
            kanji: "起",
            pinyin: "qǐ",
            audio: "/assets/audio/challenge-audio/qi3.mp3",
        }, 
        {
            kanji: "气",
            pinyin: "qì",
            audio: "/assets/audio/challenge-audio/qi4.mp3",
        }
    ],
    [
        {
            kanji: "千",
            pinyin: "qiān",
            audio: "/assets/audio/challenge-audio/qian1.mp3",
        }, 
        {
            kanji: "钱",
            pinyin: "qián",
            audio: "/assets/audio/challenge-audio/qian2.mp3",
        }, 
        {
            kanji: "浅",
            pinyin: "qiǎn",
            audio: "/assets/audio/challenge-audio/qian3.mp3",
        }, 
        {
            kanji: "欠",
            pinyin: "qiàn",
            audio: "/assets/audio/challenge-audio/qian4.mp3",
        }
    ],
    [
        {
            kanji: "枪",
            pinyin: "qiāng",
            audio: "/assets/audio/challenge-audio/qiang1.mp3",
        }, 
        {
            kanji: "强",
            pinyin: "qiáng",
            audio: "/assets/audio/challenge-audio/qiang2.mp3",
        }, 
        {
            kanji: "抢",
            pinyin: "qiǎng",
            audio: "/assets/audio/challenge-audio/qiang3.mp3",
        }
    ],
    [
        {
            kanji: "轻",
            pinyin: "qīng",
            audio: "/assets/audio/challenge-audio/qing1.mp3",
        }, 
        {
            kanji: "晴",
            pinyin: "qíng",
            audio: "/assets/audio/challenge-audio/qing2.mp3",
        }, 
        {
            kanji: "请",
            pinyin: "qǐng",
            audio: "/assets/audio/challenge-audio/qing3.mp3",
        }, 
        {
            kanji: "庆",
            pinyin: "qìng",
            audio: "/assets/audio/challenge-audio/qing4.mp3",
        }
    ],
    [
        {
            kanji: "三",
            pinyin: "sān",
            audio: "/assets/audio/challenge-audio/san1.mp3",
        }, 
        {
            kanji: "伞",
            pinyin: "sǎn",
            audio: "/assets/audio/challenge-audio/san3.mp3",
        }, 
        {
            kanji: "散",
            pinyin: "sàn",
            audio: "/assets/audio/challenge-audio/san4.mp3",
        }
    ],
    [
        {
            kanji: "烧",
            pinyin: "shāo",
            audio: "/assets/audio/challenge-audio/shao1.mp3",
        }, 
        {
            kanji: "勺",
            pinyin: "sháo",
            audio: "/assets/audio/challenge-audio/shao2.mp3",
        }, 
        {
            kanji: "少",
            pinyin: "shǎo",
            audio: "/assets/audio/challenge-audio/shao3.mp3",
        }
    ],
    [
        {
            kanji: "师",
            pinyin: "shī",
            audio: "/assets/audio/challenge-audio/shi1.mp3",
        }, 
        {
            kanji: "十",
            pinyin: "shí",
            audio: "/assets/audio/challenge-audio/shi2.mp3",
        }, 
        {
            kanji: "使",
            pinyin: "shǐ",
            audio: "/assets/audio/challenge-audio/shi3.mp3",
        }, 
        {
            kanji: "是",
            pinyin: "shì",
            audio: "/assets/audio/challenge-audio/shi4.mp3",
        }
    ],
    [
        {
            kanji: "收",
            pinyin: "shōu",
            audio: "/assets/audio/challenge-audio/shou1.mp3",
        }, 
        {
            kanji: "熟",
            pinyin: "shóu",
            audio: "/assets/audio/challenge-audio/shou2.mp3",
        }, 
        {
            kanji: "手",
            pinyin: "shǒu",
            audio: "/assets/audio/challenge-audio/shou3.mp3",
        }, 
        {
            kanji: "瘦",
            pinyin: "shòu",
            audio: "/assets/audio/challenge-audio/shou4.mp3",
        }
    ],
    [
        {
            kanji: "司",
            pinyin: "sī",
            audio: "/assets/audio/challenge-audio/si1.mp3",
        }, 
        {
            kanji: "死",
            pinyin: "sǐ",
            audio: "/assets/audio/challenge-audio/si3.mp3",
        }, 
        {
            kanji: "四",
            pinyin: "sì",
            audio: "/assets/audio/challenge-audio/si4.mp3",
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