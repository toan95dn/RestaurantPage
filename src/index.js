import loadNavbar from './navbar.js'
import loadHome from './home.js'
import loadMenu from './menu.js'
import loadContact from './contact.js';

//
const allTabsInNavBar = document.querySelectorAll('[data-target]');
const allPages = document.querySelectorAll('[data-content]');

allTabsInNavBar.forEach((tab) => { //When each tab got clicked
    tab.addEventListener('click', () => {
        activateTab(tab);
    })
})

function activateTab(tab) {
    const targetPage = document.querySelector(`[data-content = ${tab.dataset.target}]`);
    //Turn off every tab
    allTabsInNavBar.forEach((currTab) => {
        currTab.classList.remove('picked');
    })

    //Turn off every page
    allPages.forEach((page) => {

        page.classList.add('inActive');
    })

    //Highlight the chosen tab
    targetPage.classList.remove('inActive');

    //Show the chosen page
    tab.classList.add('picked');
    closeDropDownMenu();
}

const orderButton = document.querySelector('#orderButton');
orderButton.addEventListener('click', () => {
    const currTab = document.querySelector(`[data-target = Menu]`);
    activateTab(currTab);
})


//Add burger button dropdown
const burgerButton = document.querySelector('#burgerButton');
burgerButton.addEventListener('click', () => {
    const dropdownMenu = document.querySelector('.navLinks');
    dropdownMenu.classList.toggle('open');
    burgerButton.classList.toggle('open');
})

//Drop down dissapear when click at the content
allPages.forEach((page) => {
    page.addEventListener('click', () => {
        closeDropDownMenu();
    })
})

function closeDropDownMenu() {
    burgerButton.classList.remove('open');
    const dropdownMenu = document.querySelector('.navLinks');
    dropdownMenu.classList.remove('open');
}

// Send message button
const submit_FormButton = document.querySelector('#submitFormButton');
submit_FormButton.addEventListener('click', () => {

})
