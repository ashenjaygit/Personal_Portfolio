import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--nav-bg)] backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
            style={{
                backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-heading">
                    Ashen<span className="text-[var(--primary)]">.AI</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors font-medium">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4 border-l border-[var(--glass-border)] pl-8">
                        <a href="https://github.com/ashenjaygit" target="_blank" className="hover:text-[var(--primary)] transition-transform hover:-translate-y-1"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/ashen-jayarathne-605b35272" target="_blank" className="hover:text-[var(--primary)] transition-transform hover:-translate-y-1"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-[var(--text-main)]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-[var(--bg-color)] border-b border-[var(--glass-border)]"
                >
                    <ul className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg py-2 hover:text-[var(--primary)]"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
