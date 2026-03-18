import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--secondary)] opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-[var(--primary)] font-semibold text-lg mb-4">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Ashen <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                            Jayarathne
                        </span>
                    </h1>
                    <h2 className="text-2xl text-[var(--text-muted)] mb-6 font-medium">
                        Aspiring AI/ML Engineer
                    </h2>
                    <p className="text-[var(--text-muted)] text-lg mb-8 max-w-lg leading-relaxed">
                        Data Science & Business Analytics Undergraduate passionate about building intelligent systems and solving real-world problems with data.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-3 bg-[var(--primary)] text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all transform hover:-translate-y-1"
                        >
                            <Mail size={20} /> Contact Me
                        </a>
                        <a
                            href="#projects"
                            className="flex items-center gap-2 px-8 py-3 border border-[var(--primary)] text-[var(--primary)] font-bold rounded-full hover:bg-[var(--primary-glow)] transition-all"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                        <div className="absolute inset-0 border-2 border-[var(--primary)] rounded-full opacity-20 animate-pulse" />
                        <div className="absolute inset-4 border-2 border-[var(--secondary)] rounded-full opacity-20 animate-pulse delay-75" />
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative w-full h-full rounded-full overflow-hidden border-[4px] border-[var(--glass-border)] shadow-2xl"
                        >
                            <img src={profileImg} alt="Ashen Jayarathne" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
