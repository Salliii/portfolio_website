const hamburger = document.getElementById("header-hamburger");
const mobilemenu = document.getElementById("mobilemenu-wrapper");


export function toggleMobilemenuState() {
    if (mobilemenu.getAttribute("state") == "opened") {
        mobilemenu.setAttribute("state", "closed");
        hamburger.setAttribute("state", "hamburger")
    }
    else if (mobilemenu.getAttribute("state") == "closed") {
        mobilemenu.setAttribute("state", "opened");
        hamburger.setAttribute("state", "cross")
    }
}


function loadEventListener() {
    hamburger.addEventListener("click", (event) => {
        toggleMobilemenuState();
    })
}

loadEventListener();