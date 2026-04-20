//Filtering da chips {not Ruffels because there are no ridges (: } -Written by Ryan Collins
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".project-card");

//Active chip function
function setActiveChip(clicked_chip) {
  //Looping through all the chips
  for (let i = 0; i < chips.length; i++) {
    const current_chip = chips[i];
    const is_active = current_chip === clicked_chip;

    if (is_active) {
      current_chip.classList.add("is-active");
    } else {
      current_chip.classList.remove("is-active");
    }
  }
}
//Filter Function
function applyFilter(filter_value) {
  //Looping through all the cards (using x instead of i this time for my sanity)
  for (let x = 0; x < cards.length; x++) {
    //Store the current card
    const current_card = cards[x];
    //Filter logic (as provided on canvas)
    const li = current_card.closest("li");
    if (li) {
      if (filter_value === "all") {
        li.hidden = false;
      } else {
        const card_category = current_card.dataset.category;
        li.hidden = card_category !== filter_value;
      }
    }
    //End of provided filter logic
  }
}
//On chip click function
function OnChipClick(event) {
  //Get clicked chip
  const clicked_chip = event.currentTarget;
  //Get filter value
  const filter_value = clicked_chip.dataset.filter;
  //Calling functions to update filter cards and the ui
  setActiveChip(clicked_chip);
  applyFilter(filter_value);
}
//Loop for click event listeners
for (let i = 0; i < chips.length; i++) {
  chips[i].addEventListener("click", OnChipClick);
}
