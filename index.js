const getEl = id => document.getElementById(id);

const selectContainer = getEl("select-container");
const selectEls = [...selectContainer.getElementsByTagName("div")];

let playedCards = [];
let myHand = [];
let deck = { '0': 1, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, '11': 11, '12': 12, 'Special': 15 }

selectContainer.addEventListener("click", handleValSelect);

function handleValSelect(e) {
    if (e.target.classList.contains("select-container")) return;
    selectEls.forEach(el => el.classList.remove("selected"));
    e.target.classList.add("selected");
}

// Helper functions
function getNumCards() { return deck.length; }
