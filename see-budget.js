const submitButton = document.getElementById('submitButton');
const showEnvelope = document.getElementById('show-envelope');
const submitAllButton = document.getElementById('get-all-envelopes')
const showAllEnvelopes = document.getElementById('show-all-envelopes')

const getFunction = (res) => {
    const getEnvelope = document.createElement('div');
    getEnvelope.innerHTML = `

    <div class='blaus'> ${res.title} </div>
    <div class='blauss'> ${res.envelope} </div>
    `
    showEnvelope.appendChild(getEnvelope);
}

const getData = async () => {
    const title = document.getElementById('get-envelope').value;
    try {
        const response = await fetch(`http://localhost:3000/budget/envelope?title=${title}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
              }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            getFunction(jsonResponse);
        }
        throw new Error('Request Failed');   
        } catch(error) {
            console.log(error);
    }
    
}

submitButton.addEventListener('click', getData);

const getAllFunction = (res) => {
    if (res.length > 0) {
        res.forEach(envelope => {
            const getAllEnvelopes = document.createElement('div');
            getAllEnvelopes.innerHTML = `
            <div class='title'> ${JSON.stringify(envelope.title)}: ${JSON.stringify(envelope.envelope)}  </div>
            
            `
            showAllEnvelopes.appendChild(getAllEnvelopes);
            });
    } else {
        showAllEnvelopes.innerHTML = '<p>Your request returned no envelopes.</p>';
    }   
}

const getAllData = async () => {
    try {
        const response = await fetch(`http://localhost:3000/budget/envelope`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
              }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            getAllFunction(jsonResponse);
        }
        throw new Error('Request Failed');   
        } catch(error) {
            console.log(error);
    }
    
}

submitAllButton.addEventListener('click', getAllData);