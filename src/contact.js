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
    contactBoard.classList.add('contactBoard');

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
    infoTime.append('Mon-Fri: 10:00am-10:00pm', document.createElement('br'), '*****Sat-Sun: 10:00am-05:00pm');
    //Phone
    const infoPhone = document.createElement('p');
    const phoneIcon = document.createElement('span');
    phoneIcon.classList.add('material-icons');
    phoneIcon.innerText = 'phonelink_ring';
    infoPhone.append(phoneIcon, 'Phone: ', '424-111-2233');

    contactInfo.append(infoAddress, infoTime, infoPhone);

    //------------------------------------------------------------------------------------


    //-----------------------------------------------Contact form---------------------------------------------------//
    const contactForm = document.createElement('form');
    contactForm.classList.add('contactForm');
    contactForm.action = '#';

    const inviteMessage = document.createElement('p');
    inviteMessage.innerText = '📧 Message us now!';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Full name';
    const mailInput = document.createElement('input');
    mailInput.type = 'email';
    mailInput.placeholder = 'Email';
    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.placeholder = 'Message';

    const submitButton = document.createElement('button');
    submitButton.id = 'submitFormButton';
    submitButton.innerText = 'Send';

    contactForm.append(inviteMessage, nameInput, mailInput, messageInput, submitButton);

    //Map
    const map = document.createElement('iframe');
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52990.84580852239!2d-118.36952511916171!3d33.89151163663563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9dc1cba0a9e1f8b!2sIn-N-Out%20Burger!5e0!3m2!1sen!2sus!4v1625628516868!5m2!1sen!2sus";
    map.id = 'map';



    //Add all content to the content container (Contact board hold contact info, form, and map)
    contactBoard.append(contactInfo, contactForm, map);
    contactContent.append(contactHeader, contactBoard);
    contentContainer.append(contactContent);

})()

export { loadContact }