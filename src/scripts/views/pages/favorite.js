/* eslint-disable no-new */
import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './fav-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './fav-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './fav-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantDB });
  },
};

export default Favorite;
