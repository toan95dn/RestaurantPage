import loadNavbar from './navbar.js'
import loadHome from './home.js'


/////////////STYLE FIRST THEN ADD LATER

const allTabsInNavBar = document.querySelectorAll('[data-target]');
const allPages = document.querySelectorAll('[data-content]');

allTabsInNavBar.forEach((tab) => { //When each tab got clicked
    tab.addEventListener('click', () => {
        //Turn off every tab

        //Turn off every page


        //Highlight the chosen tab

        //Show the chosen page
        const targetPage = document.querySelector(`[data-content = ${tab.dataset.target}]`);
        targetPage.classList.remove('inActive');
    })
})