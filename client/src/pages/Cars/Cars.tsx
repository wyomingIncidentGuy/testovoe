import { FC, useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import { Query } from "../../graphql/generated";
import CarCard from "../../components/CarCard";
import Select from "../../components/Select";
import Input from "../../components/Input";
import { GET_CARS } from "../../graphql/queries/cars";

const Cars: FC = () => {
  const { loading, error, data } = useQuery<Query>(GET_CARS);
  const [filteredCars, setFilteredCars] = useState<Query['cars']>([]);
  const [selectedSort, setSelectedSort] = useState('available');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const filterCars = (cars: Query['cars'] | undefined) => {
    if (!cars) return [];
    if (!searchQuery.trim()) return cars;

    const query = searchQuery.toLowerCase();
    return cars.filter(car => 
      `${car.brand} ${car.model}`.toLowerCase().includes(query)
    );
  };

  const sortCars = (cars: Query['cars']): Query['cars'] => {
    const sorted = [...cars];

    switch (selectedSort) {
      case 'available':
        return sorted.sort((a, b) => (b.availability === a.availability ? 0 : b.availability ? 1 : -1));
      case 'A-Z':
        return sorted.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`));
      case 'Z-A':
        return sorted.sort((a, b) => `${b.brand} ${b.model}`.localeCompare(`${a.brand} ${a.model}`));
      case 'newest':
        return sorted.sort((a, b) => b.model_year - a.model_year);
      case 'oldest':
        return sorted.sort((a, b) => a.model_year - b.model_year);
      case 'cheapest':
        return sorted.sort((a, b) => 
          parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
        );
      case 'expensive':
        return sorted.sort((a, b) => 
          parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
        );
      default:
        return sorted;
    }
  };

  const handleSearch = () => {
    setSearchQuery(searchValue);
  };

  useEffect(() => {
    if (data?.cars) {
      const filtered = filterCars(data.cars);
      setFilteredCars(sortCars(filtered));
    }
  }, [data, searchQuery, selectedSort]);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#FFFFFF',
      width: '100%',
    },
    content: {
      padding: '0 40px 154px 40px',
      width: '100%',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '42px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(445px, 1fr))',
      columnGap: '20px',
      rowGap: '73px',
      width: '100%',
    },
    loading: {
      textAlign: 'center' as const,
      padding: '40px',
      fontSize: '18px',
    },
    error: {
      color: 'red',
      textAlign: 'center' as const,
      padding: '40px',
    },
    noResults: {
      textAlign: 'center' as const,
      padding: '40px',
      fontSize: '18px',
      color: '#666',
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.loading}>Загрузка...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.error}>Ошибка: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <Select
            value={selectedSort}
            onChange={setSelectedSort}
          />
          <Input 
            value={searchValue}
            onChange={setSearchValue}
            onSearch={handleSearch}
            placeholder="Найти авто"
          />
        </div>
        
        {filteredCars.length > 0 ? (
          <div style={styles.grid}>
            {filteredCars.map((car: Query['cars'][0]) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div style={styles.noResults}>
            По вашему запросу ничего не найдено
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;