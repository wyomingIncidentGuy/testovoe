import { makeAutoObservable } from 'mobx';
import { Query } from '../graphql/generated';

export class FavoritesStore {
  favorites: Query['cars'] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToFavorites(car: Query['cars'][0]) {
    if (!this.favorites.find(f => f.id === car.id)) {
      this.favorites.push(car);
    }
  }

  removeFromFavorites(carId: number) {
    this.favorites = this.favorites.filter(car => car.id !== carId);
  }

  isFavorite(carId: number) {
    return this.favorites.some(car => car.id === carId);
  }
}

export const favoritesStore = new FavoritesStore(); 