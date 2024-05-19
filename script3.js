document.addEventListener('DOMContentLoaded', function() {
    fetch('https://coding-week-2024-api.onrender.com/api/data')
    .then(response => response.json())
    .then(data => {
        for (let i = 1; i < 5; i++) { 
            const apiEntry = document.getElementById(`heading${i}`);


            if (apiEntry) {
                apiEntry.textContent = data[i-1].headline;

            }
        }
       
        


    })
    .catch(error => {
        console.error('Error fetching the API data:', error);
        for (let i = 1; i < 5; i++) { 
            const apiEntry = document.getElementById(`newsheading${i}`);
            if (apiEntry) {
                apiEntry.textContent = 'API Error';
            }
        }
        
    });
});
