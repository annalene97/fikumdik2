// ----- FORMS OG INPUT -----
// Tilføj joke
const tilfoejKnap = document.getElementById("tilfoejJoke"); // Knap
const beskedFraBrugeren = document.getElementById("beskedFraBrugeren"); // Tekstfelt

tilfoejKnap.onclick = tilfoejJoke;
function tilfoejJoke(){
    // alert(beskedFraBrugeren.value)
    jokes.push(beskedFraBrugeren.value);
    beskedFraBrugeren.value=""; //resetter input boksen
}
