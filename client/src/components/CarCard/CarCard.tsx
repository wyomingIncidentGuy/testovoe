import { FC } from 'react';
import { Query } from '../../graphql/generated';

interface CarCardProps {
  car: Query['cars'][0];
}

const translateColor = (color: string): string => {
  const colorMap: { [key: string]: string } = {
    'Golden Metallic': 'Золотой Гальваник металлик',
  };
  return colorMap[color] || color;
};

const CarCard: FC<CarCardProps> = ({ car }) => {
  const styles = {
    card: {
      width: '445px',
      height: '448px',
      border: '1px solid #e0e0e0',
      borderRadius: '15px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
      backgroundColor: '#fff',
      position: 'relative' as const,
    },
    image: {
      width: '100%',
      height: '250px',
      objectFit: 'contain' as const,
      marginBottom: '8px',
    },
    content: {
      padding: '0 8px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    details: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '4px',
    },
    price: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '8px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '12px',
      marginTop: 'auto',
    },
    buyButton: {
      flex: 1,
      padding: '12px',
      backgroundColor: '#6C38FF',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    favoriteButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return (
    <div style={styles.card}>
      <img
        src={car?.img_src ?? undefined}
        alt={`${car.brand} ${car.model}`}
        style={styles.image}
      />
      <div style={styles.content}>
        <div style={styles.title}>{car.brand} {car.model}</div>
        <div style={styles.details}>Цвет: {translateColor(car.color)}</div>
        <div style={styles.price}>от ${car.price}</div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.buyButton}>Купить</button>
        <button style={styles.favoriteButton}>♡</button>
      </div>
    </div>
  );
};

export default CarCard; 