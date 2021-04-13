const slides_one = document.querySelectorAll("#sl_one .slide_item");
const slides_two = document.querySelectorAll("#sl_two .slide_item");

var i = 0;
function change () {
    slides_one[i].classList.remove("active_slide");
    slides_two[i].classList.remove("active_slide");
    i++;
    if (i == 3){
        i = 0;
    }
    slides_one[i].classList.add("active_slide");
    slides_two[i].classList.add("active_slide");
}

setInterval(change, 4000);

