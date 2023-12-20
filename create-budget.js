const submitButton = document.getElementById('submit-envelope');
const showEnvelope = document.getElementById('new-envelope');

const title = document.getElementById('envelope').value;
const envelopeValue = document.getElementById('envelope-value').value;

const createFunction = (res) => {
    const newEnvelope = document.createElement('div');
    newEnvelope.innerHTML = `
    <h3>New Envelope was added!</h3>
    <div class='blaus'> ${res.title} </div>
    <div class='blauss'> ${res.envelope} </div>
    `
    showEnvelope.appendChild(newEnvelope);
}

const postData = async () => {
    const title = document.getElementById('envelope').value;
    const envelopeValue = document.getElementById('envelope-value').value;
    try {
        const response = await fetch(`http://localhost:3000/budget/create?title=${title}&envelope=${envelopeValue}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
              }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            createFunction(jsonResponse);
        }
        throw new Error('Request Failed');   
        } catch(error) {
            console.log(error);
    }
    
}

submitButton.addEventListener('click', postData);
