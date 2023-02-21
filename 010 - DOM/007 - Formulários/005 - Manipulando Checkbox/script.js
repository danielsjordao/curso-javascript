"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

let checkedValues = []; //qdo vai mudar valores tem que usar let e não const

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    submit.innerHTML = checkedValues;
});

form.checkbox.forEach ((element) => {
    element.addEventListener("change", (event) => {
        hasChecked(event, element);
        change.innerHTML = checkedValues;
    });
});

const hasChecked = (event, element) => {
    const  { target } = event;

    if(target.checked) {
        return checkedValues.push(element.value) //elemente é cada input
    }
    
    if (!target.checked) {
        return checkedValues.map ((checkedValue, index) => {
            if(element.value === checkedValue) {
                return checkedValues.splice(index, 1 );
            }
        })
    }
};