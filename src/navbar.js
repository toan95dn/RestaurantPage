const loadNavbar = (() => {
    const navBar = document.createElement('nav');

    //Header of navBar

    const restaurantName = document.createElement('h1');
    restaurantName.innerText = 'DTP-Burger';

    //Burger Button 
    const burgerButton = document.createElement('div');
    burgerButton.classList.add('material-icons');
    burgerButton.innerText = 'menu';



    // All links in navBar
    const allLinks = document.createElement('ul');
    allLinks.classList.add('navLinks');

    const homeLink = document.createElement('li');
    homeLink.innerText = 'Home';
    homeLink.dataset.target = 'Home';

    const menuLink = document.createElement('li');
    menuLink.innerText = 'Menu';
    menuLink.dataset.target = 'Menu';

    const contactLink = document.createElement('li');
    contactLink.innerText = 'Contact';
    contactLink.dataset.target = 'Contact';

    //Hamburger button

    //Add all to all links 
    allLinks.append(homeLink, menuLink, contactLink);

    //Add all to the navbar
    navBar.append(restaurantName, allLinks);

    //Add navbar to container 
    const contentContainer = document.querySelector("#content");
    contentContainer.append(navBar);


})()

export { loadNavbar }