let cardholder_name = document.getElementById("cardholder-name")
let display_name = document.getElementById("display-ch-name")
let card_number = document.getElementById("card-number")
let display_cardNumber = document.getElementById("display-card-number")
let month = document.getElementById("exp-month")
let display_month = document.getElementById("display-month")
let year =document.getElementById("exp-year")
let display_year = document.getElementById("display-year")
let cvc = document.getElementById("cvc")
let display_cvc = document.getElementById("display-cvc")
let err_name = document.getElementById("error-ch-message")
let err_cvc = document.getElementById("error-cvc-message")
let err_number = document.getElementById("error-number-message")
let err_date = document.getElementById("error-date-message")
let input = document.querySelectorAll("input")
const btn = document.querySelector("button")
const first_state = document.querySelector(".first-state")
const active_state = document.querySelector(".active-state")
const continue_btn = document.getElementById("continue-btn")


cardholder_name.addEventListener("input",()=>{
    display_name.innerText = cardholder_name.value;
    // let checked_name1 = checked_name;

    if (cardholder_name.value === 0){
        return checked_name = false;
        // console.log(checked_name);
    }
})

card_number.addEventListener("input",()=>{
    let card_value = card_number.value;
    display_cardNumber.innerText = card_value.replace(/(\d{4})/g, '$1 ').slice(0,23);
})

month.addEventListener("input",()=>{
    if (month.value >= 1 && month.value <= 9) {
        return display_month.innerText = "0" + month.value.slice(0,2);;
    } else {
        return display_month.innerText = month.value.slice(0,2);;
    }
})

year.addEventListener("input",()=>{
    display_year.innerText = year.value.slice(0,2);
})
cvc.addEventListener("input",()=>{
    display_cvc.innerText = cvc.value.slice(0,3);
})

const checked = (name) =>{
    if (name.length === 0){
        err_name.classList.remove("hidden")
        cardholder_name.classList.add("errstate")
    }
    else {
        err_name.classList.add("hidden")
        cardholder_name.classList.remove("errstate")
    }
}

const checked_cvc = (cvc_input)=>{
    if (cvc_input.length === 0){
        err_cvc.classList.remove("hidden")
        cvc.classList.add("errstate")
    }
    else {
        err_cvc.classList.add("hidden")
        cvc.classList.remove("errstate")
    }
}

const checked_month = (month_input) =>{
    if (month_input.length === 0){
        err_date.classList.remove("hidden")
        month.classList.add("errstate")
    }
    else {
        err_date.classList.add("hidden")
        month.classList.remove("errstate")
    }
}
const checked_year = (year_input) =>{
    if (year_input.length === 0){
        err_date.classList.remove("hidden")
        year.classList.add("errstate")
    }
    else {
        err_date.classList.add("hidden")
        year.classList.remove("errstate")
    }
}

const checked_number = (number_input) =>{
    let hasLetter = false;
    for (let i=0;i<=number_input.length;i++){
        let charCode = number_input.charCodeAt(i);
        // if (charCode < 48 || charCode > 57) {
        if (charCode < 32 || charCode >32 && charCode <48 || charCode > 57) {

            hasLetter = true;
            break;
        }
    }
    if (hasLetter){
        err_number.classList.remove("hidden");
        card_number.classList.add("errstate")
    }
    else {
        err_number.classList.add("hidden");
        card_number.classList.remove("errstate")
    }

}



btn.addEventListener("click",()=>{
    checked(cardholder_name.value);
    checked_cvc(cvc.value);
    checked_month(month.value);
    checked_year(year.value);
    checked_number(card_number.value)

    if (cardholder_name.value && cvc.value && month.value && year.value && card_number.value){
            first_state.classList.add("hidden");
            active_state.classList.remove("hidden");
    }

})

continue_btn.addEventListener("click",()=>{
    location.reload();
})