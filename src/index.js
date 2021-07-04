import loadNavbar from './navbar.js'
import loadHome from './home.js'

const allTabsInNavBar = document.querySelectorAll('[data-pick]');
const allPages = document.querySelectorAll('[data-content]');


console.log(allTabsInNavBar[0].dataset.pick);
//console.log(allPages);

allTabsInNavBar.forEach((tab) => { //When each tab got clicked
    //Turn off every tab

    //Turn off every page


    //Highlight the chosen tab

    //Show the chosen page
    tab.addEventListener('click', () => {
        const targetPage = document.querySelector(tab.dataset.pick);
        console.log(targetPage);
        targetPage.classList.remove('inActive');
    })
})