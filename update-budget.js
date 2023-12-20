const submitUpdateButton = document.getElementById('update-envelope');
const showMessage = document.getElementById('update-message');

const updateData = async () => {
    const title = document.getElementById('envelope-to-update').value;
    const envelope = document.getElementById('envelope-value-to-update').value;
    try {
        const response = await fetch(`http://localhost:3000/budget/update?title=${title}&envelope=${envelope}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
              }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            showMessage.innerHTML = `Your envelope was updated!
            <p>New Valor: ${JSON.stringify(jsonResponse.envelope)}</p>
            `;
        }
        throw new Error('Request Failed');   
        } catch(error) {
            console.log(error);
    }
    
}

submitUpdateButton.addEventListener('click', updateData);

const submitTransferButton = document.getElementById('transfer-Button')
const showTransferMessage = document.getElementById('transfer-message')

const transferData = async () => {
    const from = document.getElementById('from-envelope').value
    const to = document.getElementById('to-envelope').value
    const transactionValue = document.getElementById('transfer-value').value
    try {
        const response = await fetch(`http://localhost:3000/budget/transfer/${from}/${to}?transfer=${transactionValue}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
              }
        })
        if (response.ok) {
            const jsonResponse = await response.json();
            showTransferMessage.innerHTML = `Your transfer was a Success!`;
        }
        throw new Error('Request Failed');   
        } catch(error) {
            console.log(error);
    }
    
}

submitTransferButton.addEventListener('click', transferData);