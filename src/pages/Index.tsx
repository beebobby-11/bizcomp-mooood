import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroScreen from '@/components/screens/HeroScreen';
import IntroScreen from '@/components/screens/IntroScreen';
import QuizScreen from '@/components/screens/QuizScreen';
import ResultScreen from '@/components/screens/ResultScreen';
import CTAScreen from '@/components/screens/CTAScreen';

export type Screen = 'hero' | 'intro' | 'quiz' | 'result' | 'cta';

export interface QuizAnswer {
  questionId: number;
  answerId: string;
}

export type CharacterType = 'outgoing' | 'creative' | 'empathetic' | 'calm' | 'achiever';

export interface CharacterResult {
  type: CharacterType;
  characterName: string;
  name: string;
  nameTh: string;
  trait: string;
  traitTh: string;
  description: string;
  productList: string[];
  emoji: string;
}

const characterData: Record<CharacterType, CharacterResult> = {
  outgoing: {
    type: 'outgoing',
    characterName: 'Jolly',
    name: 'The Outgoing One',
    nameTh: 'Social Spark',
    trait: 'Positive Energy',
    traitTh: 'พลังบวก สดใส',
    description: 'You light up every room! Your joyful spirit and social energy inspire everyone around you.',
    productList: ['Orange Passionate', 'Tropical Joy', 'Thai Tea Protein Ball'],
    emoji: '⭐',
  },
  creative: {
    type: 'creative',
    characterName: 'Muse',
    name: 'The Creative One',
    nameTh: 'รักอิสระ',
    trait: 'Free Spirit',
    traitTh: 'รักอิสระ สร้างสรรค์',
    description: 'Your imagination knows no bounds! You see beauty and possibilities everywhere.',
    productList: ['Flirty Berry Yolo', 'Beet Boost', 'Cranberry Lemon Protein Ball'],
    emoji: '🌸',
  },
  empathetic: {
    type: 'empathetic',
    characterName: 'Sereny',
    name: 'The Empathetic One',
    nameTh: 'ใส่ใจตัวเองและคนรอบข้าง',
    trait: 'Self Care Champion',
    traitTh: 'เป็นห่วงความรู้สึกตัวเองและคนอื่น',
    description: 'You care deeply about yourself and others. Self-care is your superpower!',
    productList: ['Keenly Kaley', 'Avoco Pride', 'Matcha Latte Protein Ball'],
    emoji: '💚',
  },
  calm: {
    type: 'calm',
    characterName: 'Zen',
    name: 'The Calm One',
    nameTh: 'เรียบง่าย ชอบรับฟัง',
    trait: 'Peaceful Listener',
    traitTh: 'เรียบง่าย ชอบรับฟัง',
    description: 'Your calm presence is a gift. You listen deeply and bring peace to any situation.',
    productList: ['Endless Blue Sky', 'Coconut Calm', 'Carrot Cake Protein Ball'],
    emoji: '🍑',
  },
  achiever: {
    type: 'achiever',
    characterName: 'Champy',
    name: 'The Achiever',
    nameTh: 'Go Getter',
    trait: 'Determined to Succeed',
    traitTh: 'มุ่งมั่น ทะเยอทะยาน',
    description: 'Nothing can stop you! Your determination and drive push you toward every goal.',
    productList: ['Gym MOOOOD', 'Dark Chocolate Protein Ball', 'Mocha Protein Ball'],
    emoji: '💜',
  },
};

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('hero');
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [result, setResult] = useState<CharacterResult | null>(null);

  const calculateResult = (quizAnswers: QuizAnswer[]): CharacterType => {
    const scores: Record<CharacterType, number> = {
      outgoing: 0,
      creative: 0,
      empathetic: 0,
      calm: 0,
      achiever: 0,
    };

    quizAnswers.forEach((answer) => {
      const type = answer.answerId as CharacterType;
      if (scores[type] !== undefined) {
        scores[type]++;
      }
    });

    // Find the type with highest score
    let maxScore = 0;
    let resultType: CharacterType = 'outgoing';
    
    (Object.keys(scores) as CharacterType[]).forEach((type) => {
      if (scores[type] > maxScore) {
        maxScore = scores[type];
        resultType = type;
      }
    });

    return resultType;
  };

  const handleQuizComplete = (quizAnswers: QuizAnswer[]) => {
    setAnswers(quizAnswers);
    const resultType = calculateResult(quizAnswers);
    setResult(characterData[resultType]);
    setCurrentScreen('result');
  };

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <HeroScreen onStart={() => navigateTo('intro')} />
          </motion.div>
        )}

        {currentScreen === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <IntroScreen onContinue={() => navigateTo('quiz')} />
          </motion.div>
        )}

        {currentScreen === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <QuizScreen onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentScreen === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <ResultScreen result={result} onContinue={() => navigateTo('cta')} />
          </motion.div>
        )}

        {currentScreen === 'cta' && (
          <motion.div
            key="cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CTAScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;