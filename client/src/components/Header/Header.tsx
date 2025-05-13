import React, { FC } from 'react';

const Header: FC = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    logo: {
      fontSize: '20px',
      fontWeight: 'bold',
    },
    catalogButton: {
      backgroundColor: 'purple',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    favoriteButton: {
      padding: '10px 20px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '5px',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <span style={styles.logo}>Купи авто</span>
        <button style={styles.catalogButton}>Каталог</button>
      </div>
      
      <div style={styles.rightSection}>
        <div style={styles.contactInfo}>
          <span>ул. Автомобильная, 1</span>
          <span>+7 (999) 123-45-67</span>
        </div>
        <button style={styles.favoriteButton}>Избранное</button>
      </div>
    </header>
  );
};

export default Header; 