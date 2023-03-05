const header = document.getElementById("header-wrapper");
const mobilemenu = document.getElementById("mobilemenu-wrapper");


const animation_up = [
    {transform: "translateY(0px)"},
    {transform: "translateY(-200%)"}
];
const animation_down = [
    {transform: "translateY(-200%)"},
    {transform: "translateY(0px)"}
];
const animation_up_timing = {
    duration: 1000,
    fill: "forwards"
}
const animation_down_timing = {
    duration: 400,
    fill: "forwards"
}


function loadEventListener() {
    let last_scroll_position = 0
    let last_scroll_direction = "up"

    window.addEventListener("scrollend", (event) => {
        if (window.scrollY > last_scroll_position && last_scroll_direction == "up") {
            /* scroll down */
            header.animate(animation_up, animation_up_timing);
            mobilemenu.animate(animation_up, animation_up_timing);
            last_scroll_direction = "down";
        }
        else if ((window.scrollY < last_scroll_position || last_scroll_position == 0) && last_scroll_direction == "down") {
            /* scroll up */
            header.animate(animation_down, animation_down_timing);
            mobilemenu.animate(animation_down, animation_down_timing);
            last_scroll_direction = "up";
        }

        last_scroll_position = window.scrollY;
    })
}

loadEventListener();