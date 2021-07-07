const loadNavbar = (() => {
    const navBar = document.createElement('nav');

    //Header of navBar
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.innerText = '🍔 The-Odin-Burger';

    //Burger Button 
    const burgerButton = document.createElement('div');
    burgerButton.id = 'burgerButton';
    burgerButton.appendChild(document.createElement('div'));
    burgerButton.appendChild(document.createElement('div'));
    burgerButton.appendChild(document.createElement('div'));

    headerContainer.append(restaurantName, burgerButton);


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
    navBar.append(headerContainer, allLinks);

    //Add navbar to container 
    const contentContainer = document.querySelector("#content");
    contentContainer.append(navBar);


})()

export { loadNavbar }