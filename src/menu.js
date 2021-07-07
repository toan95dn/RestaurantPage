const loadMenu = (() => {
    const contentContainer = document.querySelector("#content");

    const menuContent = document.createElement('div');
    menuContent.dataset.content = 'Menu';
    menuContent.classList.add('inActive');

    //Header
    const menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Menu';
    menuHeader.classList.add('menuHeader');

    //Food container
    const foodItemsContainer = document.createElement('div');
    foodItemsContainer.classList.add('foodItemsContainer');

    function addItemToMenu(imageSource, name, price, description) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('itemContainer');
        //Image
        const img = document.createElement('img');
        img.src = imageSource;
        //Description
        const descriptionContainer = document.createElement('div');
        const namePrice = document.createElement('h2');
        namePrice.innerText = '$' + price + ' - ' + name;
        const ingredient = document.createElement('p');
        ingredient.innerText = description;
        descriptionContainer.append(namePrice, ingredient);

        itemContainer.append(img, descriptionContainer);
        foodItemsContainer.append(itemContainer);
    }

    addItemToMenu('/dist/images/biscuts.png', 'Sausage & Egg Biscuit', '4.99',
        'Breakfast Chicken Fillet, Buttermilk Biscuit,Maple Honey Butter Spread');
    addItemToMenu('/dist/images/fries.png', 'Seasoned Potatoes', '2.99',
        'Seasoned Potatoes, Vegetable Oil, Sugar, Garlic Powder');
    addItemToMenu('/dist/images/croissant.png', 'Bacon Chicken Croissant', '3.99',
        'Breakfast Chicken Fillet, Croissant,Maple Honey Butter Spread');
    addItemToMenu('/dist/images/doubleMeat.png', 'Double Meat Burger', '5.99',
        'Premium Beef, Premium Bun,Crinkle Cut Pickles, Cheese, Lettuce');
    addItemToMenu('/dist/images/friedChicken.png', 'Spicy Chicken Sandwich', '5.99',
        'Spicy Chicken Breast, Premium Bun, Tomato, Mayonnaise, Lettuce');
    addItemToMenu('/dist/images/beefBacon.png', 'Bacon Cheeseburger', '4.99',
        'Hamburger Patty,Tomato,American Cheese Slice, Bacon, Mayonnaise');
    // const menuContainer;

    menuContent.append(menuHeader, foodItemsContainer);


    //Add all to container
    contentContainer.append(menuContent);
})()

export { loadMenu }