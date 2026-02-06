import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuizAnswer, CharacterType } from '@/pages/Index';

interface QuizScreenProps {
  onComplete: (answers: QuizAnswer[]) => void;
}

interface QuizOption {
  id: CharacterType;
  text: string;
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
      { id: 'outgoing', text: "Check your phone, chat with friends, play some fun music" },
      { id: 'creative', text: "Go with the flow of your mood, choose what to do based on how you feel" },
      { id: 'empathetic', text: "Take it slow, scroll around, do little things" },
      { id: 'calm', text: "Sit quietly, don't rush, slowly get yourself ready" },
      { id: 'achiever', text: "Open a to-do list and plan the day right away" },
    ],
  },
  {
    id: 2,
    question: "What kind of atmosphere makes you feel most like yourself?",
    options: [
      { id: 'outgoing', text: "A café or lively place with people chatting and laughing" },
      { id: 'creative', text: "A small studio or workspace decorated in your own style" },
      { id: 'empathetic', text: "A cozy room with a comfy vibe that feels relaxing" },
      { id: 'calm', text: "A quiet corner near a window with plants or natural light" },
      { id: 'achiever', text: "A neat, organized workspace with clear goals" },
    ],
  },
  {
    id: 3,
    question: "If you could choose, where would you go?",
    options: [
      { id: 'outgoing', text: "Tokyo — big city, busy, something to do all the time" },
      { id: 'creative', text: "Iceland — new, unusual, different from everyone else" },
      { id: 'empathetic', text: "Switzerland — slow-paced city, cute cafés" },
      { id: 'calm', text: "New Zealand — nature, peaceful and refreshing" },
      { id: 'achiever', text: "Singapore — modern system, easy travel, efficient" },
    ],
  },
  {
    id: 4,
    question: "What does your usual daily routine look like?",
    options: [
      { id: 'outgoing', text: "Set a rough plan, then let the day lead" },
      { id: 'creative', text: "Not very structured, work based on mood and inspiration" },
      { id: 'empathetic', text: "When you feel overwhelmed, take care of yourself during the day" },
      { id: 'calm', text: "Do what needs to be done, little by little, not rushing" },
      { id: 'achiever', text: "Plan clearly in steps and check progress regularly" },
    ],
  },
  {
    id: 5,
    question: "When something doesn't go as planned, you usually…",
    options: [
      { id: 'outgoing', text: "Adjust and move on" },
      { id: 'creative', text: "Try to see it from a new perspective" },
      { id: 'empathetic', text: "Care about your own feelings and others' feelings" },
      { id: 'calm', text: "Pause and reset yourself" },
      { id: 'achiever', text: "Fix the problem as quickly as possible" },
    ],
  },
  {
    id: 6,
    question: "What matters most to you right now?",
    options: [
      { id: 'outgoing', text: "Having positive energy" },
      { id: 'creative', text: "Freedom to think and do" },
      { id: 'empathetic', text: "Taking care of yourself" },
      { id: 'calm', text: "Simplicity and peace of mind" },
      { id: 'achiever', text: "Success and progress" },
    ],
  },
  {
    id: 7,
    question: "How much do you like trying new things?",
    options: [
      { id: 'outgoing', text: "Love it" },
      { id: 'creative', text: "Quite like it" },
      { id: 'empathetic', text: "Depends on the situation" },
      { id: 'calm', text: "Don't really like it" },
      { id: 'achiever', text: "Like it if it helps me grow" },
    ],
  },
  {
    id: 8,
    question: "In your free time, how do you like to spend it?",
    options: [
      { id: 'outgoing', text: "Hang out with friends, chat a lot, share little life stories" },
      { id: 'creative', text: "Do something that lets your emotions flow, like drawing, writing, photography" },
      { id: 'empathetic', text: "Take gentle care of yourself — rest your mind, body, and feelings" },
      { id: 'calm', text: "Stay quiet with yourself, play soft music, or just let your mind wander" },
      { id: 'achiever', text: "Review goals, plan for the future, or improve yourself a bit more" },
    ],
  },
  {
    id: 9,
    question: "Which mood feels most like you?",
    options: [
      { id: 'outgoing', text: "Strawberry Surprised — sweet and a little sour, bright, playful" },
      { id: 'creative', text: "Orange Passionate — bold, energetic, slightly zesty, motivating" },
      { id: 'empathetic', text: "Avocado Pride — soft, deep, gives a grounded feeling, like recharging" },
      { id: 'calm', text: "Coconut Calm — light, smooth, refreshing but not too strong" },
      { id: 'achiever', text: "Keenly Kale — green, clean, serious about health, goal-oriented" },
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
      {/* Decorative geometric shapes - character colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow circle - top left */}
        <motion.div 
          className="absolute top-[8%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-char-outgoing/40 rounded-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pink rounded square - top right */}
        <motion.div 
          className="absolute top-[12%] right-[10%] w-14 h-14 md:w-20 md:h-20 bg-char-creative/35 rounded-2xl rotate-12"
          animate={{ rotate: [12, 20, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Green circle - bottom left */}
        <motion.div 
          className="absolute bottom-[15%] left-[12%] w-12 h-12 md:w-18 md:h-18 bg-char-empathetic/40 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Peach oval - middle left */}
        <motion.div 
          className="absolute top-[45%] left-[5%] w-10 h-14 md:w-14 md:h-20 bg-char-calm/45 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Purple square - bottom right */}
        <motion.div 
          className="absolute bottom-[20%] right-[8%] w-14 h-14 md:w-20 md:h-20 bg-char-achiever/35 rounded-xl rotate-6"
          animate={{ rotate: [6, 14, 6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {/* Small yellow square - top center-right */}
        <motion.div 
          className="absolute top-[25%] right-[25%] w-8 h-8 md:w-12 md:h-12 bg-char-outgoing/30 rounded-lg rotate-45"
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small pink circle - bottom center */}
        <motion.div 
          className="absolute bottom-[30%] left-[35%] w-10 h-10 md:w-14 md:h-14 bg-char-creative/25 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        {/* Green rounded rectangle - right side */}
        <motion.div 
          className="absolute top-[60%] right-[15%] w-8 h-12 md:w-12 md:h-18 bg-char-empathetic/30 rounded-xl -rotate-12"
          animate={{ rotate: [-12, -6, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
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