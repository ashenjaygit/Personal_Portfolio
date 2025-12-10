const projectsGrid = document.getElementById('projects-grid');
const username = 'ashenjaygit';
const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`;

async function fetchProjects() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch projects');

        const data = await response.json();


        // List of repository names to hide
        const excludedRepos = [
            'repo-name-to-hide',
            'another-repo-to-hide'
        ];

        // Filter: Not forked AND not in excluded list AND has stars (stargazers_count > 0)
        const projects = data.filter(repo =>
            !repo.fork &&
            !excludedRepos.includes(repo.name) &&
            repo.stargazers_count > 0
        );

        displayProjects(projects);
    } catch (error) {
        projectsGrid.innerHTML = `<p class="error">Unable to load projects from GitHub. <a href="https://github.com/${username}" target="_blank">View on GitHub</a></p>`;
        console.error(error);
    }
}

function displayProjects(projects) {
    projectsGrid.innerHTML = ''; // Clear loading

    if (projects.length === 0) {
        projectsGrid.innerHTML = '<p>No projects found.</p>';
        return;
    }

    projects.forEach(repo => {
        const card = document.createElement('div');
        card.classList.add('project-card');

        // Formatting date
        const date = new Date(repo.updated_at).toLocaleDateString();

        card.innerHTML = `
            <div class="card-header">
                <i data-feather="folder" class="folder-icon"></i>
                <div class="card-links">
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank"><i data-feather="external-link"></i></a>` : ''}
                    <a href="${repo.html_url}" target="_blank"><i data-feather="github"></i></a>
                </div>
            </div>
            <h3 class="card-title">${repo.name}</h3>
            <p class="card-desc">${repo.description || 'No description available.'}</p>
            <div class="card-footer">
                <span class="language">${repo.language || 'Code'}</span>
                <span class="date">${date}</span>
            </div>
        `;

        projectsGrid.appendChild(card);
    });

    // Re-initialize icons since they are dynamically added
    feather.replace();
}

// Init
fetchProjects();
