import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuizAnswer, CharacterType } from '@/pages/Index';

// Import transparent character SVGs for background
import jollyImg from '@/assets/characters/jolly-transparent.svg';
import museImg from '@/assets/characters/muse-transparent.svg';
import serenyImg from '@/assets/characters/sereny-transparent.svg';
import zenImg from '@/assets/characters/zen-transparent.svg';
import champyImg from '@/assets/characters/champy-transparent.svg';

interface QuizScreenProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

interface QuizOption {
  id: CharacterType;
  text: string;
  emoji: string;
}

interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Neutral color palette for quiz options - business + soft mood blend
const neutralColors = [
  'bg-slate-100 hover:bg-slate-200 border-slate-200',
  'bg-stone-100 hover:bg-stone-200 border-stone-200',
  'bg-zinc-100 hover:bg-zinc-200 border-zinc-200',
  'bg-neutral-100 hover:bg-neutral-200 border-neutral-200',
  'bg-gray-100 hover:bg-gray-200 border-gray-200',
];

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "When you're at a party, you usually...",
    options: [
      { id: 'outgoing', text: "Talk to everyone!", emoji: "🎉" },
      { id: 'creative', text: "Find the most interesting corner", emoji: "🎨" },
      { id: 'empathetic', text: "Check if everyone's okay", emoji: "💚" },
      { id: 'calm', text: "Listen and observe", emoji: "🌸" },
      { id: 'achiever', text: "Network like a boss", emoji: "💪" },
    ],
  },
  {
    id: 2,
    question: "Your ideal weekend looks like...",
    options: [
      { id: 'outgoing', text: "Hanging with friends", emoji: "👯" },
      { id: 'creative', text: "Creating something new", emoji: "✨" },
      { id: 'empathetic', text: "Self-care day", emoji: "🧘" },
      { id: 'calm', text: "Reading & relaxing", emoji: "📚" },
      { id: 'achiever', text: "Working on side projects", emoji: "🚀" },
    ],
  },
  {
    id: 3,
    question: "In a group project, you're the one who...",
    options: [
      { id: 'outgoing', text: "Keeps energy high", emoji: "⚡" },
      { id: 'creative', text: "Brings unique ideas", emoji: "💡" },
      { id: 'empathetic', text: "Makes sure everyone's heard", emoji: "🤝" },
      { id: 'calm', text: "Keeps things organized", emoji: "📋" },
      { id: 'achiever', text: "Leads to victory", emoji: "🏆" },
    ],
  },
  {
    id: 4,
    question: "Your go-to snack vibe is...",
    options: [
      { id: 'outgoing', text: "Bright & energizing", emoji: "🥭" },
      { id: 'creative', text: "Unique & colorful", emoji: "🐉" },
      { id: 'empathetic', text: "Fresh & nurturing", emoji: "🥒" },
      { id: 'calm', text: "Soft & comforting", emoji: "🍑" },
      { id: 'achiever', text: "Power-packed", emoji: "🫐" },
    ],
  },
  {
    id: 5,
    question: "Your friends would describe you as...",
    options: [
      { id: 'outgoing', text: "The life of the party", emoji: "⭐" },
      { id: 'creative', text: "The artistic soul", emoji: "🌈" },
      { id: 'empathetic', text: "The caring one", emoji: "💕" },
      { id: 'calm', text: "The peaceful presence", emoji: "🕊️" },
      { id: 'achiever', text: "The go-getter", emoji: "🔥" },
    ],
  },
];

const QuizScreen = ({ onComplete }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (answerId: string) => {
    setSelectedOption(answerId);
    
    setTimeout(() => {
      const newAnswers = [...answers, { questionId: questions[currentQuestion].id, answerId }];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Shuffle option order for each question to make it more fair
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen relative flex flex-col bg-gradient-to-b from-background via-soft-pink/20 to-background">
      {/* Decorative geometric shapes - character colors, subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow circle - Jolly - top left */}
        <motion.div 
          className="absolute top-[8%] left-[8%] w-12 h-12 md:w-16 md:h-16 bg-char-outgoing/20 rounded-full blur-[1px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pink square - Muse - top right */}
        <motion.div 
          className="absolute top-[10%] right-[10%] w-10 h-10 md:w-14 md:h-14 bg-char-creative/18 rounded-xl rotate-12 blur-[1px]"
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Green circle - Sereny - bottom left */}
        <motion.div 
          className="absolute bottom-[20%] left-[12%] w-10 h-10 md:w-14 md:h-14 bg-char-empathetic/20 rounded-full blur-[1px]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Peach oval - Zen - right side */}
        <motion.div 
          className="absolute top-[50%] right-[8%] w-8 h-12 md:w-10 md:h-16 bg-char-calm/22 rounded-full blur-[1px]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Purple square - Champy - bottom right */}
        <motion.div 
          className="absolute bottom-[25%] right-[15%] w-10 h-10 md:w-14 md:h-14 bg-char-achiever/18 rounded-lg rotate-6 blur-[1px]"
          animate={{ rotate: [6, 12, 6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {/* Small yellow - bottom center */}
        <motion.div 
          className="absolute bottom-[35%] left-[40%] w-6 h-6 md:w-10 md:h-10 bg-char-outgoing/15 rounded-lg rotate-45 blur-[1px]"
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Atmospheric background characters - EXTRA BIG, subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Jolly - Top Left */}
        <motion.img
          src={jollyImg}
          alt=""
          className="absolute -top-16 -left-16 w-56 md:w-72 opacity-18 blur-[1px]"
          animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Muse - Top Right */}
        <motion.img
          src={museImg}
          alt=""
          className="absolute -top-14 -right-16 w-56 md:w-72 opacity-18 blur-[1px]"
          animate={{ y: [0, -6, 0], scale: [1, 1.01, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Champy - Middle Right */}
        <motion.img
          src={champyImg}
          alt=""
          className="absolute top-1/3 -right-20 w-48 md:w-64 opacity-15 blur-[1px]"
          animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Sereny - Bottom Left */}
        <motion.img
          src={serenyImg}
          alt=""
          className="absolute bottom-16 -left-18 w-48 md:w-64 opacity-15 blur-[1px]"
          animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        
        {/* Zen - Bottom Right */}
        <motion.img
          src={zenImg}
          alt=""
          className="absolute bottom-12 -right-18 w-48 md:w-64 opacity-15 blur-[1px]"
          animate={{ y: [0, -4, 0], scale: [1, 1.01, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-muted/50 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-soft-pink via-blush-pink to-accent rounded-r-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Question counter */}
      <div className="container mx-auto px-6 pt-16">
        <p className="text-base font-display tracking-widest text-muted-foreground text-center">
          ✨ Question {currentQuestion + 1} of {questions.length} ✨
        </p>
      </div>

      {/* Question content */}
      <div className="flex-1 container mx-auto px-6 flex flex-col justify-center py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-8 text-center max-w-2xl mx-auto">
              {question.question}
            </h2>

            <div className="grid gap-3 max-w-md mx-auto">
              {shuffledOptions.map((option, index) => (
                <motion.button
                  key={option.id}
                  className={`p-4 text-left transition-all duration-300 rounded-2xl border-2 shadow-sm ${neutralColors[index % neutralColors.length]} ${
                    selectedOption === option.id ? 'ring-4 ring-foreground/20 scale-[1.02] shadow-md' : ''
                  }`}
                  onClick={() => handleSelect(option.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="flex-1">
                      <span className="text-lg font-display font-semibold text-foreground">
                        {option.text}
                      </span>
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizScreen;