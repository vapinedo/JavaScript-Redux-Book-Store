import { getXCharFromText }  from './string.helper.js';

export const createCard = (cardData, targetDOM) => {
    const cardTitle = cardData.volumeInfo.title;
    const seeDetail = cardData.volumeInfo.infoLink;
    const cardImg = cardData.volumeInfo.imageLinks.thumbnail;
    const cardDescription = getXCharFromText(cardData.volumeInfo.description, 140);
  
    const container = document.createElement("div");
    container.className = "col";
  
    const card = document.createElement("div");
    card.className = "card";
  
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.setAttribute('src', cardImg);
  
    const body = document.createElement("div");
    body.className = "card-body";
  
  
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'd-flex justify-content-between align-items-center mt-3';
  
    const detailLink = document.createElement('a');
    detailLink.className = 'btn btn-primary btn-sm';
    detailLink.setAttribute('href', seeDetail);
    detailLink.setAttribute('target', '_blank');
    detailLink.innerText = 'See Details';

    const addToCart = document.createElement('button');
    addToCart.className = 'btn btn-outline-info btn-sm d-flex d-flex justify-content-between align-items-center gap-2';
    addToCart.setAttribute('title', 'Add to cart');
    addToCart.innerHTML = "<i class='bx bx-cart-add' style='font-size: 1.2rem'></i> <span>Add to card</span>";
  
    const title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = cardTitle;
  
    const text = document.createElement("p");
    text.className = "card-text";
    text.innerText = cardDescription;  
  
    body.appendChild(title);
    body.appendChild(text);
    actionsContainer.appendChild(detailLink);
    actionsContainer.appendChild(addToCart);
    body.appendChild(actionsContainer);
  
    card.appendChild(img);
    card.appendChild(body);
  
    container.appendChild(card);
    targetDOM.appendChild(container);
  };