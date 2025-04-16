//Why was this file created???
//Why did I do this???
//I don't know...
//
//Is there some use for this... hmmm...

// Remove file or add:
fetch('http://localhost:8000/home')
    .then(response => response.json())
    .then(data => {
        document.getElementById('welcome').textContent = data.message;
    });