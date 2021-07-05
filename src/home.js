const loadHome = (() => {
    const contentContainer = document.querySelector("#content");

    const homeContent = document.createElement('div');
    homeContent.classList.add('inActive');
    homeContent.dataset.content = 'Home';

    const welcomeMessage = document.createElement('p');
    welcomeMessage.innerText = "Best burger in the country";


    //Add to the homepage container
    homeContent.append(welcomeMessage);

    //Add to the containter
    contentContainer.append(homeContent);


})();

export { loadHome }