document.getElementById('form').addEventListener('submit', function(event) {
    // Sørger for at den ikke indsender formen
    event.preventDefault();
    
    // Fjerner alle tidligere fejlbeskeder
    document.querySelectorAll('.fejl').forEach(function(error) {
        error.style.display = 'none';
    });

    // Finder input elementerne fra HTML
    const emne = document.getElementById('emne');
    const navn = document.getElementById('navn');
    const mail = document.getElementById('mail');
    const besked = document.getElementById('besked');

    // Tjekker om input felterne er tomme
    let isValid = true;

    if (emne.value.trim() === '') {
        document.getElementById('emne_fejl').style.display = 'inline';
        isValid = false;
    }

    if (navn.value.trim() === '') {
        document.getElementById('navn_fejl').style.display = 'inline';
        isValid = false;
    }

    if (mail.value.trim() === '') {
        document.getElementById('mail_fejl').style.display = 'inline';
        isValid = false;
    }

    if (besked.value.trim() === '') {
        document.getElementById('besked_fejl').style.display = 'inline';
        isValid = false;
    }

    // Hvis alle felter er udfyldt vises alert
    // LAV EVT MODAL
    if (isValid) {
        alert('Din besked er på vej til os!'); // LAV SJOV
    }
});