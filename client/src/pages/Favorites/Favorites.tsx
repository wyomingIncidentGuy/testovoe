import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { favoritesStore } from '../../store/FavoritesStore';
import FavoriteCarCard from '../../components/FavoriteCarCard';

const Favorites: FC = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      width: '100%',
    },
    content: {
      padding: '0 40px 130px 40px',
      width: '100%',
    },
    grid: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '36px',
      width: '100%',
    },
    noFavorites: {
      textAlign: 'center' as const,
      padding: '40px',
      fontSize: '18px',
      color: '#666',
    },
    title: {
      fontSize: '48px',
      fontWeight: 700,
      padding: '0 0 26px 0',
      borderBottom: '1px solid #D9D9D9',
      margin: '0 0 64px 0',
    },
  };

  const favorites = favoritesStore.favorites;

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>
          {favorites.length > 0
            ? `Избранные товары — ${favorites.length} позиц${favorites.length === 1 ? 'ия' : (favorites.length < 5 ? 'ии' : 'ий')}`
            : 'Избранные товары'}
        </div>
        {favorites.length > 0 ? (
          <div style={styles.grid}>
            {favorites.map((car) => (
              <FavoriteCarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div style={styles.noFavorites}>
            В избранном пока ничего нет
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(Favorites); 