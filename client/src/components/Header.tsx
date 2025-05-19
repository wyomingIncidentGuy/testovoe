import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '17px 40px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #D9D9D9',
      marginBottom: '46px',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '21px',
    },
    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '131px',
    },
    catalogButton: {
      backgroundColor: '#4F2CD9',
      color: 'white',
      padding: '9px 26px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '7px',
    },
    favoriteButton: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      gap: '12px',
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: '16px',
      fontWeight: '500',
    },
    contactInfo: {
      display: 'flex',
      gap: '31px',
    },
    info: {
      fontSize: '16px',
      fontWeight: '500',
      color:'#000000',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.leftSection}>
        <img src="/images/logo.svg" alt="logo" />
        <button 
          style={styles.catalogButton}
          onClick={() => navigate('/cars')}
        >
          <img src="/images/Burger.svg" alt="burger" />
          Каталог
        </button>
      </div>
      
      <div style={styles.rightSection}>
        <div style={styles.contactInfo}>
          <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
          <span>+7 800 555 35 35</span>
        </div>
        <button 
          style={styles.favoriteButton}
          onClick={() => navigate('/favorites')}
        >
          <img src="/images/Saved.svg" alt="saved" />
          Избранное
        </button>
      </div>
    </header>
  );
};

export default Header; 