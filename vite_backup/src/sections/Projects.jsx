import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink, Star, Code } from 'lucide-react';
import useGitHubRepos from '../hooks/useGitHubRepos';

const Projects = () => {
    const { repos, loading, error } = useGitHubRepos('ashenjaygit');

    if (loading) return <div className="text-center py-20">Loading Projects...</div>;
    if (error) return null;

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-[var(--primary)]">Projects</span></h2>
                    <p className="text-[var(--text-muted)]">A selection of my latest work from GitHub</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.map((repo, index) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[var(--card-bg)] border border-[var(--glass-border)] rounded-xl p-6 hover:border-[var(--primary)] transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <Folder className="text-[var(--primary)] w-10 h-10" />
                                <div className="flex gap-4">
                                    {repo.homepage && (
                                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--primary)]">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--primary)]">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{repo.name}</h3>
                            <p className="text-[var(--text-muted)] text-sm mb-6 line-clamp-3 h-[60px]">
                                {repo.description || "No description available."}
                            </p>

                            <div className="flex justify-between items-center text-xs text-[var(--text-muted)] font-mono">
                                <span className="flex items-center gap-1">
                                    <Code size={14} className="text-[var(--secondary)]" />
                                    {repo.language || "Code"}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Star size={14} className="text-yellow-400" />
                                    {repo.stargazers_count}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
