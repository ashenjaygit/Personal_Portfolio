import { useState, useEffect } from 'react';

const useGitHubRepos = (username) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
                if (!response.ok) throw new Error('Failed to fetch repositories');

                const data = await response.json();

                // Filter logic: Not forked, Has stars, Not excluded
                const excludedRepos = []; // User can add repo names here to hide them

                const filtered = data.filter(repo =>
                    !repo.fork &&
                    repo.stargazers_count > 0 &&
                    !excludedRepos.includes(repo.name)
                );

                // Sort by stars descending, then updated
                const sorted = filtered.sort((a, b) => b.stargazers_count - a.stargazers_count);

                setRepos(sorted.slice(0, 6)); // Top 6
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username]);

    return { repos, loading, error };
};

export default useGitHubRepos;
