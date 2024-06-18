document.getElementById('form').addEventListener('submit', function(event) {
    // Sørger for at den ikke indsender formen
    event.preventDefault();
    
    // Fjerner alle tidligere fejlbeskeder
    document.querySelectorAll('.fejl').forEach(function(error) {
        error.style.display = 'none';
    });

    // Finder input elementerne fra HTML
    const antal = document.getElementById('antal');
    const navn = document.getElementById('navn');
    const mail = document.getElementById('mail');
    const besked = document.getElementById('besked');

       // Tjekker om input felterne er tomme, eller kun indeholder mellemrum (det er det trim betyder)
    // Hvis feltet er tomt vises den tilhørende fejlmeddelelse ved at ændre display til "inline"
    // DETTE NEDENFOR ER EN BOOLEAN med kun true og false som værdier
    let isValid = true;

    if (antal.value.trim() === '') {
        document.getElementById('antal_fejl').style.display = 'inline';
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

   /*  if (besked.value.trim() === '') {
        document.getElementById('besked_fejl').style.display = 'inline';
        isValid = false;
    } */

    // Hvis alle felter er udfyldt vises MODAL
    if (isValid) {

    //VARIABLER TIL MODAL
    // Vi finder hele event_send_modal i HTML
    const eventsSendModal = document.getElementById("events_send_modal");

    // Vi finder send knappen
    const sendKnap = document.getElementById("events_send_knap");
    
    // Vi finder <span> element som lukker Kaffe modal (bruges også til send modal)
    const lukKaffeModal = document.getElementById("lukknap_kaffe_modal");

               // Når man klikker på knappen, åbner send modalet 
               sendKnap.onclick = function() {
                eventsSendModal.style.display = "block";
            }
        
            // Når man klikker på <span> (x / lukknap), lukker modalen
            lukKaffeModal.onclick = function() {
                eventsSendModal.style.display = "none";
            }

            /* FØRSTE FORSØG MED ALERT
        alert('Juhuuu vi glæder os til at se dig/jer!'); // LAV SJOV*/ 
    }
});


