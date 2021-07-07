const loadContact = (() => {
    const contentContainer = document.querySelector("#content");

    const contactContent = document.createElement('div');
    contactContent.dataset.content = 'Contact';
    contactContent.classList.add('inActive');

    // Header
    const contactHeader = document.createElement('h1');
    contactHeader.innerText = 'Contact us';
    contactHeader.classList.add('contactHeader');

    //Contact board
    const contactBoard = document.createElement('div');

    //Contact info-------------------------------------------------------------

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contactInfo');
    //Adress
    const infoAddress = document.createElement('p');
    const addressIcon = document.createElement('span');
    addressIcon.classList.add('material-icons');
    addressIcon.innerText = 'place';

    infoAddress.append(addressIcon);
    infoAddress.append('2048 Florwood Avenue', document.createElement('br'), 'Los Angeles, 90260');
    //Time
    const infoTime = document.createElement('p');
    const watchIcon = document.createElement('span');
    watchIcon.classList.add('material-icons');
    watchIcon.innerText = 'schedule';

    infoTime.append(watchIcon);
    infoTime.append('Mon-Fri: 10:00am-10:00pm', document.createElement('br'), '**Sat-Sun: 10:00am-05:00pm');
    //Phone
    const infoPhone = document.createElement('p');
    const phoneIcon = document.createElement('span');
    phoneIcon.classList.add('material-icons');
    phoneIcon.innerText = 'phonelink_ring';
    infoPhone.append(phoneIcon, '424-111-2233');



    contactInfo.append(infoAddress, infoTime, infoPhone);

    //------------------------------------------------------------------------------------


    //Contact form

    //Map
    contactContent.append(contactInfo);

    contactContent.append(contactBoard);

    contentContainer.append(contactContent);

})()

export { loadContact }