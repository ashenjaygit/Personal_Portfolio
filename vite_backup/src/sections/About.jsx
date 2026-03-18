import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Python", "R", "SQL", "Machine Learning",
        "Data Analysis", "React", "Git", "Power BI"
    ];

    return (
        <section id="about" className="py-20 bg-[var(--glass-bg)] relative">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="text-[var(--primary)]">Me</span></h2>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6 text-lg">
                        I am a motivated <strong className="text-[var(--text-main)]">Data Science & Business Analytics undergraduate</strong> with a strong passion for Artificial Intelligence.
                    </p>
                    <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                        My journey involves mastering Python, data preprocessing, and implementing ML algorithms to derive actionable insights. I love working with real datasets and experimenting with new models.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6">Technical <span className="text-[var(--secondary)]">Skills</span></h3>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--glass-border)] rounded-full text-sm font-medium hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
