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
const page_home = document.getElementById("home-wrapper")
const page_projects = document.getElementById("projects-wrapper")
const page_contact = document.getElementById("contact-wrapper")


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


function loadEventListener(pagelink_list, page) {
    pagelink_list.forEach((pagelink) => {
        pagelink.addEventListener("click", (event) => {
            unsetSelected("*")
            pagelink_list.forEach((pagelink) => {
                page.scrollIntoView({behavior: "smooth"})
                setSelected(pagelink);
            })
        })
    })
}

loadEventListener(pagelink_home, page_home);
loadEventListener(pagelink_projects, page_projects);
loadEventListener(pagelink_contact, page_contact);