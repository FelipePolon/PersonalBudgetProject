const submitButton = document.getElementById('delete-envelope');
const showMessage = document.getElementById('show-message');

const deleteData = async () => {
    try{
        const title = document.getElementById('envelope-to-delete').value
        const response = await fetch(`http://localhost:3000/budget/delete?title=${title}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
              }
        });
        if (response.ok) {
            //const jsonResponse = await response.json();
            showMessage.innerHTML = `Your envelope was deleted!` 
        }
        throw new Error(error)
    } catch(error) {
        console.log(error);
    }
}

submitButton.addEventListener('click', deleteData);