import restaurant from '../DATA.json' ;
const main = () =>{

    const renderAllRestaurant = () => {
        const listRestaurantElement = document.querySelector('.posts');
        let menu = restaurant.restaurants;

        menu.forEach(restaurants => {
        listRestaurantElement.innerHTML += `
        <style>
        .post-item {
          margin: 16px 0;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          width: 100%;
          border-radius: 5px;
          overflow: hidden;
          background-color: #7978ff;
        }
        
        .post-item__content {
          padding: 16px 32px 32px 32px;
        }
        
        .post-item__thumbnail {
          width: 100%;
        }
        
        .post-item__rating {
          min-width: 44px;
          min-height: 44px;
          color: yellow;
        }
        
        .post-item__title {
          min-width: 44px;
          min-height: 44px;
          display: block;
          font-weight: 600;
          font-size: 20px;
          margin-top: 12px;
          transition: 0.3s opacity;
          text-decoration: none;
          color: black;
        }

        .post-item__city {
          margin-top: 4px;
          font-size: 14px;
          color: rgb(20, 20, 20);
        }
        
        .post-item__description {
          margin-top: 16px;
          font-size: 14px;
          line-height: 1.5em;
        }
        </style>
            <article class="post-item">
              <img class="post-item__thumbnail" alt="${restaurants.name}"  src="${restaurants.pictureId}">
              <div class="post-item__content">
                <p class="post-item__rating">RATING :  ${restaurants.rating}</p>
                <a class="post-item__title" href="/">${restaurants.name}</a>
                <h1 class="fa fa-home post-item__city "> ${restaurants.city} City</h1>
                <p class="post-item__description">${restaurants.description}</p>
              </div>
            </article>
        `;
        });
    }



    document.addEventListener('DOMContentLoaded', () => {
      const hamburgerButtonElement = document.querySelector('#hamburger');
      
      hamburgerButtonElement.addEventListener('click', event => {
        hamburgerButtonElement.classList.toggle('open');
        event.stopPropagation();
      });
      renderAllRestaurant();
      
    });
}
export default main;