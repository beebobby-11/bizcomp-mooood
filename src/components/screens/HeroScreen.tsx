import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Import transparent character SVGs
import moooodLogo from '@/assets/characters/MOOOOD.png';
import jollyImg from '@/assets/characters/jolly11.png';
import museImg from '@/assets/characters/muse11.png';
import serenyImg from '@/assets/characters/seceny11.png';
import zenImg from '@/assets/characters/zen11.png';
import champyImg from '@/assets/characters/champy11.png';

interface HeroScreenProps {
  onStart: () => void;
}

const HeroScreen = ({ onStart }: HeroScreenProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-soft-pink via-background to-blush-pink">
      {/* Decorative geometric shapes - character colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow circle - Jolly color - top left */}
        <motion.div 
          className="absolute top-[8%] left-[8%] w-16 h-16 md:w-24 md:h-24 bg-char-outgoing/40 rounded-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pink rounded square - Muse color - top right */}
        <motion.div 
          className="absolute top-[12%] right-[10%] w-14 h-14 md:w-20 md:h-20 bg-char-creative/35 rounded-2xl rotate-12"
          animate={{ rotate: [12, 20, 12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {/* Green circle - Sereny color - bottom left */}
        <motion.div 
          className="absolute bottom-[15%] left-[12%] w-12 h-12 md:w-18 md:h-18 bg-char-empathetic/40 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Peach oval - Zen color - middle left */}
        <motion.div 
          className="absolute top-[45%] left-[5%] w-10 h-14 md:w-14 md:h-20 bg-char-calm/45 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Purple square - Champy color - bottom right */}
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

      {/* Transparent character images around edges - EXTRA BIG */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Jolly - Top Left */}
        <motion.div
          className="absolute -top-8 -left-8 w-32 md:w-40 lg:w-48 z-20"
          initial={{ opacity: 0, x: -50, rotate: -20 }}
          animate={{ opacity: 1, x: 0, rotate: -12 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src={jollyImg}
            alt="Jolly - The Outgoing One"
            className="w-full h-auto drop-shadow-lg character-transparent"
            animate={{ y: [0, -8, 0], rotate: [-12, -8, -12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Muse - Top Right */}
        <motion.div
          className="absolute -top-6 -right-8 w-32 md:w-40 lg:w-48 z-20"
          initial={{ opacity: 0, x: 50, rotate: 20 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src={museImg}
            alt="Muse - The Creative One"
            className="w-full h-auto drop-shadow-lg character-transparent"
            animate={{ y: [0, -10, 0], rotate: [10, 14, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Champy - Middle Right */}
        <motion.div
          className="absolute top-1/3 -right-10 w-32 md:w-40 lg:w-48 z-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.img
            src={champyImg}
            alt="Champy - The Achiever"
            className="w-full h-auto drop-shadow-lg character-transparent"
            animate={{ y: [0, -6, 0], rotate: [5, 8, 5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        {/* Sereny - Bottom Left */}
        <motion.div
          className="absolute bottom-16 -left-10 w-32 md:w-40 lg:w-48 z-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.img
            src={serenyImg}
            alt="Sereny - The Empathetic One"
            className="w-full h-auto drop-shadow-lg character-transparent"
            animate={{ y: [0, -8, 0], rotate: [-8, -5, -8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </motion.div>

        {/* Zen - Bottom Right */}
        <motion.div
          className="absolute bottom-12 -right-8 w-32 md:w-40 lg:w-48 z-20"
          initial={{ opacity: 0, x: 50, rotate: 15 }}
          animate={{ opacity: 1, x: 0, rotate: 8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.img
            src={zenImg}
            alt="Zen - The Calm One"
            className="w-full h-auto drop-shadow-lg character-transparent"
            animate={{ y: [0, -5, 0], rotate: [8, 12, 8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 flex justify-center">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              BIZCOMP <span className="text-muted-foreground font-body font-light">×</span> <span style={{ color: '#e8662a', fontFamily: 'Anton, sans-serif', fontWeight: 400 }}>MOOOOD</span>
            </span>
          </motion.div>
        </header>

        {/* Hero content - centered */}
        <main className="flex-1 flex flex-col items-center justify-center gap-6 py-8">
          <div className="max-w-xl text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WHAT'S YOUR
              <br />
              <img src={moooodLogo} alt="MOOOOD" className="inline-block h-12 md:h-16 lg:h-20 my-2" style={{ maxWidth: '100%', height: 'auto' }} />
              <br />
              TODAY?
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl font-body text-muted-foreground mb-8 max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover your business personality and find the perfect fuel for your next big win! 🚀
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="hero" size="xl" onClick={onStart} className="rounded-full font-display text-lg shadow-lg hover:shadow-xl transition-shadow">
                ✨ START THE EXPERIENCE
              </Button>
            </motion.div>
          </div>
        </main>

        {/* Marquee */}
        <div className="py-4 border-t border-border/50 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="mx-8 text-sm font-body tracking-widest text-muted-foreground uppercase">
                Bizcomp × Mooood: January Showcase — Fueling the Next Generation of Achievers
                <span className="mx-8 text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;