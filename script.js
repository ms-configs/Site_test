document.querySelector('.burger_wrapper').onclick = function() {
    document.querySelector('.burger_btn').classList.toggle('burger_btn--active');
    document.querySelector('.sidebar').classList.toggle('sidebar--active');
}

let card = document.querySelector('.card_link').cloneNode(true);

document.querySelector('.btn_more').addEventListener('click', function() {
        document.querySelector('.main > button:last-child').before(card);

})

let hide = document.querySelector('.btn_options');

hide.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.hidden4').classList.toggle('hidden_elements');
})


let widgets = document.querySelectorAll('.widget');

widgets.forEach(function (item) {
    item.addEventListener('click', function(e) {
        if(e.target.classList.contains('.widget_title')){
            console.log('Yee');
        }
    })
})

let checkBoxAny = document.querySelector('#location_btn5');
let topCheckBox = document.querySelectorAll('input[data]');

checkBoxAny.addEventListener('change', function() {
    if (checkBoxAny.checked) {
        topCheckBox.forEach(function(item) {
            item.checked = false;
        })
    }
})

topCheckBox.forEach(function(item) {
    item.addEventListener('change', function() {
        checkBoxAny.checked = false;
    })
})