const loadHome = (() => {
    const contentContainer = document.querySelector("#content");

    const homeContent = document.createElement('div');
    homeContent.dataset.content = 'Home';

    //Welcome message
    const welcomeMessage_1 = document.createElement('h2');
    welcomeMessage_1.innerText = 'Best burgers in the country';

    const welcomeMessage_2 = document.createElement('h3');
    welcomeMessage_2.innerText = 'Taste & quality you can trust!';

    //Order button, navigate to menu
    const orderButton = document.createElement('button');
    orderButton.innerText = 'Order now';
    orderButton.id = 'orderButton';

    //Adress and Time
    const infoPannel = document.createElement('div');
    infoPannel.classList.add('infoPanel');

    const infoAddress = document.createElement('p');
    const addressIcon = document.createElement('span');
    addressIcon.classList.add('material-icons');
    addressIcon.innerText = 'place';

    infoAddress.append(addressIcon);
    infoAddress.append('2048 Florwood Avenue', document.createElement('br'), 'Los Angeles, 90260');


    const infoTime = document.createElement('p');
    const watchIcon = document.createElement('span');
    watchIcon.classList.add('material-icons');
    watchIcon.innerText = 'schedule';

    infoTime.append(watchIcon);
    infoTime.append('Mon-Fri: 10:00am-10:00pm', document.createElement('br'), '**Sat-Sun: 10:00am-05:00pm');

    infoPannel.append(infoAddress, infoTime);


    //Add to the homepage container
    homeContent.append(welcomeMessage_1, welcomeMessage_2, infoPannel, orderButton);

    //Add to the containter
    contentContainer.append(homeContent);


})();

export { loadHome }