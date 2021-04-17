
const first_slider = document.getElementById('sl_one').querySelector(".slider");
const second_slider = document.getElementById('sl_two').querySelector(".slider");

const first_slider_nav = document.getElementById('sl_one').querySelector(".slider_nav");
const second_slider_nav = document.getElementById('sl_two').querySelector(".slider_nav");

//Смена активного слайда
function next_slide(slider) {
    let cur_slide = slider.querySelector(".active_slide");
    cur_slide.classList.remove("active_slide");
    if (cur_slide.nextElementSibling == null){
        slider.children[0].classList.add("active_slide");
    }
    else {
        cur_slide.nextElementSibling.classList.add("active_slide");
    }
}

//Смена фокуса
function focus(slider, button_num, interval_id){
    for(var i = 0; i<slider.childElementCount; i++){
        slider.children[i].classList.remove("active_slide");
    }
    slider.children[button_num].classList.add("active_slide");

    clearInterval(interval_id[0]);
    interval_id[0] = [setInterval( ()=> next_slide(slider), 4000)];
}

//Привязка функции фокуса к кнопкам с делегированием
first_slider_nav.onclick = 
    function(event) {
        let target = event.target;
        if (target.tagName != "BUTTON") return;

        focus(first_slider, target.dataset.nav, first_interval_id);
    };

second_slider_nav.onclick = 
    function(event) {
        let target = event.target;
        if (target.tagName != "BUTTON") return;
        focus(second_slider, target.dataset.nav, second_interval_id);
    };

//Запуск интервалов
let first_interval_id = [setInterval( ()=> next_slide(first_slider), 4000)];
let second_interval_id =  [setInterval( ()=> next_slide(second_slider), 4000)];
