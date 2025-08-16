const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
const countBy = document.querySelector(".countBy");
const submitCountBtn = document.querySelector("#submitCount");
const startingValue = document.querySelector(".startingValue");
const submitStartValueBtn = document.querySelector("#submitStartValue");
const lowerBoundInput = document.querySelector(".lowerBound");
const upperBoundInput = document.querySelector(".upperBound");
const submitLowerBoundBtn = document.querySelector("#submitLowerBound");
const submitUpperBoundBtn = document.querySelector("#submitUpperBound");
const allowNegativeCheckbox = document.querySelector("#allowNegative");
let count = 0;
let lowerBound = -Infinity;
let upperBound = Infinity;
let allowNegative = allowNegativeCheckbox.checked; 
let countByValue = 1;
window.addEventListener("load", () => {
    const savedState = JSON.parse(localStorage.getItem("counterState"));
    if (savedState) {
        count = savedState.count;
        countByValue = savedState.countByValue;
        lowerBound = savedState.lowerBound;
        upperBound = savedState.upperBound;
        allowNegative = savedState.allowNegative;
        value.textContent = count;
        getCountColor();
        allowNegativeCheckbox.checked = allowNegative;
        } else {
        allowNegative = allowNegativeCheckbox.checked;
    }
});
function saveState() {
    const state = {
        count,
        countByValue,
        lowerBound,
        upperBound,
        allowNegative
    };
    localStorage.setItem("counterState", JSON.stringify(state));
}
submitStartValueBtn.addEventListener("click", function() {
    let startingVal = parseInt(startingValue.value);
    count = startingVal;
    value.textContent = count;
    getCountColor();
    saveState();
    this.disabled = true;
});
submitLowerBoundBtn.addEventListener("click", function() {
    lowerBound = parseInt(lowerBoundInput.value);
    saveState();
    this.disabled = true;
});
submitUpperBoundBtn.addEventListener("click", function() {
    upperBound = parseInt(upperBoundInput.value);
    saveState();
    this.disabled = true;
});
allowNegativeCheckbox.addEventListener("change", function() {
    allowNegative = this.checked;
    if (!allowNegative && count < 0) {
        count = 0;
        value.textContent = count;
    }
    saveState();
});
submitCountBtn.addEventListener("click", function() {
    countByValue = parseInt(countBy.value);
    btns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const btnStyle = e.currentTarget.classList;
            if (btnStyle.contains("increase")) {
                if (count + countByValue <= upperBound) {
                    count += countByValue;
                }
            } else if (btnStyle.contains("decrease")) {
                let newVal = count - countByValue;
                if (!allowNegative && newVal < 0) {
                    return; 
                }
                if (newVal >= lowerBound) {
                    count = newVal;
                }
            } else {
                count = 0;
            }
            value.textContent = count;
            getCountColor();
            toggleButtonStates();
            saveState(); 
        })
    });
    function getCountColor() {
        if(count > 0) {
            value.style.color = 'green';
        } else if(count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
    }
    function toggleButtonStates() {
        document.querySelector(".increase").disabled = count >= upperBound;
        document.querySelector(".decrease").disabled = (!allowNegative && count <= 0) || count <= lowerBound;
    }
    this.disabled = true;
});
