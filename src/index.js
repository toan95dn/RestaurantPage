import loadNavbar from './navbar.js'
import loadHome from './home.js'

const allTabsInNavBar = document.querySelectorAll('[data-pick]');
const allPages = document.querySelectorAll('[data-content]');


console.log(allTabsInNavBar[0].dataset.pick);

allTabsInNavBar.forEach((tab) => { //When each tab got clicked
    tab.addEventListener('click', () => {
        //Turn off every tab
        allTabsInNavBar.forEach('click', () => {

        })
        //Turn off every page
        allPages.forEach('click', () => {

        })

        //Highlight the chosen tab


        //Show the chosen page
        const targetPage = document.querySelector(`[data-content = ${tab.dataset.pick}]`);
        targetPage.classList.remove('inActive');
    })
})