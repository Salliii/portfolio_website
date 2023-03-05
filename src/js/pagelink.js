const pagelink_home = [
    document.getElementById("header-pagelink-home-desktop"),
    document.getElementById("header-pagelink-home-mobile")
];
const pagelink_projects = [
    document.getElementById("header-pagelink-projects-desktop"),
    document.getElementById("header-pagelink-projects-mobile")
];
const pagelink_contact = [
    document.getElementById("header-pagelink-contact-desktop"),
    document.getElementById("header-pagelink-contact-mobile")
];


function unsetSelected(element) {
    if (element == "*") {
        document.querySelectorAll('[selected="true"]').forEach((unlisted_element) => {
            unsetSelected(unlisted_element)
        })
    }
    else {
        element.setAttribute("selected", "false")
    }
}


function setSelected(element) {
    element.setAttribute("selected", "true");
}


function loadEventListener() {
    pagelink_home.forEach((pagelink) => {
        pagelink.addEventListener("click", (event) => {
            unsetSelected("*")
            pagelink_home.forEach((pagelink) => {
                setSelected(pagelink);
            })
        })
    })
    pagelink_projects.forEach((pagelink) => {
        pagelink.addEventListener("click", (event) => {
            unsetSelected("*")
            pagelink_projects.forEach((pagelink) => {
                setSelected(pagelink);
            })
        })
    })
    pagelink_contact.forEach((pagelink) => {
        pagelink.addEventListener("click", (event) => {
            unsetSelected("*")
            pagelink_contact.forEach((pagelink) => {
                setSelected(pagelink);
            })
        })
    })
}

loadEventListener();