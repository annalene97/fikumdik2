// Vi definerer variablerne
/* const raekke1 = document.getElementsByClassName("event_boks_mobil1");
const raekke2 = document.getElementsByClassName("event_boks_mobil2");
const raekke3 = document.getElementsByClassName("event_boks_mobil3");
const raekke4 = document.getElementsByClassName("event_boks_mobil4");
const raekke5 = document.getElementsByClassName("event_boks_mobil5"); */

const eventKort = document.querySelectorAll('.events_boks')

// Eventlistener: Når man scroller kaldes der på funktionen fadeInd
window.onscroll = fadeInd;

// Her definerer vi de elementer funktionen skal bruge
function fadeInd(){
    /* fadeInEventBoks(raekke1);
    fadeInEventBoks(raekke2);
    fadeInEventBoks(raekke3);
    fadeInEventBoks(raekke4);
    fadeInEventBoks(raekke5); */
    fadeInEventBoks(eventKort);
}

// 
function fadeInEventBoks(elements) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let element_info = element.getBoundingClientRect(); // for hvert plads i for-loopet får funktionen elementets placering ift. viewport

        // Hvis topplaceringen er mindre end vinduets højde minus 250 (for at kunne se rækkerne fade ind, skal opacity sættes til 1)
        if (element_info.top < window.innerHeight - 150) {
            element.style.opacity = "1";
        }
    }
}


/* Filtreringsknapper */
    // Her henter vi alle knapper og dernæst alle event-kort
    const filterKnapper = document.querySelectorAll('.events_filter_knap');
    const events = document.querySelectorAll('.events_boks');

    // Her giver vi knapperne en onclick funktion
    filterKnapper.forEach(knap => {
        knap.addEventListener('click', () => {
            const filter = knap.getAttribute('data-filter');
            
            //Når vi trykker på en knap, filtøjes classen 'aktiv', der er stylet i css
            filterKnapper.forEach(knp => {
                knp.classList.toggle('aktiv', knp === knap);

                if (knp !== knap) { //alle andre knapper end den klikkede knap får fjernet classen 'aktiv', hvis den er eksisterer.
                    knp.classList.remove('aktiv');
                }
            });
            
            // Vi ønsker at vise en bestemt event kategori, når vi trykker på den korresponderende knap
            events.forEach(event => {
                if (filter === 'alle') { //Hvis knappen har data-filteret 'alle', vises alle events (Dette er sidens start tilstand)
                    event.classList.remove('skjult');
                } else {
                    const kategori = event.getAttribute('data-kategori');
                    if (kategori === filter) { // Her parrer vi knappernes data-filter attribut med event-kortenes date-kategori. Hvis de matcher vises de, hvis ikke skjules de.
                        event.classList.remove('skjult');
                    } else {
                        event.classList.add('skjult');
                    }
                }
            });
        });
    });