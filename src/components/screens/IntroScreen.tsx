import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Import transparent character SVGs
import jollyImg from '@/assets/characters/jolly11.png';
import museImg from '@/assets/characters/muse11.png';
import serenyImg from '@/assets/characters/seceny11.png';
import zenImg from '@/assets/characters/zen11.png';
import champyImg from '@/assets/characters/champy11.png';

interface IntroScreenProps {
  onContinue: () => void;
}

const IntroScreen = ({ onContinue }: IntroScreenProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-background via-soft-pink/30 to-background">
      {/* Decorative geometric shapes - character colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow circle - Jolly - top left */}
        <motion.div 
          className="absolute top-[10%] left-[10%] w-14 h-14 md:w-20 md:h-20 rounded-full"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.3)' }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pink square - Muse - top right */}
        <motion.div 
          className="absolute top-[15%] right-[12%] w-12 h-12 md:w-18 md:h-18 rounded-xl rotate-12"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.25)' }}
          animate={{ rotate: [12, 18, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Green circle - Sereny - bottom left */}
        <motion.div 
          className="absolute bottom-[18%] left-[15%] w-10 h-10 md:w-16 md:h-16 rounded-full"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.3)' }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Peach oval - Zen - middle left */}
        <motion.div 
          className="absolute top-[40%] left-[8%] w-8 h-12 md:w-12 md:h-18 rounded-full"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.35)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Purple square - Champy - bottom right */}
        <motion.div 
          className="absolute bottom-[22%] right-[10%] w-12 h-12 md:w-18 md:h-18 rounded-xl rotate-6"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.25)' }}
          animate={{ rotate: [6, 12, 6] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {/* Small yellow - right side */}
        <motion.div 
          className="absolute top-[55%] right-[18%] w-8 h-8 md:w-12 md:h-12 rounded-lg rotate-45"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.2)' }}
          animate={{ rotate: [45, 55, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Small green circle - top center */}
        <motion.div 
          className="absolute top-[25%] left-[30%] w-6 h-6 md:w-10 md:h-10 rounded-full"
          style={{ backgroundColor: 'rgba(232, 102, 42, 0.18)' }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* Transparent characters around edges - EXTRA BIG */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Jolly - Top Left */}
        <motion.img
          src={jollyImg}
          alt=""
          className="absolute -top-12 -left-16 w-48 md:w-56 lg:w-64 drop-shadow-lg character-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 0.2 },
            x: { duration: 0.5, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Muse - Top Right */}
        <motion.img
          src={museImg}
          alt=""
          className="absolute -top-10 -right-16 w-48 md:w-56 lg:w-64 drop-shadow-lg character-transparent"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 0.3 },
            x: { duration: 0.5, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />
        
        {/* Sereny - Bottom Left */}
        <motion.img
          src={serenyImg}
          alt=""
          className="absolute bottom-16 -left-16 w-40 md:w-48 lg:w-56 drop-shadow-lg character-transparent"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 0.4 },
            x: { duration: 0.5, delay: 0.4 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
        
        {/* Zen - Bottom Right */}
        <motion.img
          src={zenImg}
          alt=""
          className="absolute bottom-20 -right-16 w-40 md:w-48 lg:w-56 drop-shadow-lg character-transparent"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 0.5 },
            x: { duration: 0.5, delay: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
        />
        
        {/* Champy - Middle Right */}
        <motion.img
          src={champyImg}
          alt=""
          className="absolute top-1/3 -right-20 w-36 md:w-44 lg:w-52 drop-shadow-lg character-transparent"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 0.6 },
            x: { duration: 0.5, delay: 0.6 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
            Success is a <span className="italic text-bright-orange">mindset</span>;
            <br />
            energy is the <span className="italic text-char-creative">fuel</span>.
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl font-body text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Find the perfect Mooood for your Bizcomp journey. Answer a few fun questions and discover your achiever archetype! 🌟
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button variant="hero" size="xl" onClick={onContinue} className="rounded-full font-display text-lg shadow-lg hover:shadow-xl transition-shadow">
            LET'S BEGIN 🎉
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroScreen;