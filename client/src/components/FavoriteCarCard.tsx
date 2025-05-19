import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Query } from '../graphql/generated';
import { favoritesStore } from '../store/FavoritesStore';

interface FavoriteCarCardProps {
  car: Query['cars'][0];
}

const FavoriteCarCard: FC<FavoriteCarCardProps> = observer(({ car }) => {
  const styles = {
    card: {
      width: '100%',
      padding: '0 0 24px 0',
      display: 'flex',
      flexDirection: 'row' as const,
      gap: '20px',
      backgroundColor: '#fff',
      position: 'relative' as const,
      borderRadius: 0,
      borderBottom: '1px solid #D9D9D9',
      boxShadow: 'none',
      alignItems: 'flex-start',
    },
    imageWrapper: {
      width: '443px',
      height: '100%',
      overflow: 'hidden',
      background: '#F8F8F8',
      flexShrink: 0,
      border: '1px solid #D9D9D9',
      borderRadius: '12px',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    content: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '16px',
      padding: 0,
      flex: 1,
      maxWidth: '834px',
    },
    title: {
      fontSize: '36px',
      fontWeight: '700',
      margin: '0',
    },
    detailsContainer: {
      display: 'flex',
      gap: '14px',
    },
    details: {
      fontSize: '14px',
      color: '#595959',
    },
    description: {
      fontSize: '14px',
      color: '#595959',
      lineHeight: '1.5',
      margin: '0',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical' as const,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    price: {
      fontSize: '24px',
      fontWeight: '500',
      marginTop: '4px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '20px',
      marginTop: '4px',
    },
    selectButton: {
      background: '#4F2CD9',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '20px 34px',
      fontSize: '16px',
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: 'inherit',
    },
    deleteButton: {
      padding: '20px',
      border: '2px solid #D73737',
      background: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    deleteIcon: {
      width: '18px',
      height: '19px',
    },
  };

  const getImageUrl = (path: string) => {
    return `http://localhost:4000${path}`;
  };

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <img
          src={car?.img_src ? getImageUrl(car.img_src) : undefined}
          alt={`${car.brand} ${car.model}`}
          style={styles.image}
        />
      </div>
      <div style={styles.content}>
        <h3 style={styles.title}>{car.brand} {car.model}</h3>
        <p style={styles.description}>{car.description}</p>
        <span style={styles.details}>Год: {car.model_year}</span>
        <span style={styles.details}>Цвет: {car.color}</span>
        <div style={styles.price}>от {car.price}</div>
        <div style={styles.buttonContainer}>
          <button style={styles.selectButton}>Выбрать комплектацию</button>
          <button
            style={styles.deleteButton}
            onClick={() => favoritesStore.removeFromFavorites(car.id)}
            title="Удалить из избранного"
          >
            <img src="/images/delete.svg" alt="Удалить" style={styles.deleteIcon} />
          </button>
        </div>
      </div>
    </div>
  );
});

export default FavoriteCarCard; 