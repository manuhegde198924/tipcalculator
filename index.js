const conversionRates = {
    USD: 1,   // Default currency (1 USD = 1 USD)
    EUR: 0.85,  // Example conversion rates
    GBP: 0.73
};
// //
document.addEventListener("DOMContentLoaded", () => {
    const billAmountInput = document.getElementById("bill");
    const serviceRatingSelect = document.getElementById("serviceRating");
    const numOfPersonsInput = document.getElementById("numOfPersons");
    const calculateButton = document.getElementById("calculate");
    const individualTipsList = document.getElementById("individualTips");

    calculateButton.addEventListener("click", () => {
        const billAmount = parseFloat(billAmountInput.value);
        const serviceRating = parseFloat(serviceRatingSelect.value);
        const numOfPersons = parseInt(numOfPersonsInput.value);

        if (!isNaN(billAmount) && !isNaN(serviceRating) && !isNaN(numOfPersons) && billAmount > 0 && numOfPersons >= 1) {
            const totalTip = (billAmount * serviceRating);
            const tipPerPerson = totalTip / numOfPersons;

            individualTipsList.innerHTML = ""; // Clear previous results

            for (let i = 1; i <= numOfPersons; i++) {
                const listItem = document.createElement("li");
                listItem.textContent = `Person ${i}: $${tipPerPerson.toFixed(2)}`;
                individualTipsList.appendChild(listItem);
            }
        }
    });
});