import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import type { CharacterResult, CharacterType } from '@/pages/Index';

// Import transparent character SVGs
import jollyImg from '@/assets/characters/jolly11.png';
import museImg from '@/assets/characters/muse11.png';
import serenyImg from '@/assets/characters/seceny11.png';
import zenImg from '@/assets/characters/zen11.png';
import champyImg from '@/assets/characters/champy11.png';

interface ResultScreenProps {
  result: CharacterResult;
  onContinue: () => void;
}

const characterImages: Record<CharacterType, string> = {
  outgoing: jollyImg,
  creative: museImg,
  empathetic: serenyImg,
  calm: zenImg,
  achiever: champyImg,
};

const characterStyles: Record<CharacterType, {
  bg: string;
  accent: string;
  gradient: string;
  auraColor: string;
  auraGlow: string;
}> = {
  outgoing: {
    bg: 'from-amber-50 via-yellow-50 to-orange-50',
    accent: 'text-amber-600',
    gradient: 'from-amber-200 via-yellow-200 to-orange-200',
    auraColor: 'rgba(251, 191, 36, 0.25)',
    auraGlow: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.15) 40%, transparent 70%)',
  },
  creative: {
    bg: 'from-pink-50 via-rose-50 to-fuchsia-50',
    accent: 'text-pink-600',
    gradient: 'from-pink-200 via-rose-200 to-fuchsia-200',
    auraColor: 'rgba(244, 114, 182, 0.25)',
    auraGlow: 'radial-gradient(ellipse at center, rgba(244, 114, 182, 0.4) 0%, rgba(244, 114, 182, 0.15) 40%, transparent 70%)',
  },
  empathetic: {
    bg: 'from-emerald-50 via-green-50 to-teal-50',
    accent: 'text-emerald-600',
    gradient: 'from-emerald-200 via-green-200 to-teal-200',
    auraColor: 'rgba(52, 211, 153, 0.25)',
    auraGlow: 'radial-gradient(ellipse at center, rgba(52, 211, 153, 0.4) 0%, rgba(52, 211, 153, 0.15) 40%, transparent 70%)',
  },
  calm: {
    bg: 'from-rose-50 via-pink-50 to-orange-50',
    accent: 'text-rose-500',
    gradient: 'from-rose-200 via-pink-200 to-orange-200',
    auraColor: 'rgba(251, 207, 232, 0.35)',
    auraGlow: 'radial-gradient(ellipse at center, rgba(251, 207, 232, 0.5) 0%, rgba(251, 207, 232, 0.2) 40%, transparent 70%)',
  },
  achiever: {
    bg: 'from-violet-50 via-purple-50 to-indigo-50',
    accent: 'text-violet-600',
    gradient: 'from-violet-200 via-purple-200 to-indigo-200',
    auraColor: 'rgba(167, 139, 250, 0.25)',
    auraGlow: 'radial-gradient(ellipse at center, rgba(167, 139, 250, 0.4) 0%, rgba(167, 139, 250, 0.15) 40%, transparent 70%)',
  },
};

const ResultScreen = ({ result, onContinue }: ResultScreenProps) => {
  const styles = characterStyles[result.type];
  const characterImage = characterImages[result.type];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `I'm ${result.characterName}!`,
        text: `${result.description} My perfect Mooood match is ${result.product}! Take the quiz to find yours.`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-b ${styles.bg}`}>
      {/* Decorative geometric shapes - character colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow circle - Jolly - top left */}
        <motion.div 
          className="absolute top-[10%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-char-outgoing/35 rounded-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pink square - Muse - top right */}
        <motion.div 
          className="absolute top-[8%] right-[10%] w-14 h-14 md:w-20 md:h-20 bg-char-creative/30 rounded-xl rotate-12"
          animate={{ rotate: [12, 20, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Green circle - Sereny - bottom left */}
        <motion.div 
          className="absolute bottom-[15%] left-[10%] w-12 h-12 md:w-18 md:h-18 bg-char-empathetic/35 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Peach oval - Zen - middle left */}
        <motion.div 
          className="absolute top-[40%] left-[5%] w-10 h-14 md:w-14 md:h-20 bg-char-calm/40 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Purple square - Champy - bottom right */}
        <motion.div 
          className="absolute bottom-[18%] right-[8%] w-14 h-14 md:w-20 md:h-20 bg-char-achiever/30 rounded-xl rotate-6"
          animate={{ rotate: [6, 14, 6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {/* Small yellow - right side */}
        <motion.div 
          className="absolute top-[30%] right-[15%] w-10 h-10 md:w-14 md:h-14 bg-char-outgoing/25 rounded-lg rotate-45"
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small green - top center */}
        <motion.div 
          className="absolute top-[20%] left-[25%] w-8 h-8 md:w-12 md:h-12 bg-char-empathetic/25 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* Character-matched gradient decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className={`absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br ${styles.gradient} opacity-40 rounded-full blur-3xl`}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={`absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr ${styles.gradient} opacity-30 rounded-full blur-3xl`}
          animate={{ scale: [1.2, 1, 1.2], rotate: [45, 0, 45] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Sparkles/stars decoration */}
        <motion.div
          className="absolute top-[15%] left-[15%] text-4xl"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-[12%] right-[20%] text-3xl"
          animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        >
          ⭐
        </motion.div>
        <motion.div
          className="absolute bottom-[22%] left-[12%] text-3xl"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          💫
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] right-[12%] text-4xl"
          animate={{ rotate: [0, -360], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          🌟
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <motion.p
          className="text-base font-display tracking-widest text-muted-foreground uppercase mb-2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          ✨ Your Result ✨
        </motion.p>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          {/* Character image with aura effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Soft aura glow behind character */}
            <motion.div 
              className="absolute -inset-16 md:-inset-24 rounded-full"
              style={{ background: styles.auraGlow }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Secondary aura ring */}
            <motion.div 
              className="absolute -inset-8 md:-inset-12 rounded-full blur-xl"
              style={{ backgroundColor: styles.auraColor }}
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.img
              src={characterImage}
              alt={result.characterName}
              className="relative w-56 h-56 md:w-72 md:h-72 object-contain drop-shadow-2xl"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Character info card */}
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 max-w-md w-full text-center shadow-xl border border-white/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm font-body tracking-widest text-muted-foreground uppercase mb-1">
              You are
            </p>
            <h1 className={`text-4xl md:text-5xl font-display font-bold mb-1 ${styles.accent}`}>
              {result.characterName}
            </h1>
            <p className="text-lg font-body text-muted-foreground mb-2">
              {result.name}
            </p>
            <p className="text-xl font-display italic text-foreground mb-3">
              "{result.trait}"
            </p>
            <p className="text-base font-body text-muted-foreground leading-relaxed">
              {result.description}
            </p>
          </motion.div>

          {/* Product match */}
          <motion.div
            className={`bg-gradient-to-r ${styles.gradient} rounded-3xl p-5 max-w-md w-full text-center shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm font-display tracking-widest text-foreground/70 uppercase mb-1">
              🍃 Your Perfect Match 🍃
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
              {result.product}
            </h2>
            <p className="text-lg font-body text-foreground/80">
              {result.productFlavor}
            </p>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          className="flex flex-col gap-3 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onContinue}
            className="w-full rounded-full font-display text-lg"
          >
            CLAIM YOUR REWARD
          </Button>
          <Button 
            variant="hero-outline" 
            size="xl" 
            onClick={handleShare}
            className="w-full rounded-full font-display"
          >
            SHARE TO IG STORY
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultScreen;