const certGrid = document.getElementById('certificates-grid');

async function fetchCertificates() {
    try {
        const response = await fetch('data/certificates.json');
        if (!response.ok) throw new Error('Failed to load certificates');

        const certs = await response.json();
        renderCertificates(certs);
    } catch (error) {
        certGrid.innerHTML = '<p>Could not load certificates.</p>';
        console.error(error);
    }
}

function renderCertificates(certs) {
    certGrid.innerHTML = '';

    certs.forEach(cert => {
        const card = document.createElement('div');
        card.classList.add('cert-card');

        // Using a generic award icon
        card.innerHTML = `
            <div class="cert-icon">
                <i data-feather="award"></i>
            </div>
            <div class="cert-content">
                <h3>${cert.name}</h3>
                <p class="issuer">${cert.issuer}</p>
                <span class="date">${cert.date}</span>
                <a href="${cert.link}" target="_blank" class="view-btn">View Certificate</a>
            </div>
        `;

        certGrid.appendChild(card);
    });

    feather.replace();
}

// Init
fetchCertificates();
