import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import type { QuizAnswer, CharacterType } from '@/pages/Index';

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
    question: "When you wake up, what kind of mood do you usually start the day with?",
    options: [
      { id: 'outgoing', text: "Check your phone, chat with friends, play some fun music", emoji: "📱" },
      { id: 'creative', text: "Go with the flow of your mood, choose what to do based on how you feel", emoji: "🎨" },
      { id: 'empathetic', text: "Take it slow, scroll around, do little things", emoji: "💆" },
      { id: 'calm', text: "Sit quietly, don't rush, slowly get yourself ready", emoji: "🌅" },
      { id: 'achiever', text: "Open a to-do list and plan the day right away", emoji: "📋" },
    ],
  },
  {
    id: 2,
    question: "What kind of atmosphere makes you feel most like yourself?",
    options: [
      { id: 'outgoing', text: "A café or lively place with people chatting and laughing", emoji: "☕" },
      { id: 'creative', text: "A small studio or workspace decorated in your own style", emoji: "✨" },
      { id: 'empathetic', text: "A cozy room with a comfy vibe that feels relaxing", emoji: "🛋️" },
      { id: 'calm', text: "A quiet corner near a window with plants or natural light", emoji: "🪴" },
      { id: 'achiever', text: "A neat, organized workspace with clear goals", emoji: "💼" },
    ],
  },
  {
    id: 3,
    question: "If you could choose, where would you go?",
    options: [
      { id: 'outgoing', text: "Tokyo — big city, busy, something to do all the time", emoji: "🗼" },
      { id: 'creative', text: "Iceland — new, unusual, different from everyone else", emoji: "🏔️" },
      { id: 'empathetic', text: "Switzerland — slow-paced city, cute cafés", emoji: "🏔️" },
      { id: 'calm', text: "New Zealand — nature, peaceful and refreshing", emoji: "🌿" },
      { id: 'achiever', text: "Singapore — modern system, easy travel, efficient", emoji: "🏙️" },
    ],
  },
  {
    id: 4,
    question: "What does your usual daily routine look like?",
    options: [
      { id: 'outgoing', text: "Set a rough plan, then let the day lead", emoji: "🎲" },
      { id: 'creative', text: "Not very structured, work based on mood and inspiration", emoji: "🎨" },
      { id: 'empathetic', text: "When you feel overwhelmed, take care of yourself during the day", emoji: "💝" },
      { id: 'calm', text: "Do what needs to be done, little by little, not rushing", emoji: "🌸" },
      { id: 'achiever', text: "Plan clearly in steps and check progress regularly", emoji: "✅" },
    ],
  },
  {
    id: 5,
    question: "When something doesn't go as planned, you usually…",
    options: [
      { id: 'outgoing', text: "Adjust and move on", emoji: "💪" },
      { id: 'creative', text: "Try to see it from a new perspective", emoji: "🔄" },
      { id: 'empathetic', text: "Care about your own feelings and others' feelings", emoji: "💕" },
      { id: 'calm', text: "Pause and reset yourself", emoji: "🧘" },
      { id: 'achiever', text: "Fix the problem as quickly as possible", emoji: "🔧" },
    ],
  },
  {
    id: 6,
    question: "What matters most to you right now?",
    options: [
      { id: 'outgoing', text: "Having positive energy", emoji: "⚡" },
      { id: 'creative', text: "Freedom to think and do", emoji: "🦋" },
      { id: 'empathetic', text: "Taking care of yourself", emoji: "💚" },
      { id: 'calm', text: "Simplicity and peace of mind", emoji: "🕊️" },
      { id: 'achiever', text: "Success and progress", emoji: "🏆" },
    ],
  },
  {
    id: 7,
    question: "How much do you like trying new things?",
    options: [
      { id: 'outgoing', text: "Love it", emoji: "🤩" },
      { id: 'creative', text: "Quite like it", emoji: "😊" },
      { id: 'empathetic', text: "Depends on the situation", emoji: "🤔" },
      { id: 'calm', text: "Don't really like it", emoji: "😌" },
      { id: 'achiever', text: "Like it if it helps me grow", emoji: "📈" },
    ],
  },
  {
    id: 8,
    question: "In your free time, how do you like to spend it?",
    options: [
      { id: 'outgoing', text: "Hang out with friends, chat a lot, share little life stories", emoji: "👯" },
      { id: 'creative', text: "Do something that lets your emotions flow, like drawing, writing, photography", emoji: "📸" },
      { id: 'empathetic', text: "Take gentle care of yourself — rest your mind, body, and feelings", emoji: "🧘" },
      { id: 'calm', text: "Stay quiet with yourself, play soft music, or just let your mind wander", emoji: "🎵" },
      { id: 'achiever', text: "Review goals, plan for the future, or improve yourself a bit more", emoji: "📚" },
    ],
  },
  {
    id: 9,
    question: "Which mood feels most like you?",
    options: [
      { id: 'outgoing', text: "Strawberry Surprised — sweet and a little sour, bright, playful", emoji: "🍓" },
      { id: 'creative', text: "Orange Passionate — bold, energetic, slightly zesty, motivating", emoji: "🍊" },
      { id: 'empathetic', text: "Avocado Pride — soft, deep, gives a grounded feeling, like recharging", emoji: "🥑" },
      { id: 'calm', text: "Coconut Calm — light, smooth, refreshing but not too strong", emoji: "🥥" },
      { id: 'achiever', text: "Keenly Kale — green, clean, serious about health, goal-oriented", emoji: "🥬" },
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
  // Use useMemo to prevent re-shuffling on every render
  const shuffledOptions = useMemo(
    () => [...question.options].sort(() => Math.random() - 0.5),
    [currentQuestion]
  );

  // Define multiple position sets for shapes to rotate through
  const positionSets = useMemo(() => [
    // Set 0 - original positions
    [
      { top: '8%', left: '8%' },
      { top: '12%', right: '10%' },
      { bottom: '15%', left: '12%' },
      { top: '45%', left: '5%' },
      { bottom: '20%', right: '8%' },
      { top: '25%', right: '25%' },
      { bottom: '30%', left: '35%' },
      { top: '60%', right: '15%' },
    ],
    // Set 1 - alternate positions
    [
      { top: '15%', right: '18%' },
      { bottom: '25%', left: '8%' },
      { top: '50%', right: '10%' },
      { bottom: '35%', right: '20%' },
      { top: '20%', left: '15%' },
      { bottom: '18%', left: '30%' },
      { top: '35%', right: '8%' },
      { top: '10%', left: '25%' },
    ],
  ], []);

  // Get current position set based on question
  const currentPositions = positionSets[currentQuestion % 2];

  return (
    <div className="min-h-screen relative flex flex-col bg-gradient-to-b from-background via-soft-pink/20 to-background">
      {/* Decorative geometric shapes - character colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <LayoutGroup>
        {/* Yellow circle - top left */}
        <motion.div
          layoutId="shape-0"
          className="absolute w-16 h-16 md:w-24 md:h-24 bg-char-outgoing/40 rounded-full"
          style={currentPositions[0]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.15, 1] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
        />
        {/* Pink rounded square - top right */}
        <motion.div
          className="absolute w-14 h-14 md:w-20 md:h-20 bg-char-creative/35 rounded-2xl rotate-12"
          style={currentPositions[1]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: [12, 20, 12] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 0.5 }, 
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-1"
        />
        {/* Green circle - bottom left */}
        <motion.div
          className="absolute w-12 h-12 md:w-18 md:h-18 bg-char-empathetic/40 rounded-full"
          style={currentPositions[2]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 0.5 }, 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-2"
        />
        {/* Peach oval - middle left */}
        <motion.div
          className="absolute w-10 h-14 md:w-14 md:h-20 bg-char-calm/45 rounded-full"
          style={currentPositions[3]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.1, 1] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-3"
        />
        {/* Purple square - bottom right */}
        <motion.div
          className="absolute w-14 h-14 md:w-20 md:h-20 bg-char-achiever/35 rounded-xl rotate-6"
          style={currentPositions[4]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: [6, 14, 6] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 0.5 }, 
            rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-4"
        />
        {/* Small yellow square - top center-right */}
        <motion.div
          className="absolute w-8 h-8 md:w-12 md:h-12 bg-char-outgoing/30 rounded-lg rotate-45"
          style={currentPositions[5]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: [45, 55, 45] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 0.5 }, 
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-5"
        />
        {/* Small pink circle - bottom center */}
        <motion.div
          className="absolute w-10 h-10 md:w-14 md:h-14 bg-char-creative/25 rounded-full"
          style={currentPositions[6]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 0.5 }, 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-6"
        />
        {/* Green rounded rectangle - right side */}
        <motion.div
          className="absolute w-8 h-12 md:w-12 md:h-18 bg-char-empathetic/30 rounded-xl -rotate-12"
          style={currentPositions[7]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: [-12, -6, -12] }}
          transition={{ 
            opacity: { duration: 0.5 }, 
            scale: { duration: 0.5 }, 
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            layout: { duration: 0.6, ease: "easeOut" }
          }}
          layout
          layoutId="shape-7"
        />
        </LayoutGroup>
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
          Question {currentQuestion + 1} of {questions.length}
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