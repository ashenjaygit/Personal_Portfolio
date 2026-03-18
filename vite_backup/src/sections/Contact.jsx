import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-[800px] mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In <span className="text-[var(--primary)]">Touch</span></h2>
                    <p className="text-[var(--text-muted)] mb-12">
                        Reference the original plan: Update the form action ID with your own from Formspree.
                    </p>
                </motion.div>

                <motion.form
                    action="https://formspree.io/f/mnnegzeo"
                    method="POST"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[var(--card-bg)] p-8 rounded-2xl border border-[var(--glass-border)] shadow-xl text-left"
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Name</label>
                            <input type="text" name="name" required className="w-full bg-[var(--bg-color)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] transition-colors" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Email</label>
                            <input type="email" name="email" required className="w-full bg-[var(--bg-color)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] transition-colors" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium mb-2 text-[var(--text-muted)]">Message</label>
                        <textarea name="message" rows="5" required className="w-full bg-[var(--bg-color)] border border-[var(--glass-border)] rounded-lg p-3 text-[var(--text-main)] focus:outline-none focus:border-[var(--primary)] transition-colors"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-bold py-4 rounded-lg hover:shadow-lg transform active:scale-[0.98] transition-all flex justify-center items-center gap-2">
                        <Send size={20} /> Send Message
                    </button>
                </motion.form>
            </div>

            <footer className="text-center mt-20 text-[var(--text-muted)] text-sm">
                <p>&copy; 2025 Ashen Jayarathne. Built with React & Tailwind Vibe.</p>
            </footer>
        </section>
    );
};

export default Contact;
