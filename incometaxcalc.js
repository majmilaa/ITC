const form = document.getElementById("calc_form");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const tax_brackets = [
    { lower: 0, upper: 250000, rate: 0 },
    { lower: 250000, upper: 400000, rate: 0.2 },
    { lower: 400000, upper: 800000, rate: 0.25 },
    { lower: 800000, upper: 2000000, rate: 0.3 },
    { lower: 2000000, upper: 8000000, rate: 0.32 },
    { lower: 8000000, upper: Infinity, rate: 0.35 },
];

const computeTax = (income) => {
    const bracket = tax_brackets.find(({ lower, upper }) => income > lower && income <= upper);
    return bracket ? (income - bracket.lower) * bracket.rate : null;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const income = parseFloat(input.value) || 0; // Ensure input is a number
    const tax = computeTax(income);
    output.value = tax !== null ? tax.toFixed(2) : "Invalid Input";
});
