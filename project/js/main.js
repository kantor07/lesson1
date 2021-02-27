const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'images/image1.jpg') => {
    return `<div class="product-item">
                <img src="${img}" alt="image1">
                <h3>${title}</h3>
                <p>${price} \u20bd</p>
                <button class="buy-btn">Добавить в корзину</button>
              </div>`;
}

const renderProducts = (list)=> {
  let productList = "";
  list.forEach((item) => {
      productList += renderProduct(item.title, item.price);
    });

    document.querySelector('.products').insertAdjacentHTML("beforeend", productList)
}

/*
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    document.querySelector('.products').innerHTML = productList.join("");
}
*/
renderProducts(products);
