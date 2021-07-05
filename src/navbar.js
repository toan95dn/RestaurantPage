const loadNavbar = (() => {
    const navBar = document.createElement('nav');

    //Header of navBar
    const restaurantName = document.createElement('h1');
    restaurantName.innerText = "T-Burger";

    // All links in navBar
    const allLinks = document.createElement('ul');
    allLinks.classList.add('navLinks');

    const homeLink = document.createElement('li');
    homeLink.innerText = 'Home';
    homeLink.dataset.pick = 'Home';

    const menuLink = document.createElement('li');
    menuLink.innerText = 'Menu';
    menuLink.dataset.pick = 'Menu';

    const contactLink = document.createElement('li');
    contactLink.innerText = 'Contact';
    contactLink.dataset.pick = 'Contact';

    //Add all to all links 
    allLinks.append(homeLink);
    allLinks.append(menuLink);
    allLinks.append(contactLink);

    //Add all to the navbar
    navBar.append(restaurantName);
    navBar.append(allLinks);

    //Add navbar to container 
    const contentContainer = document.querySelector("#content");
    contentContainer.append(navBar);


})()

export { loadNavbar }