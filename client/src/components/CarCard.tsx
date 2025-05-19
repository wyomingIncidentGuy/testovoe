import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Query } from '../graphql/generated';
import { favoritesStore } from '../store/FavoritesStore';

interface CarCardProps {
  car: Query['cars'][0];
}

const CarCard: FC<CarCardProps> = observer(({ car }) => {
  const isFavorite = favoritesStore.isFavorite(car.id);

  const styles = {
    card: {
      width: '445px',
      height: '498px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
      position: 'relative' as const,
    },
    imageContainer: {
      width: '100%',
      height: '310px',
      position: 'relative' as const,
      border: 'solid #D9D9D9 1px',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'contain' as const,
    },
    imageOverlay: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    content: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
      padding: '0 8px',
    },
    title: {
      fontSize: '24px',
      fontWeight: '500',
      margin: '0',
      whiteSpace: 'nowrap' as const,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    detailsContainer: {
      display: 'flex',
      gap: '14px',
    },
    details: {
      fontSize: '14px',
      color: '#666',
    },
    price: {
      fontSize: '16px',
      fontWeight: '500',
    },
    buttonContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginTop: 'auto',
    },
    buyButton: {
      padding: '20px 100px',
      backgroundColor: car.availability ? '#4F2CD9' : '#D9D9D9',
      color: car.availability ? '#fff' : '#000',
      border: 'none',
      borderRadius: '5px',
      cursor: car.availability ? 'pointer' : 'not-allowed',
      fontSize: '16px',
      fontFamily: 'inherit',
      whiteSpace: 'nowrap' as const,
    },
    favoriteButton: {
      background: 'none',
      border: 'none',
      cursor: car.availability ? 'pointer' : 'not-allowed',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundImage: `url(/images/${!car.availability ? 'like-button_disabled.svg' : (isFavorite ? 'like-button_active.svg' : 'like-button.svg')})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '24px',
      opacity: car.availability ? 1 : 0.5,
    },
    availability: {
      position: 'absolute' as const,
      top: '125px',
      left: '50%',
      transform: 'translateX(-50%)',
      padding: '16px 32px',
      borderRadius: '15px',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontSize: '24px',
      zIndex: 1,
      whiteSpace: 'nowrap' as const,
    },
  };

  const getImageUrl = (path: string) => {
    return `http://localhost:4000${path}`;
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      favoritesStore.removeFromFavorites(car.id);
    } else {
      favoritesStore.addToFavorites(car);
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={car?.img_src ? getImageUrl(car.img_src) : undefined}
          alt={`${car.brand} ${car.model}`}
          style={styles.image}
        />
        {!car.availability && (
          <div style={styles.imageOverlay} />
        )}
      </div>
      {!car.availability && (
        <div style={styles.availability}>
          Нет в наличии
        </div>
      )}
      <div style={styles.content}>
        <h3 style={styles.title}>{car.brand} {car.model}</h3>
        <div style={styles.detailsContainer}>
          <span style={styles.details}>Год: {car.model_year}</span>
          <span style={styles.details}>Цвет: {car.color}</span>
        </div>
        <div style={styles.price}>от {car.price}</div>
      </div>
      <div style={styles.buttonContainer}>
        <button 
          style={styles.buyButton}
          disabled={!car.availability}
        >
          Купить
        </button>
        <button 
          style={styles.favoriteButton} 
          onClick={handleFavoriteClick}
          disabled={!car.availability}
          title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        />
      </div>
    </div>
  );
});

export default CarCard; 