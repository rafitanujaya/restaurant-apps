import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';

import '../../component/RestoDetail';
import '../../component/RestoReview';
import '../../component/ReviewForm';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
      <review-form></review-form>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restoReview = document.querySelector('#resto-review');
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantDB,
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });

    const reviewButton = document.querySelector('#submitReview');
    reviewButton.addEventListener('click', (event) => {
      event.preventDefault();
      const customerName = document.querySelector('#customerName').value;
      const userReview = document.querySelector('#reviews').value;
      const customerReview = document.createElement('div');
      const containerReview = document.querySelector('.review');

      if (customerName !== '' || userReview !== '') {
        const reviewData = {
          id: detail.id,
          name: customerName,
          review: userReview,
        };

        RestaurantSource.addReview(reviewData).then((response) => response.json())
          .then((data) => {
            console.log(data);
            customerReview.classList.add('review');
            customerReview.innerHTML += `
            <p>
            <span class="name">${customerName}</span> &bull; <span class="date">${new Date().toDateString()}</span>
            </p>
            <p>${userReview}</p>
          `;
            containerReview.appendChild(customerReview);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        // memberikan pesan error jika salah satu field kosong
        console.error('Nama dan ulasan harus diisi!');
      }
    });
  },
};

export default Detail;
