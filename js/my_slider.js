
    const first_slider = document.getElementById("sl_one").firstElementChild.children;
    
    const second_slider = document.getElementById("sl_two").firstElementChild.children;

    // var fr_sl_num = {number: 0 };
    // var sc_sl_num = {number: 0 };

    var active_slide = document.querySelector(".active_slide");

    function change_slide(obj) {
        clearTimeout(timerid);
        obj.classList.remove("active_slide");
        if ( obj.nextElementSibling == null ){
            first_slider[0].classList.add("active_slide");
        }
        else {
            obj.nextElementSibling.classList.add("active_slide");
        }
        active_slide = document.querySelector(".active_slide");
        timerid = setTimeout(change_slide, 4000, active_slide);
    }

    function focus(number){
        clearTimeout(timerid);
        for(var i = 0; i<3 ;i++){
            first_slider[i].classList.remove("active_slide");
        }
        first_slider[number].classList.add("active_slide");
        active_slide = document.querySelector(".active_slide");
        timerid = setTimeout(change_slide, 4000, active_slide);
    }

    // навигация
    const first_slider_nav = document.getElementById("sl_one").lastElementChild.children;
    const second_slider_nav = document.getElementById("sl_two").lastElementChild.children;

    first_slider_nav[0].addEventListener("click", () => focus(0));
    first_slider_nav[1].addEventListener("click", () => focus(1));
    first_slider_nav[2].addEventListener("click", () => focus(2));

    timerid = setTimeout(change_slide, 4000, active_slide);
    // setInterval(change_slide, 4000, second_slider, sc_sl_num);
