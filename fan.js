document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blessingform');
    const message = document.getElementById('confirmationMessage');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new 
    FormData(form);
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok){
                form.reset();
                message.style.display = 
    'block';
            } else {
                alert("Oops! Ther was a problem submitting the form.");
            }
        }).catch(error => {
            alert("Something went wrong: " + error);
        });  
    });
})