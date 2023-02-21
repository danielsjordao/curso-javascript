"use strict";

const form = document.forms.namedItem("select-radio");
const submit = document.querySelector("#submit");
const change = document.querySelector("#change");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const radio = form.radio;
    submit.innerHTML = radio.value;

    //console.log(radio.value);
    // radio.forEach((res) => {
    //     if(res.checked) {
    //         console.log(res);
    //     }
    // });
});

form.radio.forEach(res => {
    res.addEventListener("change", (event) => {
        const {target} = event; //forma mais limpa
        if (target.checked){
            change.innerHTML = target.value;
        }

        //console.log(target.value);
        //ou 
        // if (event.target.checked) {
        //     console.log(event.target.value);
        // }
    });
});