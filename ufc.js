document.addEventListener('DOMContentLoaded', () => {
    fetch('https://mma-stats.p.rapidapi.com/fighters', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'your_api_key',
            'X-RapidAPI-Host': 'mma-stats.p.rapidapi.com'
        }
    })
    .then(response => response.json())
    .then(data => {
        const fightersGrid = document.querySelector('.fighters-grid');
        data.slice(0, 5).forEach(fighter => {
            const fighterDiv = document.createElement('div');
            fighterDiv.classList.add('fighter-card');
            fighterDiv.innerHTML = `
                <h3>${fighter.name}</h3>
                <p>Wins: ${fighter.wins}, Losses: ${fighter.losses}</p>
            `;
            fightersGrid.appendChild(fighterDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
