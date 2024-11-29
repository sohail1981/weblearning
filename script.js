// Fetch data from JSON file and update the webpage
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('bio').textContent = data.bio;
    })
    .catch(error => console.error('Error fetching data:', error));

document.getElementById('changeBio').addEventListener('click', function() {
    document.getElementById('bio').textContent = 'Bio has been updated!';
});